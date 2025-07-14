import React from "react";

export const DownloadSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start gap-2.5 py-[72px] relative flex-[0_0_auto] bg-gray-100">
      <div className="container relative self-stretch w-full h-[460px] bg-[#2d57ed] rounded-[30px] overflow-hidden">
        <div className="relative w-full h-[546px] top-[-49px] left-[60px]">
          <div className="top-[318px] left-[565px] absolute w-[216px] h-[135px]">
            <div className="absolute w-[11px] h-[11px] top-[74px] left-[91px] bg-white rounded-[5.74px]" />
            <div className="absolute w-[5px] h-[5px] top-[57px] left-[43px] bg-white rounded-[2.3px]" />
            <div className="absolute w-[7px] h-[7px] top-32 left-[38px] bg-white rounded-[3.45px]" />
            <div className="absolute w-[7px] h-[7px] top-[107px] left-[209px] bg-white rounded-[3.45px]" />
            <div className="absolute w-[7px] h-[7px] top-0.5 left-[107px] bg-white rounded-[3.45px]" />
            <div className="absolute w-[3px] h-[3px] top-[35px] left-0 bg-white rounded-[1.72px]" />
            <div className="absolute w-[3px] h-[3px] top-0 left-[9px] bg-white rounded-[1.72px]" />
          </div>

          <div className="top-[342px] left-[966px] absolute w-[216px] h-[135px]">
            <div className="absolute w-[11px] h-[11px] top-[74px] left-[91px] bg-white rounded-[5.74px]" />
            <div className="absolute w-[5px] h-[5px] top-[57px] left-[43px] bg-white rounded-[2.3px]" />
            <div className="absolute w-[7px] h-[7px] top-32 left-[38px] bg-white rounded-[3.45px]" />
            <div className="absolute w-[7px] h-[7px] top-[107px] left-[209px] bg-white rounded-[3.45px]" />
            <div className="absolute w-[7px] h-[7px] top-0.5 left-[107px] bg-white rounded-[3.45px]" />
            <div className="absolute w-[3px] h-[3px] top-[35px] left-0 bg-white rounded-[1.72px]" />
            <div className="absolute w-[3px] h-[3px] top-0 left-[9px] bg-white rounded-[1.72px]" />
          </div>

          <div className="inline-flex flex-col items-start gap-12 absolute top-[161px] left-0">
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'SF_UI_Text-Semibold',Helvetica] font-normal text-white text-[42px] tracking-[0] leading-[63px]">
                Download &amp; Get Started
              </div>

              <p className="relative w-[600px] [font-family:'SF_UI_Text-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[27px] m-0">
                Stay ahead of your pet&#39;s health with PetPulse. Whether
                you&#39;re a loving pet parent or a vet professional, PetPulse
                has you covered.
              </p>
            </div>

            <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
              {/* Updated Download App CTA button */}
              <button
                className="inline-flex h-14 items-center justify-center gap-2.5 px-6 py-4 relative flex-[0_0_auto] bg-white rounded-xl !border-none transition-colors duration-300 cursor-pointer"
              >
                <div className="relative w-fit [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-gray-800 text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                  Download the App
                </div>
                <img
                  src="/images/download.svg"
                  alt="download"
                  className="w-6 h-6 object-contain pointer-events-none select-none"
                />
              </button>
            </div>
          </div>

          <div className="absolute w-[380px] h-[380px] top-[89px] left-[650px]">
            {/* White Glow Background */}
            <div
              className="absolute inset-0 rounded-full bg-white opacity-60 z-0"
              style={{ filter: 'blur(120px)' }}
            />

            {/* Phone Image */}
            <div className="relative z-10 w-full h-full">
              <img
                src="/images/phone-mockup.svg"
                alt="glow-1"
                className="w-full h-full object-contain pointer-events-none select-none"
              />
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};
