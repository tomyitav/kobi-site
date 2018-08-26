import * as React from 'react'
import Link from 'next/link'

export const Nav = props =>
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
            <Link className="nav-item" href="/">אודות</Link>
            <Link className="nav-item" href="/SSR">צוות</Link>
            <div className="nav-item dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" id="Preview" href="residence.html" role="button"
                   aria-haspopup="true" aria-expanded="false">פרויקטים</a>
                <div className="dropdown-menu" aria-labelledby="Preview">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="dropdown-item" href="/SSR">מגורים</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="dropdown-item" href="/SSR">התחדשות עירונית</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="dropdown-item" href="/SSR">מלונאות</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="dropdown-item" href="/SSR">מבני ציבור ומשרדים</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Link className="nav-item" href="/ModuleCss">פרויקטים ממשרד קודם</Link>
            <Link className="nav-item" href="/StyledJsx">צור קשר</Link>
            <Link className="navbar-header" href="/">
                <img className="d-none d-lg-block" src="/static/kobi-final-logo.jpg" width="290" height="50"
                     alt="עמוד הבית"/>
            </Link>
        </nav>
    </div>