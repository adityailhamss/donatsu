import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../assets/img/Logo.png";
import Wa from "../assets/img/Whatsapp.png";
import Menu from "../assets/img/menu.png";

function Navbar() {
  const [drop, setDrop] = useState(false);
    const dropDown = () => {
    setDrop(!drop);
  };
  return (
    <div className='flex flex-row px-8 lg:px-20 py-6 justify-between items-center gap-14 bg-[#F6FCFF]'>
        <div className='py-6 lg:py-0'>
            <NavLink to={"/"}>
                <img src={Logo} alt="" />
            </NavLink>
        </div>
        <ul className='hidden lg:flex flex-row gap-14 items-start'>
            <li className='py-6'>
                <NavLink
                    to={"/kemitraan"}
                    className="py-6 px-6 tracking-widest"
                    style={(isActive) => ({
                        color: isActive.isActive ? "#878889" : "#1FB2FC",
                      })}
                      end
                    >
                      Kemitraan
                </NavLink>
            </li>
            <li className='py-6'>
                <NavLink
                    to={"/"}
                    className="py-6 px-6 tracking-widest"
                    style={(isActive) => ({
                        color: isActive.isActive ? "#878889" : "#1FB2FC",
                      })}
                      end
                    >
                      Tentang Kami
                </NavLink>
            </li>
            <li className='py-6'>
                <NavLink
                    to={"/"}
                    className="py-6 px-6 tracking-widest"
                    style={(isActive) => ({
                        color: isActive.isActive ? "#878889" : "#1FB2FC",
                      })}
                      end
                    >
                      100+ Produk
                </NavLink>
            </li>
            <li className='py-6'>
                <NavLink
                    to={"/"}
                    className="py-6 px-6 tracking-widest"
                    style={(isActive) => ({
                        color: isActive.isActive ? "#878889" : "#1FB2FC",
                      })}
                      end
                    >
                      Karir
                </NavLink>
            </li>
          </ul>            
        <button className='flex-row hidden lg:flex justify-center items-center gap-2 bg-[#1FB2FC] border rounded-2xl w-[200px] h-[48px]'>
            <img src={Wa}/>
            <p className='font-normal text-base text-[#FFFFFF]'>HUBUNGI KAMI</p>
        </button>
        <div className="ml-auto my-auto lg:hidden inline-block w-[2rem] relative hover:cursor-pointer">
          <img src={Menu} alt="" onClick={dropDown} />
          <div
            className={`absolute z-[1] right-0 ${
              drop ? "block" : "hidden"
            } min-w-[200px] flex flex-col items-center text-center gap-4 border-2 rounded-xl border-black py-4 bg-white`}
          >
            <ul className=''>
            <li className='py-6'>
                <NavLink
                    to={"/kemitraan"}
                    className="py-6 px-6 tracking-widest"
                    style={(isActive) => ({
                        color: isActive.isActive ? "#878889" : "#1FB2FC",
                      })}
                      end
                    >
                      Kemitraan
                </NavLink>
            </li>
            <li className='py-6'>
                <NavLink
                    to={"/"}
                    className="py-6 px-6 tracking-widest"
                    style={(isActive) => ({
                        color: isActive.isActive ? "#878889" : "#1FB2FC",
                      })}
                      end
                    >
                      Tentang Kami
                </NavLink>
            </li>
            <li className='py-6'>
                <NavLink
                    to={"/"}
                    className="py-6 px-6 tracking-widest"
                    style={(isActive) => ({
                        color: isActive.isActive ? "#878889" : "#1FB2FC",
                      })}
                      end
                    >
                      100+ Produk
                </NavLink>
            </li>
            <li className='py-6'>
                <NavLink
                    to={"/"}
                    className="py-6 px-6 tracking-widest"
                    style={(isActive) => ({
                        color: isActive.isActive ? "#878889" : "#1FB2FC",
                      })}
                      end
                    >
                      Karir
                </NavLink>
            </li>
          </ul>            
        <button className='flex flex-row justify-center items-center gap-2 bg-[#1FB2FC] border rounded-2xl w-[200px] h-[48px]'>
            <img src={Wa}/>
            <p className='font-normal text-base text-[#FFFFFF]'>HUBUNGI KAMI</p>
        </button>
          </div>
        </div>
    </div>
  )
}

export default Navbar
