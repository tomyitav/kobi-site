import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import harelPics from "../src/components/header-image/carousel/carousel-pictures-lists/harel-pics";
import {MitspeContent} from "../src/components/content-frames/mitzpe-ela/MitspeContent";

export default class MeromeyHagiva extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={harelPics}/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="מצפה הראל"/>
                  </SideBarLayout>
                  <ContentLayout header="מצפה הראל">
                      <MitspeContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}