import React from "react";
import { HeroSection } from "./sections/HeroSection";
import { MainContainer } from "./sections/MainContainer";
import { Navbar } from "./sections/Navbar";
import { OfflineAlert } from "../../components/OfflineAlert";

export const LandingPage = (): JSX.Element => {
  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="1163:6568"
    >
      <OfflineAlert />
      <div className="bg-white w-[1440px] h-[4740px] relative">
        <div className="absolute w-[1440px] h-[772px] top-0 left-0">
          <div className="absolute w-[1440px] h-[772px] top-0 left-0">
            <div className="absolute w-[703px] h-[756px] top-4 left-[737px]">
              <div className="absolute w-[619px] h-[405px] top-[167px] left-[21px] rotate-[120.00deg]">
                <div className="relative h-[405px]">
                  <div className="absolute w-[417px] h-[405px] top-0 left-0 bg-[#2d57ed] rounded-[208.45px/202.55px] blur-[150px] opacity-20" />

                  <div className="absolute w-[417px] h-[405px] top-0 left-[202px] bg-[#2d57ed] rounded-[208.45px/202.55px] blur-[150px] opacity-20" />
                </div>
              </div>

              <div className="absolute w-[216px] h-[135px] top-[196px] left-[21px]">
                <div className="absolute w-[11px] h-[11px] top-[74px] left-[91px] bg-[#2d57ed] rounded-[5.74px]" />

                <div className="absolute w-[5px] h-[5px] top-[57px] left-[43px] bg-[#2d57ed] rounded-[2.3px]" />

                <div className="absolute w-[7px] h-[7px] top-32 left-[38px] bg-[#2d57ed] rounded-[3.45px]" />

                <div className="absolute w-[7px] h-[7px] top-[107px] left-[209px] bg-[#2d57ed] rounded-[3.45px]" />

                <div className="absolute w-[7px] h-[7px] top-0.5 left-[107px] bg-[#2d57ed] rounded-[3.45px]" />

                <div className="absolute w-[3px] h-[3px] top-[35px] left-0 bg-[#2d57ed] rounded-[1.72px]" />

                <div className="absolute w-[3px] h-[3px] top-0 left-[9px] bg-[#2d57ed] rounded-[1.72px]" />
              </div>

              <div className="top-[189px] left-[443px] absolute w-[216px] h-[135px]">
                <div className="absolute w-[11px] h-[11px] top-[74px] left-[91px] bg-[#2d57ed] rounded-[5.74px]" />

                <div className="absolute w-[5px] h-[5px] top-[57px] left-[43px] bg-[#2d57ed] rounded-[2.3px]" />

                <div className="absolute w-[7px] h-[7px] top-32 left-[38px] bg-[#2d57ed] rounded-[3.45px]" />

                <div className="absolute w-[7px] h-[7px] top-[107px] left-[209px] bg-[#2d57ed] rounded-[3.45px]" />

                <div className="absolute w-[7px] h-[7px] top-0.5 left-[107px] bg-[#2d57ed] rounded-[3.45px]" />

                <div className="absolute w-[3px] h-[3px] top-[35px] left-0 bg-[#2d57ed] rounded-[1.72px]" />

                <div className="absolute w-[3px] h-[3px] top-0 left-[9px] bg-[#2d57ed] rounded-[1.72px]" />
              </div>

              <img
                className="absolute w-[561px] h-[684px] top-[72px] left-[142px]"
                alt="Popup"
                src="https://c.animaapp.com/A7ONEzUZ/img/popup@4x.png"
              />
            </div>

            <Navbar />
          </div>

          <HeroSection />
        </div>

        <div className="absolute w-[1440px] h-[3968px] top-[772px] left-0">
          <MainContainer />
          <img
            className="absolute w-[189px] h-[5px] top-[1488px] left-[431px] object-cover"
            alt="Line"
            src="https://c.animaapp.com/A7ONEzUZ/img/line-230.svg"
          />

          <img
            className="absolute w-[187px] h-[5px] top-[1488px] left-[821px] object-cover"
            alt="Line"
            src="https://c.animaapp.com/A7ONEzUZ/img/line-231.svg"
          />
        </div>
      </div>
    </div>
  );
};
