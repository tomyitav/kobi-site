import * as React from 'react'
import isSelected from "../../../services/selected-item";
import {SideProject} from "../types/SideProject";
import Link from 'next/link'
import hithadshutProjects from "./hithadshut-projects-list";
import {HithadshutSideProps} from "./HithadshutSideProps";

export class HithadshutSide extends React.Component<HithadshutSideProps, {}> {
    render() {
        const projects: Array<SideProject> = hithadshutProjects;
        return (
            <div>
                <ul>
                    {
                        projects.map((project) => {
                            return (
                                <li>
                                    <Link href={project.location}>
                                        <a className={isSelected(project.name, this.props.selectedName)}>{project.name}</a>
                                    </Link>
                                </li>)
                        })
                    }
                </ul>
            </div>
        )

    }
}