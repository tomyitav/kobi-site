import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {RamotContent} from "../src/components/content-frames/ramot/RamotContent";
import {CarouselPics} from "../src/components/header-image/carousel/CarouselPics";
import ramotPics from "../src/components/header-image/carousel/carousel-pictures-lists/mitspr-ramot-pics";

export default class Ramot extends React.Component {
    render() {
        return (
            <Layout selectedLink="פרויקטים">
                <div>
                    <CarouselPics images={ramotPics}/>
                    <div className="row">
                        <SideBarLayout header="מגורים">
                            <ResidenceSide selectedName="מצפה רמות"/>
                        </SideBarLayout>
                        <ContentLayout header="מצפה רמות">
                            <RamotContent/>
                        </ContentLayout>
                    </div>
                </div>
            </Layout>
        )
    }
}