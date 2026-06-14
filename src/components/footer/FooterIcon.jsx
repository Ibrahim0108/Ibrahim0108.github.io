import { useState, useEffect, useRef } from "react";
import { MdContentCopy } from "react-icons/md";

export default function FooterIcon({ icon: Icon, label, value, type }) {
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [copied, setCopied] = useState(false);
  const iconRef = useRef(null);

  const encodedEmail = [
    109,111,104,97,109,109,97,100,105,98,114,97,104,105,109,114,
    97,104,109,97,116,104,64,103,109,97,105,108,46,99,111,109
  ];

  const decodeEmail = (arr) => arr.map(c => String.fromCharCode(c)).join("");
  const email = decodeEmail(encodedEmail);
  const maskedEmail = email.replace(/(.{3}).+(@.+)/, "$1****$2");

  const handleClick = (e) => {
    e.stopPropagation();
    if (type === "email") {
      setShowEmailPopup(!showEmailPopup);
    } else {
      window.open(value, "_blank");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setShowEmailPopup(false);
    setTimeout(() => setCopied(false), 1500); // show "Copied!" for 2 seconds
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (iconRef.current && !iconRef.current.contains(e.target)) {
        setShowEmailPopup(false);
      }
    };
    if (showEmailPopup) {
      window.addEventListener("click", handleOutsideClick);
      return () => window.removeEventListener("click", handleOutsideClick);
    }
  }, [showEmailPopup]);

  return (
    <div ref={iconRef} className="relative flex flex-col items-center cursor-pointer z-50">
      {/* ICON */}
      <div
        onClick={handleClick}
        className="
          flex items-center justify-center
          w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14
          rounded-full
          border border-white/15
          bg-[#060119]/40
          backdrop-blur-md
          transition
          group-hover:border-purple-400
          group-hover:scale-105
        "
      >
        <Icon className="
          text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
          text-white/80
          group-hover:text-purple-300
        " />
      </div>

      {/* LABEL TOOLTIP */}
      <span
        className="
          pointer-events-none
          absolute -top-8
          opacity-0 scale-95
          rounded-md
          bg-black/70
          px-2 py-1
          text-[10px]
          text-white
          backdrop-blur
          transition-all
          group-hover:opacity-100
          group-hover:scale-100
        "
      >
        {label}
      </span>

      {/* EMAIL POPUP ABOVE ICON */}
      {showEmailPopup && type === "email" && (
        <div className="absolute bottom-full mb-2 flex items-center gap-2 bg-black/90 backdrop-blur-md border border-white/20 rounded-md px-3 py-1 text-sm text-white shadow-lg z-[9999]">
          <span>{maskedEmail}</span>
          <div className="relative flex items-center">
            <MdContentCopy
              className="cursor-pointer text-white hover:text-green-400 transition"
              onClick={handleCopy}
            />
            
          </div>
        </div>
        
      )}
      {copied && (
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-green-400 bg-black/70 px-2 py-1 rounded-md">
                Copied!
              </span>
            )}
    </div>
  );
}
