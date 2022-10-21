import React from 'react';
import Gambar1 from "../assets/img/Ilustrasi.png";
import Varian from "../assets/img/Varian.png";
import Varian1 from "../assets/img/Varian1.png";
import Varian2 from "../assets/img/Varian2.png";
import Varian3 from "../assets/img/Varian3.png";
import IS1 from "../assets/img/IS1.png";
import IS2 from "../assets/img/IS2.png";
import IS3 from "../assets/img/IS3.png";
import Instagram2 from "../assets/img/Instagram2.png";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";

function LandingPage() {
  return (
    <div className=''>
    <div className='flex flex-col-reverse lg:flex-row bg-[#F6FCFF]'>
    <div className='flex flex-col pl-8 lg:pl-44 pt-8 lg:pt-36 gap-6'>
      <div className='px-2'>
        <h1 className='text-4xl lg:text-5xl font-normal text-[#484949] w-[300px] lg:w-[440px] h-auto lg:h-[116px]'>Donat Susu Untuk Ibu & Anak</h1>
      </div>
      <div className='px-2'>
        <h2 className='text-xl lg:text-2xl font-normal text-[#484949] w-[300px] lg:w-[440px] h-[72px]'>Gabung kemitraan dan dapat keuntungan menarik</h2>
      </div>
      <div className='flex flex-row pr-4 items-start gap-2 lg:gap-6'>
        <button className='flex flex-row justify-center items-center gap-2 bg-[#1FB2FC] border rounded-2xl w-[240px] h-[52px]'>
          <p className='text-sm lg:text-lg font-normal text-[#FFFFFF]'>GABUNG KEMITRAAN</p>  
        </button>
        <button className='flex flex-row justify-center items-center gap-2 border-[#1FB2FC] border rounded-2xl w-[240px] h-[52px]'>
          <p className='text-sm lg:text-lg font-normal text-[#1FB2FC]'>HUBUNGI KAMI</p>  
        </button>
      </div>
    </div>
    <div className='pl-8 lg:pl-28 pt-8 lg:pt-12'>
    <img src={Gambar1}/>
    </div>
    </div>

    <div className='flex flex-col'>
    <div className='flex flex-col justify-center items-center pt-20 lg:pt-36 gap-8'>
        <h1 className='text-3xl lg:text-5xl font-normal text-[#484949]'>100+ Variant Rasa</h1>
        <p className='text-xl lg:text-2xl font-normal text-[#484949] w-auto lg:w-[440px] h-[72px] text-center'>Dari 100 leboh varian rasa. Berikut adalah toping paling disukai</p>
    </div>
    <div className='flex flex-col items-center lg:flex-row pl-4 lg:pl-44 pt-9 gap-8'>
      <div className='w-[256px] h-[386px]'>
      <img src={Varian}/>
      </div>
      <div className='w-[256px] h-[386px]'>
      <img src={Varian1}/>
      </div>
      <div className='w-[256px] h-[386px]'>
      <img src={Varian2}/>
      </div>
      <div className='w-[256px] h-[386px]'>
      <img src={Varian3}/>
      </div>
    </div>
    <div className='flex flex-row items-center justify-center pt-16 pb-24 gap-2 lg:gap-6'>
        <button className='flex flex-row justify-center items-center gap-2 bg-[#1FB2FC] border rounded-2xl w-[300px] lg:w-[360px] h-[52px]'>
          <p className='text-sm lg:text-lg font-normal text-[#FFFFFF]'>LIHAT PROPOSAL KEMITRAAN</p>  
        </button>
      </div>
    </div>

    
    <div className='flex flex-col lg:pl-44 bg-[#F6FCFF] '>
    <div className='flex flex-col lg:flex-row gap-5 justify-center lg:justify-start items-center lg:items-start'>
      <div className='lg:pt-56'>
        <img src={IS2}/>
      </div>
      <div className='lg:pt-24'>
        <img src={IS1}/>
      </div>
      <div className='lg:pt-56'>
        <img src={IS3}/>
      </div>
      <div className='flex flex-col px-10 lg:px-20 pt-8 lg:pt-44 gap-8 justify-center lg:justify-start items-center lg:items-start'>
        <h1 className='text-3xl lg:text-5xl font-normal text-[#484949] w-auto lg:w-[440px] h-auto lg:h-[116px]'>Most Popular Donat in Town</h1>
        <p className='text-xl lg:text-2xl font-normal text-[#484949] w-auto lg:w-[440px] h-[72px]'>Gabung kemitraan dan dapat keuntungan menarik</p>
        <button className='flex flex-row justify-center items-center gap-2 bg-[#1FB2FC] border rounded-2xl w-[300px] lg:w-[360px] h-[52px]'>
          <img src={Instagram2} alt=""/>
          <p className='text-sm lg:text-lg font-normal text-[#FFFFFF]'>@Donatsu_official</p>  
        </button>
      </div>
      </div>
      <div className='flex flex-col lg:flex-row pt-16 lg:pt-56 lg:pb-64'>
          <div className='flex flex-col gap-8 justify-center lg:justify-start items-center lg:items-start px-10 lg:px-0'>
            <h1 className='text-3xl lg:text-5xl font-normal text-[#484949]  w-auto lg:w-[440px] h-auto lg:h-[116px]'>Donatsu Unggul dari Lainnya</h1>
            <p className='text-xl lg:text-2xl font-normal text-[#484949] w-auto lg:w-[440px] h-[72px]'>Gabung kemitraan dan dapat keuntungan menarik</p>
            <button className='flex flex-row justify-center items-center gap-2 bg-[#1FB2FC] border rounded-2xl w-[300px] lg:w-[360px] h-[52px]'>
              <p className='text-sm lg:text-lg font-normal text-[#FFFFFF]'>BELI DONAT SEKARANG</p>  
            </button>
          </div>
          <div className='flex flex-col justify-center items-center gap-2 lg:pl-28 pt-10 lg:pt-0'>
              <img src={img1} alt=""/>
              <img src={img2} alt=""/>
          </div>
          <div className='flex flex-col justify-center items-center gap-2 lg:pl-6 pt-8 lg:pt-0'>
              <img src={img3} alt=""/>
              <img src={img4} alt=""/>
          </div>
      </div>
    </div>

    <div className='flex flex-col justify-center items-center py-20 gap-11'>
        <h1 className='text-2xl lg:text-5xl font-normal text-[#484949]'>Gabung Kemitraan Donatsu</h1>
        <p className='text-xl lg:text-2xl font-normal text-[#484949] w-auto lg:w-[440px] h-[72px] text-center'>Gabung kemitraan dan dapat keuntung menarik</p>
        <form className="gap-11 pt-3 justify-center items-center">
          <label className="block gap-4">
            <input
              className="border w-[330px] lg:w-[642px] h-14 rounded border-[#DADADA] pl-3 font-sans"
              placeholder="Isi Nama disini"
              type="text"
              name="nama"
              id='nama'
            />
          </label>
          <label className="block pt-11">
            <input
              className="border w-full lg:w-[642px] h-14 rounded border-[#DADADA] pl-3 font-sans"
              placeholder="Isi Email"
              type="text"
              name="email"
              id='email'
            />
          </label>
          </form>
          <button className='flex flex-row justify-center items-center gap-2 bg-[#1FB2FC] border rounded-2xl w-[300px] lg:w-[532px] h-[52px]'>
              <p className='text-sm lg:text-lg font-normal text-[#FFFFFF]'>DAPATKAN PENAWARAN KERJASAMA</p>  
          </button>
    </div>
    </div>
  )
}

export default LandingPage
