import express from 'express';
import {IPageable} from "../../model/pageable";
import filmService from "../../service/film.service";
import {IFilm} from "../../model/film.model";


const filmRouter = express.Router()


filmRouter.get('', async (req: IPageable, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1
        const people = await filmService.findFilmsByPage(page);

        res.json(people);
    } catch (e) {
        next(e);
    }
});


filmRouter.get('/:id', async (req: {params: {id: string}}, res, next) => {
    try {
        const id = req.params.id;
        const people: IFilm = await filmService.findFilmById(id);

        res.json(people);
    } catch (e) {
        next(e);
    }
});

export default filmRouter