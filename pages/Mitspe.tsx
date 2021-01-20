import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import {MitspeContent} from "../src/components/content-frames/mitzpe-ela/MitspeContent";
import elaPics from "../src/components/header-image/carousel/carousel-pictures-lists/ela-pics";

export default class Mishtaken extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={elaPics}/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="מצפה אלה"/>
                  </SideBarLayout>
                  <ContentLayout header="מצפה אלה">
                      <MitspeContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}