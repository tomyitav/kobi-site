import * as React from 'react'
import {Layout} from '../src/components/Layout'
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {SavioneyGanArnonaContent} from "../src/components/content-frames/savioney-gan-arnona/SavioneyGanArnonaContent";

export default class HatsrotHaneviim extends React.Component {
  render() {
    return (
      <Layout>
          <div>
              <SimpleHeaderImage location='/static/images/savioney.PNG'/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="סביוני גן ארנונה"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <SavioneyGanArnonaContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}