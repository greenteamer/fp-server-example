export declare class CHNetworkError {
    readonly _tag = "CHNetworkError";
    readonly error: Error;
    readonly message: string;
    private constructor();
    static of(marker: string, error: Error): CHNetworkError;
}
//# sourceMappingURL=CHNetworkError.d.ts.map