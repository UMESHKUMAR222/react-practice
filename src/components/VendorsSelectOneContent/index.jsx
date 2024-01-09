import React from "react";

import { Img, Text } from "components";

const VendorsSelectOneContent = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-1 items-center justify-center w-auto">
          <div className="flex flex-col items-start justify-start px-1 w-auto">
            <Img
              className="h-5 w-5"
              src="images/img_component10.svg"
              alt="componentEleven"
            />
          </div>
          <Text
            className="text-base text-black-900 w-auto"
            size="txtPoppinsRegular16"
          >
            {props?.candidphotography}
          </Text>
          <Img
            className="h-3.5 w-3.5"
            src="images/img_phinfo.svg"
            alt="phinfo"
          />
        </div>
        <Text
          className="text-[19.2px] text-black-900 w-auto"
          size="txtPoppinsRegular192Black900"
        >
          {props?.price}
        </Text>
      </div>
    </>
  );
};

VendorsSelectOneContent.defaultProps = {
  candidphotography: "CANDID PHOTOGRAPHY",
  price: "₹ 800/day",
};

export default VendorsSelectOneContent;
