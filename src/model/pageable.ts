import { Request } from 'express';

export interface IPageable extends Request {
  query: {
    page: string;
  }
}