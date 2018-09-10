import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";
import {PublicSide} from "../src/components/side-bars/public-places/PublicSide";
import {ToratZeevContent} from "../src/components/content-frames/torat-zeev/ToratZeevContent";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import homePics from "../src/components/header-image/carousel/carousel-pictures-lists/home-pics";
import {HamagresaContent} from "../src/components/content-frames/hamagresa/HamagresaContent";

export default class Hamagresa extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={homePics}/>
              <div className="row">
                  <SideBarLayout header="מבני ציבור">
                      <PublicSide selectedName="קסטל המגרסה"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <HamagresaContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}