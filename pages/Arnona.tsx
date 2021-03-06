import * as React from 'react'
import {Layout} from '../src/components/layout/Layout'
import {SimpleHeaderImage} from "../src/components/header-image/simple-header-image/SimpleHeaderImage";
import {ResidenceSide} from "../src/components/side-bars/Residence/ResidenceSide";
import {ContentLayout} from "../src/components/content-frames/content-layout/ContentLayout";
import {SideBarLayout} from "../src/components/side-bars/side-bar-layout/SideBarLayout";
import {ArnonaContent} from "../src/components/content-frames/arnona/ArnonaContent";

export default class Arnona extends React.Component {
    render() {
        return (
            <Layout selectedLink="פרויקטים">
                <div>
                    <SimpleHeaderImage location='/static/images/arnona.PNG'/>
                    <div className="row">
                        <SideBarLayout header="מגורים">
                            <ResidenceSide selectedName="סביוני ארנונה"/>
                        </SideBarLayout>
                        <ContentLayout header="סביוני ארנונה">
                            <ArnonaContent/>
                        </ContentLayout>
                    </div>
                </div>
            </Layout>
        )
    }
}