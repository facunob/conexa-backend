"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swapiAxios = void 0;
const axios_1 = __importDefault(require("axios"));
exports.swapiAxios = axios_1.default.create({
    baseURL: 'https://swapi.dev/api',
    timeout: 25000,
    validateStatus: status => status < 500
});
