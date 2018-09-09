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
            <nav className="navbar navbar-expand-lg navbar-light bg-faded">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Link href="/"><a className={`nav-link ${indexClass}`}>אודות</a></Link>
                    <Link href="/Manager"><a className={`nav-link ${teamClass}`}>צוות</a></Link>
                    <div className="nav-item dropdown">
                        <a className={`dropdown-toggle nav-link ${projectsClass}`} data-toggle="dropdown" id="Preview" href="residence.html"
                           role="button"
                           aria-haspopup="true" aria-expanded="false">פרויקטים</a>
                        <div className="dropdown-menu" aria-labelledby="Preview">
                            <ul className="ml-auto">
                                <li>
                                    <Link href="/HatsrotHaneviim"><a className="dropdown-item">מגורים</a></Link>
                                </li>
                                <li>
                                    <Link href="/YuvalGanim"><a className="dropdown-item">התחדשות עירונית</a></Link>
                                </li>
                                <li>
                                    <Link href="/SevenBows"><a className="dropdown-item">מלונאות</a></Link>
                                </li>
                                <li>
                                    <Link href="/ToratZeev"><a className="dropdown-item">מבני ציבור ומשרדים</a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link href="/Holyland"><a className={`nav-link ${previousClass}`}>פרויקטים ממשרד קודם</a></Link>
                    <Link href="/Contact"><a className={`nav-link ${contactClass}`}>צור קשר</a></Link>
                </div>
                <Link href="/">
                    <a className="navbar-header">
                        <img className="d-none d-sm-block" src="/static/kobi-final-logo.jpg" width="290" height="50"
                             alt="עמוד הבית"/>
                    </a>
                </Link>
            </nav>
        </div>)
}