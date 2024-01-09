import React from "react";

import { Button } from "components";

const VendorsFilter = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="cursor-pointer font-poppins leading-[normal] min-w-[155px] text-base text-center"
          shape="round"
          color="gray_900"
          size="md"
          variant="outline"
        >
          {props?.photographers}
        </Button>
        <Button
          className="cursor-pointer font-poppins leading-[normal] min-w-[96px] text-base text-center"
          shape="round"
          color="gray_900"
          size="md"
          variant="outline"
        >
          {props?.pandits}
        </Button>
        <Button
          className="cursor-pointer font-poppins leading-[normal] min-w-[96px] text-base text-center"
          shape="round"
          color="gray_900"
          size="md"
          variant="outline"
        >
          {props?.venues}
        </Button>
        <Button
          className="cursor-pointer font-poppins leading-[normal] min-w-[106px] text-base text-center"
          shape="round"
          color="gray_900"
          size="md"
          variant="outline"
        >
          {props?.caterers}
        </Button>
        <Button
          className="cursor-pointer font-poppins leading-[normal] min-w-[194px] text-base text-center"
          shape="round"
          color="gray_900"
          size="md"
          variant="outline"
        >
          {props?.invitationdesigners}
        </Button>
        <Button
          className="cursor-pointer font-poppins leading-[normal] min-w-[150px] text-base text-center"
          shape="round"
          color="gray_900"
          size="md"
          variant="outline"
        >
          {props?.entertainment}
        </Button>
      </div>
    </>
  );
};

VendorsFilter.defaultProps = {
  photographers: "Photographers",
  pandits: "Pandits",
  venues: "Venues",
  caterers: "Caterers",
  invitationdesigners: "invitation Designers",
  entertainment: "Entertainment",
};

export default VendorsFilter;
