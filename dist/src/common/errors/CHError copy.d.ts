export declare class CHError {
    readonly _tag = "CHError";
    readonly error: Error;
    readonly message: string;
    private constructor();
    static of(marker: string, error: Error): CHError;
}
//# sourceMappingURL=CHError%20copy.d.ts.map