import * as React from 'react'
import {Layout} from '../src/components/Layout'
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {TeamSide} from "../src/components/side-bars/team/TeamSide";
import homePics from "../src/components/header-image/carousel/carousel-pictures-lists/home-pics";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import {ManagerContent} from "../src/components/content-frames/manager/ManagerContent";

export default class Manager extends React.Component {
  render() {
    return (
      <Layout>
          <div>
              <CarouselPics images={homePics}/>
              <div className="row">
                  <SideBarLayout header="צוות">
                      <TeamSide selectedName="מנהל המשרד- קובי ייטב"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים מקצועיים">
                      <ManagerContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}