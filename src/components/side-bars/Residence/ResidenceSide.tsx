import * as React from 'react'
import {ResidenceSideProps} from "./ResidenceSideProps";
import isSelected from "../../../services/selected-item";
import {SideProject} from "../types/SideProject";
import residenceProjects from "./residence-projects-list";
import Link from 'next/link'

export class ResidenceSide extends React.Component<ResidenceSideProps, {}> {
    render() {
        const projects: Array<SideProject> = residenceProjects;
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