import { pipe } from "@effect-ts/core";
import * as T from "@effect-ts/core/Effect";
import { tag } from "@effect-ts/core/Has";
// import { CARS_HEADERS, CARS_URL } from "../constants.js";
import { safeAxiosGet } from "../utils/safe-fetch.js";
import { AxiosResponse } from "axios";

interface CarMake {
  Make_ID: number;
  Make_Name: string;
}

interface CarService {
  fetchCarTypes: () => T.Effect<unknown, Error, AxiosResponse<CarMake[]>>;
}
const CarService = tag<CarService>();

const fetchCarTypes = () =>
  T.accessServiceM(CarService)((_) => _.fetchCarTypes());

export const resolveCars = () =>
  pipe(
    fetchCarTypes(),
    T.fold(
      (error) => [],
      (success) => success.data
    ),
    T.provideService(CarService)({
      fetchCarTypes: () =>
        safeAxiosGet(
          `https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json`,
          {
            method: "GET",
          }
        ),
      // safeAxiosGet(`${CARS_URL}/types`, {
      //   method: "GET",
      //   ...CARS_HEADERS,
      // }),
    }),

    T.runPromise
  );
