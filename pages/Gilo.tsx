import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import d3Pics from "../src/components/header-image/carousel/carousel-pictures-lists/d3-pics";
import {DThreeContent} from "../src/components/content-frames/d3/DThreeContent";
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";
import {GiloContent} from "../src/components/content-frames/gilo/GiloContent";

export default class Gilo extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <SimpleHeaderImage location='/static/images/gilo/gilo.jpg'/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="מורדות גילה"/>
                  </SideBarLayout>
                  <ContentLayout header="מורדות גילה">
                      <GiloContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}