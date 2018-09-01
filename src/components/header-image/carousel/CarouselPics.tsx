import * as React from 'react'
import Head from 'next/head'
import Slider from "react-slick";
import * as css from '../HeaderImage.css'
import * as classnames from "classnames";
import {CarouselPicsProps} from "./CarouselPicsProps";

export class CarouselPics extends React.Component<CarouselPicsProps, {}> {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 15000,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const {images} = this.props
          return (
              <div>
                  <Head>
                      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                  </Head>
                  <Slider {...settings}>
                      {
                          images.map((image, i) => {
                              return (
                                  <div>
                                      <img className={classnames('img-fluid', css["img-fluid"])} src={"../../../../static/images/" + image}/>
                                  </div>
                              )
                          })
                      }
                  </Slider>
                  <br/>
              </div>
          )

    }
}