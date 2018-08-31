import * as React from 'react'
import {SideBarLayoutProps} from "./SideBarLayoutProps";

export class SideBarLayout extends React.Component<SideBarLayoutProps, {}> {


    render() {
      const {children, header} = this.props;
          return (
              <div id="SideMenu" className="col-sm-3">
                  {/*language=PostCSS*/}
                  <style jsx>{`
                    #SideMenu
                    {
                        text-align: right;
                    }
                    ul {
                        // margin-right: -1rem;
                    }
                    `}
                  </style>
                  <h4>{header}</h4>
                  {children}
              </div>
          )

    }
}