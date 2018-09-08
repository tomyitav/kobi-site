import * as React from 'react'
import {SideBarLayoutProps} from "./SideBarLayoutProps";

export class SideBarLayout extends React.Component<SideBarLayoutProps, {}> {


    render() {
      const {children, header} = this.props;
          return (
              <div id="SideMenu" className="col-sm-3 col-4">
                  {/*language=PostCSS*/}
                  <style jsx>{`
                    #SideMenu
                    {
                        text-align: right;
                        padding-bottom: 2rem;
                        margin-right: -0.8rem;
                    }
                    ul {
                        margin-right: -1rem;
                    }
                    `}
                  </style>
                  <h4>{header}</h4>
                    {children}
              </div>
          )

    }
}