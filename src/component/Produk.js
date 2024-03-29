import React, { useState, useEffect} from 'react';
import produk1 from '../assets/produk/Frame 12.png';
import produk2 from '../assets/produk/Rectangle 26.png';
import produk3 from '../assets/produk/Rectangle 21.png';
import produk4 from '../assets/produk/Rectangle 17.png';
import produk5 from '../assets/produk/Rectangle 19.png';
import produk6 from '../assets/produk/Rectangle 18.png';
import produk7 from '../assets/produk/Rectangle 15.png';
import produk8 from '../assets/produk/Rectangle 20.png';
import produk9 from '../assets/produk/Rectangle 16.png';
import produk10 from '../assets/produk/produk10.png';
import produk11 from '../assets/produk/produk11.png';
import produk12 from '../assets/produk/produk12.png';
import produk13 from '../assets/produk/produk13.png';
import productApi from '../config/productApi';
import { SRLWrapper } from "simple-react-lightbox";
import SimpleReactLightbox from 'simple-react-lightbox';

function Produk() {

  const [product, setProducts] = useState([]);

  useEffect(()=> {
      productApi.find().then((res)=> {
        console.log(res);
      });
  }, []);

  return (
    <div className='flex justify-center px-5 pt-16 bg-[#F6FCFF] pb-[183px]'>
        <div className='flex flex-col'>
        <div className='flex flex-col gap-[33px]'>
            <h1 className='font-normal text-5xl leading-[58px] text-center text-[#484949] font-[PoetsenOne]'>100+ Varian Rasa</h1>

            <p className='font-[Poppins] font-normal text-base leading-[24px] text-center text-[#616364] mb-3 w-[557px] h-[108px] ml-[370px]'>Bebas pilih 100+ paduan toping dan glaze di atas donat pilihan Anda, ekspresikan kreasi Ibu dan Ananda!</p>
            </div>
            
            <SRLWrapper>
            <div className='grid grid-rows-4 lg:grid-flow-col gap-6'>
                <div class="row-span-4 col-span-4 lg:w-[628px] lg:h-[472px] rounded-lg img-hover-zoom">
                    <img src={produk1} alt='' />
                </div>
                <div class="row-span-2 col-span-2 lg:w-[303px] lg:h-[224px] rounded-lg img-hover-zoom">
                <img src={produk2} alt='' />
                </div>
                <div class="row-span-2 col-span-2 lg:w-[303px] lg:h-[224px] rounded-lg img-hover-zoom">
                <img src={produk3} alt=''/>
                </div>
                <div class="row-span-2 col-span-2 lg:w-[303px] lg:h-[224px] rounded-lg img-hover-zoom">
                    <img src={produk4} alt='' />
                </div>
                <div class="row-span-2 col-span-2 lg:w-[303px] lg:h-[224px] rounded-lg img-hover-zoom">
                <img src={produk5} alt='' />
                </div>
             </div>
             
             
            <div className='flex flex-col items-center lg:flex-row gap-6 pt-6'>
                <div class="row-span-2 col-span-2 lg:w-[303px] lg:h-[224px] rounded-lg img-hover-zoom">
                <img src={produk6} alt='' />
                </div>
                <div class="row-span-2 col-span-2 lg:w-[303px] lg:h-[224px] rounded-lg img-hover-zoom">
                <img src={produk7} alt='' />
                </div>
                <div class="row-span-2 col-span-2 lg:w-[303px] lg:h-[224px] rounded-lg img-hover-zoom">
                <img src={produk8} alt='' />
                </div>
                <div class="row-span-2 col-span-2 lg:w-[303px] lg:h-[224px] rounded-lg img-hover-zoom">
                <img src={produk9} alt='' />
                </div>
            </div>
            </SRLWrapper>
            
            

            <div className='flex flex-col pt-[100px] gap-[34px]'>
            <h1 className='font-normal text-5xl leading-[58px] text-center text-[#484949] font-[PoetsenOne]'>Menu Lezat Lainnya</h1>

            <p className='font-[Poppins] font-normal text-base leading-[24px] text-center text-[#616364]'>Inovasi produk-produk pelengkap <br/> pendukung menu utama di Donatsu</p>
            </div>
            
            <div className='flex flex-col lg:flex-row gap-6 pt-[67px]'>
              <img className='w-[304px h-[400px] rounded-2xl' src={produk10} alt=''/>
              <img className='w-[304px h-[400px] rounded-2xl'  src={produk11} alt=''/>
              <img className='w-[304px h-[400px] rounded-2xl' src={produk12} alt=''/>
              <img className='w-[304px h-[400px] rounded-2xl' src={produk13} alt=''/>

            </div>
    </div>

    <div className="" products={[]} ></div>
</div>
  )
}

export default Produk