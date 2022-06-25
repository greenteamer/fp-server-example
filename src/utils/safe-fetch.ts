import * as T from "@effect-ts/core/Effect";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const safeAxiosGet = <T>(url: string, config: AxiosRequestConfig) =>
  T.tryCatchPromise(
    () => axios.get<T, AxiosResponse<T>>(url, config),
    (error) => {
      console.log("axios error: ", error);
      return error instanceof Error
        ? new Error(`fetchCarTypesFn: ${error.message}`)
        : new Error("fetchCarTypesFn unknown Error");
    },
    "safeAxiosGet trace"
  );
