export const PartnersSection = (): JSX.Element => {
  const partners = [
    {
      name: "Martino",
      icon: "/images/logo.png",
    },
    {
      name: "Virogan",
      icon: "/images/logo-1.png",
    },
    {
      name: "Vertex",
      icon: "/images/logo-2.png",
    },
    {
      name: "Aromix",
      icon: "/images/logo-3.png",
    },
    {
      name: "Fireli",
      icon: "/images/logo-4.png",
    },
    {
      name: "Fireli",
      icon: "/images/logo-5.png",
    },
    {
      name: "Fireli",
      icon: "/images/logo-6.png",
    },
    {
      name: "Fireli",
      icon: "/images/logo-7.png",
    },
    {
      name: "Natroma",
      isCustomFont: true
    }
  ];

  const repeatedPartners = [...partners, ...partners]; // clone for smooth loop

  return (
    <div className="w-full overflow-hidden bg-gray-100 py-4 md:py-6">
      <div className="whitespace-nowrap animate-partner-slide flex gap-10">
        {repeatedPartners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex-shrink-0 flex items-center justify-center md:min-w-[200px]"
          >
            {partner.isCustomFont ? (
              <div className="[font-family:'Alex_Brush',Helvetica] font-normal text-gray-800 text-[32.9px] text-center tracking-[0] leading-[24.3px] whitespace-nowrap">
                Natroma
              </div>
            ) : (
              <div className="flex items-center">
                <img
                  className="h-[19px] w-auto ml-2"
                  alt={partner.name}
                  src={partner.icon}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
