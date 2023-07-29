import {IPageableResponse} from "../model/common";
import {swapiAxios} from "../../config/axios.config";
import {handleexception} from "../../error-handling/http-error";
import {IFilm} from "../model/film.model";


const apiUrl = '/films'

const findFilmsByPage = async (page: number) => {
    const films: IPageableResponse<IFilm> = (await swapiAxios.get(`${apiUrl}/?page=${page}`)).data;
    return films;
}

const findFilmById = async (id: string) => {
    const data = (await swapiAxios.get(`${apiUrl}/${id}`));

    if(data.status !== 200) {
        handleexception(data, "Film", id);
    }

    return data.data;
}

export default {
    findFilmsByPage,
    findFilmById
}