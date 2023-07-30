import express from 'express';
import { IStarship } from '../../model/starship.model';
import { IPageable } from '../../model/pageable';
import starshipService from "../../service/starship.service";

const starshipRouter = express.Router()

starshipRouter.get('', async (req: IPageable, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const starships = await starshipService.findStarshipsByPage(page);

    res.json(starships);
  }catch (e) {
    next(e);
  }
});


starshipRouter.get('/:id', async (req: {params: {id: string}}, res, next) => {
  try {
    const id = req.params.id;
    const starship: IStarship = await starshipService.findStarshipById(id);
    res.json(starship);
  } catch (e) {
    next(e)
  }
});

export default starshipRouter