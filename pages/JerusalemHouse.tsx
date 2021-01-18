import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {HatsrotHaneviimContent} from "../src/components/content-frames/hatsrot-haneviim/HatsrotHaneviimContent";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import hatsrotPics from "../src/components/header-image/carousel/carousel-pictures-lists/hatsrot-pics";
import {JerusalemHouseContent} from "../src/components/content-frames/jerusalem-house/JerusalemHouseContent";

export default class JerusalemHouse extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={hatsrotPics}/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="בית ירושלמי"/>
                  </SideBarLayout>
                  <ContentLayout header="בית ירושלמי">
                      <JerusalemHouseContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}