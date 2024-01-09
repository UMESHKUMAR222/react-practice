import React from "react";

import { Img, Text } from "components";

const VendorsSelectOneCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-56 relative w-full">
          <Img
            className="absolute h-56 inset-[0] justify-center m-auto object-cover rounded-[9px] w-full"
            src="images/img_rectangle48_224x360.png"
            alt="rectangleFortyEight"
          />
          <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-[5px] w-full">
            <div className="flex flex-col items-center justify-center mb-1 w-auto">
              <div className="flex flex-col gap-[10.5px] items-start justify-center w-auto">
                <div className="flex flex-row gap-[5px] items-end justify-between py-[5px] w-[305px]">
                  <div className="flex flex-row gap-[7.36px] items-start justify-between w-[172px]">
                    <Text
                      className="text-[18.39px] text-black-900_99 w-auto"
                      size="txtLexendDecaLight1839"
                    >
                      {props?.name}
                    </Text>
                    <Text
                      className="text-[18.39px] text-blue_gray-900 w-auto"
                      size="txtLexendDecaRegular1839"
                    >
                      {props?.username}
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-end w-auto">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-[14.71px] text-blue_gray-900 text-right w-auto"
                        size="txtLexendDecaLight1471"
                      >
                        {props?.reviewscounter}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-[5.52px] items-start justify-between w-[306px]">
                  <div className="flex flex-row gap-[7px] items-start justify-start w-auto">
                    <Text
                      className="text-[14.71px] text-black-900_99 w-auto"
                      size="txtLexendDecaLight1471Black90099"
                    >
                      {props?.place}
                    </Text>
                    <Text
                      className="text-[14.71px] text-blue_gray-900 w-auto"
                      size="txtLexendDecaLight1471"
                    >
                      {props?.userplace}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[1.99px] items-center justify-start w-auto">
                    <Img
                      className="h-[13px] rounded-[1px] w-[13px]"
                      src="images/img_star6_13x13.svg"
                      alt="starSix"
                    />
                    <Text
                      className="text-[13.24px] text-blue_gray-900 text-right"
                      size="txtLexendDecaLight1324"
                    >
                      {props?.rating}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 flex flex-col items-center justify-start outline outline-[0.5px] outline-black-900_99 p-2 rounded-bl-[9px] rounded-br-[9px] w-full">
          <div className="h-[19px] md:h-[21px] mb-[3px] relative w-[305px]">
            <div className="absolute bg-gray-900 h-[18px] inset-x-[0] mx-auto rounded-bl-[9px] rounded-br-[9px] top-[0] w-full"></div>
            <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-center left-[0] my-auto w-auto">
              <Text
                className="text-[14.71px] text-white-A700 w-auto"
                size="txtLexendDecaLight1471WhiteA700"
              >
                {props?.forphotosvideos}
              </Text>
            </div>
            <div className="absolute flex flex-col h-full inset-y-[0] items-end justify-start my-auto right-[0] w-auto">
              <Text
                className="text-[14.71px] text-right text-white-A700 w-auto"
                size="txtLexendDecaLight1471WhiteA700"
              >
                {props?.price}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

VendorsSelectOneCard.defaultProps = {
  name: "Name:",
  username: "Ramachari",
  reviewscounter: "10 Reviews",
  place: "Place:",
  userplace: "Pragathi Nager",
  rating: "3.5",
  forphotosvideos: "For Photos + Videos",
  price: "₹8000/Day",
};

export default VendorsSelectOneCard;
