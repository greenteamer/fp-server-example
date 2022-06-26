import { AxiosResponse } from "axios";
import * as TE from "fp-ts/TaskEither";
import { getVpicUrl } from "../../api/vpic/api";
import { safeAxiosGet } from "../../common/utils/safe-fetch/safe-fetch";
import { pipe } from "fp-ts/lib/function";
import { mapDecoderError } from "../../common/utils/map-decoder-error";
import { axiosResponseDecoder } from "../../common/utils/safe-fetch/codec";
import { CHDecoderError } from "../../common/errors/CHDecoderError";
import { CHNetworkError } from "../../common/errors/CHNetworkError";

export interface CarService {
  getMakes(): TE.TaskEither<
    CHNetworkError | CHDecoderError,
    AxiosResponse<unknown>
  >;
  getManufacturers(): TE.TaskEither<
    CHNetworkError | CHDecoderError,
    AxiosResponse<unknown>
  >;
}

export const CarService: CarService = {
  getMakes() {
    return pipe(
      safeAxiosGet(getVpicUrl("getAllMakes")),
      TE.chainEitherKW((i) =>
        pipe(axiosResponseDecoder.decode(i), mapDecoderError("[getAllMakes]"))
      )
    );
  },
  getManufacturers() {
    return pipe(
      safeAxiosGet(getVpicUrl("getAllManufacturers")),
      TE.chainEitherKW((i) =>
        pipe(axiosResponseDecoder.decode(i), mapDecoderError("[getAllMakes]"))
      )
    );
  },
};
