import * as React from 'react'
import {ProjectsListProps} from "./ProjectsListProps";
import isSelected from "../../../services/selected-item";
import Link from 'next/link'

export const ProjectsList = (props: ProjectsListProps) => {
    const {projects, selectedName} = props
    return (
        <ul className="project-list fa-ul">
            {/*language=PostCSS*/}
            <style jsx>{`
                    .project-list
                    {
                        padding-right: 1.1rem;
                    }
                    .fa-ul {
                        margin-left: 0;
                    }

                    .fa-li {
                        right: -2em;
                        color: #7f56cd;
                    }
                    `}
            </style>
            {
                projects.map((project, i) => {
                    return (
                        <li>
                            <span className="fa-li"><i className="fas fa-angle-left"></i></span>
                            <Link href={project.location}>
                                <a className={isSelected(project.name, selectedName)}>{project.name}</a>
                            </Link>
                        </li>)
                })
            }
        </ul>
    )
}