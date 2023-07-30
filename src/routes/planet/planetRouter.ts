import express from 'express';
import { IPageable } from '../../model/pageable';
import { IPlanet } from '../../model/planet.model';
import {IPageableResponse} from '../../model/common'
import planetService from "../../service/planet.service";

const planetRouter = express.Router()


planetRouter.get('', async (req: IPageable, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1
    const planets: IPageableResponse<IPlanet> = await planetService.findPlanetsByPage(page);

    res.json(planets);
  } catch(e) {
    next(e);
  }
});


planetRouter.get('/:id', async (req: {params: {id: string}}, res, next) => {
  try {
    const id = req.params.id;
    const planet: IPlanet = await planetService.findPlanetById(id);

    res.json(planet);
  } catch (e) {
    next(e);
  }
});


export default planetRouter