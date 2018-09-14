import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import {RomContent} from "../src/components/content-frames/rom-harama/RomContent";
import romPics from "../src/components/header-image/carousel/carousel-pictures-lists/rom-pics";

export default class Rom extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={romPics}/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="רום הרמה"/>
                  </SideBarLayout>
                  <ContentLayout header="רום הרמה- נופי שלמה">
                      <RomContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}