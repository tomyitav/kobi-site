import * as React from 'react'
import {HeaderImageProps} from "./HeaderImageProps";

export class HeaderImage extends React.Component<HeaderImageProps, {}> {
    render() {
      const {location, albumUrl} = this.props;
      if(albumUrl) {
          return (
              <div>
                  {/*language=PostCSS*/}
                  <style jsx> {`
                   .img-fluid {
                        height: 20rem;
                        display: block;
                        margin-left: auto;
                        margin-right: auto;
                        width: 98%;
                        margin-bottom: 1vh;
                    }
                  `}
                  </style>
                  <a href={albumUrl} target="_blank">
                      <img src={location} className="img-fluid"/>
                  </a>
                  <br/>
              </div>
          )
      }
      else {
          return (
          <div>
              {/*language=PostCSS*/}
              <style jsx> {`
                   .img-fluid {
                        height: 20rem;
                        display: block;
                        margin-left: auto;
                        margin-right: auto;
                        width: 98%;
                        margin-bottom: 1vh;
                    }
                  `}
              </style>
              <a>
                  <img src={location} className="img-fluid"/>
              </a>
              <br/>
          </div>
          )
      }
    }
}