import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Badge = ({ label, className, icon, ...props }) => {
  const classNames = [className].join(" ");

  return (
    <span
      className={`${classNames} bg-gray-200 hover:bg-gray-300 rounded-md text-center p-2`}
      {...props}>
      {label}
      {icon && (
        <FontAwesomeIcon
          className="ml-2 align-middle"
          icon={icon.icon}
          size={icon.size || "1x"}
          color={icon.color || "var(--black)"}
        />
      )}
    </span>
  );
};
export default Badge;
