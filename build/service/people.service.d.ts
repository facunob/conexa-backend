import { IPageableResponse } from "../model/common";
import { IPeople } from "../model/people.model";
declare const _default: {
    findPeopleByPage: (page: number) => Promise<IPageableResponse<IPeople>>;
    findPeopleById: (id: string) => Promise<any>;
};
export default _default;
