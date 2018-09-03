import {ResidenceType} from "./ResidenceType";
import {HithadshutType} from "./HithadshutType";
import {HotelsType} from "./HotelsType";

export interface SideProject {
    location: string,
    name: ResidenceType | HithadshutType | HotelsType
}