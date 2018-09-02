import * as React from 'react'
import {ResidenceSideProps} from "./ResidenceSideProps";
import {SideProject} from "../types/SideProject";
import residenceProjects from "./residence-projects-list";
import {ProjectsList} from "../projects-list/ProjectsList";

export class ResidenceSide extends React.Component<ResidenceSideProps, {}> {
    render() {
        const projects: Array<SideProject> = residenceProjects;
        const {selectedName} = this.props;
        return (
            <div>
                <ProjectsList projects={projects} selectedName={selectedName}/>
            </div>
        )

    }
}