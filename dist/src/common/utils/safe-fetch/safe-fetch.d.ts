import * as TE from "fp-ts/TaskEither";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { CHNetworkError } from "../../errors/CHNetworkError";
export declare const safeAxiosGet: (url: string, config?: AxiosRequestConfig) => TE.TaskEither<CHNetworkError, AxiosResponse<unknown, any>>;
//# sourceMappingURL=safe-fetch.d.ts.map