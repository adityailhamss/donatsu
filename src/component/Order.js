import React from 'react'
import X from "../assets/X.png";
import Gofood from "../assets/img/gofood.png";
import Shopeefood from "../assets/img/shopeefood.png"
import Grabfood from "../assets/img/grabfood.png"

function Order({ visible, onClose}) {
    if (!visible) return null;
    return (
      <div className="flex flex-col px-20 py-10 w-auto mx-auto items-center fixed inset-0 bg-opacity-30 backdrop-blur-sm">
        <div className="flex flex-col bg-[#ffffff] lg:w-[700px] lg:h-[550px] gap-4 rounded-lg py-4 border-2 px-4">
          <div className="flex flex-row">
            <div className="flex lg:pl-56">
              <div className="felx">
                <p className="font-bold lg:text-2xl text-[#444444]">
                  Order
                </p>
              </div>
            </div>
            <button onClick={onClose} className="flex lg: pl-40 items-center">
              <img src={X} alt="" />
            </button>
          </div>
          {/* <div className='garis-2'></div> */}
          <div className="flex flex-col overflow-scroll gap-2 px-14">
            <button 
              className="flex flex-row bg-[#F9F7F7] rounded-lg border-[1px] text-left w-auto lg:h-[300px] justify-center"
              onClick={() => {
                onClose();
              }}
            >
              
            <div className="block lg:flex flex-col lg:my-6 gap-2 pb-4 lg:pb-0 items-center">
                  <img className='w-[120px] h-[74px]' src={Gofood}/>
                  <h1 className='text-center pt-0'>Order By Gofood</h1>
              </div>
            </button>
            <button
              className="flex flex-row bg-[#F9F7F7] rounded-lg border-[1px] text-left w-auto lg:h-[300px] justify-center"
              onClick={() => {
                onClose();
              }}
            >
              <div className="block lg:flex flex-col lg:my-6 gap-2 pb-4 lg:pb-0 items-center">
                  <img className='lg:w-[150px] lg:h-[64px] pt-5' src={Shopeefood}/>
                  <h1 className='text-center pt-4'>Order By Shopeefood</h1>
              </div>
            </button>
            <button
              className="flex flex-row bg-[#F9F7F7] rounded-lg border-[1px] text-left w-auto lg:h-[300px] justify-center"
              onClick={() => {
                onClose();
              }}
            >
              <div className="block lg:flex flex-col lg:my-6 gap-2 pb-4 lg:pb-0 items-center">
                  <img className='lg:w-[150px] lg:h-[44px] pt-5' src={Grabfood}/>
                  <h1 className='text-center pt-4'>Order By Grabfood</h1>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Order;