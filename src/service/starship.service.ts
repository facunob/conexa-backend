import {IPageableResponse} from "../model/common";
import {IStarship} from "../model/starship.model";
import {swapiAxios} from "../config/axios.config";
import {handleexception} from "../error-handling/http-error";


const apiUrl = '/starships'

const findStarshipsByPage = async (page: number) => {
    const starships: IPageableResponse<IStarship> = (await swapiAxios.get(`${apiUrl}/?page=${page}`)).data;
    return starships;
}

const findStarshipById = async (id: string) => {
    const data = (await swapiAxios.get(`${apiUrl}/${id}`));

    if(data.status !== 200) {
        handleexception(data, "Starship", id)
    }

    return data.data;
}

export default {
    findStarshipsByPage,
    findStarshipById
}