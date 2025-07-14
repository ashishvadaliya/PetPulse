import React from "react";
import { PartnersSection } from "../PartnersSection";
import { FAQSection } from "../FAQSection";
import { DownloadSection } from "../DownloadSection";

export const MainContainer = (): JSX.Element => {
  return (
    <div className=" flex flex-col w-full items-start absolute top-0 left-0">
      <PartnersSection />

      <div className="container flex flex-col items-center gap-12 py-[72px] relative self-stretch w-full flex-[0_0_auto] bg-white">
        <div className="flex flex-col w-[570px] items-center gap-4 relative flex-[0_0_auto]">
          <div className="w-fit mt-[-1.00px] [font-family:'SF_UI_Text-Semibold',Helvetica] text-gray-800 text-[42px] leading-[63px] whitespace-nowrap relative font-normal tracking-[0]">
            Why PetPulse?
          </div>

          <p className="self-stretch [font-family:'SF_UI_Text-Regular',Helvetica] text-gray-600 text-lg text-center leading-[27px] relative font-normal tracking-[0] m-0">
            We know your pet is family — so we’ve built the only app you’ll ever
            need to keep them happy and healthy.
          </p>
        </div>

        <div className="flex-col items-start justify-center p-3 bg-gray-100 rounded-[30px] flex gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <div className="items-center flex gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center gap-3 p-4 relative flex-1 grow bg-white rounded-3xl shadow-[0px_4px_12px_#00000014]">
              <div className="flex flex-col items-center gap-4 p-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-gray-800 text-xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
                  AI Symptom Checker
                </div>

                <p className="relative self-stretch [font-family:'SF_UI_Text-Regular',Helvetica] font-normal text-gray-600 text-sm text-center tracking-[0] leading-[21px] m-0">
                  We know your pet is family — so we’ve built the only app
                  you’ll ever need to keep them happy and healthy.
                </p>
              </div>

              <img
                className="relative self-stretch w-full h-[220px] object-cover"
                alt="Feature image"
                src="/images/feature-image.png"
              />
            </div>

            <div className="flex flex-col items-center gap-3 p-4 relative flex-1 grow bg-white rounded-3xl shadow-[0px_4px_12px_#00000014]">
              <div className="flex flex-col items-center gap-4 p-4 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-gray-800 text-xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
                  Lost &amp; Found Pet Locator
                </p>

                <p className="relative self-stretch [font-family:'SF_UI_Text-Regular',Helvetica] font-normal text-gray-600 text-sm text-center tracking-[0] leading-[21px] m-0">
                  We know your pet is family — so we’ve built the only app
                  you’ll ever need to keep them happy and healthy.
                </p>
              </div>

              <img
                className="relative self-stretch w-full h-[220px] object-cover"
                alt="Feature image"
                src="/images/feature-image-1.png"
              />
            </div>

            <div className="flex flex-col items-center gap-3 p-4 relative flex-1 grow bg-white rounded-3xl shadow-[0px_4px_12px_#00000014]">
              <div className="flex flex-col items-center gap-4 p-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-[207px] mt-[-1.00px] [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-gray-800 text-xl text-center tracking-[0] leading-[30px]">
                  Emergency Help
                </div>

                <p className="relative self-stretch [font-family:'SF_UI_Text-Regular',Helvetica] font-normal text-gray-600 text-sm text-center tracking-[0] leading-[21px] m-0">
                  We know your pet is family — so we’ve built the only app
                  you’ll ever need to keep them happy and healthy.
                </p>
              </div>

              <img
                className="relative self-stretch w-full h-[220px] object-cover"
                alt="Feature image"
                src="/images/feature-image-2.png"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center gap-3 p-4 relative flex-1 grow bg-white rounded-3xl shadow-[0px_4px_12px_#00000014]">
              <div className="flex flex-col items-center gap-4 p-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-gray-800 text-xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
                  Pet Adoption Listings
                </div>

                <p className="relative self-stretch [font-family:'SF_UI_Text-Regular',Helvetica] font-normal text-gray-600 text-sm text-center tracking-[0] leading-[21px] m-0">
                  We know your pet is family — so we’ve built the only app
                  you’ll ever need to keep them happy and healthy.
                </p>
              </div>

              <img
                className="relative self-stretch w-full h-[220px] object-cover"
                alt="Feature image"
                src="/images/feature-image-3.png"
              />
            </div>

            <div className="flex flex-col items-center gap-3 p-4 relative flex-1 grow bg-white rounded-3xl shadow-[0px_4px_12px_#00000014]">
              <div className="flex flex-col items-center gap-4 p-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-[216px] mt-[-1.00px] [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-gray-800 text-xl text-center tracking-[0] leading-[30px]">
                  Pet Shop Marketplace
                </div>

                <p className="relative self-stretch [font-family:'SF_UI_Text-Regular',Helvetica] font-normal text-gray-600 text-sm text-center tracking-[0] leading-[21px] m-0">
                  We know your pet is family — so we’ve built the only app
                  you’ll ever need to keep them happy and healthy.
                </p>
              </div>

              <img
                className="relative self-stretch w-full h-[220px] object-cover"
                alt="Feature image"
                src="/images/feature-image-4.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-[72px] w-full flex-[0_0_auto] bg-gray-100">
        <div className="container flex flex-col items-center gap-12 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'SF_UI_Text-Semibold',Helvetica] font-normal text-gray-800 text-[42px] tracking-[0] leading-[63px] whitespace-nowrap">
            How It Works
          </div>

          <div className="relative flex items-center self-stretch w-full flex-[0_0_auto]">
            {/* Card 1 */}
            <div className="flex flex-col h-56 items-center gap-[30px] p-[30px] flex-1 grow">
              <div className="flex w-16 h-16 items-center justify-center py-5 bg-[#2d57ed] rounded-full">
                <img
                  src="/images/profile-circle.svg"
                  alt="Profile"
                  className="w-8 h-8"
                />
              </div>

              <div className="flex flex-col items-center gap-2 self-stretch w-full">
                <div className="text-gray-800 text-xl font-medium text-center leading-[30px] whitespace-nowrap">
                  Create a profile
                </div>
                <p className="text-gray-600 text-sm font-normal text-center m-0 leading-[22.4px]">
                  Add your pet’s info in seconds.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col h-56 items-center gap-[30px] p-[30px] flex-1 grow">
              <div className="flex w-16 h-16 items-center py-5 justify-center bg-[#2d57ed] rounded-full">
                <img
                  src="/images/magicpen.svg"
                  alt="Magic pen"
                  className="w-8 h-8"
                />
              </div>

              <div className="flex flex-col items-center gap-2 self-stretch w-full">
                <div className="text-gray-800 text-xl font-medium text-center leading-[30px] whitespace-nowrap">
                  Use Powerful Tools
                </div>
                <p className="text-gray-600 text-sm font-normal text-center m-0 leading-[22.4px]">
                  Check symptoms, shop, or find a vet.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col h-56 items-center gap-[30px] p-[30px] flex-1 grow">
              <div className="flex w-16 h-16 items-center justify-center bg-[#2d57ed] rounded-full">
                <img
                  src="/images/Live-Support.svg"
                  alt="Step icon"
                  className="w-16 h-16 mr-2.5 mt-1.5"
                />
              </div>

              <div className="flex flex-col items-center gap-2 self-stretch w-full">
                <div className="text-gray-800 text-xl font-medium text-center leading-[30px] whitespace-nowrap">
                  Get real-time help
                </div>
                <p className="text-gray-600 text-sm font-normal text-center m-0 leading-[22.4px]">
                  Instant insights, alerts, and expert care.
                </p>
              </div>
            </div>
            <img
              className="absolute w-[184px] h-[5px] top-16 left-[25%] object-cover"
              alt="Line"
              src="images/line-230.svg"
            />

            <img
              className="absolute w-[184px] h-[5px] top-16 right-[24%] object-cover"
              alt="Line"
              src="images/line-230.svg"
            />
          </div>

        </div>
      </div>

      <div className="container flex flex-col items-center gap-12 py-[72px] relative self-stretch w-full flex-[0_0_auto] bg-white">
        <div className="flex flex-col w-[570px] items-center gap-4 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'SF_UI_Text-Semibold',Helvetica] font-normal text-gray-800 text-[42px] tracking-[0] leading-[63px] whitespace-nowrap">
            Loved by Pet Parents
          </div>

          <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <img
              className="relative w-[22.82px] h-[21.71px]"
              alt="Star"
              src="/images/star.svg"
            />

            <p className="relative w-fit [font-family:'SF_UI_Text-Regular',Helvetica] font-normal text-gray-600 text-lg text-center tracking-[0] leading-[27px] whitespace-nowrap m-0">
              4.9/5 by 10,000+ pet parents
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-3 p-3 relative self-stretch w-full flex-[0_0_auto] bg-gray-100 rounded-[30px]">
          <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start justify-center gap-3 p-4 relative flex-1 grow bg-white rounded-3xl shadow-[0px_4px_12px_#00000014]">
              <img
                className="relative self-stretch w-[200px] h-[223px] object-cover"
                alt="Testimonial content"
                src="/images/testimonial-content.png"
              />

              <div className="flex flex-col items-end gap-4 p-4 relative flex-1 grow">
                <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <img
                      className="relative w-[22.82px] h-[21.71px]"
                      alt="Star"
                      src="/images/star.svg"
                    />

                    <img
                      className="relative w-[22.82px] h-[21.71px]"
                      alt="Star"
                      src="/images/star.svg"
                    />

                    <img
                      className="relative w-[22.82px] h-[21.71px]"
                      alt="Star"
                      src="/images/star.svg"

                    />

                    <img
                      className="relative w-[22.82px] h-[21.71px]"
                      alt="Star"
                      src="/images/star.svg"

                    />

                    <img
                      className="relative w-[22.82px] h-[21.71px]"
                      alt="Star"
                      src="/images/star.svg"

                    />
                  </div>

                  <img
                    className="relative w-[31.5px] h-6"
                    alt="Quote icon"
                    src="/images/quote.png"
                  />
                </div>

                <p className="relative self-stretch [font-family:'SF_UI_Text-Regular',Helvetica] font-normal text-gray-600 text-lg tracking-[0] leading-[27px] m-0">
                  PetPulse helped us detect a serious allergy early on — total
                  game changer!
                </p>

                <div className="flex items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-1 h-[54px] bg-[#2d57ed] rounded-[40px]" />

                  <div className="relative w-fit [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-gray-800 text-xl tracking-[0] leading-[30px] whitespace-nowrap">
                    Sarah &amp; Max
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start justify-center gap-3 p-4 relative flex-1 grow bg-white rounded-3xl shadow-[0px_4px_12px_#00000014]">
              <img
                className="relative self-stretch w-[200px] h-[223px] object-cover"
                alt="Testimonial image"
                src="/images/testimonial-image.png"
              />

              <div className="flex flex-col items-end gap-4 p-4 relative flex-1 grow">
                <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <img
                      className="relative w-[22.82px] h-[21.71px]"
                      alt="Star"
                      src="/images/star.svg"

                    />

                    <img
                      className="relative w-[22.82px] h-[21.71px]"
                      alt="Star"
                      src="/images/star.svg"

                    />

                    <img
                      className="relative w-[22.82px] h-[21.71px]"
                      alt="Star"
                      src="/images/star.svg"

                    />

                    <img
                      className="relative w-[22.82px] h-[21.71px]"
                      alt="Star"
                      src="/images/star.svg"

                    />

                    <img
                      className="relative w-[22.82px] h-[21.71px]"
                      alt="Star"
                      src="/images/star.svg"

                    />
                  </div>

                  <img
                    className="relative w-[31.5px] h-6"
                    alt="Quote icon"
                    src="/images/quote.png"
                  />
                </div>

                <p className="relative self-stretch [font-family:'SF_UI_Text-Regular',Helvetica] font-normal text-gray-600 text-lg tracking-[0] leading-[27px] m-0">
                  The Lost &amp; Found tool reunited us with our cat in hours.
                </p>

                <div className="flex items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-1 h-[54px] bg-[#2d57ed] rounded-[40px]" />

                  <div className="relative w-fit [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-gray-800 text-xl tracking-[0] leading-[30px] whitespace-nowrap">
                    Raj &amp; Mimi
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
          <img
            className="relative w-14 h-14"
            alt="Pagination button"
            src="/images/left-arrow.svg"
          />

          <img
            className="relative w-14 h-14"
            alt="Pagination button"
            src="/images/right-arrow.svg"
          />
        </div>
      </div>

      <DownloadSection />

      <FAQSection />

      <footer className="flex flex-col w-full items-center relative flex-[0_0_auto] bg-gray-800 overflow-hidden">
        <div className="container  flex h-24 items-center justify-between px-[135px] py-[30px] relative self-stretch w-full">
          <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
            <img
              className="relative w-[124px] h-9"
              alt="Logo white"
              src="/images/footer-logo.svg"
            />
          </div>

          <div className="inline-flex items-start gap-[42px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-white text-sm tracking-[0] leading-[21px] whitespace-nowrap">
              Home
            </div>

            <div className="relative w-fit mt-[-1.00px] [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-white text-sm tracking-[0] leading-[21px] whitespace-nowrap">
              About
            </div>

            <div className="relative w-fit mt-[-1.00px] [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-white text-sm tracking-[0] leading-[21px] whitespace-nowrap">
              Features
            </div>

            <div className="relative w-fit mt-[-1.00px] [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-white text-sm tracking-[0] leading-[21px] whitespace-nowrap">
              Contact Us
            </div>
          </div>

          <div className="inline-flex items-start justify-center gap-4 relative flex-[0_0_auto]">
            <div className="inline-flex flex-col max-w-[30px] items-start relative flex-[0_0_auto]">
              <div className="flex max-w-[30px] h-[30px] items-start relative w-full">
                <div className="flex flex-col items-center justify-center pt-[1.78e-15px] pl-[1.78e-15px] pr-0 pb-0 w-[30px] h-[30px] relative">
                  <img
                    className="w-[30px] h-[30px] relative"
                    alt="Img"
                    src="/images/instagram.svg"
                  />
                </div>
              </div>
            </div>

            <div className="inline-flex flex-col max-w-[30px] items-start relative flex-[0_0_auto]">
              <div className="flex max-w-[30px] h-[30px] items-start relative w-full">
                <div className="flex flex-col items-center justify-center pt-[1.78e-15px] pl-[1.78e-15px] pr-0 pb-0 w-[30px] h-[30px] relative">
                  <img
                    className="w-[30px] h-[30px] relative"
                    alt="Img"
                    src="/images/threads-white.svg"
                  />
                </div>
              </div>
            </div>

            <div className="inline-flex flex-col max-w-[30px] items-start relative flex-[0_0_auto]">
              <div className="flex max-w-[30px] h-[30px] items-start relative w-full">
                <div className="flex flex-col items-center justify-center pt-[1.78e-15px] pl-[1.78e-15px] pr-0 pb-0 w-[30px] h-[30px] relative">
                  <img
                    className="w-[30px] h-[30px] relative"
                    alt="Img"
                    src="/images/x.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          className=" w-[1170px] h-px object-cover"
          alt="Line"
          src="/images/line-31.svg"
        />

        <div className="container flex h-[81px] items-center justify-center gap-[501px] px-0 py-[30px] relative self-stretch w-full">
          <p className="relative w-fit [font-family:'SF_UI_Text-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[21px] whitespace-nowrap">
            © Copyright 2025, All Rights Reserved
          </p>
        </div>

        <img
          src="/images/ellipse-9.png"
          alt="Glow"
          className="absolute z-[0] w-[182px] h-[177px] top-0 -left-0 opacity-95 pointer-events-none select-none"
        />

        <img
          src="/images/ellipse-8.png"
          alt="Glow"
          className="absolute z-[0] w-[182px] h-[177px] top-0 right-0 opacity-95 pointer-events-none select-none"
        />

      </footer>
    </div>
  );
};
