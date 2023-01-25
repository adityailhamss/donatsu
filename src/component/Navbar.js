import React, {useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import mainLogo from "../assets/img/mainLogo.png";
import Wa from "../assets/img/Whatsapp.png";
import Menu from "../assets/img/menu.png";
import axios from 'axios';

function Navbar() {
  const [drop, setDrop] = useState(false);
    const dropDown = () => {
    setDrop(!drop);
  };

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

  return (
    <div className='flex flex-row px-8 lg:px-20 py-6 justify-between items-center gap-14 bg-[#F6FCFF]'>
        <div className='py-6 lg:py-0'>
            <NavLink to={"/"}>
                <img className="w-[64px] h-[64px]" src={mainLogo} alt="" />
            </NavLink>
        </div>
        <ul className='hidden lg:flex flex-row gap-14 items-start'>
            <li className='py-6'>
                <NavLink
                    to={"/kemitraan"}
                    className="py-6 px-6 tracking-widest font-[PoetsenOne]"
                    style={(isActive) => ({
                        color: isActive.isActive ? "#1FB2FC" : "#878889",
                      })}
                      end
                    >
                      Kemitraan
                </NavLink>
            </li>
            <li className='py-6'>
                <NavLink
                    to={"/tentangkami"}
                    className="py-6 px-6 tracking-widest font-[PoetsenOne]"
                    style={(isActive) => ({
                        color: isActive.isActive ? "#1FB2FC" : "#878889",
                      })}
                      end
                    >
                      Tentang Kami
                </NavLink>
            </li>
            <li className='py-6'>
                <NavLink
                    to={"/produk"}
                    className="py-6 px-6 tracking-widest font-[PoetsenOne]"
                    style={(isActive) => ({
                        color: isActive.isActive ? "#1FB2FC" : "#878889",
                      })}
                      end
                    >
                      100+ Produk
                </NavLink>
            </li>
            <li className='py-6'>
                <NavLink
                    to={"/karir"}
                    className="py-6 px-6 tracking-widest font-[PoetsenOne]"
                    style={(isActive) => ({
                        color: isActive.isActive ? "#1FB2FC" : "#878889",
                      })}
                      end
                    >
                      Karir
                </NavLink>
            </li>
          </ul>
          <div className='flex-row hidden lg:flex justify-center items-center gap-2 bg-[#1FB2FC] border rounded-2xl w-[200px] h-[48px]'>
            <img src={Wa}/>
            {wa.data?.map((wats) => (
          <a href={wats.attributes.whatsapp} className='font-normal text-base text-[#FFFFFF] font-[PoetsenOne]'>HUBUNGI KAMI</a>  
          ))}
        </div>
        
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
                    className="py-6 px-6 tracking-widest font-[PoetsenOne]"
                    style={(isActive) => ({
                        color: isActive.isActive ? "#1FB2FC" : "#878889",
                      })}
                      end
                    >
                      Kemitraan
                </NavLink>
            </li>
            <li className='py-6'>
                <NavLink
                    to={"/tentangkami"}
                    className="py-6 px-6 tracking-widest font-[PoetsenOne]"
                    style={(isActive) => ({
                        color: isActive.isActive ? "#1FB2FC" : "#878889",
                      })}
                      end
                    >
                      Tentang Kami
                </NavLink>
            </li>
            <li className='py-6'>
                <NavLink
                    to={"/produk"}
                    className="py-6 px-6 tracking-widest font-[PoetsenOne]"
                    style={(isActive) => ({
                        color: isActive.isActive ? "#1FB2FC" : "#878889",
                      })}
                      end
                    >
                      100+ Produk
                </NavLink>
            </li>
            <li className='py-6'>
                <NavLink
                    to={"/karir"}
                    className="py-6 px-6 tracking-widest font-[PoetsenOne]"
                    style={(isActive) => ({
                        color: isActive.isActive ? "#1FB2FC" : "#878889",
                      })}
                      end
                    >
                      Karir
                </NavLink>
            </li>
          </ul>            
        <button className='flex flex-row justify-center items-center gap-2 bg-[#1FB2FC] border rounded-2xl w-[150px] lg:w-[200px] h-[48px]'>
            <img src={Wa}/>
            <p className='font-normal text-base text-[#FFFFFF] font-[PoetsenOne]'>HUBUNGI KAMI</p>
        </button>
          </div>
        </div>
    </div>
  )
}

export default Navbar
