"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_config_1 = require("../config/axios.config");
const http_error_1 = require("../error-handling/http-error");
const apiUrl = '/starships';
const findStarshipsByPage = (page) => __awaiter(void 0, void 0, void 0, function* () {
    const starships = (yield axios_config_1.swapiAxios.get(`${apiUrl}/?page=${page}`)).data;
    return starships;
});
const findStarshipById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = (yield axios_config_1.swapiAxios.get(`${apiUrl}/${id}`));
    if (data.status !== 200) {
        (0, http_error_1.handleexception)(data, "Starship", id);
    }
    return data.data;
});
exports.default = {
    findStarshipsByPage,
    findStarshipById
};
