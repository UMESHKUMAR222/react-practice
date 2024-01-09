import React from "react";

import { Button, Img, Text } from "components";

const VendorsCategory = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
          <div className="flex flex-row md:gap-10 items-end justify-between max-w-[1098px] w-full">
            <Text
              className="sm:text-[23.65px] md:text-[25.65px] text-[27.65px] text-black-900 text-right w-auto"
              size="txtPoppinsRegular2765Black900"
            >
              {props?.photographers}
            </Text>
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtPoppinsRegular16Gray900"
            >
              {props?.viewall}
            </Text>
          </div>
          <div className="h-[246px] md:h-[512px] sm:h-[780px] relative w-full">
            <div className="absolute gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:h-auto h-full inset-[0] items-center justify-center m-auto max-w-[1129px] w-full">
              <div className="h-[244px] outline outline-[1px] outline-blue_gray-900_33 relative rounded-[10px] w-full">
                <Img
                  className="absolute h-[244px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-full"
                  src="images/img_rectangle48.png"
                  alt="rectangleFortyEight"
                />
                <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-[9px] rounded-[10px] w-full">
                  <div className="flex flex-row gap-[67px] items-center justify-center mb-[5px] w-auto">
                    <div className="flex flex-col gap-[15px] items-start justify-center w-auto">
                      <div className="flex flex-row gap-2 items-start justify-between w-[188px]">
                        <Text
                          className="text-black-900_99 text-xl w-auto"
                          size="txtLexendDecaLight20"
                        >
                          {props?.ramachari}
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-xl w-auto"
                          size="txtLexendDecaRegular20"
                        >
                          {props?.rowname}
                        </Text>
                      </div>
                      <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
                        <Text
                          className="text-base text-black-900_99 w-auto"
                          size="txtLexendDecaLight16"
                        >
                          {props?.place}
                        </Text>
                        <Text
                          className="text-base text-blue_gray-900 w-auto"
                          size="txtLexendDecaLight16Bluegray900"
                        >
                          {props?.pragathinager}
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[15px] items-end justify-start w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-base text-blue_gray-900 text-right w-auto"
                          size="txtLexendDecaLight16Bluegray900"
                        >
                          {props?.price}
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[2.16px] items-center justify-start w-auto">
                        <Img
                          className="h-3.5 rounded-[1px] w-3.5"
                          src="images/img_star6.svg"
                          alt="starSix"
                        />
                        <Text
                          className="text-[14.4px] text-blue_gray-900 text-right w-auto"
                          size="txtLexendDecaLight144"
                        >
                          {props?.thirtyfive}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[244px] outline outline-[1px] outline-blue_gray-900_33 relative rounded-[10px] w-full">
                <Img
                  className="absolute h-[244px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-full"
                  src="images/img_rectangle48.png"
                  alt="rectangleFortyEight_One"
                />
                <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-[9px] rounded-[10px] w-full">
                  <div className="flex flex-row gap-[67px] items-center justify-center mb-[5px] w-auto">
                    <div className="flex flex-col gap-[15px] items-start justify-center w-auto">
                      <div className="flex flex-row gap-2 items-start justify-between w-[188px]">
                        <Text
                          className="text-black-900_99 text-xl w-auto"
                          size="txtLexendDecaLight20"
                        >
                          {props?.ramachariOne}
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-xl w-auto"
                          size="txtLexendDecaRegular20"
                        >
                          {props?.rownameOne}
                        </Text>
                      </div>
                      <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
                        <Text
                          className="text-base text-black-900_99 w-auto"
                          size="txtLexendDecaLight16"
                        >
                          {props?.placeOne}
                        </Text>
                        <Text
                          className="text-base text-blue_gray-900 w-auto"
                          size="txtLexendDecaLight16Bluegray900"
                        >
                          {props?.pragathinagerOne}
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[15px] items-end justify-start w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-base text-blue_gray-900 text-right w-auto"
                          size="txtLexendDecaLight16Bluegray900"
                        >
                          {props?.priceOne}
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[2.16px] items-center justify-start w-auto">
                        <Img
                          className="h-3.5 rounded-[1px] w-3.5"
                          src="images/img_star6_14x14.svg"
                          alt="starSix_One"
                        />
                        <Text
                          className="text-[14.4px] text-blue_gray-900 text-right w-auto"
                          size="txtLexendDecaLight144"
                        >
                          {props?.thirtyfiveOne}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[244px] outline outline-[1px] outline-blue_gray-900_33 relative rounded-[10px] w-full">
                <Img
                  className="absolute h-[244px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-full"
                  src="images/img_rectangle48.png"
                  alt="rectangleFortyEight_Two"
                />
                <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-[9px] rounded-[10px] w-full">
                  <div className="flex flex-row gap-[67px] items-center justify-center mb-[5px] w-auto">
                    <div className="flex flex-col gap-[15px] items-start justify-center w-auto">
                      <div className="flex flex-row gap-2 items-start justify-between w-[188px]">
                        <Text
                          className="text-black-900_99 text-xl w-auto"
                          size="txtLexendDecaLight20"
                        >
                          {props?.ramachariTwo}
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-xl w-auto"
                          size="txtLexendDecaRegular20"
                        >
                          {props?.rownameTwo}
                        </Text>
                      </div>
                      <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
                        <Text
                          className="text-base text-black-900_99 w-auto"
                          size="txtLexendDecaLight16"
                        >
                          {props?.placeTwo}
                        </Text>
                        <Text
                          className="text-base text-blue_gray-900 w-auto"
                          size="txtLexendDecaLight16Bluegray900"
                        >
                          {props?.pragathinagerTwo}
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[15px] items-end justify-start w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-base text-blue_gray-900 text-right w-auto"
                          size="txtLexendDecaLight16Bluegray900"
                        >
                          {props?.priceTwo}
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[2.16px] items-center justify-start w-auto">
                        <Img
                          className="h-3.5 rounded-[1px] w-3.5"
                          src="images/img_star6_1.svg"
                          alt="starSix_Two"
                        />
                        <Text
                          className="text-[14.4px] text-blue_gray-900 text-right w-auto"
                          size="txtLexendDecaLight144"
                        >
                          {props?.thirtyfiveTwo}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="absolute flex h-[37px] inset-y-[0] items-center justify-center my-auto right-[0] rotate-[180deg] rounded-[18px] w-[37px]"
              color="red_900"
              size="sm"
              variant="fill"
            >
              <Img src="images/img_arrowleft_gray_50.svg" alt="arrowleft" />
            </Button>
            <Button
              className="absolute flex h-[37px] inset-y-[0] items-center justify-center left-[0] my-auto rounded-[18px] w-[37px]"
              color="red_900"
              size="sm"
              variant="fill"
            >
              <Img src="images/img_arrowleft.svg" alt="arrowleft_One" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

VendorsCategory.defaultProps = {
  photographers: "Photographers",
  viewall: "View all",
  ramachari: "Name:",
  rowname: "Ramachari",
  place: "Place:",
  pragathinager: "Pragathi Nager",
  price: "₹1000/Day",
  thirtyfive: "3.5",
  ramachariOne: "Name:",
  rownameOne: "Ramachari",
  placeOne: "Place:",
  pragathinagerOne: "Pragathi Nager",
  priceOne: "₹1000/Day",
  thirtyfiveOne: "3.5",
  ramachariTwo: "Name:",
  rownameTwo: "Ramachari",
  placeTwo: "Place:",
  pragathinagerTwo: "Pragathi Nager",
  priceTwo: "₹1000/Day",
  thirtyfiveTwo: "3.5",
};

export default VendorsCategory;
