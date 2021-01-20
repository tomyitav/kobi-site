import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {HithadshutSide} from "../src/components/side-bars/hithadshut/HithadshutSide";
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";
import {TahunContent} from "../src/components/content-frames/tahun/TahunContent";

export default class Tahun extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <SimpleHeaderImage location='/static/images/tahun.jpg'/>
              <div className="row">
                  <SideBarLayout header="התחדשות עירונית">
                      <HithadshutSide selectedName="טהון 4"/>
                  </SideBarLayout>
                  <ContentLayout header="טהון 4">
                      <TahunContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}