import React from "react";

const sizeClasses = {
  txtPoppinsRegular2765Black900: "font-normal font-poppins",
  txtPoppinsRegular2765WhiteA700: "font-normal font-poppins",
  txtPoppinsRegular16Bluegray900: "font-normal font-poppins",
  txtPoppinsRegular2013: "font-normal font-poppins",
  txtPoppinsMedium34Gray900: "font-medium font-poppins",
  txtPoppinsRegular16WhiteA700: "font-normal font-poppins",
  txtPoppinsRegular2212: "font-normal font-poppins",
  txtPoppinsRegular2765: "font-normal font-poppins",
  txtLexendDecaLight20: "font-lexenddeca font-light",
  txtPoppinsRegular34: "font-normal font-poppins",
  txtPoppinsMedium34: "font-medium font-poppins",
  txtLexendDecaLight1471Black90099: "font-lexenddeca font-light",
  txtPoppinsRegular408WhiteA700: "font-normal font-poppins",
  txtLexendDecaRegular1839: "font-lexenddeca font-normal",
  txtPoppinsRegular408: "font-normal font-poppins",
  txtPoppinsRegular192Black900: "font-normal font-poppins",
  txtPoppinsRegular16Red900: "font-normal font-poppins",
  txtPoppinsRegular16Black90099: "font-normal font-poppins",
  txtPoppinsRegular2304Gray900: "font-normal font-poppins",
  txtPoppinsRegular2765Gray900: "font-normal font-poppins",
  txtPoppinsRegular14WhiteA700: "font-normal font-poppins",
  txtLexendDecaLight1471WhiteA700: "font-lexenddeca font-light",
  txtPoppinsRegular192WhiteA700: "font-normal font-poppins",
  txtLexendDecaLight16: "font-lexenddeca font-light",
  txtPoppinsRegular192Bluegray800: "font-normal font-poppins",
  txtPoppinsRegular192: "font-normal font-poppins",
  txtLexendDecaLight16Bluegray900: "font-lexenddeca font-light",
  txtLexendDecaLight1471: "font-lexenddeca font-light",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsRegular14Bluegray900: "font-normal font-poppins",
  txtPoppinsRegular16Gray900: "font-normal font-poppins",
  txtPoppinsRegular2765Gray50a2: "font-normal font-poppins",
  txtPoppinsRegular1548: "font-normal font-poppins",
  txtPoppinsBold50: "font-bold font-poppins",
  txtLexendDecaLight1839: "font-lexenddeca font-light",
  txtLexendDecaLight144: "font-lexenddeca font-light",
  txtPoppinsRegular34Gray50: "font-normal font-poppins",
  txtLexendDecaRegular20: "font-lexenddeca font-normal",
  txtPoppinsRegular4896: "font-normal font-poppins",
  txtLexendDecaLight1324: "font-lexenddeca font-light",
  txtPoppinsRegular2304Black900: "font-normal font-poppins",
  txtPoppinsRegular16Black900a2: "font-normal font-poppins",
  txtPoppinsRegular2304: "font-normal font-poppins",
  txtPoppinsRegular1613: "font-normal font-poppins",
  txtPoppinsRegular16Gray50b2: "font-normal font-poppins",
  txtPoppinsRegular2304Gray50: "font-normal font-poppins",
  txtPoppinsRegular192Bluegray900: "font-normal font-poppins",
  txtPoppinsRegular192Black900b2: "font-normal font-poppins",
  txtPoppinsRegular2304Bluegray900: "font-normal font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
