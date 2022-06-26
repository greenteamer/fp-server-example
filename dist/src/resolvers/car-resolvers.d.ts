import * as RTE from "fp-ts/ReaderTaskEither";
import { CarService } from "../services/cars/car-service";
export declare const resolveCarMakes: RTE.ReaderTaskEither<CarService, import("../common/errors/CHError").CHError | import("io-ts/lib/Decoder").DecodeError, import("../api/vpic/types").CarMake[]>;
export declare const resolveCarManufacturers: RTE.ReaderTaskEither<CarService, import("../common/errors/CHError").CHError | import("io-ts/lib/Decoder").DecodeError, import("../api/vpic/types").CarManufacturers[]>;
//# sourceMappingURL=car-resolvers.d.ts.map