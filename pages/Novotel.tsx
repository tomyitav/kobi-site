import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import {HotelsSide} from "../src/components/side-bars/hotels/HotelsSide";
import novotelPics from "../src/components/header-image/carousel/carousel-pictures-lists/novotel-pics";
import {NovotelContent} from "../src/components/content-frames/novotel/NovotelContent";

export default class Novotel extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={novotelPics}/>
              <div className="row">
                  <SideBarLayout header="מלונאות">
                      <HotelsSide selectedName="נובוטל ים המלח"/>
                  </SideBarLayout>
                  <ContentLayout header="נובוטל ים המלח">
                      <NovotelContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}