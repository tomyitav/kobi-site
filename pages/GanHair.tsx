import * as React from 'react'
import {Layout} from '../src/components/Layout'
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {GanHairContent} from "../src/components/content-frames/gan-hair/GanHairContent";

export default class GanHair extends React.Component {
  render() {
    return (
      <Layout>
          <div>
              <SimpleHeaderImage location='/static/images/ganhair2.jpg'/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="גן העיר"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <GanHairContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}