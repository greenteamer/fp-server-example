"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHError = void 0;
class CHError {
    constructor(marker, error) {
        this._tag = "CHError";
        this.error = error;
        this.message = `${marker}: ${error.message}`;
    }
    static of(marker, error) {
        return new CHError(marker, error);
    }
}
exports.CHError = CHError;
//# sourceMappingURL=CHError.js.map