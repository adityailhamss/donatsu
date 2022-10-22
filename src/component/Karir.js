import React from 'react'
import Cover from "../assets/img/cover.png";

function Karir() {
  return (
    <div className='flex justify-center px-5'>
        <div className='flex flex-col'>
            <div>
                <img src={Cover} alt=''/>
            </div>
            <div className='flex flex-col justify-center items-center py-20 gap-11'>
                <h1 className='text-2xl lg:text-5xl font-bold text-[#484949]'>Mulai Karir di Donatsu</h1>
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
                    <label className="block pt-11">
                        <input
                        className="border w-full lg:w-[642px] h-14 rounded border-[#DADADA] pl-3 font-sans"
                        placeholder="No Handphone"
                        type="text"
                        name="tlpn"
                        id='tlpn'
                        />
                    </label>
                    <label className="block pt-11">
                        <select class="border w-full lg:w-[642px] h-14 rounded text-[#616364] border-[#DADADA] pl-3 font-sans  bg-white" id="grid-state">
                        <option>Fulltime</option>
                        <option>option1</option>
                        <option>option2</option>
                        </select>
                    </label>
                    
                    <label className="block pt-11 ">
                        <input
                        className="block w-full lg:w-[642px] h-[60px] text-sm  text-gray-900 bg-white rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none  font-sans"
                        placeholder="Unggah Resume"
                        type="file"
                        name="resume"
                        id='resume'
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

export default Karir