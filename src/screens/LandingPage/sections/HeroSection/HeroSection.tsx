export const HeroSection = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start gap-12 absolute top-[188px] left-[135px]">
      <div className="flex flex-col w-[570px] items-start gap-6 relative flex-[0_0_auto]">
        <p className="relative w-[570px] mt-[-1.00px] [font-family:'SF_UI_Text-Semibold',Helvetica] font-normal text-gray-800 text-[62px] tracking-[-0.50px] leading-[80.6px] m-0">
          Your Pet's Health, Powered by AI
        </p>

        <p className="relative self-stretch [font-family:'SF_UI_Text-Regular',Helvetica] font-normal text-gray-600 text-lg tracking-[0] leading-[27px] m-0">
          Meet PetPulse — the all-in-one AI-powered health companion for your
          pet. Track symptoms, shop essentials, get emergency support, and more
          — anytime, anywhere.
        </p>

        <img
          className="absolute w-96 h-[19px] top-[72px] left-[154px]"
          alt="Line"
          src="/images/line-3.svg"
        />
      </div>

      <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
        <button className="inline-flex h-14 items-center !border-none justify-center gap-2.5 px-6 py-4 relative flex-[0_0_auto] bg-[#2d57ed] rounded-xl hover:bg-[#2448d0] transition-colors">
          <p className="relative w-fit [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Sign Up as Pet Owner
          </p>

          <img
                src="/images/send.svg"
                alt="send"
                className="w-6 h-6 object-contain pointer-events-none select-none"
              />
        </button>

        <button className="inline-flex h-14 items-center justify-center !border-none gap-2.5 px-6 py-4 relative flex-[0_0_auto] bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
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

      <div className="inline-flex items-start gap-8 relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'SF_UI_Text-Semibold',Helvetica] font-normal text-gray-800 text-2xl tracking-[0] leading-9 whitespace-nowrap">
            50k+
          </div>

          <div className="relative w-fit [font-family:'SF_UI_Text-Regular',Helvetica] font-normal text-gray-600 text-sm tracking-[0] leading-[21px] whitespace-nowrap">
            Active users
          </div>
        </div>

        <img
          className="relative self-stretch w-px object-cover"
          alt="Line"
          src="/images/line-4.svg"
        />

        <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'SF_UI_Text-Semibold',Helvetica] font-normal text-gray-800 text-2xl tracking-[0] leading-9 whitespace-nowrap">
            10M+
          </div>

          <div className="relative w-fit [font-family:'SF_UI_Text-Regular',Helvetica] font-normal text-gray-600 text-sm tracking-[0] leading-[21px] whitespace-nowrap">
            Downloads
          </div>
        </div>

        <img
          className="relative self-stretch w-px object-cover"
          alt="Line"
          src="/images/line-4.svg"
        />

        <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'SF_UI_Text-Semibold',Helvetica] font-normal text-gray-800 text-2xl tracking-[0] leading-9 whitespace-nowrap">
            200+
          </div>

          <div className="relative w-fit [font-family:'SF_UI_Text-Regular',Helvetica] font-normal text-gray-600 text-sm tracking-[0] leading-[21px] whitespace-nowrap">
            User reviews
          </div>
        </div>
      </div>
    </div>
  );
};
