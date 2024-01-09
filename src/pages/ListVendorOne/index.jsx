import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import ListVendorOneColumnprice from "components/ListVendorOneColumnprice";

const ListVendorOnePage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-end justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <Header className="bg-gray-900 flex flex-col items-center justify-center md:px-5 w-full" />
          <Text
            className="mt-[68px] sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-black-900"
            size="txtPoppinsRegular2304Black900"
          >
            <span className="text-black-900_b2 font-poppins text-left font-normal">
              Already Registered?
            </span>
            <span className="text-black-900 font-poppins text-left font-normal">
              {" "}
            </span>
            <a
              href="javascript:"
              className="text-red-900 font-poppins text-left font-normal underline"
            >
              Sign In
            </a>
          </Text>
          <div className="flex flex-row gap-4 items-center justify-start mt-[23px] md:px-5 w-auto">
            <Line className="bg-gray-900 h-px w-[34%]" />
            <Text
              className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-gray-900 w-auto"
              size="txtPoppinsRegular2304Gray900"
            >
              Or
            </Text>
            <Line className="bg-gray-900 h-px w-[34%]" />
          </div>
          <Text
            className="mt-[25px] sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-blue_gray-900"
            size="txtPoppinsRegular2304Bluegray900"
          >
            Fill In The Form Below To Get Started On Sreerastu
          </Text>
        </div>
        <div className="sm:h-[1291px] md:h-[1300px] h-[1825px] mt-[66px] md:px-5 relative w-[89%] md:w-full">
          <div className="absolute flex flex-col gap-8 inset-x-[0] items-center justify-center mx-auto top-[0] w-auto">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end w-[85%] md:w-full">
              <Text
                className="sm:text-[23.65px] md:text-[25.65px] text-[27.65px] text-gray-900"
                size="txtPoppinsRegular2765Gray900"
              >
                Basic Details
              </Text>
              <Line className="bg-gray-900 h-px mb-[15px] md:ml-[0] ml-[5px] md:mt-0 mt-6 w-[84%]" />
            </div>
            <div className="md:h-[1124px] h-[1157px] relative w-full">
              <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-[74%]">
                <Img
                  className="h-[1124px] md:h-auto object-cover w-full"
                  src="images/img_sreicon022_1124x945.png"
                  alt="sreicon022"
                />
              </div>
              <div className="absolute flex flex-col gap-6 items-center justify-start left-[0] top-[0] w-auto">
                <div className="flex flex-col gap-[7px] justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[5px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Full Name *
                  </Text>
                  <Input
                    name="componentTwenty"
                    placeholder="Raghu"
                    className="leading-[normal] p-0 placeholder:text-blue_gray-900 text-[19.2px] text-left w-full"
                    wrapClassName="outline outline-[1px] outline-black-900_4c w-full"
                    shape="round"
                    color="gray_200"
                    size="sm"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[7px] justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[5px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Phone No *
                  </Text>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Input
                      name="mobileNo"
                      placeholder="7780589999"
                      className="leading-[normal] p-0 placeholder:text-blue_gray-900 text-[19.2px] text-left w-full"
                      wrapClassName="outline outline-[1px] outline-green-A700 w-full"
                      type="number"
                      shape="round"
                      color="gray_200"
                      size="sm"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col gap-2 justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[5px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Email Address *
                  </Text>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Input
                      name="groupNinetyThree"
                      placeholder="Raghu@gamicom"
                      className="leading-[normal] p-0 placeholder:text-blue_gray-900 text-[19.2px] text-left w-full"
                      wrapClassName="outline outline-[1px] outline-red-A700 w-full"
                      shape="round"
                      color="gray_200"
                      size="sm"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col gap-[7px] justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[5px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Place
                  </Text>
                  <Input
                    name="componentTwenty_One"
                    placeholder="Hyderabad"
                    className="leading-[normal] p-0 placeholder:text-blue_gray-900 text-[19.2px] text-left w-full"
                    wrapClassName="outline outline-[1px] outline-black-900_4c w-full"
                    shape="round"
                    color="gray_200"
                    size="sm"
                    variant="fill"
                  ></Input>
                </div>
              </div>
              <div className="absolute flex flex-col gap-6 items-center justify-start right-[27%] top-[0] w-auto">
                <div className="flex flex-col gap-[7px] justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[5px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Second Person name
                  </Text>
                  <Input
                    name="componentTwenty_Two"
                    placeholder="Hyderabad"
                    className="leading-[normal] p-0 placeholder:text-blue_gray-900 text-[19.2px] text-left w-full"
                    wrapClassName="outline outline-[1px] outline-black-900_4c w-full"
                    shape="round"
                    color="gray_200"
                    size="sm"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[7px] justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[5px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Second contact No *
                  </Text>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Input
                      name="mobileNo_One"
                      placeholder="9999999999"
                      className="leading-[normal] p-0 placeholder:text-blue_gray-900 text-[19.2px] text-left w-full"
                      wrapClassName="outline outline-[1px] outline-green-A700 w-full"
                      type="number"
                      shape="round"
                      color="gray_200"
                      size="sm"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col gap-[7px] justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[5px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Adhara card No
                  </Text>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Input
                      name="groupNinetyThree_One"
                      placeholder="5555-5555-5555-5555"
                      className="leading-[normal] p-0 placeholder:text-blue_gray-900 text-[19.2px] text-left w-full"
                      wrapClassName="outline outline-[1px] outline-green-A700 w-full"
                      shape="round"
                      color="gray_200"
                      size="sm"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[4%] flex flex-col gap-8 items-center justify-start left-[24%] w-auto">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtPoppinsRegular16"
                >
                  <span className="text-black-900 font-poppins text-left font-normal">
                    By submitting this form, you agree to our{" "}
                  </span>
                  <span className="text-black-900 font-poppins text-left font-normal">
                    Terms and Conditions
                  </span>
                </Text>
                <div className="bg-gray-900 flex flex-col items-center justify-end p-1 rounded-[7px]">
                  <Text
                    className="mt-[5px] sm:text-[16.13px] md:text-[18.13px] text-[20.13px] text-gray-50"
                    size="txtPoppinsRegular2013"
                  >
                    Signup
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[61px] inset-x-[0] items-center justify-start mx-auto w-auto">
            <div className="flex md:flex-col flex-row gap-2.5 items-center justify-end w-[85%] md:w-full">
              <Text
                className="sm:text-[23.65px] md:text-[25.65px] text-[27.65px] text-gray-900"
                size="txtPoppinsRegular2765Gray900"
              >
                Business Details
              </Text>
              <Line className="bg-gray-900 h-px mb-[15px] md:mt-0 mt-6 w-[79%]" />
            </div>
            <div className="md:h-[1124px] h-[1155px] relative w-full">
              <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-[74%]">
                <Img
                  className="h-[1124px] md:h-auto object-cover w-full"
                  src="images/img_sreicon022_1124x944.png"
                  alt="sreicon022_One"
                />
              </div>
              <div className="absolute flex flex-col gap-6 items-center justify-start left-[0] top-[0] w-auto">
                <div className="flex flex-col gap-2 justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[5px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Business Name *
                  </Text>
                  <Input
                    name="componentTwenty_Three"
                    placeholder="Business name"
                    className="leading-[normal] p-0 placeholder:text-blue_gray-900 text-[19.2px] text-left w-full"
                    wrapClassName="outline outline-[1px] outline-black-900_4c w-full"
                    type="text"
                    shape="round"
                    color="gray_200"
                    size="sm"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[5px] justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[5px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Business category *
                  </Text>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-11 items-end justify-start p-2 w-full"
                    style={{
                      backgroundImage: "url('images/img_component20.svg')",
                    }}
                  >
                    <Button
                      className="flex h-[22px] items-center justify-center my-0.5 rotate-[-90deg] w-[22px]"
                      shape="circle"
                      color="black_900_4c"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        src="images/img_arrowleft_white_a700.svg"
                        alt="arrowleft"
                      />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-[7px] justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[5px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Address *
                  </Text>
                  <Img
                    className="h-[140px]"
                    src="images/img_component20.svg"
                    alt="componentTwenty_Four"
                  />
                </div>
              </div>
              <div className="absolute flex flex-col gap-6 items-center justify-start right-[27%] top-[0] w-auto">
                <ListVendorOneColumnprice className="flex flex-col items-start justify-start w-full" />
                <div className="flex flex-col gap-[5px] justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[5px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Business category *
                  </Text>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-11 items-end justify-start p-2 w-full"
                    style={{
                      backgroundImage: "url('images/img_component20.svg')",
                    }}
                  >
                    <Button
                      className="flex h-[22px] items-center justify-center my-0.5 rotate-[-90deg] w-[22px]"
                      shape="circle"
                      color="black_900_4c"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        src="images/img_arrowleft_white_a700.svg"
                        alt="arrowleft_One"
                      />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-[7px] justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[5px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Address *
                  </Text>
                  <Img
                    className="h-[140px]"
                    src="images/img_component20.svg"
                    alt="componentTwenty_Five"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-[18px] w-full">
          <Footer className="bg-white-A700 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ListVendorOnePage;
