import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import {RafaContent} from "../src/components/content-frames/rafa/RafaContent";
import rafaPics from "../src/components/header-image/carousel/carousel-pictures-lists/rafa-pics";

export default class Rafa extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={rafaPics}/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="רפא"/>
                  </SideBarLayout>
                  <ContentLayout header="רפא">
                      <RafaContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}