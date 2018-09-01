import * as React from 'react'
import {Layout} from '../src/components/Layout'
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {ButicContent} from "../src/components/content-frames/butic/ButicContent";

export default class Butic extends React.Component {
  render() {
    return (
      <Layout>
          <div>
              <SimpleHeaderImage location='/static/images/butic.PNG'/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="בוטיק הנביאים"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <ButicContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}