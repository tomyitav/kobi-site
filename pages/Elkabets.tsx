import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import greenPics from "../src/components/header-image/carousel/carousel-pictures-lists/green-pics";
import {ElkabetsContent} from "../src/components/content-frames/elkabets/ElkabetsContent";

export default class Elkabets extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={greenPics}/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="אלקבץ"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <ElkabetsContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}