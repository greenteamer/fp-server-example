"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseContainer = exports.testParserObj = void 0;
const helpers_1 = require("../helpers");
exports.testParserObj = {
    api: {
        vehicles: {
            makes: () => ["make1", "make2", "make3"],
            manufacturers: () => ["manufacturer1", "manufacturer2"],
        },
        stores: {
            allStores: () => 3,
            getStore: () => 4,
        },
    },
    apiV2: {
        start: () => "start endpoint",
    },
};
class ParseContainer {
    constructor(initial) {
        this._tag = "ParseContainer";
        this.initial = initial;
        this.keys = (0, helpers_1.getObjKeys)(initial);
        this.values = (0, helpers_1.getObjValues)(initial);
        this.ex = this.values.map((i) => typeof i === "function" ? i : new ParseContainer(i));
    }
}
exports.ParseContainer = ParseContainer;
//# sourceMappingURL=index.js.map