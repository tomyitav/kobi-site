import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {PublicSide} from "../src/components/side-bars/public-places/PublicSide";
import {MigdalRakevetContent} from "../src/components/content-frames/migdal-rakevet/MigdalRakevetContent";
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";
import {HodJerusalemContent} from "../src/components/content-frames/hod-jerusalem/HodJerusalemContent";
import hatsrotPics from "../src/components/header-image/carousel/carousel-pictures-lists/hatsrot-pics";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import hodJerusalemPics from "../src/components/header-image/carousel/carousel-pictures-lists/hod-jerusalem-pics";

export default class HodJerusalem extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={hodJerusalemPics}/>
              <div className="row">
                  <SideBarLayout header="מבני ציבור">
                      <PublicSide selectedName="הוד ירושלים"/>
                  </SideBarLayout>
                  <ContentLayout header="הוד ירושלים">
                      <HodJerusalemContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}