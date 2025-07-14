import { HeroSection } from "./sections/HeroSection";
import { MainContainer } from "./sections/MainContainer";
import { Navbar } from "./sections/Navbar";
import { OfflineAlert } from "../../components/OfflineAlert";

export const LandingPage = (): JSX.Element => {
  return (
    <div className=" bg-white flex justify-between w-full">
      <OfflineAlert />
      <div className="bg-white w-full max-w-full relative">
        {/* HEADER + HERO SECTION */}
        <div className="w-full h-[772px] relative">
          {/* Decorative visuals */}
          <div className="absolute w-[703px] h-[756px] top-4 right-0">
                <img
                  src="/images/glow.png"
                  alt="glow-1"
                  className="absolute z-0 w-[600px] h-[550px] top-20 -left-[100px] pointer-events-none select-none"
                />
                <img
                  src="/images/glow.png"
                  alt="glow-2"
                  className="absolute z-10 w-[450px] h-[600px] -top-10 blur-[37px] right-[0px] pointer-events-none select-none"
                />



            {/* Dots */}
            <div className="absolute w-[216px] h-[135px] top-[196px] left-[21px]">
              <div className="absolute w-[11px] h-[11px] top-[74px] left-[91px] bg-[#2d57ed] rounded-full" />
              <div className="absolute w-[5px] h-[5px] top-[57px] left-[43px] bg-[#2d57ed] rounded-full" />
              <div className="absolute w-[7px] h-[7px] top-32 left-[38px] bg-[#2d57ed] rounded-full" />
              <div className="absolute w-[7px] h-[7px] top-[107px] left-[209px] bg-[#2d57ed] rounded-full" />
              <div className="absolute w-[7px] h-[7px] top-0.5 left-[107px] bg-[#2d57ed] rounded-full" />
              <div className="absolute w-[3px] h-[3px] top-[35px] left-0 bg-[#2d57ed] rounded-full" />
              <div className="absolute w-[3px] h-[3px] top-0 left-[9px] bg-[#2d57ed] rounded-full" />
            </div>

            <div className="absolute top-[189px] left-[443px] w-[216px] h-[135px]">
              <div className="absolute w-[11px] h-[11px] top-[74px] left-[91px] bg-[#2d57ed] rounded-full" />
              <div className="absolute w-[5px] h-[5px] top-[57px] left-[43px] bg-[#2d57ed] rounded-full" />
              <div className="absolute w-[7px] h-[7px] top-32 left-[38px] bg-[#2d57ed] rounded-full" />
              <div className="absolute w-[7px] h-[7px] top-[107px] left-[209px] bg-[#2d57ed] rounded-full" />
              <div className="absolute w-[7px] h-[7px] top-0.5 left-[107px] bg-[#2d57ed] rounded-full" />
              <div className="absolute w-[3px] h-[3px] top-[35px] left-0 bg-[#2d57ed] rounded-full" />
              <div className="absolute w-[3px] h-[3px] top-0 left-[9px] bg-[#2d57ed] rounded-full" />
            </div>

            <img
              className="absolute w-[561px] h-[684px] top-[72px] left-[142px]"
              alt="Popup"
              src="/images/popup.png"
            />
          </div>

          <Navbar />
          <HeroSection />
        </div>

        {/* MAIN SECTION */}
        <div className="relative w-full h-[3968px]">
          <MainContainer />
        </div>
      </div>
    </div>
  );
};
