export const HeroSection = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start gap-6 md:gap-12 mt-6 lg:min-[1025px]:mt-[188px] mx-6 lg:min-[1025px]:mx-0 lg:min-[1025px]:ml-[138px]">
      <div className="flex flex-col w-full lg:min-[1025px]:w-[570px] lg:min-[1025px]:items-start items-center gap-4 md:gap-6 relative flex-[0_0_auto]">
        <p className="relative w-full md:w-[570px] lg:min-[1025px]:text-start text-start font-semibold [font-family:'SF_UI',Helvetica] text-gray-800 text-[38px] md:text-[62px] tracking-[-0.50px] leading-[50px] md:leading-[80.6px] m-0">
          Your Pet's Health, Powered by AI
        </p>

        <p className="relative self-stretch [font-family:'SF_UI',Helvetica] font-normal text-gray-600 text-base md:text-lg tracking-[0.5px] leading-[25px] md:leading-[27px] m-0">
          Meet PetPulse — the all-in-one AI-powered health companion for your
          pet. Track symptoms, shop essentials, get emergency support, and more
          — anytime, anywhere.
        </p>

        <img
          className="absolute w-[231px] h-[11px] md:w-96 md:h-[19px] top-[48px] left-20 md:left-[154px]"
          alt="Line"
          src="/images/line-3.svg"
        />
      </div>

      <div className="inline-flex w-full md:flex-row flex-col items-center lg:min-[1025px]:justify-start justify-center gap-4 relative flex-[0_0_auto]">
        <button className="inline-flex cursor-pointer w-full md:w-auto h-[46px] md:h-14 items-center !border-none justify-center gap-2.5 px-6 py-4 relative flex-[0_0_auto] bg-[#2d57ed] rounded-xl hover:bg-[#2448d0] transition-colors">
          <p className="relative w-fit [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-white text-sm md:text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Sign Up as Pet Owner
          </p>

          <img
                src="/images/send.svg"
                alt="send"
                className="w-5 h-5 md:w-6 md:h-6 object-contain pointer-events-none select-none"
              />
        </button>

        <button className="inline-flex cursor-pointer w-full md:w-auto h-[46px] md:h-14 items-center justify-center !border-none gap-2.5 px-6 py-4 relative flex-[0_0_auto] bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
          <div className="relative w-fit [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-gray-800 text-sm md:text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Download the App
          </div>

          <img
                src="/images/download.svg"
                alt="download"
                className="w-5 h-5 md:w-6 md:h-6 object-contain pointer-events-none select-none"
              />
        </button>
      </div>

      <div className="w-full inline-flex items-start justify-center lg:min-[1025px]:justify-start gap-8 relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start gap-[6px] md:gap-2 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'SF_UI_Text-Semibold',Helvetica] font-normal text-gray-800 text-xl md:text-2xl tracking-[0] leading-9 whitespace-nowrap">
            50k+
          </div>

          <div className="relative w-fit [font-family:'SF_UI_Text-Regular',Helvetica] font-normal text-gray-600 text-xs md:text-sm tracking-[0] leading-[21px] whitespace-nowrap">
            Active users
          </div>
        </div>

        <img
          className="relative self-stretch w-px object-cover"
          alt="Line"
          src="/images/line-4.svg"
        />

        <div className="inline-flex flex-col items-start gap-[6px] md:gap-2 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'SF_UI_Text-Semibold',Helvetica] font-normal text-gray-800 text-xl md:text-2xl tracking-[0] leading-9 whitespace-nowrap">
            10M+
          </div>

          <div className="relative w-fit [font-family:'SF_UI_Text-Regular',Helvetica] font-normal text-gray-600 text-xs md:text-sm tracking-[0] leading-[21px] whitespace-nowrap">
            Downloads
          </div>
        </div>

        <img
          className="relative self-stretch w-px object-cover"
          alt="Line"
          src="/images/line-4.svg"
        />

        <div className="inline-flex flex-col items-start gap-[6px] md:gap-2 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'SF_UI_Text-Semibold',Helvetica] font-normal text-gray-800 text-xl md:text-2xl tracking-[0] leading-9 whitespace-nowrap">
            200+
          </div>

          <div className="relative w-fit [font-family:'SF_UI_Text-Regular',Helvetica] font-normal text-gray-600 text-xs md:text-sm tracking-[0] leading-[21px] whitespace-nowrap">
            User reviews
          </div>
        </div>
      </div>
    </div>
  );
};
