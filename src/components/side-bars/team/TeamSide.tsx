import * as React from 'react'
import {SideProject} from "../types/SideProject";
import {ProjectsList} from "../projects-list/ProjectsList";
import {TeamSideProps} from "./TeamSideProps";
import teamProjects from "./team-projects-list";

export class TeamSide extends React.Component<TeamSideProps, {}> {
    render() {
        const projects: Array<SideProject> = teamProjects;
        const {selectedName} = this.props;
        return (
            <div>
                <ProjectsList projects={projects} selectedName={selectedName}/>
            </div>
        )
    }
}