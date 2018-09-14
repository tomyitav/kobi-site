import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import {ElkabetsContent} from "../src/components/content-frames/elkabets/ElkabetsContent";
import elkabetzPics from "../src/components/header-image/carousel/carousel-pictures-lists/elkabetz-pics";

export default class Elkabets extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={elkabetzPics}/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="אלקבץ"/>
                  </SideBarLayout>
                  <ContentLayout header="אלקבץ">
                      <ElkabetsContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}