import React from "react";

export const PartnersSection = (): JSX.Element => {
  // Selected 6 working partner logos
  const partners = [
    {
      name: "Martino",
      icon: "https://c.animaapp.com/A7ONEzUZ/img/logo-icon@2x.png",
      text: "https://c.animaapp.com/A7ONEzUZ/img/martino.svg"
    },
    {
      name: "Virogan",
      icon: "https://c.animaapp.com/A7ONEzUZ/img/logo-icon-1@2x.png",
      text: "https://c.animaapp.com/A7ONEzUZ/img/virogan.svg"
    },
    {
      name: "Vertex",
      icon: "https://c.animaapp.com/A7ONEzUZ/img/logo-icon-2@2x.png",
      text: "https://c.animaapp.com/A7ONEzUZ/img/vertex.svg"
    },
    {
      name: "Aromix",
      icon: "https://c.animaapp.com/A7ONEzUZ/img/logo-icon-3@2x.png",
      text: "https://c.animaapp.com/A7ONEzUZ/img/aromix.svg"
    },
    {
      name: "Fireli",
      icon: "https://c.animaapp.com/A7ONEzUZ/img/logo-icon-4@2x.png",
      text: "https://c.animaapp.com/A7ONEzUZ/img/fireli.svg"
    },
    {
      name: "Natroma",
      isCustomFont: true
    }
  ];

  return (
    <div className="flex items-center justify-center px-[135px] py-[30px] relative self-stretch w-full flex-[0_0_auto] bg-gray-100">
      <div className="flex items-center justify-between w-full">
        {partners.map((partner, index) => (
          <div key={`${partner.name}-${index}`} className="flex items-center justify-center">
            {partner.isCustomFont ? (
              <div className="[font-family:'Alex_Brush',Helvetica] font-normal text-gray-800 text-[32.9px] text-center tracking-[0] leading-[24.3px] whitespace-nowrap">
                Natroma
              </div>
            ) : (
              <div className="flex items-center">
                <img
                  className="h-[22px] w-auto"
                  alt={`${partner.name} icon`}
                  src={partner.icon}
                />
                <img
                  className="h-[19px] w-auto ml-2"
                  alt={partner.name}
                  src={partner.text}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
