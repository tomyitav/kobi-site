import * as React from 'react'
import {Layout} from '../src/components/Layout'
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import busesPics from "../src/components/header-image/carousel/carousel-pictures-lists/buses-pics";
import {PublicSide} from "../src/components/side-bars/public-places/PublicSide";
import {BusesContent} from "../src/components/content-frames/buses/BusesContent";

export default class Buses extends React.Component {
  render() {
    return (
      <Layout>
          <div>
              <CarouselPics images={busesPics}/>
              <div className="row">
                  <SideBarLayout header="מבני ציבור">
                      <PublicSide selectedName="חניון ומסוף אוטובוסים"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <BusesContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}