import { IPageableResponse } from "../model/common";
import { IFilm } from "../model/film.model";
declare const _default: {
    findFilmsByPage: (page: number) => Promise<IPageableResponse<IFilm>>;
    findFilmById: (id: string) => Promise<any>;
};
export default _default;
