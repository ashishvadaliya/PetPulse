import { useState, useEffect } from "react";
import Icon from "../../../../components/Utils/Icon";

export const Navbar = (): JSX.Element => {
  const [isInstallable, setIsInstallable] = useState<boolean>(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  // const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    const handleAppInstalled = () => {
      setIsInstallable(false);
      setDeferredPrompt(null);
      console.log("PWA was installed");
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstallClick = () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      setDeferredPrompt(null);
      setIsInstallable(false);
    });
  };

  return (
    <div className="container flex items-center justify-between py-2.5 md:py-5 w-full">
      <div className="w-[178px] cursor-pointer">
        <img
          className="w-[124px] h-9"
          alt="Logo white"
          src="/images/logo-white.svg"
        />
      </div>

      <div 
        className="relative flex justify-center items-center md:hidden bg-button px-[11px] py-[11px] rounded-lg"
        // onClick={() => setIsOpen(true)}
        >
        <Icon icon="bar" className="w-5 h-5 text-white" />
      </div>
      <div className="hidden md:flex items-center gap-[42px]">
        {["Home", "About", "Features", "Contact Us"].map((text) => (
          <a
            key={text}
            href={`#${text.toLowerCase().replace(/\s+/g, "")}`}
            className="font-sf-semibold text-sm font-medium text-gray-800 hover:text-[#2d57ed] transition-colors"
          >
            {text}
          </a>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-6">
        <button className="font-sf-semibold h-12 px-6 py-3 cursor-pointer rounded-xl hover:bg-gray-200 transition-colors bg-transparent !border-none text-sm font-medium text-gray-800">
          Sign Up
        </button>

        {/* {isInstallable && (
          <button
            onClick={handleInstallClick}
            className="h-12 px-6 py-3 bg-gray-100 rounded-xl hover:bg-gray-200 !border-none transition-colors flex items-center gap-2"
          >
            <span className="text-sm font-medium text-gray-800">Install App</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )} */}

        <button className="h-12 px-8 py-3 bg-[#2d57ed] rounded-xl cursor-pointer shadow-[0px_34px_34px_#1353fe0d] hover:bg-[#2448d0] transition-colors !border-none text-white text-sm font-medium">
          Login
        </button>
      </div>
      {/* {isOpen && (
        <div className={` bg-white absolute z-30 top-0 left-0 w-[300px] h-full ease-in-out duration-300 ${isOpen ? "translate-x-full" : "-translate-x-0"}`}>
          hello
        </div>
      )} */}
    </div>
  );
};
