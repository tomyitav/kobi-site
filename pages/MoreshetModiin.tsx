import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import {ModiinContent} from "../src/components/content-frames/modiin/ModiinContent";
import homePics from "../src/components/header-image/carousel/carousel-pictures-lists/home-pics";

export default class Malha extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={homePics}/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="מורשת מודיעין"/>
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