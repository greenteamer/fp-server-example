import * as TE from "fp-ts/TaskEither";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { CHNetworkError } from "../../errors/CHNetworkError";

export const safeAxiosGet = (url: string, config?: AxiosRequestConfig) =>
  TE.tryCatch(
    async () => {
      const result = await axios.get<unknown, AxiosResponse<unknown>>(
        url,
        config
      );
      return result;
    },
    (error) => {
      return error instanceof Error
        ? CHNetworkError.of("safeAxiosGet", error)
        : CHNetworkError.of("safeAxiosGet", new Error("Unknown Error"));
    }
  );
