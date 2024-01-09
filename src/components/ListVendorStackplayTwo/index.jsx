import React from "react";

import { Img, Text } from "components";

const ListVendorStackplayTwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto shadow-bs w-[58px]">
          <Img
            className="h-[58px] w-[58px]"
            src="images/img_play.svg"
            alt="play_Two"
          />
        </div>
        <Text
          className="absolute h-full inset-[0] justify-center m-auto sm:text-[30.799999999999997px] md:text-[36.8px] text-[40.8px] text-center text-white-A700 w-max"
          size="txtPoppinsRegular408WhiteA700"
        >
          {props?.textone}
        </Text>
      </div>
    </>
  );
};

ListVendorStackplayTwo.defaultProps = { textone: "1" };

export default ListVendorStackplayTwo;
