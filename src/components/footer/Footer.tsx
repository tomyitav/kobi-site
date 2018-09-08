import * as React from 'react'

export const Footer = props =>
    <div>
        {/*language=PostCSS*/}
        <style jsx> {`
        .footer {
            color: #89898b;
            text-align: center;
        }
      `}
        </style>
        <nav className="navbar fixed-bottom navbar-brand">
            <ul className="nav navbar-nav mx-auto">
                <a className="footer" href="#">כל הזכויות שמורות לקובי ייטב</a>
            </ul>
        </nav>
    </div>