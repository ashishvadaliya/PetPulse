
export const DownloadSection = (): JSX.Element => {

  return (
    <div className="flex flex-col w-full items-start gap-2.5 px-6 md:px-0 py-8 md:py-[72px] relative flex-[0_0_auto] bg-gray-100">
      <div className="container relative self-stretch w-full h-full lg:min-[1025px]:h-[460px] bg-[#2d57ed] rounded-[30px] overflow-hidden">
        <div className="relative w-full h-full lg:min-[1025px]:h-[546px] lg:min-[1025px]:top-[-49px] lg:min-[1025px]:left-[60px]">

          <div className="inline-flex flex-col items-start gap-8 md:gap-12 lg:min-[1025px]:absolute py-6 lg:min-[1025px]:py-0 lg:min-[1025px]:top-[161px] left-0">
            <div className="flex flex-col items-start gap-3 md:gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'SF_UI_Text-Semibold',Helvetica] font-normal text-white text-[28px] md:text-[42px] tracking-[0] leading-[46px] md:leading-[63px]">
                Download &amp; Get Started
              </div>

              <p className="relative w-full lg:min-[1025px]:w-[600px] [font-family:'SF_UI_Text-Regular',Helvetica] font-normal text-white text-base md:text-lg tracking-[0] leading-[27px] m-0">
                Stay ahead of your pet&#39;s health with PetPulse. Whether
                you&#39;re a loving pet parent or a vet professional, PetPulse
                has you covered.
              </p>
            </div>

            <div className="inline-flex items-center gap-4 relative flex-[0_0_auto] w-full">
              {/* Updated Download App CTA button */}
              <button
                onClick={() => window.open("https://www.petpulseai.com/install", "_blank")}

                className="inline-flex h-[46px] md:h-14 w-full md:w-fit items-center justify-center gap-2.5 px-6 py-4 relative flex-[0_0_auto] bg-white rounded-xl !border-none transition-colors duration-300 cursor-pointer"
              >
                <div className="relative [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-gray-800 text-sm md:text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                  Download the App
                </div>
                <img
                  src="/images/download.svg"
                  alt="download"
                  className="w-5 h-5 md:w-6 md:h-6 object-contain pointer-events-none select-none"
                />
              </button>
            </div>
          </div>

          <div className="relative flex justify-center lg:min-[1025px]:absolute w-full h-full lg:min-[1025px]:w-[380px] lg:min-[1025px]:h-[380px] lg:min-[1025px]:top-[89px] lg:min-[1025px]:left-[650px]">
            <img
              className="absolute w-[91px] h-[61px] md:w-[216px] md:h-[135px] top-[40%] lg:min-[1025px]:top-[220px] left-0 lg:min-[1025px]:-left-24"
              alt="Popup"
              src="/images/decorator-white.svg"
            />
            <img
              className="absolute w-[91px] h-[61px] md:w-[216px] md:h-[135px] bottom-6 lg:min-[1025px]:-bottom-3 right-4 lg:min-[1025px]:-right-40"
              alt="Popup"
              src="/images/decorator-white.svg"
            />
            {/* White Glow Background */}
            <div
              className="absolute inset-0 rounded-full bg-white opacity-60 z-0"
              style={{ filter: 'blur(120px)' }}
            />

            {/* Phone Image */}
            <div className="relative z-10 w-[295px] h-[295px] md:w-full md:h-full">
              <img
                src="/images/phone-mockup.png"
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
