import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import { Link } from "components/shared";

import { Section, Badge, Button, BackToTop } from "components/shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {
  faJsSquare,
  faReact,
  faCss3,
  faHtml5,
  faGitAlt,
  faGithub,
  faCodepen,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

import {
  motion,
  useCycle,
  useViewportScroll,
  useTransform,
} from "framer-motion";

import { colors, listOfProject } from "shared/utils";
import styles from "./index.module.scss";

export default function Home(props) {
  const [count, setCount] = useState(1);
  const changeColor = () => {
    const randomColorObject = colors[count];
    document.documentElement.style.setProperty(
      "--main-100",
      randomColorObject[100]
    );
    document.documentElement.style.setProperty(
      "--main-200",
      randomColorObject[200]
    );
    document.documentElement.style.setProperty(
      "--main-300",
      randomColorObject[300]
    );
    document.documentElement.style.setProperty(
      "--main-400",
      randomColorObject[400]
    );
    document.documentElement.style.setProperty(
      "--main-500",
      randomColorObject[500]
    );
    document.documentElement.style.setProperty(
      "--main-600",
      randomColorObject[600]
    );
    document.documentElement.style.setProperty(
      "--main-700",
      randomColorObject[700]
    );
    document.documentElement.style.setProperty(
      "--main-800",
      randomColorObject[800]
    );
    document.documentElement.style.setProperty(
      "--main-900",
      randomColorObject[900]
    );
    if (count === colors.length - 1) {
      setCount(0);
      return;
    }
    setCount((count) => count + 1);
  };
  // Animation
  const [animate, cycle] = useCycle(
    { scale: 1, rotate: 0 },
    { scale: 1.2, rotate: 30 },
    { scale: 1.3, rotate: 60 },
    { scale: 1.4, rotate: 90 },
    { scale: 1.5, rotate: 120 },
    { scale: 1.6, rotate: 150 },
    { scale: 1.7, rotate: 165 },
    { scale: 1.8, rotate: 180 }
  );

  // Work Animation
  // const ref = useRef(null);
  // const { scrollY } = useViewportScroll();
  // const y = useTransform(scrollY, (v) => v * -0.4, {
  //   clamp: false,
  // });

  return (
    <>
      <Head>
        <title>Muhammad J — Front-end Developer</title>
      </Head>

      <div
        className={`${styles.headerContainer} max-w-screen-lg mx-auto flex flex-wrap items-center`}>
        <Section className="lg:w-1/2 w-full space-y-4">
          <p className="text-base">Hey there, I'm a</p>
          <h1 className="text-2xl md:text-4xl font-semibold">
            Front-end Developer. JavaScript and UI/UX enthusiast. I build &
            rescue websites & applications mostly with React.
          </h1>
          <div></div>
        </Section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`${styles.squareContainer} bg-blue-500 rounded-none lg:rounded-lg lg:w-1/2 w-full flex justify-center items-center p-2 lg:py-0`}>
          <motion.div
            initial={{ scale: 0.5 }}
            animate={animate}
            onTap={() => {
              changeColor();
              cycle();
            }}
            whileTap={{ scale: 1.1 }}
            className="bg-gray-100 rounded-lg w-24 h-24 md:w-32 md:h-32 cursor-pointer"></motion.div>
        </motion.div>
      </div>

      <motion.div
        className={`max-w-screen-lg mx-auto mt-12 md:mt-0 mb-20 md:mb-40`}
        // ref={ref}
        // style={{ y }}
      >
        <Section className="w-full sm:pt-10 md:pb-10 px-2 rounded-none lg:rounded-lg bg-gray-100 text-black shadow-sm">
          <div className="max-w-screen-lg flex flex-col justify-center md:px-16 px-8 mx-auto">
            <p
              className={`${styles.skillsParagraph} font-semibold text-lg md:text-2xl`}>
              I code with JavaScript, primarily in React and recently with
              Next.js, Gatsby & TailwindCSS. I have experience working in
              Firebase and 3rd party APIs (Stripe, Dropbox, Google Auth, etc.).
            </p>
            <div
              className={`${styles.badgesContainer} flex flex-wrap mt-4 mb-4`}>
              <Badge
                label="JavaScript"
                icon={{ icon: faJsSquare, color: "#f0db4f" }}
              />
              <Badge label="React" icon={{ icon: faReact, color: "#00d8ff" }} />
              <Badge label="HTML" icon={{ icon: faHtml5, color: "#F16529" }} />
              <Badge label="CSS" icon={{ icon: faCss3, color: "#264de4" }} />
              <Badge label="Git" icon={{ icon: faGitAlt, color: "#000" }} />
              <Badge label="Next.js" />
              <Badge label="Gatsby" />
              <Badge
                label="Bootstrap"
                icon={{ icon: faBootstrap, color: "#602C50" }}
              />
              <Badge label="TailwindCSS" />
              <Badge label="Firebase" />
              <Badge label="REST API" />
            </div>
          </div>
          {/* Footer */}
          <div className="w-11/12 md:w-2/3 mx-auto bg-white text-gray-900 rounded-lg shadow-lg text-center py-6 md:py-5 px-4 md:px-2 -mb-20">
            <h1 className="mb-2 text-sm md:text-xl font-semibold break-words">
              Have a project, idea or problem you'd like to discuss?
            </h1>
            <p className="text-sm md:text-base">
              Let's talk:{" "}
              <a href="mailto:muhammadcodez@gmail.com" className="underline">
                muhammadcodez@gmail.com
              </a>
            </p>
          </div>
        </Section>
      </motion.div>

      {/* Work */}

      <Section className="max-w-screen-lg mx-auto mb-20" id="work">
        <h1 className="text-4xl mb-5 md:mb-4">
          Work<span className="text-blue-500">.</span>
        </h1>
        <div className="flex flex-wrap -m-4">
          {listOfProject.map((project, i) => (
            <div className="w-full md:w-1/2 p-4" key={i}>
              <div
                className={`${styles.Project} ${
                  styles[`Project-${i + 1}`]
                } overflow-hidden bg-gray-100 p-6 rounded-lg transition-shadow duration-300 shadow hover:shadow-lg`}>
                <img
                  className={`${styles.ProjectImage} rounded shadow-xs w-full object-cover mb-4`}
                  src={`/images/projects/${project.imageURL}`}
                  alt="project-1"
                  loading="lazy"
                />
                <div
                  className={`${styles.StackContainer} tracking-widest text-blue-500 font-medium title-font`}>
                  {project.stack.map((s, i) => (
                    <Badge
                      key={i}
                      label={s}
                      className={`font-semibold bg-blue-100 hover:bg-blue-200 text-10`}
                    />
                  ))}
                </div>

                <h2 className="text-gray-900 font-bold text-3xl title-font">
                  {project.title}
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  {project.description}
                </p>
                <div className="flex">
                  <Button
                    onClick={() => {
                      window.open(project.demoLink, "_blank");
                    }}
                    icon={{ icon: faAngleRight }}
                    reverse>
                    Demo
                  </Button>

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      className="plain flex items-center ml-auto transition duration-300 opacity-25 hover:opacity-50">
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div className="w-full md:w-1/2 p-4">
            <a
              href="https://codepen.io/muhammadj/"
              target="_blank"
              className="no-translate">
              <div
                className={`flex flex-col justify-center items-center cursor-pointer h-full overflow-hidden bg-blue-900 text-white p-6 rounded-lg transition-shadow duration-300 shadow hover:shadow-lg`}>
                <h2 className="font-bold text-2xl title-font">
                  <span>More at</span>{" "}
                  <FontAwesomeIcon icon={faCodepen} size="2x" />{" "}
                  <span>Codepen</span>
                </h2>
                <p className="leading-relaxed text-base mb-4 opacity-50 underline">
                  https://codepen.io/muhammadj
                </p>
              </div>
            </a>
          </div>
        </div>
      </Section>
      <BackToTop />
    </>
  );
}
