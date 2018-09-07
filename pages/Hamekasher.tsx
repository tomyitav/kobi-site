import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {HithadshutSide} from "../src/components/side-bars/hithadshut/HithadshutSide";
import {HamekasherContent} from "../src/components/content-frames/Hamekasher/HamekasherContent";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import hamekasherPics from "../src/components/header-image/carousel/carousel-pictures-lists/hamekasher-pics";

export default class Hamekasher extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <CarouselPics images={hamekasherPics}/>
              <div className="row">
                  <SideBarLayout header="התחדשות עירונית">
                      <HithadshutSide selectedName="המקשר"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <HamekasherContent />
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}