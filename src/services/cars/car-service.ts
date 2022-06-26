import { CHError } from "../../common/errors/CHError";
import { AxiosResponse } from "axios";
import * as TE from "fp-ts/TaskEither";
import { getVpicUrl } from "../../api/vpic/api";
import { safeAxiosGet } from "../../common/utils/safe-fetch";

export interface CarService {
  getMakes(): TE.TaskEither<CHError, AxiosResponse<unknown>>;
  getManufacturers(): TE.TaskEither<CHError, AxiosResponse<unknown>>;
}

export const CarService: CarService = {
  getMakes() {
    return safeAxiosGet(getVpicUrl("getAllMakes"));
  },
  getManufacturers() {
    return safeAxiosGet(getVpicUrl("getAllManufacturers"));
  },
};
