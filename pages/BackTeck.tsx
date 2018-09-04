import * as React from 'react'
import {Layout} from '../src/components/Layout'
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";
import {PreviousSide} from "../src/components/side-bars/previous/PreviousSide";
import {BackTeckContent} from "../src/components/content-frames/back-teck/BackTeckContent";

export default class BackTeck extends React.Component {
  render() {
    return (
      <Layout>
          <div>
              <SimpleHeaderImage location='/static/images/back-teck.jpg'/>
              <div className="row">
                  <SideBarLayout header="פרויקטים">
                      <PreviousSide selectedName="מרכז בק למדע"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <BackTeckContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}