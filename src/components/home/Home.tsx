import * as React from 'react'
import * as classnames from 'classnames'
import * as css from './Home.css'
import {HeaderImage} from "../header-image/HeaderImage";

export const Home = props =>
  <div className={classnames('test', css.home)}>
    <HeaderImage location='/static/kobi-final-logo.jpg'/>
    <ul>
      <li>
        usage classnames in Home.tsx
      </li>
      <li>
        Layout.tsx set background-color hot-pink using global styled jsx
      </li>
    </ul>
  </div>