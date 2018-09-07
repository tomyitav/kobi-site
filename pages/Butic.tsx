import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {ButicContent} from "../src/components/content-frames/butic/ButicContent";
import buticPics from "../src/components/header-image/carousel/carousel-pictures-lists/butic-pics";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";

export default class Butic extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={buticPics}/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="בוטיק הנביאים"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <ButicContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}