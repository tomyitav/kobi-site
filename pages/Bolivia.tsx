import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {HithadshutSide} from "../src/components/side-bars/hithadshut/HithadshutSide";
import {YuvalGanimContent} from "../src/components/content-frames/yuval-ganim/YuvalGanimContent";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import yuvalGanimPics from "../src/components/header-image/carousel/carousel-pictures-lists/yuval-ganim-pics";
import {SanMartinContent} from "../src/components/content-frames/san-martin/SanMartinContent";
import {BoliviaContent} from "../src/components/content-frames/bolivia/BoliviaContent";
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";

export default class SanMartin extends React.Component {
  render() {
    return (
      <Layout selectedLink="פרויקטים">
          <div>
              <SimpleHeaderImage location='/static/images/Bolivya.jpg'/>
              <div className="row">
                  <SideBarLayout header="התחדשות עירונית">
                      <HithadshutSide selectedName="בוליביה 1"/>
                  </SideBarLayout>
                  <ContentLayout header="פרטים">
                      <BoliviaContent/>
                  </ContentLayout>
              </div>
          </div>
      </Layout>
    )
  }
}