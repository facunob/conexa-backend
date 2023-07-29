import express, { Express } from 'express';
import peopleRouter from './routes/people/peopleRouter';
import planetRouter from './routes/planet/planetRouter';
import starshipRouter from './routes/starship/starshipRouter'
import filmRouter from './routes/film/filmRouter';
import errorHandler from "./middleware/errorHandler";
import cors from 'cors'

const { PORT } = require('../config');

const app: Express = express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors())

app.use('/api/people', peopleRouter)
app.use('/api/planets', planetRouter)
app.use('/api/starships', starshipRouter)
app.use('/api/films', filmRouter)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});