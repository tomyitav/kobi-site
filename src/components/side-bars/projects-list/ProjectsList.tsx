import * as React from 'react'
import {ProjectsListProps} from "./ProjectsListProps";
import isSelected from "../../../services/selected-item";
import Link from 'next/link'

export const ProjectsList = (props: ProjectsListProps) => {
    const {projects, selectedName} = props
    return (
        <ul>
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