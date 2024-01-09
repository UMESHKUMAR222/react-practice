import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[10px]" };
const variants = {
  fill: {
    yellow_A700: "bg-yellow-A700 text-gray-900",
    gray_900_87: "bg-gray-900_87 text-gray-200",
    teal_700: "bg-teal-700 text-white-A700",
    white_A700: "bg-white-A700",
    black_900_4c: "bg-black-900_4c",
    red_900: "bg-red-900",
    gray_900: "bg-gray-900 text-white-A700",
  },
  outline: {
    red_900: "border border-red-900 border-solid text-red-900",
    black_900: "border border-black-900 border-solid text-blue_gray-900",
    white_A700: "border border-solid border-white-A700 text-white-A700",
    gray_50: "border border-gray-50 border-solid text-white-A700",
    gray_900: "border border-gray-900 border-solid text-gray-900",
  },
  gradient: { orange_100_lime_900: "bg-gradient  text-gray-900" },
};
const sizes = { xs: "p-[5px]", sm: "p-2", md: "p-3" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "outline", "gradient"]),
  color: PropTypes.oneOf([
    "yellow_A700",
    "gray_900_87",
    "teal_700",
    "white_A700",
    "black_900_4c",
    "red_900",
    "gray_900",
    "black_900",
    "gray_50",
    "orange_100_lime_900",
  ]),
};

export { Button };
