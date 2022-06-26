"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHError = void 0;
class CHError {
    constructor(message) {
        this._tag = "CHError";
    }
    static of(message) {
        return new CHError(message);
    }
}
exports.CHError = CHError;
//# sourceMappingURL=CHError%20copy.js.map