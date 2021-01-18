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
                <li>בן דוד יובל -מנהל פרויקטים</li>
                <li>בן שושן יהודה - הנדסאי אזרחי</li>
                <li>ברוקר יונתן- מהנדס אזרחי</li>
                <li>גוברמן אלכס - מהנדס אזרחי</li>
                <li>גרוס מעיין - מהנדסת אזרחית</li>
                <li>דיסין אהרון- הנדסאי מכונות</li>
                <li>דרקסלר פנחס - מהנדס אזרחי</li>
                <li>הולץ משה- מהנדס אזרחי</li>
                <li>וייסרוז אורי - מהנדס אזרחי</li>
                <li>כהן מיכאל - מהנדס אזרחי</li>
                <li>ליולקו יהודה - מהנדס אזרחי</li>
                <li>ליס ארקדי - מהנדס אזרחי</li>
                <li>מוסקוביץ אהרון - הנדסאי בני</li>
                <li>מזרחי אבי - הנדסאי אזרחי</li>
                <li>עוויסאת כמאל - מהנדס אזרחי</li>
                <li>עליס איציק - הנדסאי אזרחי</li>
                <li>קודרתי מוטי - מהנדס אזרחי</li>
                <li>קומן שמוליק - אדריכל ומנהל תכנון</li>
                <li>קליין אליעזר -הנדסאי אזרחי</li>
                <li>שובל נופר - מהנדסת אזרחית ומנהלת תכנון</li>
                <li>שלו אייל - מהנדס אזרחי</li>
                <li>שניאור איתמר - מהנדס אזרחי</li>
                <li>למברגר שאול, עו"ד- אחראי קידום רישוי ותהליכים סטטוטוריים</li>
            </ul>
            <h2 className="p-title">הנהלה אדמיניסטרטיבית</h2>
            <ul>
                <li>ייטב אור - MBA מנהל עסקים</li>
                <li>פריטל הילה - BA כלכלה וחשבונאות</li>
                <li>קגנובסקי ענת - BA היסטוריה וגיאוגרפיה</li>
            </ul>
            <br/>
            <br/>
        </div>
        <div className="col-sm-3">
            <img src="/static/images/team.jpeg" className="img-fluid rounded"/>
        </div>
    </div>