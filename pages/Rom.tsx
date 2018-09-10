import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {GreenContent} from "../src/components/content-frames/green/GreenContent";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import greenPics from "../src/components/header-image/carousel/carousel-pictures-lists/green-pics";
import {RomContent} from "../src/components/content-frames/rom-harama/RomContent";

export default class Rom extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={greenPics}/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="רום הרמה"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <RomContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}