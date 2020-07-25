import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faCodepen,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="text-gray-600 bg-gray-800 py-6 px-4">
      <div className="max-w-screen-lg text-center grid grid-cols-1 md:grid-cols-3 mx-auto ">
        <h1 className="text-base md:text-2xl mb-2 md:mb-0">
          © 2020 ∙ MuhammadJ
        </h1>
        <div className="flex space-x-4 justify-center mb-2 md:mb-0">
          <a
            href="https://github.com/ImSolitude"
            target="_blank"
            className="plain transform duration-300 opacity-75 hover:opacity-100">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://codepen.io/muhammadj/"
            target="_blank"
            className="plain transform duration-300 opacity-75 hover:opacity-100">
            <FontAwesomeIcon icon={faCodepen} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-jumaa-717a31130/"
            target="_blank"
            className="plain transform duration-300 opacity-75 hover:opacity-100">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
        <a
          href="mailto:muhammadcodez@gmail.com"
          className="flex items-center justify-center space-x-4 md:ml-auto text-sm md:text-lg">
          muhammadcodez@gmail.com
        </a>
      </div>
    </footer>
  );
};
export default Footer;
