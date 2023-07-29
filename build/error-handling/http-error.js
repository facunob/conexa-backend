"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleexception = exports.NotFoundException = exports.HttpError = void 0;
class HttpError {
    constructor(message, status, code) {
        this.message = message;
        this.status = status;
        this.code = code;
    }
}
exports.HttpError = HttpError;
class NotFoundException extends HttpError {
    constructor(message) {
        super(message, 404);
    }
}
exports.NotFoundException = NotFoundException;
const handleexception = (data, entity, id) => {
    if (data.status === 404) {
        throw new NotFoundException(`${entity} with id: ${id} not found.`);
    }
    throw new HttpError(data.statusText, data.status);
};
exports.handleexception = handleexception;
