import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";
import {RamContent} from "../src/components/content-frames/ram/RamContent";
import {PublicSide} from "../src/components/side-bars/public-places/PublicSide";

export default class Ram extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <SimpleHeaderImage location='/static/images/ram/ram.PNG'/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <PublicSide selectedName="מגדל רם"/>
                  </SideBarLayout>
                  <ContentLayout header="מגדל רם">
                      <RamContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}