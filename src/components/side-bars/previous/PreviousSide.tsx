import * as React from 'react'
import {SideProject} from "../types/SideProject";
import {ProjectsList} from "../projects-list/ProjectsList";
import {PreviousSideProps} from "./PreviousSideProps";
import previousProjects from "./previous-projects-list";

export class PreviousSide extends React.Component<PreviousSideProps, {}> {
    render() {
        const projects: Array<SideProject> = previousProjects;
        const {selectedName} = this.props;
        return (
            <div>
                <ProjectsList projects={projects} selectedName={selectedName}/>
            </div>
        )
    }
}