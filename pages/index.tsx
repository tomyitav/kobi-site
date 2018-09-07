import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {HomeContent} from "../src/components/content-frames/home/HomeContent";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import homePics from "../src/components/header-image/carousel/carousel-pictures-lists/home-pics";

export default class Index extends React.Component {
  render() {
    return (
      <Layout selectedLink="אודות">
          <CarouselPics images={homePics}/>
          <div className="row">
              <SideBarLayout header="ברוכים הבאים"/>
              <ContentLayout header="אודות המשרד">
                  <HomeContent/>
              </ContentLayout>
          </div>
      </Layout>
    )
  }
}