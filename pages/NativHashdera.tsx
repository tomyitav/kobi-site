import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import nativPics from "../src/components/header-image/carousel/carousel-pictures-lists/nativ-pics";
import {NativContent} from "../src/components/content-frames/nativ-hashdera/NativContent";

export default class NativHashdera extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={nativPics}/>
              <div className="row">
                  <SideBarLayout header="מגורים">
                      <ResidenceSide selectedName="נתיב השדרה"/>
                  </SideBarLayout>
                  <ContentLayout header="נתיב השדרה">
                      <NativContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}