import * as React from 'react'

export const Footer = props =>
    <div>
        {/*language=PostCSS*/}
        <style jsx> {`
        footer {
            color: #9999b9;
            text-align: center;
            margin-top: 4vh;
        }
      `}
        </style>
        <footer className="page-footer font-small blue">
            <div className="footer-copyright text-center py-3">כל הזכויות שמורות לקובי ייטב ©</div>
        </footer>
    </div>