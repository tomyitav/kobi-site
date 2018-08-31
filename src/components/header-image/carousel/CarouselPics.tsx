import * as React from 'react'
import Head from 'next/head'
import Slider from "react-slick";
import * as css from '../HeaderImage.css'
import * as classnames from "classnames";

export class CarouselPics extends React.Component<{}, {}> {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
          return (
              <div>
                  <Head>
                      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                  </Head>
                  <Slider {...settings}>
                    <div>
                        <img className={classnames('img-fluid', css["img-fluid"])} src="../../../../static/images/arnona.PNG"/>
                    </div>
                    <div>
                        <img className={classnames('img-fluid', css["img-fluid"])} src="../../../../static/images/ganhair.PNG"/>
                    </div>
                    <div>
                        <img className={classnames('img-fluid', css["img-fluid"])} src="../../../../static/images/neviim.PNG"/>
                    </div>
                    <div>
                        <img className={classnames('img-fluid', css["img-fluid"])} src="../../../../static/images/butic.PNG"/>
                    </div>
                    <div>
                        <img className={classnames('img-fluid', css["img-fluid"])} src="../../../../static/images/shamay.jpg"/>
                    </div>
                    <div>
                        <img className={classnames('img-fluid', css["img-fluid"])} src="../../../../static/images/maromhadas.PNG"/>
                    </div>
                    <div>
                        <img className={classnames('img-fluid', css["img-fluid"])} src="../../../../static/images/mishtaken.jpg"/>
                    </div>
                  </Slider>
                  <br/>
              </div>
          )

    }
}