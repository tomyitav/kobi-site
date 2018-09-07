import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {SavioneyGanArnonaContent} from "../src/components/content-frames/savioney-gan-arnona/SavioneyGanArnonaContent";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import savioneyPics from "../src/components/header-image/carousel/carousel-pictures-lists/savioney-pics";

export default class HatsrotHaneviim extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={savioneyPics}/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="סביוני גן ארנונה"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <SavioneyGanArnonaContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}