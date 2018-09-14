import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {RamatHasharonContent} from "../src/components/content-frames/ramat-hasharon/RamatHasharonContent";

export default class RamatHasharon extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <SimpleHeaderImage location='/static/images/ramat_hasharon.PNG'/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="רמת השרון הירוקה"/>
                  </SideBarLayout>
                  <ContentLayout header="רמת השרון הירוקה">
                      <RamatHasharonContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}