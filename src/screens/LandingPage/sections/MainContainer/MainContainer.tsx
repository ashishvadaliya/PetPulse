import { PartnersSection } from "../PartnersSection";
import { FAQSection } from "../FAQSection";
import { DownloadSection } from "../DownloadSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useRef, useState } from "react";
import Icon from "../../../../components/Utils/Icon";

export const MainContainer = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const testimonials = [
    {
      quote:
        "PetPulse helped us detect a serious allergy early on — total game changer!",
      author: "Sarah & Max",
      image: "/images/testimonial-content.png",
    },
    {
      quote:
        "The Lost & Found tool reunited us with our cat in hours.",
      author: "Raj & Mimi",
      image: "/images/testimonial-image.png",
    },
    {
      quote:
        "PetPulse helped us detect a serious allergy early on — total game changer!",
      author: "Sarah & Max",
      image: "/images/testimonial-content.png",
    },
    {
      quote:
        "The Lost & Found tool reunited us with our cat in hours.",
      author: "Raj & Mimi",
      image: "/images/testimonial-image.png",
    },
    {
      quote:
        "PetPulse helped us detect a serious allergy early on — total game changer!",
      author: "Sarah & Max",
      image: "/images/testimonial-content.png",
    },
    {
      quote:
        "The Lost & Found tool reunited us with our cat in hours.",
      author: "Raj & Mimi",
      image: "/images/testimonial-image.png",
    },
  ];
  return (
    <div className=" flex flex-col w-full items-start absolute top-0 left-0">
      <PartnersSection />

      <div className="container flex flex-col items-center gap-6 md:gap-12 py-8 md:py-[72px] relative self-stretch w-full flex-[0_0_auto] bg-white">
        <div className="flex flex-col w-full md:w-[570px] items-center gap-1 md:gap-4 relative flex-[0_0_auto]">
          <div className="w-full mt-[-3.00px] text-center font-semibold [font-family:'SF_UI',Helvetica] text-gray-800 text-[28px] md:text-[42px] leading-[55px] md:leading-[63px] whitespace-nowrap relative tracking-[0]">
            Why PetPulse?
          </div>

          <p className="self-stretch [font-family:'SF_UI_Text-Regular',Helvetica] text-gray-600 text-base md:text-lg text-center md:leading-[27px] relative font-normal tracking-[0] m-0">
            We know your pet is family — so we’ve built the only app you’ll ever
            need to keep them happy and healthy.
          </p>
        </div>

        <div className="flex-col items-start justify-center p-2 md:py-3 bg-gray-100 rounded-[30px] flex gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <div className="items-center flex flex-wrap gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center gap-2 md:gap-3 p-3 md:p-4 md:pb-5 relative flex-1 grow bg-white rounded-3xl shadow-[0px_4px_12px_#00000014]">
              <div className="flex flex-col items-center gap-3 md:gap-4 px-4 py-2 md:py-4 md:px-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-gray-800 text-lg md:text-xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
                  AI Symptom Checker
                </div>

                <p className="relative self-stretch [font-family:'SF_UI_Text-Regular',Helvetica] font-normal text-gray-600 text-xs md:text-sm text-center tracking-[0.5px] leading-[19px] md:leading-[21px] m-0">
                  We know your pet is family — so we’ve built the only app
                  you’ll ever need to keep them happy and healthy.
                </p>
              </div>

              <img
                className="relative self-stretch w-full h-[200px] md:h-[220px] rounded-2xl object-cover"
                alt="Feature image"
                src="/images/feature-image.png"
              />
            </div>

            <div className="flex flex-col items-center gap-2 md:gap-3 p-3 md:p-4 md:pb-5 relative flex-1 grow bg-white rounded-3xl shadow-[0px_4px_12px_#00000014]">
              <div className="flex flex-col items-center gap-3 md:gap-4 px-4 py-2 md:py-4 md:px-4 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative w-fit [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-gray-800 text-lg md:text-xl text-center tracking-[0] leading-[30px] whitespace-nowrap m-0">
                  Lost &amp; Found Pet Locator
                </p>

                <p className="relative self-stretch [font-family:'SF_UI_Text-Regular',Helvetica] font-normal text-gray-600 text-xs md:text-sm text-center tracking-[0.5px] leading-[19px] md:leading-[21px] m-0">
                  We know your pet is family — so we’ve built the only app
                  you’ll ever need to keep them happy and healthy.
                </p>
              </div>

              <img
                className="relative self-stretch w-full h-[200px] md:h-[220px] rounded-2xl object-cover"
                alt="Feature image"
                src="/images/feature-image-1.png"
              />
            </div>

            <div className="flex flex-col items-center gap-2 md:gap-3 p-3 md:p-4 md:pb-5 relative flex-1 grow bg-white rounded-3xl shadow-[0px_4px_12px_#00000014]">
              <div className="flex flex-col items-center gap-3 md:gap-4 px-4 py-2 md:py-4 md:px-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-[207px] mt-[-1.00px] [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-gray-800 text-lg md:text-xl text-center tracking-[0] leading-[30px]">
                  Emergency Help
                </div>

                <p className="relative self-stretch [font-family:'SF_UI_Text-Regular',Helvetica] font-normal text-gray-600 text-xs md:text-sm text-center tracking-[0.5px] leading-[19px] md:leading-[21px] m-0">
                  We know your pet is family — so we’ve built the only app
                  you’ll ever need to keep them happy and healthy.
                </p>
              </div>

              <img
                className="relative self-stretch w-full h-[200px] md:h-[220px] rounded-2xl object-cover"
                alt="Feature image"
                src="/images/feature-image-2.png"
              />
            </div>
          </div>

          <div className="flex items-center md:flex-row flex-col gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center gap-2 md:gap-3 p-3 md:p-4 relative flex-1 grow bg-white rounded-3xl shadow-[0px_4px_12px_#00000014]">
              <div className="flex flex-col items-center gap-3 md:gap-4 px-4 py-2 md:py-4 md:px-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-gray-800 text-lg md:text-xl text-center tracking-[0] leading-[25px] md:leading-[30px] whitespace-nowrap">
                  Pet Adoption Listings
                </div>

                <p className="relative self-stretch [font-family:'SF_UI_Text-Regular',Helvetica] font-normal text-gray-600 text-xs md:text-sm text-center tracking-[0.5px] leading-[19px] md:leading-[21px] m-0">
                  We know your pet is family — so we’ve built the only app
                  you’ll ever need to keep them happy and healthy.
                </p>
              </div>

              <img
                className="relative self-stretch w-full h-[200px] md:h-[220px] rounded-2xl object-cover"
                alt="Feature image"
                src="/images/feature-image-3.png"
              />
            </div>

            <div className="flex flex-col items-center gap-2 md:gap-3 p-3 md:p-4 relative flex-1 grow bg-white rounded-3xl shadow-[0px_4px_12px_#00000014]">
              <div className="flex flex-col items-center gap-3 md:gap-4 px-4 py-2 md:py-4 md:px-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-[216px] mt-[-1.00px] [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-gray-800 text-lg md:text-xl text-center tracking-[0] leading-[30px]">
                  Pet Shop Marketplace
                </div>

                <p className="relative self-stretch [font-family:'SF_UI_Text-Regular',Helvetica] font-normal text-gray-600 text-xs md:text-sm text-center tracking-[0.5px] leading-[20px] md:leading-[21px] m-0">
                  We know your pet is family — so we’ve built the only app
                  you’ll ever need to keep them happy and healthy.
                </p>
              </div>

              <img
                className="relative self-stretch w-full h-[200px] md:h-[220px] rounded-2xl object-cover"
                alt="Feature image"
                src="/images/feature-image-4.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 md:py-[72px] w-full flex-[0_0_auto] bg-gray-100">
        <div className="container flex flex-col items-center gap-6 md:gap-12 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'SF_UI',Helvetica] font-semibold text-gray-800 text-[28px] md:text-[42px] tracking-[0] leading-[35px] md:leading-[63px] whitespace-nowrap">
            How It Works
          </div>

          <div className="relative flex md:flex-row flex-col items-start md:items-center gap-4 self-stretch w-full flex-[0_0_auto]">
            {/* Card 1 */}
            <div className="flex md:flex-col h-56 items-center gap-4 md:gap-[30px] p-4 md:p-[30px] flex-1 grow">
              <div className="flex px-3 w-[46px] h-[46px] md:w-16 md:h-16 items-center justify-center bg-[#2d57ed] rounded-full">
                <img
                  src="/images/profile-circle.svg"
                  alt="Profile"
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </div>

              <div className="flex flex-col items-start md:items-center gap-2 self-stretch w-full">
                <div className="font-sf-medium text-gray-800 text-lg md:text-xl font-medium leading-[30px] whitespace-nowrap">
                  Create a profile
                </div>
                <p className="font-sf-medium text-gray-600 text-xs md:text-sm font-normal m-0 leading-[22.4px]">
                  Add your pet’s info in seconds.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex md:flex-col h-56 items-center gap-4 md:gap-[30px] p-4 md:p-[30px] flex-1 grow">
              <div className="flex px-3 w-[46px] h-[46px] md:w-16 md:h-16 items-center justify-center bg-[#2d57ed] rounded-full">
                <img
                  src="/images/magicpen.svg"
                  alt="Magic pen"
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </div>

              <div className="font-sf-medium flex flex-col items-start md:items-center gap-2 self-stretch w-full">
                <div className="text-gray-800 text-lg md:text-xl font-medium text-center leading-[30px] whitespace-nowrap">
                  Use Powerful Tools
                </div>
                <p className="text-gray-600 text-xs md:text-sm font-normal text-center m-0 md:leading-[22.4px]">
                  Check symptoms, shop, or find a vet.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex md:flex-col h-56 items-center gap-4 md:gap-[30px] p-4 md:p-[30px] flex-1 grow">
              <div className="flex w-[46px] h-[46px] md:w-16 md:h-16 items-center justify-center bg-[#2d57ed] rounded-full">
                <img
                  src="/images/Live-Support.svg"
                  alt="Step icon"
                  className="w-14 h-14 md:w-16 md:h-16 mr-2.5 mt-1.5"
                />
              </div>

              <div className="font-sf-medium flex flex-col items-start md:items-center gap-2 self-stretch w-full">
                <div className="text-gray-800 text-lg md:text-xl font-medium text-center leading-[30px] whitespace-nowrap">
                  Get real-time help
                </div>
                <p className="text-gray-600 text-xs md:text-sm font-normal text-center m-0 md:leading-[22.4px]">
                  Instant insights, alerts, and expert care.
                </p>
              </div>
            </div>
            <div className="hidden md:block absolute w-[184px] h-[5px] top-14 left-[25%]">
              <img
                className="w-[184px] h-[5px] object-cover"
                alt="Line"
                src="images/line-230.svg"
              />
            </div>
            <div className="hidden md:block absolute w-[184px] h-[5px] bottom-24 md:top-14 md:right-[24%]">
              <img
                className="w-[184px] h-[5px] object-cover"
                alt="Line"
                src="images/line-230.svg"
              />
            </div>

            <div className="md:hidden block absolute w-[5px] h-[46px] top-[25%] left-9">
              <img
                className="w-[5px] h-[46px] object-cover"
                alt="Line"
                src="images/line-vertical.svg"
              />
            </div>
            <div className="md:hidden block absolute w-[5px] h-[46px] bottom-[25%] left-9">
              <img
                className="w-[5px] h-[46px] object-cover"
                alt="Line"
                src="images/line-vertical.svg"
              />
            </div>

          </div>

        </div>
      </div>

      <div className="container flex flex-col items-center gap-6 md:gap-12 py-8 md:py-[72px] relative self-stretch w-full flex-[0_0_auto] bg-white">
        <div className="flex flex-col w-full md:w-[570px] items-center gap-3 md:gap-4 relative flex-[0_0_auto]">
          <div className="relative w-fit text-center mt-[-1.00px] [font-family:'SF_UI',Helvetica] font-semibold text-gray-800 text-[28px] md:text-[42px] tracking-[0] leading-[45px] md:leading-[63px]">
            Loved by Pet Parents
          </div>

          <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <img
              className="relative w-5 h-5 md:w-[22.82px] md:h-[21.71px]"
              alt="Star"
              src="/images/star.svg"
            />

            <p className="relative w-fit [font-family:'SF_UI_Text-Regular',Helvetica] font-normal text-gray-600 text-base md:text-lg text-center tracking-[0] md:leading-[27px] m-0">
              4.9/5 by 10,000+ pet parents
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-3 p-2 md:p-3 relative w-full h-auto bg-gray-100 rounded-[30px] overflow-hidden">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            slidesPerView={1}
            spaceBetween={16}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              220: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
            modules={[Autoplay, Navigation]}
            navigation={false}
            className="w-full"
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex items-start md:flex-row flex-col justify-center gap-2 md:gap-3 p-3 md:p-4 bg-white rounded-3xl shadow-[0px_4px_12px_#00000014] w-full md:w-[567px] h-full">
                  <img
                    className="w-full md:w-[200px] h-[200px] md:h-[223px] object-cover object-top rounded-2xl"
                    alt="Testimonial"
                    src={item.image}
                  />

                  <div className="flex flex-col items-end gap-3 md:gap-4 p-3 md:p-4 flex-1 grow w-full">
                    <div className="flex items-start justify-between w-full">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <img
                            key={i}
                            className=" w-5 h-5 md:w-[22.82px] md:h-[21.71px]"
                            alt="Star"
                            src="/images/star.svg"
                          />
                        ))}
                      </div>
                      <img
                        className="w-[26.25px] md:w-[31.5px] h-5 md:h-6"
                        alt="Quote icon"
                        src="/images/quote.png"
                      />
                    </div>

                    <p className="text-gray-600 text-base md:text-lg tracking-[0.5px] md:tracking-[0] leading-[24px] md:leading-[27px] font-medium [font-family:'SF_UI',Helvetica] m-0">
                      {item.quote}
                    </p>

                    <div className="flex items-center gap-5 w-full">
                      <div className="w-1 h-[42px] md:h-[54px] bg-[#2d57ed] rounded-[40px]" />
                      <div className="text-gray-800 text-lg md:text-xl leading-[30px] whitespace-nowrap font-[SF_UI_Text-Medium]">
                        {item.author}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Navigation buttons (unchanged layout) */}

        <div className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
          <div
            onClick={() => swiperRef.current?.slidePrev()}
            tabIndex={-1}
            draggable={false}
            aria-disabled={activeIndex === 0}
            className={`flex justify-center items-center w-[46px] h-[46px] md:w-14 md:h-14 cursor-pointer rounded-full duration-300 select-none ${activeIndex === 0 ? " bg-white" : "opacity-100 bg-button"
              }`}
            style={{ border: "1px solid #2D57ED" }}
          >
            <Icon icon="left-arrow" className={`w-[10.95px] h-[13.14px] md:w-[13px] md:h-4 cursor-pointer ${activeIndex === 0 ? "text-button" : " text-white"
              }`} />
          </div>
          <div
            onClick={() => swiperRef.current?.slideNext()}
            tabIndex={-1}
            draggable={false}
            aria-disabled={activeIndex === 0}
            className={`flex justify-center items-center w-[46px] h-[46px] md:w-14 md:h-14 cursor-pointer rounded-full duration-300 select-none ${activeIndex === testimonials.length - (typeof window !== "undefined" && window.innerWidth >= 768 ? 2 : 1)
              ? "bg-white"
              : "bg-button"
              }`}
            style={{ border: "1px solid #2D57ED" }}
          >
            <Icon icon="right-arrow" className={`w-[10.95px] h-[13.14px] md:w-[13px] md:h-4 cursor-pointer ${activeIndex === testimonials.length - (typeof window !== "undefined" && window.innerWidth >= 768 ? 2 : 1) ? "text-button" : " text-white"
              }`} />
          </div>
          {/* <img
            onClick={() => swiperRef.current?.slidePrev()}
            tabIndex={-1}
            draggable={false}
            aria-disabled={activeIndex === 0}
            className={`w-[46px] h-[46px] md:w-14 md:h-14 cursor-pointer transition-opacity rounded-full duration-300 select-none ${activeIndex === 0 ? "opacity-50 pointer-events-none" : "opacity-100"
              }`}
            alt="Previous"
            src="/images/left-arrow.svg"
          /> */}

          {/* <img
            onClick={() => swiperRef.current?.slideNext()}
            tabIndex={-1}
            draggable={false}
            aria-disabled={activeIndex === 0}
            className={`w-[46px] h-[46px] md:w-14 md:h-14 cursor-pointer transition-opacity rounded-full duration-300 select-none ${activeIndex === testimonials.length - (typeof window !== "undefined" && window.innerWidth >= 768 ? 2 : 1)
              ? "opacity-50 pointer-events-none"
              : "opacity-100"
              }`}
            alt="Next"
            src="/images/right-arrow.svg"
          /> */}
        </div>
      </div>

      <DownloadSection />

      <FAQSection />

      <footer className="flex flex-col w-full items-center relative flex-[0_0_auto] bg-gray-800 overflow-hidden">
        <div className="container flex flex-col md:flex-row gap-6 h-full md:h-24 items-center justify-between py-6 pb-4 md:pb-[30px] md:py-[30px] relative self-stretch w-full">
          <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
            <img
              className="relative w-[110px] h-8 md:w-[124px] md:h-9"
              alt="Logo white"
              src="/images/footer-logo.svg"
            />
          </div>

          <div className="inline-flex items-start gap-[42px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-white text-xs md:text-sm tracking-[0] leading-[21px] whitespace-nowrap">
              Home
            </div>

            <div className="relative w-fit mt-[-1.00px] [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-white text-xs md:text-sm tracking-[0] leading-[21px] whitespace-nowrap">
              About
            </div>

            <div className="relative w-fit mt-[-1.00px] [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-white text-xs md:text-sm tracking-[0] leading-[21px] whitespace-nowrap">
              Features
            </div>

            <div className="relative w-fit mt-[-1.00px] [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-white text-xs md:text-sm tracking-[0] leading-[21px] whitespace-nowrap">
              Contact Us
            </div>
          </div>

          <div className="inline-flex items-start justify-center gap-4 relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="flex h-6 md:h-[30px] items-start relative w-full">
                <div className="flex flex-col items-center justify-center cursor-pointer pt-[1.78e-15px] pl-[1.78e-15px] pr-0 pb-0 w-6 h-6 md:w-[30px] md:h-[30px] relative">
                  <img
                    className="w-6 h-6 md:w-[30px] md:h-[30px] relative"
                    alt="Img"
                    src="/images/instagram.svg"
                  />
                </div>
              </div>
            </div>

            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="flex h-6 md:h-[30px] items-start relative w-full">
                <div className="flex flex-col items-center justify-center cursor-pointer pt-[1.78e-15px] pl-[1.78e-15px] pr-0 pb-0 w-6 h-6 md:w-[30px] md:h-[30px] relative">
                  <img
                    className="w-6 h-6 md:w-[30px] md:h-[30px] relative"
                    alt="Img"
                    src="/images/threads-white.svg"
                  />
                </div>
              </div>
            </div>

            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="flex h-6 md:h-[30px] items-start relative w-full">
                <div className="flex flex-col items-center justify-center cursor-pointer pt-[1.78e-15px] pl-[1.78e-15px] pr-0 pb-0 w-6 h-6 md:w-[30px] md:h-[30px] relative">
                  <img
                    className="w-6 h-6 md:w-[30px] md:h-[30px] relative"
                    alt="Img"
                    src="/images/x.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          className="px-10 w-full md:w-[1170px] h-px object-fit"
          alt="Line"
          src="/images/line-31.svg"
        />

        <div className="container flex md:h-[81px] items-center justify-center px-0 py-4 pb-6 md:pb-[30px] md:py-[30px] relative self-stretch w-full">
          <p className="relative w-fit [font-family:'SF_UI',Helvetica] font-extralight text-white text-xs md:text-sm tracking-[0.5px] leading-[21px] whitespace-nowrap m-0">
            © Copyright 2025, All Rights Reserved
          </p>
        </div>

        <img
          src="/images/ellipse-9.png"
          alt="Glow"
          className="absolute z-[0] w-[300px] h-full md:h-[177px] top-0 -left-0 opacity-95 pointer-events-none select-none"
        />

        <img
          src="/images/ellipse-8.png"
          alt="Glow"
          className="absolute z-[0] w-[300px] h-full md:h-[177px] top-0 right-0 opacity-95 pointer-events-none select-none"
        />

      </footer>
    </div>
  );
};
