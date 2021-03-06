import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import {BaitHadashContent} from "../src/components/content-frames/bait-hadash/BaitHadashContent";
import hadashPics from "../src/components/header-image/carousel/carousel-pictures-lists/hadash-pics";

export default class BaitHadash extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={hadashPics}/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="בית חדש"/>
                  </SideBarLayout>
                  <ContentLayout header="בית חדש">
                      <BaitHadashContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}