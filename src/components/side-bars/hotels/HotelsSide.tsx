import * as React from 'react'
import {SideProject} from "../types/SideProject";
import {ProjectsList} from "../projects-list/ProjectsList";
import {HotelsSideProps} from "./HotelsSideProps";
import hotelsProjects from "./hotels-projects-list";

export class HotelsSide extends React.Component<HotelsSideProps, {}> {
    render() {
        const projects: Array<SideProject> = hotelsProjects;
        const {selectedName} = this.props;
        return (
            <div>
                <ProjectsList projects={projects} selectedName={selectedName}/>
            </div>
        )

    }
}