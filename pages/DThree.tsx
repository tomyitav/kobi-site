import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import d3Pics from "../src/components/header-image/carousel/carousel-pictures-lists/d3-pics";
import {DThreeContent} from "../src/components/content-frames/d3/DThreeContent";

export default class Malha extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={d3Pics}/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="מתחם ד׳3"/>
                  </SideBarLayout>
                  <ContentLayout header="מתחם ד׳3">
                      <DThreeContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}