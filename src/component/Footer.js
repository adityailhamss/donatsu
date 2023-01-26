
import axios from 'axios';
import React, { useState, useEffect} from 'react';
import Instagram from "../assets/img/Instagram.png";
import mainLogo from "../assets/img/mainLogo.png";
import productApi from '../config/productApi';

function Footer() {

    const [ig, setIg] = useState([])

    useEffect(() => {
        axios
        .get('http://localhost:1337/api/instagrams/')
        .then((response) => {
            const json = response.data;
            console.log(json);
            setIg(json);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

  return (
    <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start px-20 py-28 gap-8 bg-[#D5F1FF] lg:gap-24'>
        <div className='flex flex-col items-start gap-4'>
            <h1 className='font-normal text-2xl text-[#484949] font-[PoetsenOne]'>Donatsu</h1>
            <p className='font-normal text-sm text-[#484949] font-[Poppins]'>DONAT SUSU UNTUK ANAK & IBU!</p>
            <p className='font-normal text-sm text-[#616364] font-[Poppins]'>© 2022, All rights reserved</p>
        </div>
        <div className='flex flex-row'>
        <img className="w-[147px] h-[134px]" src={mainLogo} alt="" />
        </div>
        <div className='flex flex-row'>
            <p className='font-[PoetsenOne] font-normal text-3xl w-[373px] h-[109px]'>DONATSU<br></br>
DONAT SUSU<br></br>
UNTUK ANAK DAN IBU</p>
        </div>
        <div className='flex flex-col items-start gap-3'>
            <h1 className='font-normal text-sm text-[#484949] font-[Poppins]'>Ikuti kami di social media donatsu</h1>
            <div className='flex flex-col items-start gap-6'>
                
                <div className='flex flex-row items-start gap-2'>
                    <img src={Instagram} />
                    {ig.data?.map((insta) => (
                    <a href={insta.attributes.donatsu} className='font-normal text-sm text-[#484949] font-[Poppins]'>
                         @donatsu.official
                        </a>
                   ))}
                </div>
                <div className='flex flex-row items-start gap-2'>
                    <img src={Instagram} />
                    {ig.data?.map((insta) => (
                    <a href={insta.attributes.donatsu} className='font-normal text-sm text-[#484949] font-[Poppins]'>
                         @donatsu.official
                        </a>
                   ))}
                </div>

                <div className='flex flex-row items-start gap-2'>
                    <img src={Instagram} />
                    {ig.data?.map((insta) => (
                    <a href={insta.attributes.donatsu} className='font-normal text-sm text-[#484949] font-[Poppins]'>
                         @donatsu.official
                        </a>
                   ))}
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default Footer
