import { AxiosResponse } from "axios";
import * as TE from "fp-ts/TaskEither";
import { CHDecoderError } from "../../common/errors/CHDecoderError";
import { CHNetworkError } from "../../common/errors/CHNetworkError";
export interface CarService {
    getMakes(): TE.TaskEither<CHNetworkError | CHDecoderError, AxiosResponse<unknown>>;
    getManufacturers(): TE.TaskEither<CHNetworkError | CHDecoderError, AxiosResponse<unknown>>;
}
export declare const CarService: CarService;
//# sourceMappingURL=car-service.d.ts.map