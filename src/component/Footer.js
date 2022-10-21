import React from 'react';
import Instagram from "../assets/img/Instagram.png";

function Footer() {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start px-20 py-28 gap-8 bg-[#F6FCFF] lg:gap-24'>
        <div className='flex flex-col items-start gap-4'>
            <h1 className='font-normal text-2xl text-[#484949]'>Donatsu</h1>
            <p className='font-normal text-sm text-[#484949]'>DONAT SUSU UNTUK ANAK & IBU!</p>
            <p className='font-normal text-sm text-[#616364]'>© 2022, All rights reserved</p>
        </div>
        <div className='flex flex-col items-start gap-3'>
            <h1 className='font-normal text-sm text-[#484949]'>Ikuti kami di social media donatsu</h1>
            <div className='flex flex-col items-start gap-6'>
                <div className='flex flex-row items-start gap-2'>
                    <img src={Instagram} />
                    <p className='font-normal text-sm text-[#484949]'>@donatsu.official</p>
                </div>
                <div className='flex flex-row items-start gap-2'>
                    <img src={Instagram} />
                    <p className='font-normal text-sm text-[#484949]'>@donatsu.official</p>
                </div>
                <div className='flex flex-row items-start gap-2'>
                    <img src={Instagram} />
                    <p className='font-normal text-sm text-[#484949]'>@donatsu.official</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
