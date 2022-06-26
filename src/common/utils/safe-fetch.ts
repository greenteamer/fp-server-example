import * as TE from "fp-ts/TaskEither";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { CHError } from "../errors/CHError";

export const safeAxiosGet = (url: string, config?: AxiosRequestConfig) =>
  TE.tryCatch(
    () => axios.get<unknown, AxiosResponse<unknown>>(url, config),
    (error) => {
      return error instanceof Error
        ? CHError.of("fetchCarTypesFn", error)
        : CHError.of(
            "fetchCarTypesFn",
            new Error("fetchCarTypesFn unknown Error")
          );
    }
  );
