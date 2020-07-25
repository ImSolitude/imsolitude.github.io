import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

import { motion, useViewportScroll } from "framer-motion";

const BackToTop = () => {
  const goToTopRef = useRef(null);
  const handleScroll = () => {
    if (window.pageYOffset > 200 && typeof window !== `undefined`) {
      goToTopRef.current.classList.add("show");
    } else if (typeof window !== `undefined`) {
      goToTopRef.current.classList.remove("show");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Cleanup
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={goToTopRef}
      onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
      className={`backToTopContainer bg-gray-300 hover:bg-gray-400 text-gray-600 hover:text-gray-700 cursor-pointer`}>
      <FontAwesomeIcon icon={faAngleUp} size="2x" />
    </div>
  );
};
export default BackToTop;
