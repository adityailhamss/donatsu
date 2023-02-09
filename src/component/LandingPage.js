import { useState, useEffect } from "react";
import axios from 'axios';
import Order from "./Order";
import Elp from "../assets/img/Ellipse 4.png";
import Elp1 from "../assets/img/Ellipse 5.png";
import Bintang from "../assets/img/bintang.png";
import Kreasi from "../assets/img/kreasi.png";
import Hijau from "../assets/img/hijau.png";
import Fruity from "../assets/img/fruity.png";
import Merah from "../assets/img/merah.png";
import Seasonal from "../assets/img/seasonal.png";
import Kuning from "../assets/img/kuning.png";
import anak from "../assets/img/Ilusttrasi.png";
import anak1 from "../assets/img/anak1.png";
import anak2 from "../assets/img/anak2.png";
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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LandingPage() {

  const [wa, setWa] = useState([])

    useEffect(() => {
        axios
        .get('http://localhost:1337/api/was/')
        .then((response) => {
            const json = response.data;
            console.log(json);
            setWa(json);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

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

  const initialValues = { nama: "", email: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showMyModal, setShowMyModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.nama) {
      errors.nama = "Nama is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    
    return errors;
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const handleOnClose = () => {
    setShowMyModal(false);
  };

  
  
  
  return (
    <div className=''>
      
      <Slider {...settings} >
        <div className='flex flex-col lg:flex-row bg-bg-4 w-[536px] lg:w-[1440px] lg:h-[530px]'>
          <div className="flex flex-col-reverse lg:flex-row items-center w-full lg:ml-20 xl:w-[90%] mx-auto gap-5">
          <div className='flex flex-col pl-8 lg:pl-44 lg:text-left text-center lg:items-start items-center lg:pt-36 gap-6'>
            <h1 className='text-4xl lg:text-5xl font-normal text-[#484949] w-[300px] lg:w-[440px] h-auto lg:h-[116px] font-[PoetsenOne]'>Donat Susu Untuk Ibu & Anak</h1>
            <h2 className='text-xl lg:text-2xl font-normal text-[#484949] w-[300px] lg:w-[440px] h-[72px] font-[Poppins]'>Investasi Syar’i Mulai 6 Juta,<br></br>
Outlet Milik Anda Selamanya!</h2>
        </div>
        <div className="lg:w-[566px] w-[333x] h-[253px]lg:h-[507px] ">
          <img  src={anak1} />
        </div>
        </div>
        
      </div>
      <div className='flex flex-col lg:flex-row bg-bg-4 w-[536px] lg:w-[1440px] lg:h-[530px]'>
          <div className="flex flex-col-reverse lg:flex-row items-center w-full lg:ml-20 xl:w-[90%] mx-auto gap-5">
          <div className='flex flex-col pl-8 lg:pl-44 lg:text-left text-center lg:items-start items-center lg:pt-36 gap-6'>
          <h1 className='text-4xl lg:text-5xl font-normal text-[#484949] w-[300px] lg:w-[440px] h-auto lg:h-[116px] font-[PoetsenOne]'>Donat Susu Untuk Keluarga</h1>
          <h2 className='text-xl lg:text-2xl font-normal text-[#484949] w-[300px] lg:w-[440px] h-[72px] font-[Poppins]'>Investasi Syar’i Mulai <b>6 Juta</b>,<br></br>
Nikmati <b>Passive</b> Incomenya!</h2>
      </div>
      <div className="lg:w-[566px] w-[333x] h-[253px]lg:h-[507px] ">
          <img  src={anak2} />
        </div>
        </div>
    </div>
    <div className='flex flex-col lg:flex-row bg-bg-4 w-[536px] lg:w-[1440px] lg:h-[530px]'>
          <div className="flex flex-col-reverse lg:flex-row items-center w-full lg:ml-20 xl:w-[90%] mx-auto gap-5">
          <div className='flex flex-col pl-8 lg:pl-44 lg:text-left text-center lg:items-start items-center lg:pt-36 gap-6'>
          <h1 className='text-4xl lg:text-5xl font-normal text-[#484949] w-[300px] lg:w-[440px] h-auto lg:h-[116px] font-[PoetsenOne]'>Donat Susu Untuk Sisteur</h1>
          <h2 className='text-xl lg:text-2xl font-normal text-[#484949] w-[300px] lg:w-[440px] h-[72px] font-[Poppins]'>Investasi Syar’i Mulai <b>6 Juta</b>,<br></br>
<b>Miliki</b> Outlet Selamanya!</h2>
      </div>
      <div className="lg:w-[566px] w-[333x] h-[253px]lg:h-[507px] ">
          <img  src={anak} />
        </div>
        </div>
    </div>
    </Slider>
    
    <div className='flex flex-col'>
    <div className='flex flex-col justify-center items-center pt-20 lg:pt-36 gap-8 '>
        <h1 className='text-3xl lg:text-5xl font-normal text-[#484949] font-[PoetsenOne]'>Menu Donatsu</h1>
        <p className='text-xl lg:text-2xl font-normal text-[#484949] w-auto lg:w-[521px] h-[109px] text-center font-[Poppins]'>Sajian menu halal yang lengkap secara rasa, berkualitas baik, dan berpenampilan menarik, hanya untuk Anda.</p>
    </div>
    <div className="flex flex-col lg:flex-row gap-28 pt-2 lg:pt-44 pb-[350px] lg:pb-40 ">
    <div className='flex flex-col items-center lg:flex-row pl-4 lg:pl-44 pt-9 gap-8'>
      <div className="rounded-2xl absolute w-[256px] h-[386px] bg-gradient-to-t from-[#E9F7FF] to-white ">
          <div className="flex flex-col">
            <img className="absolute left-[12%] right-[15.58%] top-[6.48%] bottom-[50.52%]" src={Elp1}/>
            <img className="absolute left-[1.81%] right-[7.81%] top-0 bottom-[44.04%]" src={Elp}/>
            <div className="absolute left-[10.94%] right-[10.94%] top-[57.25%] bottom-[35.23%]">
              <p className="font-[PoetsenOne] font-normal text-2xl text-center pt-2 text-[#484949]">MILKY SERIES</p>
            </div>
            <div className="flex flex-row justify-center items-center gap-3">
              <div className="absolute left-[71.09%] right-[13.28%] top-[36.27%] bottom-[53.37%] bg-[#1FB2FC] border-[0px] rounded-xl">
                <img className = "absolute right-[8.65%] left-[1.64%] top-[1.67%] bottom-[14.35%]" src={Bintang} />
              </div>
            </div>
            <div className="absolute left-[10.94%] right-[10.94%] top-[68.65%] bottom-[6.48%]">
              <p className="font-[Poppins] font-normal text-base text-center text-[#484949]">Donat susu original dari Donatsu dengan citarasa taburan susu yang pas   </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center lg:flex-row pl-4 lg:pl-44 pt-[300px] lg:pt-9 gap-8'>
      <div className="rounded-2xl absolute w-[256px] h-[386px] bg-gradient-to-t from-[#E9F7FF] to-white ">
          <div className="flex flex-col">
          <img className="absolute left-[12%] right-[15.58%] top-[6.48%] bottom-[50.52%]" src={Kreasi}/>
            <img className="absolute left-[1.81%] right-[7.81%] top-0 bottom-[44.04%]" src={Elp}/>
            <div className="absolute left-[10.94%] right-[10.94%] top-[57.25%] bottom-[35.23%]">
              <p className="font-[PoetsenOne] text-center font-normal pt-2 text-2xl text-[#484949]">KREASI SERIES</p>
            </div>
            <div className="flex flex-row justify-center items-center gap-3">
              <div className="absolute left-[71.09%] right-[13.28%] top-[36.27%] bottom-[53.37%] bg-[#76D816] border-[0px] rounded-xl">
                <img className = "absolute right-[8.65%] left-[1.64%] top-[1.67%] bottom-[14.35%]" src={Hijau} />
              </div>
            </div>
            <div className="absolute left-[10.94%] right-[10.94%] top-[68.65%] bottom-[6.48%]">
              <p className="font-[Poppins] font-normal text-base text-center text-[#484949]">Pilih toping dan glaze donat pilihan Anda, ekspresikan kreasi Ibu dan Ananda</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center lg:flex-row pl-4 lg:pl-44 pt-[300px] lg:pt-9 gap-8'>
      <div className="rounded-2xl absolute w-[256px] h-[386px] bg-gradient-to-t from-[#E9F7FF] to-white ">
          <div className="flex flex-col">
          <img className="absolute left-[12%] right-[15.58%] top-[6.48%] bottom-[50.52%]" src={Fruity}/>
            <img className="absolute left-[1.81%] right-[7.81%] top-0 bottom-[44.04%]" src={Elp}/>
            <div className="absolute left-[10.94%] right-[10.94%] top-[57.25%] bottom-[35.23%]">
              <p className="font-[PoetsenOne] font-normal text-center pt-2 text-2xl text-[#484949]">FRUITY SERIES</p>
            </div>
            <div className="flex flex-row justify-center items-center gap-3">
              <div className="absolute left-[71.09%] right-[13.28%] top-[36.27%] bottom-[53.37%] bg-[#C42A6E] border-[0px] rounded-xl">
                <img className = "absolute right-[8.65%] left-[1.64%] top-[1.67%] bottom-[14.35%]" src={Merah} />
              </div>
            </div>
            <div className="absolute left-[10.94%] right-[10.94%] top-[68.65%] bottom-[6.48%]">
              <p className="font-[Poppins] font-normal text-base text-center text-[#484949]">Cream lembut dan toping buah fresh diatas donat susu yang menyegarkan</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className='flex flex-col items-center lg:flex-row pl-4 lg:pl-44 pt-[300px] lg:pt-9 gap-8'>
      <div className="rounded-2xl absolute w-[256px] h-[386px] bg-gradient-to-t from-[#E9F7FF] to-white ">
          <div className="flex flex-col">
          <img className="absolute left-[12%] right-[15.58%] top-[6.48%] bottom-[50.52%]" src={Seasonal}/>
            <img className="absolute left-[1.81%] right-[7.81%] top-0 bottom-[44.04%]" src={Elp}/>
            <div className="absolute left-[10.94%] right-[10.94%] top-[57.25%] bottom-[35.23%]">
              <p className="font-[PoetsenOne] font-normal text-center pt-2 text-2xl text-[#484949]">SEASONAL SERIES</p>
            </div>
            <div className="flex flex-row justify-center items-center gap-3">
              <div className="absolute left-[71.09%] right-[13.28%] top-[36.27%] bottom-[53.37%] bg-[#FCA909] border-[0px] rounded-xl">
                <img className = "absolute right-[8.65%] left-[1.64%] top-[1.67%] bottom-[14.35%]" src={Kuning} />
              </div>
            </div>
            <div className="absolute left-[10.94%] right-[10.94%] top-[68.65%] bottom-[6.48%]">
              <p className="font-[Poppins] font-normal text-base text-center text-[#484949]">Produk-produk Donatsu yang dirilis secara musiman, berkala dan penuh kejutan </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='flex flex-row items-center justify-center pt-16 pb-24 gap-2 lg:gap-6'>
      <a href="Modul lighting.pdf" download="Modul lighting.pdf">
        <button  className='flex flex-row justify-center items-center gap-2 bg-[#1FB2FC] border rounded-2xl w-[300px] lg:w-[360px] h-[52px]'>
          <p className='text-sm lg:text-lg font-normal text-[#FFFFFF] font-[PoetsenOne]'>KLIK MENU DONATSU</p>  
        </button>
        </a>
      </div>
    </div>

    
    <div className='flex flex-col lg:pl-44 bg-[#D5F1FF] '>
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
        <h1 className='text-3xl lg:text-5xl font-normal text-[#484949] w-auto lg:w-[440px] h-auto lg:h-[116px] font-[PoetsenOne]'>Cara Baru Nikmati
Donat Susu</h1>
        <p className='text-xl lg:text-2xl font-normal text-[#484949] w-auto lg:w-[440px] h-[72px] font-[Poppins]'>Tambah kenangan indah, nikmati donat susu bersama Donatsu</p>
        <button className='flex flex-row justify-center items-center gap-2 bg-[#1FB2FC] border rounded-2xl w-[300px] lg:w-[360px] h-[52px]'>
          <img src={Instagram2} alt=""/>
          {ig.data?.map((insta) => (
                    <a href={insta.attributes.donatsu} className='font-normal text-sm text-[#ffffff] font-[Poppins]'>
                         @donatsu.official
                        </a>
                   ))} 
        </button>
      </div>
      </div>
      <div className='flex flex-col lg:flex-row pt-16 lg:pt-56 lg:pb-64'>
          <div className='flex flex-col gap-8 justify-center lg:justify-start items-center lg:items-start px-10 lg:px-0'>
          <button onClick={() => setShowMyModal(true)}
              className='flex flex-row justify-center items-center gap-2 bg-[#1FB2FC] border rounded-2xl w-[300px] lg:w-[360px] h-[52px]'>
              <p className='text-sm lg:text-lg font-normal text-[#FFFFFF] font-[PoetsenOne]'>BELI DONAT SEKARANG</p>  
            </button>
            <h1 className='text-3xl lg:text-5xl font-normal text-[#484949]  w-auto lg:w-[440px] h-auto lg:h-[116px] font-[PoetsenOne]'>Donatsu Unggul dari Lainnya</h1>
            <p className='text-xl lg:text-2xl font-normal text-[#484949] w-auto lg:w-[440px] h-[180px] font-[Poppins]'>Positioning yang jelas, jaminan kehalalan & kualitas produk, hingga tampilan yang menarik. Menjadikan Donatsu bisinis dengan potensi growth & income yang besar</p>
            <button onClick={() => setShowMyModal(true)}
              className='flex flex-row justify-center items-center gap-2 bg-[#1FB2FC] border rounded-2xl w-[300px] lg:w-[360px] h-[52px]'>
              <p className='text-sm lg:text-lg font-normal text-[#FFFFFF] font-[PoetsenOne]'>KLIK PROPOSAL BISNIS</p>  
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

    <div className='flex flex-col justify-center items-center py-20 gap-11' id="kerjasama">
        <h1 className='text-2xl lg:text-5xl font-normal text-[#484949] font-[PoetsenOne]'>Gabung Kemitraan Donatsu</h1>
        <p className='text-xl lg:text-2xl font-normal text-[#484949] w-auto lg:w-[440px] h-[72px] text-center font-[Poppins]'>Jadilah pemilik outlet Donatsu,
Nikmati passive incomenya</p>
        <form  onSubmit={handleSubmit} className="gap-11 pt-3 justify-center items-center">
          <label className="block gap-4">
            <input
              className="border w-[330px] lg:w-[642px] h-14 rounded border-[#DADADA] pl-3 font-sans"
              placeholder="Nama Anda"
              type="text"
              name="nama"
              id='nama'
              value={formValues.nama}
              onChange={handleChange}
            />
            <p className="text-red-600">{formErrors.nama}</p>
          </label>
          <label className="block pt-11">
            <input
              className="border w-full lg:w-[642px] h-14 rounded border-[#DADADA] pl-3 font-sans"
              placeholder="Nomer Whatsapp Anda"
              type="text"
              name="email"
              id='email'
              value={formValues.email}
              onChange={handleChange}
            />
            <p className="text-red-600">{formErrors.email}</p>
          </label>
          <div className="flex justify-center">
              <button className='flex flex-row justify-center items-center gap-2 bg-[#1FB2FC] border rounded-2xl w-[300px] lg:w-[532px] h-[52px] mt-5'>
                <p className='text-sm lg:text-lg font-normal text-[#FFFFFF] font-[PoetsenOne]'>DAPATKAN DETAIL INVESTASI</p>  
            </button>
          </div>
        </form>
      </div>
      <Order
        onClose={handleOnClose}
        visible={showMyModal}
      />
    </div>
  )
}

export default LandingPage
