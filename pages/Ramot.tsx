import * as React from 'react'
import {Layout} from '../src/components/Layout'
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {RamotContent} from "../src/components/content-frames/ramot/RamotContent";

export default class Ramot extends React.Component {
  render() {
    return (
      <Layout>
          <div>
              <SimpleHeaderImage location='/static/images/ramot.PNG'/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="מצפה רמות"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <RamotContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}