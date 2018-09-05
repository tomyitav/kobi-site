import * as React from 'react'
import {Layout} from '../src/components/Layout'
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";
import {PreviousSide} from "../src/components/side-bars/previous/PreviousSide";
import {RadbinatContent} from "../src/components/content-frames/radbinat/RadbinatContent";

export default class RadBinat extends React.Component {
  render() {
    return (
      <Layout>
          <div>
              <SimpleHeaderImage location='/static/images/radbinat.PNG'/>
              <div className="row">
                  <SideBarLayout header="פרויקטים">
                      <PreviousSide selectedName="רד בינת ירושלים"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <RadbinatContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}