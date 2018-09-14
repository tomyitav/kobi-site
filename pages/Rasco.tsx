import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {RascoContent} from "../src/components/content-frames/rasco/RascoContent";

export default class Rasco extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <SimpleHeaderImage location='/static/images/rasco.jpg'/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="רסקו"/>
                  </SideBarLayout>
                  <ContentLayout header="רסקו">
                      <RascoContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}