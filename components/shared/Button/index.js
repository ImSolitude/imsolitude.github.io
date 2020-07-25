import { forwardRef } from "react";
import styled from "styled-components";
import Link from "next/link";
import PropTypes from "prop-types";
import { Spinner } from "components/shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledButton = styled.button`
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
`;

// Tailwind
const DEFAULT =
  "flex items-center justify-center min-w-16 font-bold rounded shadow transition duration-300 transform hover:-translate-y-px focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

const COLORS = {
  primary: "bg-blue-500 hover:bg-blue-600 focus:bg-blue-500 text-white",
  secondary: "bg-gray-200 hover:bg-gray-300 focus:bg-gray-200 text-gray-700",
  danger: "bg-red-600 hover:bg-red-700 focus:bg-red-600 text-white",
};

const SIZES = {
  sm: "py-1 px-1 text-xs",
  md: "py-2 px-4",
  lg: "py-3 px-6 text-xl",
};

const Button = forwardRef(
  (
    {
      children,
      className,
      href,
      color,
      size,
      icon,
      iconOnly,
      reverse,
      onClick,
      disabled,
      isLoading,
      loadingColor,
      ...rest
    },
    ref
  ) => {
    const handleClick = (e) => {
      if (!onClick) {
        return;
      }
      onClick(e);
    };
    const classNames = [
      className,
      DEFAULT,
      SIZES[size || "md"],
      COLORS[color || "primary"],
    ].join(" ");
    return (
      <StyledButton
        {...rest}
        className={classNames}
        onClick={handleClick}
        disabled={disabled || isLoading}
        reverse={reverse}
        ref={ref}>
        {!isLoading && icon && (
          <FontAwesomeIcon
            className={`${iconOnly ? "" : !reverse ? "mr-2" : "ml-2"}`}
            icon={icon.icon}
            size={icon.size || "1x"}
            color={icon.color || "var(--white)"}
            rotation={icon.rotation || 0}
          />
        )}
        {isLoading && <Spinner color={loadingColor} />}
        {children && !isLoading && <span>{children}</span>}
      </StyledButton>
    );
  }
);
Button.propTypes = {
  size: PropTypes.oneOf(["sm", "lg"]),
  color: PropTypes.oneOf(["primary", "secondary", "danger"]),
};

export default Button;
