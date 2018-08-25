import * as React from 'react'
import {HeaderImageProps} from "./HeaderImageProps";
import * as css from './HeaderImage.css'
import * as classnames from "classnames";

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
                  <img src={location} className={classnames('img-fluid', css["img-fluid"])}/>
              </a>
              <br/>
          </div>
          )
      }
    }
}