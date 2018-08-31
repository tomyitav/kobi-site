import * as React from 'react'
import {Layout} from '../src/components/Layout'
import {HeaderImage} from "../src/components/header-image/HeaderImage";
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {HatsrotHaneviim} from "../src/components/content-frames/hatsrot-haneviim/HatsrotHaneviim";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";

export default class Residence extends React.Component {
  render() {
    return (
      <Layout>
          <div>
              <HeaderImage location='/static/images/butic.jpg'/>
              <div className="row">
                  {/*<ResidenceSide header="מגורים" selected={1}/>*/}
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selected={1}/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <HatsrotHaneviim/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}