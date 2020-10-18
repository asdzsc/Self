import React, { Component } from 'react'
import { Carousel,  } from 'antd-mobile';
import Swiper1 from "assets/swiper1.jpg"
import Swiper2 from "assets/swiper2.png"
import Swiper3 from "assets/swiper3.jpg"
import {SwiperWrap} from "./styledCook"

export default class Swiper extends React.Component {
    render() {
      return (
        <SwiperWrap>
            <Carousel
              autoplay={true}
              infinite
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => console.log('slide to', index)}
            >
            <img src={Swiper1}  />
            <img src={Swiper2}  />
            <img src={Swiper3}  />
            </Carousel>
            {/* <Carousel className="my-carousel"
              vertical
              dots={false}
              dragging={false}
              swiping={false}
              autoplay
              infinite
            >
              <div className="v-item"> <img src={Swiper1}  /></div>
              <div className="v-item"> <img src={Swiper2}  /></div>
              <div className="v-item"> <img src={Swiper3}  /></div>
            </Carousel> */}
          </SwiperWrap>
      );
    }
  }