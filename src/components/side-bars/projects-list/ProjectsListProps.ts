import {SideProject} from "../types/SideProject";

export interface ProjectsListProps {
    projects: Array<SideProject>,
    selectedName?: string
}