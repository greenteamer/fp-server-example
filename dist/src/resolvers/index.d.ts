export declare const resolvers: {
    readonly vehicles: {
        readonly makes: import("fp-ts/lib/ReaderTaskEither").ReaderTaskEither<import("../services/cars/car-service").CarService, import("../common/errors/CHError").CHError | import("io-ts/lib/Decoder").DecodeError, import("../api/vpic/types").CarMake[]>;
        readonly manufacturers: import("fp-ts/lib/ReaderTaskEither").ReaderTaskEither<import("../services/cars/car-service").CarService, import("../common/errors/CHError").CHError | import("io-ts/lib/Decoder").DecodeError, import("../api/vpic/types").CarManufacturers[]>;
    };
};
//# sourceMappingURL=index.d.ts.map