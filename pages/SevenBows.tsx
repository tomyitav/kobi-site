import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import {HotelsSide} from "../src/components/side-bars/hotels/HotelsSide";
import {SevenBowsContent} from "../src/components/content-frames/seven-bows/SevenBowsContent";
import sevenBowsPics from "../src/components/header-image/carousel/carousel-pictures-lists/seven-bows-pics";

export default class SevenBows extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={sevenBowsPics}/>
              <div className="row">
                  <SideBarLayout header="מלונאות">
                      <HotelsSide selectedName="מלון שבע הקשתות"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <SevenBowsContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}