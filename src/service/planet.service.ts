import {IPageableResponse} from "../model/common";
import {swapiAxios} from "../../config/axios.config";
import {IPlanet} from "../model/planet.model";
import {handleexception} from "../../error-handling/http-error";


const apiUrl = '/planets'

const findPlanetsByPage = async (page: number) => {
    const people: IPageableResponse<IPlanet> = (await swapiAxios.get(`${apiUrl}/?page=${page}`)).data;
    return people;
}

const findPlanetById = async (id: string) => {
    const data = await swapiAxios.get(`${apiUrl}/${id}`);

    if(data.status !== 200) {
        handleexception(data, "Planet", id);
    }

    return data.data;
}

export default {
    findPlanetsByPage,
    findPlanetById
}