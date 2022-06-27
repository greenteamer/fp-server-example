export declare const resolvers: {
    readonly vehicles: {
        readonly makes: import("fp-ts/lib/ReaderTaskEither").ReaderTaskEither<import("../services/cars/car-service").CarService, import("../common/errors/CHNetworkError").CHNetworkError | import("../common/errors/CHDecoderError").CHDecoderError, import("../api/vpic/types").CarMake[]>;
        readonly manufacturers: import("fp-ts/lib/ReaderTaskEither").ReaderTaskEither<import("../services/cars/car-service").CarService, import("../common/errors/CHNetworkError").CHNetworkError | import("../common/errors/CHDecoderError").CHDecoderError, import("../api/vpic/types").CarManufacturers[]>;
    };
};
//# sourceMappingURL=index.d.ts.map