import * as React from 'react'
import {Layout} from '../src/components/Layout'
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {MishtakenContent} from "../src/components/content-frames/mishtaken/MishtakenContent";

export default class Mishtaken extends React.Component {
  render() {
    return (
      <Layout>
          <div>
              <SimpleHeaderImage location='/static/images/mishtaken.jpg'/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="מחיר למשתכן - קסטל"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <MishtakenContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}