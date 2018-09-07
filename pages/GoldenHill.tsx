import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {GoldenHillContent} from "../src/components/content-frames/golden-hill/GoldenHillContent";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import goldenHillPics from "../src/components/header-image/carousel/carousel-pictures-lists/golden-hill-pics";

export default class GoldenHill extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={goldenHillPics}/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="שמאי 10 - גולדן היל"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <GoldenHillContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}