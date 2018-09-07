import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {PublicSide} from "../src/components/side-bars/public-places/PublicSide";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import lehavimPics from "../src/components/header-image/carousel/carousel-pictures-lists/lehavim-pics";
import {LehavimContent} from "../src/components/content-frames/lehavim/LehavimContent";

export default class Lehavim extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={lehavimPics}/>
              <div className="row">
                  <SideBarLayout header="מבני ציבור">
                      <PublicSide selectedName="דיור מוגן להבים"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <LehavimContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}