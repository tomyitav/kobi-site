import * as React from 'react'
import {HeaderImageProps} from "./HeaderImageProps";

export class HeaderImage extends React.Component<HeaderImageProps, {}> {
    render() {
      const {location, albumUrl} = this.props;
      if(albumUrl) {
          return (
              <div>
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
              <a>
                  <img src={location} className="img-fluid"/>
              </a>
              <br/>
          </div>
          )
      }
    }
}