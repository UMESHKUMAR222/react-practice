import React from "react";

import { Datepicker, Img, Text } from "components";

const VendorsSelectOneColumnellipsetwelve = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
          <Img
            className="h-[62px] md:h-auto rounded-[50%] w-[62px]"
            src="images/img_ellipse12.png"
            alt="ellipseTwelve"
          />
          <div className="flex flex-col gap-1 items-start justify-start w-auto">
            <Text
              className="text-[19.2px] text-black-900 w-auto"
              size="txtPoppinsRegular192Black900"
            >
              {props?.username}
            </Text>
            {!!props?.selecteddate ? (
              <Datepicker
                className="frame173"
                placeholder="15 Feb 2023"
                value={props?.selecteddate}
              ></Datepicker>
            ) : null}
          </div>
        </div>
        <Text
          className="max-w-[643px] md:max-w-full text-[19.2px] text-black-900"
          size="txtPoppinsRegular192Black900"
        >
          {props?.description}
        </Text>
      </div>
    </>
  );
};

VendorsSelectOneColumnellipsetwelve.defaultProps = {
  username: "Priya",
  description:
    "Guys you people all are so awesome we good photo and memorable story on your photos & video thank you guys for delivering our wedding photos so soon . Keep going on with the good work guys.",
};

export default VendorsSelectOneColumnellipsetwelve;
