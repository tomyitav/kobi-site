import * as React from 'react'

export const TeamContent = () =>
    <div className="row">
        {/*language=PostCSS*/}
        <style jsx>{`
            .p-title
            {
                padding-right:1rem;
            }
        `}
        </style>
        <div className="col-sm-8">
            <ul>
                <li>גוברמן אלכס - מהנדס אזרחי</li>
                <li>גרוס מעיין - מהנדסת אזרחית</li>
                <li>דרקסלר פנחס - מהנדס אזרחי</li>
                <li>וייסרוז אורי - מהנדס אזרחי</li>
                <li>חדד אביתר - מהנדס אזרחי</li>
                <li>ליולקו יהודה - מהנדס אזרחי</li>
                <li>ליס ארקדי - מהנדס אזרחי</li>
                <li>עוויסאת כמאל - מהנדס אזרחי</li>
                <li>קומן שמוליק - אדריכל ומנהל תכנון</li>
                <li>קדרתי מוטי - מהנדס אזרחי</li>
                <li>רספוטניס יעקב - אדריכל ומהנדס אזרחי</li>
                <li>שובל נופר - מהנדסת אזרחית ומנהלת תכנון</li>
                <li>שניאור איתמר - מהנדס אזרחי</li>
                <li>למברגר שאול, עו"ד- אחראי קידום רישוי ותהליכים סטטוטוריים</li>
            </ul>
            <h2 className="p-title">הנהלה אדמיניסטרטיבית</h2>
            <ul>
                <li>אור שמע</li>
                <li>ענת קגנובסקי</li>
                <li>הילה פריטל</li>
            </ul>
            <br/>
            <br/>
        </div>
        <div className="col-sm-3">
            <img src="/static/images/team.jpg" className="img-fluid rounded"/>
        </div>
    </div>