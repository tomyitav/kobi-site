import * as React from 'react'
import {Layout} from '../src/components/Layout'
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {RamotContent} from "../src/components/content-frames/ramot/RamotContent";
import {GreenContent} from "../src/components/content-frames/green/GreenContent";

export default class Green extends React.Component {
  render() {
    return (
      <Layout>
          <div>
              <SimpleHeaderImage location='/static/images/green.PNG'/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="רמות הירוקה"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <GreenContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}