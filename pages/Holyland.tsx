import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import holylandPics from "../src/components/header-image/carousel/carousel-pictures-lists/holyland-pics";
import {PreviousSide} from "../src/components/side-bars/previous/PreviousSide";
import {HolylandContent} from "../src/components/content-frames/holyland/HolylandContent";

export default class Holyland extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים ממשרד קודם">
          <div>
              <CarouselPics images={holylandPics}/>
              <div className="row">
                  <SideBarLayout header="פרויקטים">
                      <PreviousSide selectedName="הולילנד"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <HolylandContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}