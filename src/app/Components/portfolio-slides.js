'use client';
import React, { useRef, useState, data, setData } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";

import QuiqPreview from '../Images/QuiqPreview.png';
import HoneyPreview from '../Images/HoneyPreview.png';
import SMPreview from '../Images/SMPreview.png';

import arrowStroke from "../Images/HomeArrowStroke.svg";
import Image from 'next/image';

var portfolioItem = [
  {
    title: "Quiq Stores",
    type: "Strategy & Brand Development",
    image: {QuiqPreview},
    imageURL: '/Images/QuiqPreview.png',
  },
  {
    title: "Hive Soaps",
    type: "Strategy & Brand Development",
    image: {HoneyPreview},
    imageURL: '/Images/HoneyPreview.png',
  },
  {
    title: "SMM Marketing",
    type: "Website Design & Development",
    image: {SMPreview},
    imageURL: '/Images/SMPreview.png',
  },
]

const sideType = {
  position: 'absolute',
  top: 0,
  right: 0,
  rotate: '-90deg',
  transformOrigin: 'top right',
};

const upperSection = {
  minHeight : '30vh',
}

const lowerSection = {
  minHeight : '30vh',
}

function PortfolioDisplayItem(props) {
    return (
      <div className="min-h-full">
        <h4 style={sideType}>{props.data.type}</h4>
        <section style={upperSection}>
          <h1>{props.data.title}</h1>
          <a href="#">
              <Image src={arrowStroke} alt="Your SVG" style={{position: 'absolute'}} />
              <div className="pl-20 pt-8">
                  <h5 className="pl-20 uppercase font-bold ml-10 text-lg mb-10 mt-0">Know Us More</h5>
              </div>
          </a>
        </section>
        <section style={{...lowerSection, backgroundImage:`url(${props.data.imageURL})`}}>
          <Image width={100} height={100} src={props.data.image}/>
        </section>
      </div>
    )
  }
  

export default function PortfolioSlides() {
    return (
      <div>
        <Swiper
        spaceBetween={30}
        loop={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        slidesPerView={3}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="h-full w-full min-h-[50vh]"
      >
        {portfolioItem.map((variables, index) => (
          <SwiperSlide style={{margin:0}} key={index}>
            <PortfolioDisplayItem data={variables}/>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    )
}  
