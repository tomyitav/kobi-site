import * as React from 'react'
import {Layout} from '../src/components/Layout'
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {GoldenHillContent} from "../src/components/content-frames/golden-hill/GoldenHillContent";

export default class GoldenHill extends React.Component {
  render() {
    return (
      <Layout>
          <div>
              <SimpleHeaderImage location='/static/images/shamay.jpg'/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="שמאי 10 - גולדן היל"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <GoldenHillContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}