import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {PublicSide} from "../src/components/side-bars/public-places/PublicSide";
import {MigdalRakevetContent} from "../src/components/content-frames/migdal-rakevet/MigdalRakevetContent";
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";

export default class MigdalRakevet extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <SimpleHeaderImage location='/static/images/rakevet.JPG'/>
              <div className="row">
                  <SideBarLayout header="מבני ציבור">
                      <PublicSide selectedName="מגדל הרכבת"/>
                  </SideBarLayout>
                  <ContentLayout header="מגדל הרכבת">
                      <MigdalRakevetContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}