import React from "react";
import tk from "../assets/img/covertk.png";
import tk1 from "../assets/img/covertk1.png";
import tk2 from "../assets/img/covertk2.png";
import tk3 from "../assets/img/covertk3.png";
import team1 from "../assets/img/Team.png";
import team2 from "../assets/img/Team1.png";
import team3 from "../assets/img/Team2.png";
import team4 from "../assets/img/Team3.png";
import team5 from "../assets/img/Team4.png";
import gmbr1 from "../assets/img/gambartk1.png";
import gmbr2 from "../assets/img/gambartk2.png";
import gmbr3 from "../assets/img/gambartk3.png";
import gmbr4 from "../assets/img/gambartk4.png";
import gmbr5 from "../assets/img/gambartk5.png";
import gmbr6 from "../assets/img/gambartk6.png";
import { SRLWrapper } from "simple-react-lightbox";
import "../component/photo.css";
import elips from "../assets/img/Ellipse 4.png";
import elips2 from "../assets/img/Elips 2.png";
import T1 from "../assets/img/Photo.png";
import T2 from "../assets/img/Photo2.png";
import T3 from "../assets/img/Photo3.png";
import T4 from "../assets/img/Photo4.png";

function TentangKami() {
  return (
    <div className="flex justify-center px-5 bg-[#F6FCFF] pb-[165px]">
      <div className="flex flex-col gap-[80px]">
        <div>
          <img className="lg:ml-[30px]" src={tk} alt="" />
        </div>

        <div className="flex flex-col">
          <p className="lg:ml-[266px] font-[Poppins] font-normal text-base leading-6 text-[#616364]">
            In 1950, William Rosenberg had an epiphany. After creating a
            delightful range of donuts for the people of Quincy,
            <br /> Massachusetts, he realised that everyone loved to dunk them
            in their coffee. The delicious combination of donuts
            <br /> and coffee became an experience to savour, and people kept
            coming back for more. Inspired by this
            <br /> phenomenon, Rosenberg made it his mission to offer the best
            quality coffee he could find. This took his business
            <br /> to a whole new level and DUNKIN’ Donuts was born <br />{" "}
            <br /> Our commitment to serving the finest coffee is stronger than
            ever. Each blend is carefully selected to ensure the
            <br /> richest, smoothest flavour possible. Whether a robust
            espresso, rich foamy cappuccino or indulgent latte, DUNKIN’
            <br /> is dedicated to serving high quality coffee packed with
            flavour.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-[34px]">
          <img className="w-[408px] h-[360px] lg:ml-[30px]" src={tk1} alt="" />
          <img className="w-[408px] h-[360px]" src={tk2} alt="" />
          <img className="w-[408px] h-[360px]" src={tk3} alt="" />
        </div>

        {/* Owner’s */}
        <div className="flex flex-col gap-[33px]">
          <h1 className="font-[PoetsenOne] font-normal text-5xl leading-[58px] text-center text-[#484949]">
            Owner’s Profile
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center  justify-center">
          <div className="team">
            <div className="photo">
              <div className="overlap-group">
                <img className="ellipse-4" src={elips} alt="Ellipse 4" />
                <img className="ellipse-5" src={elips2} alt="Ellipse 5" />
                <img className="photo-1" src={T1} alt="Photo" />
              </div>
            </div>
            <p className="font-bold">C.E.O</p>
          </div>
          <div className="flex flex-col lg:w-[387px] lg:h-[302px] justify-center w-screen lg:items-start gap-2">
            <p className="text-lg font-semibold text-center pl-5 pr-5">
              BASYTYAN K PRATAMA
            </p>
            <div>
              <p className="text-lg font-semibold text-justify lg:text-start pl-10 pr-6">
                ● 2010 - Now
              </p>
              <p className="text-lg font-semibold text-justify lg:text-start pl-10 pr-5">
                Founder BAS-IT Studio (Software House), InvesProperti.id,
                Technopreneur Startup, Enthusiast (backed up by VC & Angel
                Investors)
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold  text-justify pl-10 pr-5">
                ● 2010 - 2012
              </p>
              <p className="text-lg font-semibold  text-justify pl-10 pr-5">
                Franchise 2 Brand F&B
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-justify lg:text-start pl-10 pr-5">
                ● 2015 - Now
              </p>
              <p className="text-lg font-semibold text-justify lg:text-start pl-10 pr-5 pb-7">
                Investor & Owner (Real estate, F&B, Fashion & Skin Care)
              </p>
            </div>
          </div>

          <div className="team">
            <div className="photo">
              <div className="overlap-group">
                <img className="ellipse-4" src={elips} alt="Ellipse 4" />
                <img className="ellipse-5" src={elips2} alt="Ellipse 5" />
                <img className="photo-1" src={T2} alt="Photo2" />
              </div>
            </div>
            <p className="font-bold">C.O.O</p>
          </div>
          <div className="flex flex-col lg:w-[387px] lg:h-[302px]  w-screen lg:items-start gap-2">
            <p className="text-lg font-semibold text-center pl-5 pr-5">
              AAN KURNIAWAN
            </p>
            <div>
              <p className="text-lg font-semibold text-justify lg:text-start pl-10 pr-5">
                ● 2010 - 2019
              </p>
              <p className="text-lg font-semibold text-justify lg:text-start pl-10 pr-5">
                Business Owner Bakso Malang, Cuanki Bandung, Siomay Mayo Ardjuna
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold  text-justify pl-10 pr-5">
                ● 2010 - Now
              </p>
              <p className="text-lg font-semibold  text-justify pl-10 pr-5">
                F&B Maklon Industry
              </p>
            </div>
            
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center  justify-center">
          <div className="team">
            <div className="photo">
              <div className="overlap-group">
                <img className="ellipse-4" src={elips} alt="Ellipse 4" />
                <img className="ellipse-5" src={elips2} alt="Ellipse 5" />
                <img className="photo-1" src={T3} alt="Photo" />
              </div>
            </div>
            <p className="font-bold">C.B.D.O</p>
          </div>
          <div className="flex flex-col lg:w-[387px] lg:h-[302px] justify-center w-screen lg:items-start gap-2">
            <p className="text-lg font-semibold text-center pl-5 pr-5">
              AGIS M RAMDANI
            </p>
            <div>
              <p className="text-lg font-semibold text-justify lg:text-start pl-10 pr-5">
                ● 2013 - Now
              </p>
              <p className="text-lg font-semibold text-justify lg:text-start pl-10 pr-5">
                Founder 8 Brand Business F&B Owner dari 5 Business F&B
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold  text-justify pl-10 pr-5">
                ● 2016 - Now
              </p>
              <p className="text-lg font-semibold  text-justify pl-10 pr-5">
                Business Development & R&D Consultant
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-justify lg:text-start pl-10 pr-5">
                ● 2018 - Now
              </p>
              <p className="text-lg font-semibold text-justify lg:text-start pl-10 pr-5 pb-7">
                Business Development & R&D Consultant
              </p>
            </div>
          </div>

          <div className="team">
            <div className="photo">
              <div className="overlap-group">
                <img className="ellipse-4" src={elips} alt="Ellipse 4" />
                <img className="ellipse-5" src={elips2} alt="Ellipse 5" />
                <img className="photo-1" src={T4} alt="Photo2" />
              </div>
            </div>
            <p className="font-bold">C.F.O</p>
          </div>
          <div className="flex flex-col lg:w-[387px] lg:h-[302px] justify-center w-screen lg:items-start gap-2">
            <p className="text-lg font-semibold text-center pl-5 pr-5">
              ALI AL JUFRI
            </p>
            <div>
              <p className="text-lg font-semibold text-justify lg:text-start pl-10 pr-5">
                ● 2011 - 2017
              </p>
              <p className="text-lg font-semibold text-justify lg:text-start pl-10 pr-5">
                Business Owner Fashion & Accessories
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold  text-justify pl-10 pr-5">
                ● 2011 - Now
              </p>
              <p className="text-lg font-semibold  text-justify pl-10 pr-5">
                Distributor Nasional Brand Cookies terbesar di Indonesia
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold  text-justify pl-5 pr-5">
                ● 2020 - Now
              </p>
              <p className="text-lg font-semibold  text-justify pl-5 pr-5">
                Moslem Influencer @dutakuliner 1.1 M (Tiktok Followers) * and
                still counting
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[33px]">
          <h1 className="font-normal text-5xl leading-[58px] text-center text-[#484949] font-[PoetsenOne]">
            Manajemen
          </h1>

          <p className="font-[Poppins] font-normal text-base text-center text-[#616364] w-[1200px] h-[106px] pl-[100px]">
            Manajemen Donatsu terdiri dari anggota dengan latar belakang dan
            pengalaman yang beragam, namun memiliki visi yang sama untuk menjadi
            perusahaan food & beverage yang sesuai dengan syariat Islam,
            perusahaan yang bermanfaat dengan mengutamakan pelayanan, kualitas
            produk dan harga yang terjangkau bagi seluruh lapisan masyarakat
            Indonesia
          </p>
        </div>
        <SRLWrapper>
          <div className="flex flex-col lg:flex-row gap-[39px] items-center lg:ml-[20px]">
            <img src={gmbr1} alt="" />
            <img src={gmbr2} alt="" />
            <img src={gmbr3} alt="" />
          </div>
          <div className="flex flex-col lg:flex-row gap-[39px] items-center lg:ml-[20px]">
            <img src={gmbr4} alt="" />
            <img src={gmbr5} alt="" />
            <img src={gmbr6} alt="" />
          </div>
        </SRLWrapper>
      </div>
    </div>
  );
}

export default TentangKami;
