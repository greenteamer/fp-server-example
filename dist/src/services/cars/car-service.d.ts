import { CHError } from "../../common/errors/CHError";
import { AxiosResponse } from "axios";
import * as TE from "fp-ts/TaskEither";
export interface CarService {
    getMakes(): TE.TaskEither<CHError, AxiosResponse<unknown>>;
    getManufacturers(): TE.TaskEither<CHError, AxiosResponse<unknown>>;
}
export declare const CarService: CarService;
//# sourceMappingURL=car-service.d.ts.map