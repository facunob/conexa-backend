import { Request } from 'express';
export interface IPageable extends Request {
    params: {
        page: string;
    };
}
