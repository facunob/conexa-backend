import express from 'express';
import { IPageable } from '../../model/pageable';
import { IPeople } from '../../model/people.model';
import peopleService from "../../service/people.service";


const peopleRouter = express.Router()

peopleRouter.get('', async (req: IPageable, res, next) => {
  try {
    const page = parseInt(req.params.page) || 1
    const people = await peopleService.findPeopleByPage(page);

    res.json(people);
  } catch (e) {
    next(e);
  }
});


peopleRouter.get('/:id', async (req: {params: {id: string}}, res, next) => {
  try {
    const id = req.params.id;
    const people: IPeople = await peopleService.findPeopleById(id);

    res.json(people);
  } catch (e) {
    next(e)
  }
});

export default peopleRouter