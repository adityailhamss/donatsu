import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import produk1 from '../assets/produk/produk1.png';
import produk2 from '../assets/produk/produk2.png';
import produk3 from '../assets/produk/produk3.png';
import produk4 from '../assets/produk/produk4.png';
import produk5 from '../assets/produk/produk5.png';
import produk6 from '../assets/produk/produk6.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Galery({ visible, onClose }) {
    if (!visible) return null;
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
  return (
    <div className="flex flex-col px-20 py-10 w-auto mx-auto items-center fixed inset-0 bg-opacity-30 backdrop-blur-sm">
    <div className="flex flex-col bg-[#ffffff] ">
    <Slider {...settings} >
    <div className='flex flex-col-reverse lg:flex-row bg-[#F6FCFF]'>
        <div className='pl-8 lg:pl-28 pt-8 lg:pt-12'>
          <img src={produk1}/>
        </div>
      </div>
      <div className='flex flex-col-reverse lg:flex-row bg-[#F6FCFF]'>
        <div className='flex flex-col pl-8 lg:pl-44 pt-8 lg:pt-36 gap-6'>
      <div className='pl-8 lg:pl-28 pt-8 lg:pt-12'>
        <img src={produk2}/>
      </div>
      </div>
    </div>
    </Slider>
      </div>
    </div>
  )
}

export default Galery
