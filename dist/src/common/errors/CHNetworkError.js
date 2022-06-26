"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHNetworkError = void 0;
class CHNetworkError {
    constructor(marker, error) {
        this._tag = "CHNetworkError";
        this.error = error;
        this.message = `${marker}: ${error.message}`;
    }
    static of(marker, error) {
        return new CHNetworkError(marker, error);
    }
}
exports.CHNetworkError = CHNetworkError;
//# sourceMappingURL=CHNetworkError.js.map