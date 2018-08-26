import * as React from 'react'
import * as classnames from 'classnames'
import * as css from './Home.css'
import {HeaderImage} from "../header-image/HeaderImage";
import {ResidenceSide} from "../side-bars/Residence/ResidenceSide";

export const Home = props =>
  <div className={classnames('test', css.home)}>
    <HeaderImage location='/static/kobi-final-logo.jpg'/>
    <ResidenceSide header="מגורים" selected={1}/>
  </div>