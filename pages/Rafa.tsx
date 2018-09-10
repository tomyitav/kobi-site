import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import greenPics from "../src/components/header-image/carousel/carousel-pictures-lists/green-pics";
import {RafaContent} from "../src/components/content-frames/rafa/RafaContent";

export default class Rafa extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={greenPics}/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="רפא"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <RafaContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}