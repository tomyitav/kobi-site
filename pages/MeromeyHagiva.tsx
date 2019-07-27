import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import {HagivaContent} from "../src/components/content-frames/meromey-hagiva/HagivaContent";
import hagivaPics from "../src/components/header-image/carousel/carousel-pictures-lists/hagiva-pics";

export default class MeromeyHagiva extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={hagivaPics}/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="מרומי הגבעה"/>
                  </SideBarLayout>
                  <ContentLayout header="מרומי הגבעה">
                      <HagivaContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}