import React, { useState, useEffect } from "react";

export const Navbar = (): JSX.Element => {
  const [isInstallable, setIsInstallable] = useState<boolean>(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Store the event for later use
      setDeferredPrompt(e);
      // Show install button
      setIsInstallable(true);
    };

    const handleAppInstalled = () => {
      // Hide install button
      setIsInstallable(false);
      // Clear the deferredPrompt
      setDeferredPrompt(null);
      console.log('PWA was installed');
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = () => {
    if (!deferredPrompt) return;
    
    // Show the install prompt
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      // We no longer need the prompt
      setDeferredPrompt(null);
      // Hide install button
      setIsInstallable(false);
    });
  };
  return (
    <div className="flex w-[1440px] items-center justify-between px-[135px] py-5 absolute top-0 left-0">
      <div className="flex flex-col w-[178px] items-start gap-2.5 relative">
        <img
          className="relative w-[124px] h-9"
          alt="Logo white"
          src="https://c.animaapp.com/A7ONEzUZ/img/logo-white--1--1.svg"
        />
      </div>

      <div className="inline-flex items-start gap-[42px] relative flex-[0_0_auto]">
        <a href="#home" className="relative w-fit mt-[-1.00px] [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-gray-800 text-sm tracking-[0] leading-[21px] whitespace-nowrap hover:text-[#2d57ed] transition-colors">
          Home
        </a>

        <a href="#about" className="relative w-fit mt-[-1.00px] [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-gray-800 text-sm tracking-[0] leading-[21px] whitespace-nowrap hover:text-[#2d57ed] transition-colors">
          About
        </a>

        <a href="#features" className="relative w-fit mt-[-1.00px] [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-gray-800 text-sm tracking-[0] leading-[21px] whitespace-nowrap hover:text-[#2d57ed] transition-colors">
          Features
        </a>

        <a href="#contact" className="relative w-fit mt-[-1.00px] [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-gray-800 text-sm tracking-[0] leading-[21px] whitespace-nowrap hover:text-[#2d57ed] transition-colors">
          Contact Us
        </a>
      </div>

      <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
        <button className="inline-flex h-12 items-center justify-center gap-2.5 px-6 py-3 relative flex-[0_0_auto] bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
          <div className="relative w-fit [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-gray-800 text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap">
            Sign Up
          </div>
        </button>

        {isInstallable && (
          <button 
            onClick={handleInstallClick}
            className="inline-flex h-12 items-center justify-center gap-2.5 px-6 py-3 relative flex-[0_0_auto] bg-gray-100 rounded-xl cursor-pointer hover:bg-gray-200 transition-colors"
          >
            <div className="relative w-fit [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-gray-800 text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap">
              Install App
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}

        <button className="inline-flex h-12 items-center justify-center gap-2.5 px-8 py-3 relative flex-[0_0_auto] bg-[#2d57ed] rounded-xl shadow-[0px_34px_34px_#1353fe0d] hover:bg-[#2448d0] transition-colors">
          <div className="relative w-fit [font-family:'SF_UI_Text-Medium',Helvetica] font-medium text-white text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap">
            Login
          </div>
        </button>
      </div>
    </div>
  );
};
