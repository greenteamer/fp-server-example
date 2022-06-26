import * as TE from "fp-ts/TaskEither";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { CHError } from "../errors/CHError";
export declare const safeAxiosGet: (url: string, config?: AxiosRequestConfig) => TE.TaskEither<CHError, AxiosResponse<unknown, any>>;
//# sourceMappingURL=safe-fetch.d.ts.map