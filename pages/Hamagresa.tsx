import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {PublicSide} from "../src/components/side-bars/public-places/PublicSide";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import {HamagresaContent} from "../src/components/content-frames/hamagresa/HamagresaContent";
import magresaPics from "../src/components/header-image/carousel/carousel-pictures-lists/hamagresa-pics";

export default class Hamagresa extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={magresaPics}/>
              <div className="row">
                  <SideBarLayout header="מבני ציבור">
                      <PublicSide selectedName="קסטל המגרסה"/>
                  </SideBarLayout>
                  <ContentLayout header="קסטל המגרסה">
                      <HamagresaContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}