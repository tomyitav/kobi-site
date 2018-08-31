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
                    {/*<li>*/}
                    {/*<a href="residence.html" className={isSelected(1, this.props.selected)}>חצרות הנביאים </a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*<a href="savioney.html" className={isSelected(2, this.props.selected)}>סביוני גן ארנונה</a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*<a href="arnona.html" className={isSelected(3, this.props.selected)}>סביוני ארנונה</a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*<a href="ramot.html" className={isSelected(4, this.props.selected)}>מצפה רמות</a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*<a href="rasco.html" className={isSelected(5, this.props.selected)}>רסקו</a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*<a href="ramathasharon.html" className={isSelected(6, this.props.selected)}>רמת השרון הירוקה</a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*<a href="ganhair.html" className={isSelected(7, this.props.selected)}>גן העיר</a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*<a href="maats.html" className={isSelected(8, this.props.selected)}>מתחם מע"צ – הנביאים</a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*<a href="green.html" className={isSelected(9, this.props.selected)}>רמות הירוקה</a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*<a href="parkarnona.html" className={isSelected(10, this.props.selected)}>פארק ארנונה</a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*<a href="mishtaken.html" className={isSelected(11, this.props.selected)}>מחיר למשתכן - קסטל</a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*<a href="butic.html" className={isSelected(12, this.props.selected)}>בוטיק הנביאים</a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*<a href="maromhadas.html" className={isSelected(13, this.props.selected)}>מרום הדס</a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*<a href="shamay.html" className={isSelected(14, this.props.selected)}>שמאי 10 - גולדן היל</a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*<a href="baitvagan.html" className={isSelected(15, this.props.selected)}>נופי בית וגן </a>*/}
                    {/*</li>*/}
                </ul>
            </div>
        )

    }
}