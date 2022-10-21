import React from 'react'
import Slider from "../assets/img/slider.png";

function Kemitraan() {
  return (
    <div className='flex justify-center px-5'>
        <div className='flex flex-col'>
            <div>
                <img src={Slider} alt=''/>
            </div>
            <div className='flex flex-col justify-center items-center py-20 gap-11'>
                <h1 className='text-2xl lg:text-5xl font-bold text-[#484949]'>Gabung Kemitraan Donatsu</h1>
                <p className='text-xl lg:text-2xl font-normal text-[#484949] w-[330px] lg:w-[440px] h-[72px] text-center'>Gabung kemitraan dan dapat keuntung menarik</p>
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
    </div>
  )
}

export default Kemitraan