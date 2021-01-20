import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";
import {PublicSide} from "../src/components/side-bars/public-places/PublicSide";
import {ToratZeevContent} from "../src/components/content-frames/torat-zeev/ToratZeevContent";

export default class ToratZeev extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <SimpleHeaderImage location='/static/images/yeshiva.PNG'/>
              <div className="row">
                  <SideBarLayout header="מבני ציבור">
                      <PublicSide selectedName="ישיבת תורת זאב"/>
                  </SideBarLayout>
                  <ContentLayout header="ישיבת תורת זאב">
                      <ToratZeevContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}