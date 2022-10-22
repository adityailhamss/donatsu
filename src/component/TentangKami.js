import React from 'react'
import tk from '../assets/img/covertk.png';
import tk1 from '../assets/img/covertk1.png';
import tk2 from '../assets/img/covertk2.png';
import tk3 from '../assets/img/covertk3.png';
import team1 from '../assets/img/Team.png';
import team2 from '../assets/img/Team1.png';
import team3 from '../assets/img/Team2.png';
import team4 from '../assets/img/Team3.png';
import team5 from '../assets/img/Team4.png';
import gmbr1 from '../assets/img/gambartk1.png';
import gmbr2 from '../assets/img/gambartk2.png';
import gmbr3 from '../assets/img/gambartk3.png';
import gmbr4 from '../assets/img/gambartk4.png';
import gmbr5 from '../assets/img/gambartk5.png';
import gmbr6 from '../assets/img/gambartk6.png';

function TentangKami() {
  return (
    <div className='flex justify-center px-5'>
        <div className='flex flex-col gap-[80px]'>
            <div>
                <img className='lg:ml-[30px]' src={tk} alt=''/>
            </div>
            
        <div className='flex flex-col'>
            <p className='lg:ml-[266px] font-[Poppins] font-normal text-base leading-6 text-[#616364]'>In 1950, William Rosenberg had an epiphany. After creating a delightful range of donuts for the people of Quincy,<br/> Massachusetts, he realised that everyone loved to dunk them in their coffee. The delicious combination of donuts<br/> and coffee became an experience to savour, and people kept coming back for more. Inspired by this<br/> phenomenon, Rosenberg made it his mission to offer the best quality coffee he could find. This took his business<br/> to a whole new level and DUNKIN’ Donuts was born <br/> <br/> Our commitment to serving the finest coffee is stronger than ever. Each blend is carefully selected to ensure the<br/> richest, smoothest flavour possible. Whether a robust espresso, rich foamy cappuccino or indulgent latte, DUNKIN’<br/> is dedicated to serving high quality coffee packed with flavour.</p>
            </div>

            <div className='flex flex-col lg:flex-row items-center gap-[34px]'>

                <img className='w-[408px] h-[360px] lg:ml-[30px]' src={tk1} alt=''/>
                <img className='w-[408px] h-[360px]' src={tk2} alt=''/>
                <img className='w-[408px] h-[360px]' src={tk3} alt=''/>
            </div>
            <div className='flex flex-col gap-[33px]'>
            <h1 className='font-[PoetsenOne] font-normal text-5xl leading-[58px] text-center text-[#484949]'>Manajemen</h1>

            <p className='font-[Poppins] font-normal text-base leading-[24px] text-center text-[#616364]'>Manajemen Donatsu terdiri dari anggota dengan latar belakang dan pengalaman yang beragam.<br/>
            Kami memiliki tujuan yang sama untuk menciptakan dunia yang lebih baik.</p>
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-[60px]'>
            
            <img className='w-[216px] h-[285px] lg:ml-[320px]' src={team1} alt=''/>
                <img className='w-[216px] h-[285px]' src={team2} alt=''/>
                <img className='w-[216px] h-[285px]' src={team3} alt=''/>
            </div>
            <div className='flex flex-col lg:flex-row gap-[60px] items-center'>
            <img className='w-[216px] h-[285px] lg:ml-[458px]' src={team4} alt=''/>
                <img className='w-[216px] h-[285px]' src={team5} alt=''/>

            </div>
            <div className='flex flex-col gap-[33px]'>
            <h1 className='font-[PoetsenOne] font-normal text-5xl leading-[58px] text-center text-[#484949]'>Team</h1>

            <p className='font-[Poppins] font-normal text-base leading-[24px] text-center text-[#616364]'>Manajemen Donatsu terdiri dari anggota dengan latar belakang dan pengalaman yang beragam.<br/>
            Kami memiliki tujuan yang sama untuk menciptakan dunia yang lebih baik.</p>
            </div>

            <div className='flex flex-col lg:flex-row gap-[39px] items-center lg:ml-[20px]'>
                <img src={gmbr1} alt=''/>
                <img  src={gmbr2} alt=''/>
                <img  src={gmbr3} alt=''/>
            </div>
            <div className='flex flex-col lg:flex-row gap-[39px] items-center lg:ml-[20px]'>
                <img src={gmbr4} alt=''/>
                <img  src={gmbr5} alt=''/>
                <img  src={gmbr6} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default TentangKami