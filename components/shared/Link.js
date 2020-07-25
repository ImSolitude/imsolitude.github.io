import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SharedLink = ({ children, icon, className, ...props }) => {
  const classNames = [
    "transition duration-300 hover:text-blue-500",
    className,
  ].join(" ");
  return (
    <>
      <Link {...props} passHref>
        <a className={classNames} icon={icon}>
          {children && children}
          {icon && (
            <FontAwesomeIcon
              className="ml-1"
              icon={icon.icon}
              size={icon.size || "1x"}
              color={icon.color || "var(--white)"}
            />
          )}
        </a>
      </Link>
    </>
  );
};
export default SharedLink;
