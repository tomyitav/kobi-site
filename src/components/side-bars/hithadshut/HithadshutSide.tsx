import * as React from 'react'
import {SideProject} from "../types/SideProject";
import {HithadshutSideProps} from "./HithadshutSideProps";
import {ProjectsList} from "../projects-list/ProjectsList";
import hithadshutProjects from "./hithadshut-projects-list";

export class HithadshutSide extends React.Component<HithadshutSideProps, {}> {
    render() {
        const projects: Array<SideProject> = hithadshutProjects;
        const {selectedName} = this.props;
        return (
            <div>
                <ProjectsList projects={projects} selectedName={selectedName}/>
            </div>
        )

    }
}