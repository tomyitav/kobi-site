import * as React from 'react'
import {ProjectsListProps} from "./ProjectsListProps";
import isSelected from "../../../services/selected-item";
import Link from 'next/link'

export const ProjectsList = (props: ProjectsListProps) => {
    const {projects, selectedName} = props
    return (
        <ul className="project-list">
            {/*language=PostCSS*/}
            <style jsx>{`
                    .project-list
                    {
                        padding-right: 1.1rem;
                    }
                    `}
            </style>
            {
                projects.map((project) => {
                    return (
                        <li>
                            <Link href={project.location}>
                                <a className={isSelected(project.name, selectedName)}>{project.name}</a>
                            </Link>
                        </li>)
                })
            }
        </ul>
    )
}