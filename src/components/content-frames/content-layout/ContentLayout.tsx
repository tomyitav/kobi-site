import * as React from 'react'
import {ContentLayoutProps} from "./ContentLayoutProps";

export class ContentLayout extends React.Component<ContentLayoutProps, {}> {


    render() {
      const {children, header} = this.props;
          return (
          <div id="ContentFrame" className="col-sm-9 col-8">
              {/*language=PostCSS*/}
              <style jsx>{`
                #ContentFrame
                {
                    text-align: right;
                    border-right: 2px solid #6d6d95;
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
                    {children}
          </div>
          )

    }
}