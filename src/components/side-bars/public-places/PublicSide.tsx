import * as React from 'react'
import {SideProject} from "../types/SideProject";
import {ProjectsList} from "../projects-list/ProjectsList";
import {PublicSideProps} from "./PublicSideProps";
import publicPlacesProjects from "./public-projects-list";

export class PublicSide extends React.Component<PublicSideProps, {}> {
    render() {
        const projects: Array<SideProject> = publicPlacesProjects;
        const {selectedName} = this.props;
        return (
            <div>
                <ProjectsList projects={projects} selectedName={selectedName}/>
            </div>
        )

    }
}