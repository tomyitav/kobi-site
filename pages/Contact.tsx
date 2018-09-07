import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import homePics from "../src/components/header-image/carousel/carousel-pictures-lists/home-pics";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import {ContactSide} from "../src/components/side-bars/contact/ContactSide";
import {ContactContent} from "../src/components/content-frames/contact/ContactContent";

export default class Manager extends React.Component {
  render() {
    return (
      <Layout selectedLink="צור קשר">
          <div>
              <CarouselPics images={homePics}/>
              <div className="row">
                  <SideBarLayout header="צור קשר">
                      <ContactSide/>
                  </SideBarLayout>
                  <ContentLayout header="מפה">
                      <ContactContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}