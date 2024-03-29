import { useState, useEffect } from "react";
import Cover from "../assets/img/cover.png";
import "../component/photo.css";
import elips from "../assets/img/Ellipse 4.png"
import elips2 from "../assets/img/Ellipse 5.png"
import team1 from "../assets/img/Photo.png"



function Karir() {

  const initialValues = { nama: "", email: "", tlpn: "" };
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
    if (!values.tlpn) {
      errors.tlpn = "No handphone is required";
    } 
    return errors;
  };

  return (
    
    <div className='flex justify-center px-5 pt-4 pb-[200px]'>
        <div className='flex flex-col'>
            <div>
                <img src={Cover} alt=''/>
            </div>
            <div className='flex flex-col justify-center items-center py-20 gap-11'>
                <h1 className='text-2xl lg:text-5xl font-bold text-[#484949] font-[PoetsenOne]'>Berkarir di Donatsu</h1>
                <p className='text-xl lg:text-2xl font-normal text-[#484949] w-[330px] lg:w-[440px] h-[72px] text-center font-[Poppins]'>Anda memiliki visi yang sama? 
Raih kesempatan berkarir di Donatsu</p>
                <form onSubmit={handleSubmit} className="gap-11 pt-3 justify-center items-center">
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
                        placeholder="Email Anda"
                        type="text"
                        name="email"
                        id='email'
                        value={formValues.email}
                        onChange={handleChange}
                        />
                        <p className="text-red-600">{formErrors.email}</p>
                    </label>
                    <label className="block pt-11">
                        <input
                        className="border w-full lg:w-[642px] h-14 rounded border-[#DADADA] pl-3 font-sans"
                        placeholder="Nomor Whatsapp Anda"
                        type="number"
                        name="tlpn"
                        id='tlpn'
                        value={formValues.tlpn}
                        onChange={handleChange}
                        />
                        <p className="text-red-600">{formErrors.tlpn}</p>
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
                
                    <div className="flex justify-center">
                        <button className='flex flex-row justify-center items-center gap-2 bg-[#1FB2FC] border rounded-2xl w-[300px] lg:w-[532px] h-[52px] mt-5'>
                            <p className='text-sm lg:text-lg font-normal text-[#FFFFFF] font-[PoetsenOne]'>KIRIM LAMARAN</p>  
                        </button>
                    </div>
                </form>
            </div>
        </div>
        {/* <div className="team">
        <div className="photo"> 
          <div className="overlap-group"> 
            <img className="ellipse-4" src={elips} alt="Ellipse 4" /> 
              <img className="ellipse-5" src={elips2} alt="Ellipse 5" /> 
              <img className="photo-1" src={team1} alt="Photo" /> 
            </div>
          </div>
        </div>  */}
    </div>
    
  )
}

export default Karir