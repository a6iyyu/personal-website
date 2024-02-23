import React, { useState, useEffect } from "react";
import ScrollToTopImage from "/static/img/scroll-to-top.png?url";

export const ScrollToTop: React.FC = () => {
  const [showScroll, setShowScroll] = useState<boolean>(false);

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 25 * 16) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 25 * 16) {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  return (
    <div
      className={`h-24 w-24 bg-gray-800 cursor-pointer rounded-full fixed grid place-items-center z-30 hover:bg-gray-700 ${
        showScroll ? "visible opacity-100" : "invisible opacity-0"
      } transition-all duration-300 ease-in-out bottom-8 right-8`}
      onClick={scrollToTop}
    >
      <img src={ScrollToTopImage} className="rotate-180" width={25} />
    </div>
  );
};