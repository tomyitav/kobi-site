import * as React from 'react'
import {Layout} from '../src/components/Layout'
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";
import {PreviousSide} from "../src/components/side-bars/previous/PreviousSide";
import {HarHotzvimContent} from "../src/components/content-frames/har-hotzvim/HarHotzvimContent";

export default class HarHotzvim extends React.Component {
  render() {
    return (
      <Layout>
          <div>
              <SimpleHeaderImage location='/static/images/har_hotvim.PNG'/>
              <div className="row">
                  <SideBarLayout header="פרויקטים">
                      <PreviousSide selectedName="נכסי הר חוצבים"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <HarHotzvimContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}