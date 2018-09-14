import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";
import {PublicSide} from "../src/components/side-bars/public-places/PublicSide";
import {ColmobilContent} from "../src/components/content-frames/colmobil/ColmobilContent";

export default class Colmobil extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים ממשרד קודם">
          <div>
              <SimpleHeaderImage location='/static/images/colmobil.PNG'/>
              <div className="row">
                  <SideBarLayout header="מבני ציבור">
                      <PublicSide selectedName="כלמוביל"/>
                  </SideBarLayout>
                  <ContentLayout header="כלמוביל">
                      <ColmobilContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}