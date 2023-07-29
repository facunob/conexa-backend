import { IPageableResponse } from "../model/common";
import { IPlanet } from "../model/planet.model";
declare const _default: {
    findPlanetsByPage: (page: number) => Promise<IPageableResponse<IPlanet>>;
    findPlanetById: (id: string) => Promise<any>;
};
export default _default;
