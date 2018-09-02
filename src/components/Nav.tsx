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
            <Link href="/"><a className="nav-item">אודות</a></Link>
            <Link href="/SSR"><a className="nav-item">צוות</a></Link>
            <div className="nav-item dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" id="Preview" href="residence.html" role="button"
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
                            <Link href="/SSR"><a className="dropdown-item">מלונאות</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/SSR"><a className="dropdown-item">מבני ציבור ומשרדים</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Link href="/ModuleCss"><a className="nav-item">פרויקטים ממשרד קודם</a></Link>
            <Link href="/StyledJsx"><a className="nav-item">צור קשר</a></Link>
            <Link href="/">
                <a className="navbar-header">
                <img className="d-none d-lg-block" src="/static/kobi-final-logo.jpg" width="290" height="50"
                     alt="עמוד הבית"/>
                </a>
            </Link>
        </nav>
    </div>