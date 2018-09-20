import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {RascoContent} from "../src/components/content-frames/rasco/RascoContent";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import rascoPics from "../src/components/header-image/carousel/carousel-pictures-lists/rasco-pics";

export default class Rasco extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={rascoPics}/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="רסקו"/>
                  </SideBarLayout>
                  <ContentLayout header="רסקו">
                      <RascoContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}