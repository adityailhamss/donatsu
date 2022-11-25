import { useState, useEffect } from "react";
import Slider from "../assets/img/slider.png";

function Kemitraan() {

    const initialValues = { nama: "", email: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
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

  return (
    <div className='flex justify-center px-5'>
        <div className='flex flex-col'>
            <div>
                <img src={Slider} alt=''/>
            </div>
            <div className='flex flex-col justify-center items-center py-20 gap-11'>
                <h1 className='text-2xl lg:text-5xl font-bold text-[#484949] font-[PoetsenOne]'>Gabung Kemitraan Donatsu</h1>
                <p className='text-xl lg:text-2xl font-normal text-[#484949] w-[330px] lg:w-[440px] h-[72px] text-center font-[Poppins]'>Gabung kemitraan dan dapat keuntung menarik</p>
                <form onSubmit={handleSubmit} className="gap-11 pt-3 justify-center items-center">
                    <label className="block gap-4">
                        <input
                            className="border w-[330px] lg:w-[642px] h-14 rounded border-[#DADADA] pl-3 font-sans"
                            placeholder="Isi Nama disini"
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
                        placeholder="Isi Email"
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
                        <p className='text-sm lg:text-lg font-normal text-[#FFFFFF] font-[PoetsenOne]'>DAPATKAN PENAWARAN KERJASAMA</p>  
                    </button>
                </div>
                
                </form>
            </div>
        </div>
    </div>
  )
}

export default Kemitraan