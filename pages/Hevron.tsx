import * as React from 'react'
import {Layout} from '../src/components/Layout'
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";
import {PublicSide} from "../src/components/side-bars/public-places/PublicSide";
import {HevronContent} from "../src/components/content-frames/hevron/HevronContent";

export default class Hevron extends React.Component {
  render() {
    return (
      <Layout>
          <div>
              <SimpleHeaderImage location='/static/images/hevron.PNG'/>
              <div className="row">
                  <SideBarLayout header="מבני ציבור">
                      <PublicSide selectedName="ישיבת חברון"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <HevronContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}