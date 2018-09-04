import * as React from 'react'
import {Layout} from '../src/components/Layout'
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";
import {PreviousSide} from "../src/components/side-bars/previous/PreviousSide";
import {ComputersContent} from "../src/components/content-frames/computers/ComputersContent";

export default class Computers extends React.Component {
  render() {
    return (
      <Layout>
          <div>
              <SimpleHeaderImage location='/static/images/university.PNG'/>
              <div className="row">
                  <SideBarLayout header="פרויקטים">
                      <PreviousSide selectedName="בית הספר להנדסת מחשבים"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <ComputersContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}