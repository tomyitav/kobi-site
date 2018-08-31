import * as React from 'react'
import {ResidenceSideProps} from "./ResidenceSideProps";
import isSelected from "../../../services/selected-item";
import {SideProject} from "../types/SideProject";
import residenceProjects from "./residence-projects-list";

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
                                    <a href={project.location}
                                       className={isSelected(project.name, this.props.selectedName)}>{project.name}</a>
                                </li>)
                        })
                    }
                </ul>
            </div>
        )

    }
}