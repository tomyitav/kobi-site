import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {PublicSide} from "../src/components/side-bars/public-places/PublicSide";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import homePics from "../src/components/header-image/carousel/carousel-pictures-lists/home-pics";
import {HamagresaContent} from "../src/components/content-frames/hamagresa/HamagresaContent";
import {MigdalRakevetContent} from "../src/components/content-frames/migdal-rakevet/MigdalRakevetContent";

export default class MigdalRakevet extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={homePics}/>
              <div className="row">
                  <SideBarLayout header="מבני ציבור">
                      <PublicSide selectedName="מגדל הרכבת"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <MigdalRakevetContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}