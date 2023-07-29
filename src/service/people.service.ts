import {IPageableResponse} from "../model/common";
import {swapiAxios} from "../../config/axios.config";
import {handleexception} from "../../error-handling/http-error";
import {IPeople} from "../model/people.model";


const apiUrl = '/people'

const findPeopleByPage = async (page: number) => {
    const people: IPageableResponse<IPeople> = (await swapiAxios.get(`${apiUrl}/?page=${page}`)).data;
    return people;
}

const findPeopleById = async (id: string) => {
    const data = (await swapiAxios.get(`${apiUrl}/${id}`));

    if(data.status !== 200) {
        handleexception(data, "People", id);
    }

    return data.data;
}

export default {
    findPeopleByPage,
    findPeopleById
}