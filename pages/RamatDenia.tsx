import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import mishtakenPics from "../src/components/header-image/carousel/carousel-pictures-lists/mishtaken-pics";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import {RamatDeniaContent} from "../src/components/content-frames/ramat-denia/RamatDeniaContent";

export default class RamatDenia extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={mishtakenPics}/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="רמת דניה"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <RamatDeniaContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}