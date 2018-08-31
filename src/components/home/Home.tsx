import * as React from 'react'
import * as classnames from 'classnames'
import * as css from './Home.css'
import {HeaderImage} from "../header-image/HeaderImage";
import {ResidenceSide} from "../side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../content-frames/content-layout/ContentLayout";
import {HatsrotHaneviimContent} from "../content-frames/hatsrot-haneviim/HatsrotHaneviimContent";

export const Home = props =>
  <div className={classnames('test', css.home)}>
    <HeaderImage location='/static/images/butic.jpg'/>
    <div className="row">
        <ResidenceSide header="מגורים" selected={1}/>
        <ContentLayout header="פרטים">
          <HatsrotHaneviimContent/>
        </ContentLayout>
    </div>
  </div>