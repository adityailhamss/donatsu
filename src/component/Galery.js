import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import produk1 from '../assets/produk/produk1.png';
import produk2 from '../assets/produk/produk2.png';
import produk3 from '../assets/produk/produk3.png';
import produk4 from '../assets/produk/produk4.png';
import produk5 from '../assets/produk/produk5.png';
import produk6 from '../assets/produk/produk6.png';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { SRLWrapper } from "simple-react-lightbox";

function Galery() {
    
    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   };
    
  return (
      <SRLWrapper>
        <div className='flex flex-wrap'>
        <div>
        <img src={produk1}/>
        </div>
        <div>
        <img src={produk2}/>
        </div>
        <div>
        <img src={produk3}/>
        </div>
        </div>
    </SRLWrapper>
  )
}

export default Galery
