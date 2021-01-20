import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {GanHairContent} from "../src/components/content-frames/gan-hair/GanHairContent";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import ganHairPics from "../src/components/header-image/carousel/carousel-pictures-lists/gan-hair-pics";
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";

export default class GanHair extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <SimpleHeaderImage location='/static/images/zahav.png'/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="זהב על הפארק"/>
                  </SideBarLayout>
                  <ContentLayout header="זהב על הפארק">
                      <GanHairContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}