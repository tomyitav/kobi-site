import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {NofeyContent} from "../src/components/content-frames/nofey/NofeyContent";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import nofeyPics from "../src/components/header-image/carousel/carousel-pictures-lists/nofey-pics";

export default class Nofey extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={nofeyPics}/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="נופי בית וגן"/>
                  </SideBarLayout>
                  <ContentLayout header="נופי בית וגן">
                      <NofeyContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}