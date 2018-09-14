import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {PublicSide} from "../src/components/side-bars/public-places/PublicSide";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import homePics from "../src/components/header-image/carousel/carousel-pictures-lists/home-pics";
import {HamagresaContent} from "../src/components/content-frames/hamagresa/HamagresaContent";
import {OferContent} from "../src/components/content-frames/ofer/OferContent";
import oferPics from "../src/components/header-image/carousel/carousel-pictures-lists/ofer-pics";

export default class Ofer extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={oferPics}/>
              <div className="row">
                  <SideBarLayout header="מבני ציבור">
                      <PublicSide selectedName="בית עופר"/>
                  </SideBarLayout>
                  <ContentLayout header="בית עופר">
                      <OferContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}