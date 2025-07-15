import { HeroSection } from "./sections/HeroSection";
import { MainContainer } from "./sections/MainContainer";
import { Navbar } from "./sections/Navbar";
import { OfflineAlert } from "../../components/OfflineAlert";
import { useEffect, useRef, useState } from "react";

export const LandingPage = (): JSX.Element => {

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      setHasScrolled(el.scrollTop > 0);
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      ref={containerRef}
      className="bg-white w-full flex flex-col relative h-screen">
      <OfflineAlert />
      <Navbar hasScrolled={hasScrolled} />

      {/* HEADER + HERO SECTION + GLOW */}
      <div className="w-full relative">
        <div className="w-full flex flex-col justify-center lg:min-[1025px]:flex-row relative">
          {/* LEFT: Hero Section */}
          <div className="w-full lg:min-[1025px]:w-1/2 relative z-10 contents">
            <HeroSection />
          </div>

          {/* RIGHT: Decorative Popup */}
          <div className="w-full lg:min-[1025px]:w-[703px] md:h-[684px]">
            {/* Dots */}
            <div className="relative w-full lg:min-[1025px]:w-full flex justify-end items-center min-h-[408px] md:min-h-[684px]">
              <div className="relative w-[327px] max-w-[327px] md:max-w-full md:w-full h-[430px] md:h-[684px]">
                <img
                  className="absolute w-[91px] h-[61px] md:w-[216px] md:h-[135px] top-24 md:top-[196px] -left-10 md:left-0"
                  alt="Popup"
                  src="/images/decorator.svg"
                />
                <img
                  className="absolute w-[91px] h-[61px] md:w-[216px] md:h-[135px] top-28 md:top-[196px] right-16 md:right-11"
                  alt="Popup"
                  src="/images/decorator-1.svg"
                />
                <div
                  className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] rounded-full bg-[#2d57ed] opacity-30 z-0 top-10 sm:top-28 sm:right-[12rem]"
                  style={{ filter: 'blur(120px)' }}
                />
                <div
                  className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] rounded-full bg-[#2d57ed] opacity-30 z-0 -bottom-10 sm:bottom-20 -left-10 sm:left-0"
                  style={{ filter: 'blur(120px)' }}
                />

                <img
                  className="absolute w-[327px] max-w-[327px] md:max-w-full h-[408px] md:w-[561px] md:h-[684px] md:top-[1px] top-[24px] right-0"
                  alt="Popup"
                  src="/images/popup.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="relative w-full">
        <MainContainer />
      </div>
    </div>
  );
};
