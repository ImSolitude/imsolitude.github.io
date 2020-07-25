import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ref, useInView } from "react-intersection-observer";

const Section = ({ children, className, ...props }) => {
  const classNames = ["px-4 sm:py-4 py-6", className].join(" ");

  // Animation
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          translateY: 0,
          transition: { delay: 0.33 },
        },
        hidden: { opacity: 0, translateY: 50 },
      }}
      className={classNames}
      {...props}>
      {children}
    </motion.section>
  );
};
export default Section;
