import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {MaromContent} from "../src/components/content-frames/marom-hadas/MaromContent";
import {MigdalMaaleContent} from "../src/components/content-frames/migdal-maale/MigdalMaaleContent";

export default class MigdalMaale extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <SimpleHeaderImage location='/static/images/MaaleAdumim.png'/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="מגדל מעלה אדומים"/>
                  </SideBarLayout>
                  <ContentLayout header="מגדל מעלה אדומים">
                      <MigdalMaaleContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}