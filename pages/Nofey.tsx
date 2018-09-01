import * as React from 'react'
import {Layout} from '../src/components/Layout'
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {NofeyContent} from "../src/components/content-frames/nofey/NofeyContent";

export default class Nofey extends React.Component {
  render() {
    return (
      <Layout>
          <div>
              <SimpleHeaderImage location='/static/images/nofey_bait_vagan.PNG'/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="נופי בית וגן"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <NofeyContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}