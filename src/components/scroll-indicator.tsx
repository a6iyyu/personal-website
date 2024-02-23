import React, { useState, useEffect } from "react";

export const ScrollIndicator: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  const updatePercentage = () => {
    const scrollHeight: number = document.documentElement.scrollHeight - window.innerHeight;
    const percentage: number = (window.scrollY / scrollHeight) * 100;
    setScrollPercentage(percentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", updatePercentage);
    return () => {
      window.removeEventListener("scroll", updatePercentage);
    };
  });

  return (
    <div
      className="fixed inset-0 h-1 bg-blue-500"
      style={{ width: `${scrollPercentage}`, zIndex: 9999 }}
    ></div>
  );
};