import * as React from 'react'
import {Layout} from '../src/components/Layout'
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";
import {PreviousSide} from "../src/components/side-bars/previous/PreviousSide";
import {PersisContent} from "../src/components/content-frames/persis/PersisContent";

export default class Persis extends React.Component {
  render() {
    return (
      <Layout>
          <div>
              <SimpleHeaderImage location='/static/images/persis.PNG'/>
              <div className="row">
                  <SideBarLayout header="פרויקטים">
                      <PreviousSide selectedName="פרסיס"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <PersisContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}