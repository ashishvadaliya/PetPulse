import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

export const FAQSection = (): JSX.Element => {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      question: "What is PetPulse?",
      answer: "PetPulse is an AI-powered platform designed to monitor your pet's health, track symptoms, and provide real-time insights. It also connects you to a marketplace, trainers, adoption services, and more.",
      isOpen: true
    },
    {
      question: "How does the AI Symptom Checker work?",
      answer: "Our AI Symptom Checker uses machine learning algorithms trained on veterinary data to analyze symptoms you input. It suggests possible conditions, recommends next steps, and can connect you with a vet if needed—all while learning from each interaction to improve accuracy."
    },
    {
      question: "Is PetPulse only for pet owners?",
      answer: "No, PetPulse serves both pet owners and pet professionals. Veterinarians, trainers, and pet service providers can use our platform to connect with clients, manage appointments, and access our AI-powered diagnostic tools."
    },
    {
      question: "What can I find in the Pet Shop Marketplace?",
      answer: "Our marketplace features a curated selection of pet food, toys, medications, supplements, and accessories. All products are vetted for quality and safety, with many recommended by veterinarians and tailored to your pet's specific needs."
    },
    {
      question: "Can I report or search for lost pets?",
      answer: "Yes, our Lost & Found feature lets you instantly create alerts with your pet's photo and details. These alerts are shared with local community members and shelters. You can also search through reported found pets in your area."
    },
    {
      question: "How does pet adoption work on PetPulse?",
      answer: "Our adoption section connects you with shelters, rescue organizations, and individuals with pets needing homes. You can filter by species, breed, age, and location, then apply directly through our platform after creating a pet owner profile."
    },
    {
      question: "Can I connect with breeders or trainers?",
      answer: "Yes, PetPulse has a verified network of ethical breeders and certified trainers. You can browse profiles, read reviews, and book consultations or training sessions directly through the app."
    },
    {
      question: "Is there a community for pet owners?",
      answer: "Absolutely! PetPulse features community forums where you can connect with other pet parents, share experiences, ask questions, and join local pet meetups. We also have breed-specific and health condition groups."
    },
    {
      question: "Is PetPulse available as a mobile app?",
      answer: "Yes, PetPulse is available as both a web platform and mobile app for iOS and Android devices. The mobile app includes all features of the web version plus push notifications for health alerts and lost pet updates."
    },
    {
      question: "Is my data secure on PetPulse?",
      answer: "We take data security seriously. All pet and personal information is encrypted, and we never share your data with third parties without explicit permission. Our AI systems are designed with privacy-first principles."
    }
  ]);

  const toggleFAQ = (index: number) => {
  setFaqs(prevFaqs =>
    prevFaqs.map((faq, i) => ({
      ...faq,
      isOpen: i === index ? !faq.isOpen : false,
    }))
  );
};


  // Split FAQs into two columns
  const leftColumnFAQs = faqs.slice(0, 5);
  const rightColumnFAQs = faqs.slice(5);

  return (
    <div className="container flex flex-col w-full items-center gap-6 py-8 md:gap-12 md:py-[72px] relative flex-[0_0_auto]">
      <div className="relative w-fit mt-[-1.00px] text-center [font-family:'SF_UI',Helvetica] font-semibold text-gray-800 text-[28px] md:text-[42px] tracking-[0] leading-[45px] md:leading-[65px]">
        Frequently Asked Questions
      </div>

      <div className="flex flex-col items-start justify-end gap-3 p-2 md:p-3 relative self-stretch w-full flex-[0_0_auto] bg-gray-100 rounded-[30px]">
        <div className="flex md:flex-row flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col w-full items-start gap-3 relative flex-1 grow">
            {leftColumnFAQs.map((faq, index) => (
              <div 
                key={`faq-left-${index}`} 
                className={`flex gap-4 md:gap-6 pl-5 md:pl-8 pr-3 py-3 md:pr-4 md:py-4 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-3xl shadow-[0px_4px_12px_#00000014] cursor-pointer transition-all duration-300 ${faq.isOpen ? 'items-start' : 'items-center'}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex flex-col items- justify-center gap-2 md:gap-3 relative flex-1 grow">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-gray-800 text-base md:text-xl tracking-[0] md:leading-[30px]">
                    {faq.question}
                  </div>

                  {faq.isOpen && (
                    <p className="relative self-stretch [font-family:'SF_UI_Text-Regular',Helvetica] font-normal text-gray-600 text-xs md:text-sm tracking-[0.5px] md:tracking-[0.5px] leading-[21px] m-0">
                      {faq.answer}
                    </p>
                  )}
                </div>

                {/* Using different icons for open/closed state instead of rotation */}
                <img
                  className="relative w-8 h-8 md:w-11 md:h-11"
                  alt="Toggle FAQ"
                  src={faq.isOpen 
                    ? "/images/remove.svg" 
                    : "/images/add.svg"}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col w-full items-start gap-2 md:gap-3 relative flex-1 grow">
            {rightColumnFAQs.map((faq, index) => (
              <div 
                key={`faq-right-${index}`} 
                className={`flex gap-4 md:gap-6 pl-5 md:pl-8 pr-3 py-3 md:pr-4 md:py-4 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-3xl shadow-[0px_4px_12px_#00000014] cursor-pointer transition-all duration-300 ${faq.isOpen ? 'items-start' : 'items-center'}`}
                onClick={() => toggleFAQ(index + leftColumnFAQs.length)}
              >
                <div className="flex flex-col items-start justify-center gap-3 relative flex-1 grow">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-gray-800 text-base md:text-xl tracking-[0] md:leading-[30px]">
                    {faq.question}
                  </div>

                  {faq.isOpen && (
                    <p className="relative self-stretch [font-family:'SF_UI_Text-Regular',Helvetica] font-normal text-gray-600 text-xs md:text-sm tracking-[0.5px] md:tracking-[0.5px] leading-[21px] m-0">
                      {faq.answer}
                    </p>
                  )}
                </div>

                {/* Using different icons for open/closed state instead of rotation */}
                <img
                  className="relative w-11 h-11"
                  alt="Toggle FAQ"
                  src={faq.isOpen 
                    ? "/images/remove.svg" 
                    : "/images/add.svg"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
