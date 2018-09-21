import * as React from 'react'

export const ContactSide = () =>
    <ul className="contact-details fa-ul">
        <style jsx>{`
            .contact-details
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

            #mail-content{
                overflow: hidden;
                text-overflow: ellipsis;
            }
        `}
        </style>
        <li >
            <span className="fa-li"><i className="fas fa-envelope"></i></span>
                    <span id="mail-content"><a href="mailto:office1@yitav-eng.co.il">office1@yitav-eng.co.il</a></span>
        </li>
        <li>
            <span className="fa-li"><i className="fas fa-phone"></i></span>
            <span>02-581-1882</span>
        </li>
        <li>
            <span className="fa-li"><i className="fas fa-fax"></i></span>
            <span>פקס: 02-547-2772</span>
        </li>
        <li>
            <span className="fa-li"><i className="fas fa-map-marker-alt"></i></span>
            <span>קיבוץ מעלה החמישה, ד.נ. הרי יהודה, 90835</span>
        </li>
    </ul>

