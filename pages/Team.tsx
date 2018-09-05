import * as React from 'react'
import {Layout} from '../src/components/Layout'
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {TeamSide} from "../src/components/side-bars/team/TeamSide";
import homePics from "../src/components/header-image/carousel/carousel-pictures-lists/home-pics";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import {TeamContent} from "../src/components/content-frames/team/TeamContent";

export default class Team extends React.Component {
  render() {
    return (
      <Layout>
          <div>
              <CarouselPics images={homePics}/>
              <div className="row">
                  <SideBarLayout header="צוות">
                      <TeamSide selectedName="צוות מקצועי"/>
                  </SideBarLayout>
                  <ContentLayout header="צוות מקצועי">
                      <TeamContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}