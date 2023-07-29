import { IPageableResponse } from "../model/common";
import { IStarship } from "../model/starship.model";
declare const _default: {
    findStarshipsByPage: (page: number) => Promise<IPageableResponse<IStarship>>;
    findStarshipById: (id: string) => Promise<any>;
};
export default _default;
