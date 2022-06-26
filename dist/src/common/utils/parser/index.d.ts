export declare const testParserObj: {
    api: {
        vehicles: {
            makes: () => string[];
            manufacturers: () => string[];
        };
        stores: {
            allStores: () => number;
            getStore: () => number;
        };
    };
    apiV2: {
        start: () => string;
    };
};
export declare class ParseContainer<T, K extends keyof T> {
    readonly _tag = "ParseContainer";
    readonly initial: T;
    readonly keys: K;
    readonly values: Array<T[K]>;
    readonly ex: Array<T[K] extends (...args: any[]) => any ? T[K] : ParseContainer<T[K], keyof T[K]>>;
    constructor(initial: T);
}
//# sourceMappingURL=index.d.ts.map