import * as React from 'react'
import Link from 'next/link'
import {NavbarProps} from "./NavbarProps";
import isSelected from "../../services/selected-item";

export const Nav = (props: NavbarProps) => {
    const {selectedLink} = props;
    const indexClass = isSelected("אודות", selectedLink);
    const teamClass = isSelected("צוות", selectedLink);
    const projectsClass = isSelected("פרויקטים", selectedLink);
    const previousClass = isSelected("פרויקטים ממשרד קודם", selectedLink);
    const contactClass = isSelected("צור קשר", selectedLink);
    return (
        <div>
            {/*language=PostCSS*/}
            <style jsx> {`
        * {
          font-size: 1.3rem;
        }

        .navbar {
            border-bottom: 2px solid #6d6d95;
        }
      `}
            </style>
            {/*<style jsx> {`*/}
            {/*.nav {*/}
            {/*border-bottom: 1px solid;*/}
            {/*}*/}
            {/*`}*/}
            {/*</style>*/}
            <nav className="navbar navbar-light bg-faded">
                <Link href="/"><a className={`nav-item ${indexClass}`}>אודות</a></Link>
                <Link href="/Manager"><a className={`nav-item ${teamClass}`}>צוות</a></Link>
                <div className="nav-item dropdown">
                    <a className={`dropdown-toggle ${projectsClass}`} data-toggle="dropdown" id="Preview" href="residence.html"
                       role="button"
                       aria-haspopup="true" aria-expanded="false">פרויקטים</a>
                    <div className="dropdown-menu" aria-labelledby="Preview">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link href="/HatsrotHaneviim"><a className="dropdown-item">מגורים</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/YuvalGanim"><a className="dropdown-item">התחדשות עירונית</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/SevenBows"><a className="dropdown-item">מלונאות</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/ToratZeev"><a className="dropdown-item">מבני ציבור ומשרדים</a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link href="/Holyland"><a className={`nav-item ${previousClass}`}>פרויקטים ממשרד קודם</a></Link>
                <Link href="/Contact"><a className={`nav-item ${contactClass}`}>צור קשר</a></Link>
                <Link href="/">
                    <a className="navbar-header">
                        <img className="d-none d-lg-block" src="/static/kobi-final-logo.jpg" width="290" height="50"
                             alt="עמוד הבית"/>
                    </a>
                </Link>
            </nav>
        </div>)
}