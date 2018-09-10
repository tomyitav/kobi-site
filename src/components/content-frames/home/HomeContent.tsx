import * as React from 'react'

export const HomeContent = () =>
{
    return (
        <div id="home-container">
            {/*language=PostCSS*/}
            <style jsx>{`
                    #home-container {
                        margin-right: 1.2rem;
                        width: 80%;
                        margin-bottom: 2.5rem;
                    }
                    `}
            </style>
            <p>החברה הוקמה בתחילת שנת 2013, ומשרדה ממוקם בקיבוץ מעלה החמישה.
                המשרד פועל במגוון רחב של פרויקטים, בתחום ההנדסה האזרחית, ומונה
                כשישה עשר מהנדסים, אדריכלים ואנשי אדמיניסטרציה. תחומי ההתמחות של החברה הינם: ניהול ופיקוח
                על בניית בנייני מגורים, מבני ציבור, בתי מלון, ועוד.
            </p>
        </div>
    )
}