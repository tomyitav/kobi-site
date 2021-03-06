import {ResidenceType} from "./ResidenceType";
import {HithadshutType} from "./HithadshutType";
import {HotelsType} from "./HotelsType";
import {PublicPlacesType} from "./PublicPlacesType";
import {PreviousType} from "./PreviousType";
import {TeamType} from "./TeamType";

export interface SideProject {
    location: string,
    name: ResidenceType | HithadshutType | HotelsType | PublicPlacesType | PreviousType | TeamType
}