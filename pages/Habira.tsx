import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";
import {PublicSide} from "../src/components/side-bars/public-places/PublicSide";
import {HabiraContent} from "../src/components/content-frames/habira/HabiraContent";

export default class Habira extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <SimpleHeaderImage location='/static/images/ulpaney.jpg'/>
              <div className="row">
                  <SideBarLayout header="מבני ציבור">
                      <PublicSide selectedName="אולפני הבירה"/>
                  </SideBarLayout>
                  <ContentLayout header="אולפני הבירה">
                      <HabiraContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}