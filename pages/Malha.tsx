import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import {MalhaContent} from "../src/components/content-frames/malha/MalhaContent";
import malhaPics from "../src/components/header-image/carousel/carousel-pictures-lists/malha-pics";

export default class Malha extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={malhaPics}/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="מורדות מלחה"/>
                  </SideBarLayout>
                  <ContentLayout header="מורדות מלחה">
                      <MalhaContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}