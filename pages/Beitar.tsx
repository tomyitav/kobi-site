import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import {BeitarContent} from "../src/components/content-frames/beitar/BeitarContent";
import beitarPics from "../src/components/header-image/carousel/carousel-pictures-lists/beitar-pics";

export default class Beitar extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={beitarPics}/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="ביתר עילית"/>
                  </SideBarLayout>
                  <ContentLayout header="ביתר עילית">
                      <BeitarContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}