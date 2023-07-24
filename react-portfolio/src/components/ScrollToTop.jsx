import React from "react";
import { useState, useEffect } from "react";
import * as Scroll from "react-scroll";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  let scroll = Scroll.animateScroll;
  useEffect(() => {
    // Add a scroll event listener to check if the button should be visible
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100); // Show the button when the user scrolls down 100px
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <button
        className={`fixed right-4 bottom-4 ${
          isVisible ? "block" : "hidden"
        } p-4 bg-blue-500 text-white rounded-full shadow-md`}
        onClick={scrollToTop}
      >
        <AiOutlineArrowUp size={25} />
      </button>
    </>
  );
};

export default ScrollToTop;
