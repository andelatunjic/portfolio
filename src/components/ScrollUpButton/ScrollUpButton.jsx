import React, { useState, useEffect } from "react";
import { ScrollButton, Arrow } from "./ScrollUpButtonStyle";
import UpArrow from "../../assets/images/up-arrow.png";

const ScrollUpButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.pageYOffset > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ScrollButton onClick={scrollToTop} show={showButton}>
      <Arrow src={UpArrow} alt="Scroll to top"></Arrow>
    </ScrollButton>
  );
};

export default ScrollUpButton;
