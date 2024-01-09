import React from "react";

import { Input, Text } from "components";

const ListVendorOneColumnprice = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="md:ml-[0] ml-[5px] text-base text-black-900"
          size="txtPoppinsRegular16"
        >
          {props?.gstnotext}
        </Text>
        <Input
          name="price_One"
          placeholder="GST No"
          className="font-poppins leading-[normal] p-0 placeholder:text-blue_gray-900 text-[19.2px] text-left w-full"
          wrapClassName="mt-[7px] outline outline-[1px] outline-black-900_4c w-full"
          shape="round"
          color="gray_200"
          size="sm"
          variant="fill"
        ></Input>
        <Text
          className="md:ml-[0] ml-[5px] mt-[3px] text-blue_gray-900 text-sm"
          size="txtPoppinsRegular14Bluegray900"
        >
          {props?.donthavetext}
        </Text>
      </div>
    </>
  );
};

ListVendorOneColumnprice.defaultProps = {
  gstnotext: "Enter GST No",
  donthavetext: "Don’t have ",
};

export default ListVendorOneColumnprice;
