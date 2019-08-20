import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";
import {PublicSide} from "../src/components/side-bars/public-places/PublicSide";
import {HolimContent} from "../src/components/content-frames/bikur-holim/HolimContent";

export default class BikurHolim extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <SimpleHeaderImage location='/static/images/holim.png'/>
              <div className="row">
                  <SideBarLayout header="פרויקטים">
                      <PublicSide selectedName="ביקור חולים"/>
                  </SideBarLayout>
                  <ContentLayout header="ביקור חולים">
                      <HolimContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}