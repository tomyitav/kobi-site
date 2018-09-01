import * as React from 'react'
import {Layout} from '../src/components/Layout'
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {MaromContent} from "../src/components/content-frames/marom-hadas/MaromContent";

export default class Marom extends React.Component {
  render() {
    return (
      <Layout>
          <div>
              <SimpleHeaderImage location='/static/images/maromhadas.PNG'/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="מרום הדס"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <MaromContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}