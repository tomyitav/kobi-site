import * as React from 'react'
import {Layout} from '../src/components/Layout'
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {MaatsContent} from "../src/components/content-frames/maats/MaatsContent";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import maatsPics from "../src/components/header-image/carousel/carousel-pictures-lists/maats-pics";

export default class Maats extends React.Component {
  render() {
    return (
      <Layout>
          <div>
              <CarouselPics images={maatsPics}/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName='מתחם מע"צ - הנביאים'/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <MaatsContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}