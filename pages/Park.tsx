import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {ParkContent} from "../src/components/content-frames/park/ParkContent";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import parkPics from "../src/components/header-image/carousel/carousel-pictures-lists/park-arnona-pics";

export default class Park extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={parkPics}/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="פארק ארנונה"/>
                  </SideBarLayout>
                  <ContentLayout header="פארק ארנונה">
                      <ParkContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}