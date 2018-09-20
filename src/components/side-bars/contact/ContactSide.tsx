import * as React from 'react'

export const ContactSide = () =>
    <ul className="contact-details">
        <style jsx>{`
            .contact-details
            {
                padding-right: 1.1rem;
            }

            #mail-content {
                overflow: hidden;
                text-overflow: ellipsis;
            }
        `}
        </style>
        <li id="mail-content">
                    <span> מייל:
                    <a href="mailto:office1@yitav-eng.co.il"> office1@yitav-eng.co.il</a>
                        </span>
        </li>
        <li>
            <span>טלפון: 02-581-1882</span>
        </li>
        <li>
            <span>פקס: 02-547-2772</span>
        </li>
        <li>
            <span>כתובת: קיבוץ מעלה החמישה, ד.נ. הרי יהודה, 90835</span>
        </li>
    </ul>

