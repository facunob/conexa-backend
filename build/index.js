"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const peopleRouter_1 = __importDefault(require("./routes/people/peopleRouter"));
const planetRouter_1 = __importDefault(require("./routes/planet/planetRouter"));
const starshipRouter_1 = __importDefault(require("./routes/starship/starshipRouter"));
const filmRouter_1 = __importDefault(require("./routes/film/filmRouter"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const cors_1 = __importDefault(require("cors"));
const { PORT } = require('./config');
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: '50mb' }));
app.use(express_1.default.urlencoded({ limit: '50mb' }));
app.use((0, cors_1.default)());
app.use('/api/people', peopleRouter_1.default);
app.use('/api/planets', planetRouter_1.default);
app.use('/api/starships', starshipRouter_1.default);
app.use('/api/films', filmRouter_1.default);
app.use(errorHandler_1.default);
app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
