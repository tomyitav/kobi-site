import * as React from 'react'

export const ContentListContainer = (props) => {
    const {children} = props;
    return (
        <div id="list-container">
            {/*language=PostCSS*/}
            <style jsx>{`
                    #list-container {
                        margin-right: -1.2rem;
                    }
                    `}
            </style>
            {children}
        </div>
    )
}