import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {ModiinContent} from "../src/components/content-frames/modiin/ModiinContent";
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";

export default class Malha extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <SimpleHeaderImage location='/static/images/modiin.png'/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="מורשת מודיעין - טעמן"/>
                  </SideBarLayout>
                  <ContentLayout header="מורשת מודיעין (מגרש 101)">
                      <ModiinContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}