import * as React from 'react'
import {ContentLayoutProps} from "./ContentLayoutProps";
import {ContentListContainer} from "../content-list-container/ContentListContainer";

export class ContentLayout extends React.Component<ContentLayoutProps, {}> {


    render() {
        const {children, header} = this.props;
        return (
            <div id="ContentFrame" className="col-sm-9 col-8">
                {/*language=PostCSS*/}
                <style jsx>{`//global stylesheet
                #ContentFrame
                {
                    text-align: right;
                    border-right: 2px solid #6d6d95;
                    font-size: 1.2rem;
                }
                ul {
                    margin-right: -1rem;
                }
                a {
                    font-size: 1.7rem
                }
                `}
                </style>
                <h2>{header}</h2>
                <ContentListContainer>
                    {children}
                </ContentListContainer>

            </div>
        )

    }
}