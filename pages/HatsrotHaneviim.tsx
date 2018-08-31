import * as React from 'react'
import {Layout} from '../src/components/Layout'
import {HeaderImage} from "../src/components/header-image/HeaderImage";
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {HatsrotHaneviimContent} from "../src/components/content-frames/hatsrot-haneviim/HatsrotHaneviimContent";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";

export default class HatsrotHaneviim extends React.Component {
  render() {
    return (
      <Layout>
          <div>
              <HeaderImage location='/static/images/butic.jpg'/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="חצרות הנביאים"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <HatsrotHaneviimContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}