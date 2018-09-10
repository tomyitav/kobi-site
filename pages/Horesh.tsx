import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import mishtakenPics from "../src/components/header-image/carousel/carousel-pictures-lists/mishtaken-pics";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import {MitspeHoreshContent} from "../src/components/content-frames/mitzpe-horesh/MitspeHoreshContent";

export default class Horesh extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={mishtakenPics}/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="מצפה חורש"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <MitspeHoreshContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}