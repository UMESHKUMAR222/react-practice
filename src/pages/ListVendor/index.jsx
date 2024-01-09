import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import ListVendorStackplayTwo from "components/ListVendorStackplayTwo";

const questionCounterOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const questionCounterOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const questionCounterTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const questionCounterThreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const questionCounterOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const questionCounterOneOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const questionCounterTwoOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const questionCounterThreeOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ListVendorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins justify-start mx-auto pb-[939px] w-full">
        <div className="flex flex-col items-center w-full">
          <header className="bg-gray-900 flex flex-col items-center justify-center md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[114px] mr-[134px] w-[83%]">
              <div className="flex sm:flex-col flex-row gap-[21px] h-[81px] md:h-auto items-center justify-start w-auto sm:w-full">
                <div
                  className="common-pointer flex relative w-[196px]"
                  onClick={() => navigate("/")}
                >
                  <Img
                    className="h-[77px] my-auto object-cover w-[52px]"
                    src="images/img_sreicon021.png"
                    alt="sreicon021"
                  />
                  <Img
                    className="h-[38px] ml-[-20px] my-auto object-cover w-[164px] z-[1]"
                    src="images/img_sreicon011.png"
                    alt="sreicon011"
                  />
                </div>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[156px]"
                  leftIcon={
                    <Img
                      className="h-5 mb-1 mr-[9px]"
                      src="images/img_materialsymbolslocationonoutline.svg"
                      alt="material-symbols:location-on-outline"
                    />
                  }
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="outline"
                >
                  <div className="leading-[normal] text-base text-left">
                    Hyderabad
                  </div>
                </Button>
              </div>
              <div className="flex flex-col items-center justify-start w-[29%] md:w-full">
                <div className="flex flex-row gap-6 items-center justify-center w-auto">
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtPoppinsRegular16WhiteA700"
                  >
                    About
                  </Text>
                  <Text
                    className="text-base text-white-A700 underline w-auto"
                    size="txtPoppinsRegular16WhiteA700"
                  >
                    Hire a Vendor
                  </Text>
                  <div className="flex flex-col items-center justify-start w-2/5">
                    <Button
                      className="cursor-pointer h-9 leading-[normal] min-w-[136px] text-base text-center"
                      shape="round"
                      size="sm"
                      variant="gradient"
                      color="orange_100_lime_900"
                    >
                      Login/Signup
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="md:h-[444px] h-[541px] mt-4 md:px-5 relative w-[88%] md:w-full">
          <div className="absolute md:h-[428px] h-[540px] inset-[0] justify-center m-auto w-full">
            <div className="absolute h-[410px] right-[0] top-[9%] w-[26%]">
              <div className="absolute flex flex-col gap-8 items-start justify-center left-[0] top-[13%] w-[306px]">
                <div className="flex flex-col gap-3 items-start justify-center w-auto">
                  <Text
                    className="text-base text-black-900_99 w-auto"
                    size="txtPoppinsRegular16Black90099"
                  >
                    Email/ Phone No *
                  </Text>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-gray-200_99 flex flex-col items-start justify-end outline outline-[1px] outline-red-A700_99 p-[5px] rounded-[5px] w-full">
                      <Text
                        className="md:ml-[0] ml-[7px] mt-[3px] text-[19.2px] text-blue_gray-900"
                        size="txtPoppinsRegular192Bluegray900"
                      >
                        92304
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[98%] md:w-full">
                  <div className="flex flex-col gap-3.5 items-start justify-start w-auto">
                    <Text
                      className="text-base text-black-900_99 w-auto"
                      size="txtPoppinsRegular16Black90099"
                    >
                      Password *
                    </Text>
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <Img
                        className="h-11 w-[298px]"
                        src="images/img_component20.svg"
                        alt="componentTwenty"
                      />
                      <a
                        href="javascript:"
                        className="text-black-900_75 text-sm w-auto"
                      >
                        <Text size="txtPoppinsRegular14">Forgot password</Text>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 flex flex-col items-center justify-end p-[3px] rounded-[5px]">
                  <a
                    href="javascript:"
                    className="mt-1 text-[15.48px] text-gray-50"
                  >
                    <Text size="txtPoppinsRegular1548">Login</Text>
                  </a>
                </div>
              </div>
              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[91%]">
                <Img
                  className="h-[410px] md:h-auto object-cover w-full"
                  src="images/img_sreicon022.png"
                  alt="sreicon022"
                />
              </div>
            </div>
            <div className="absolute md:h-[428px] h-[540px] inset-y-[0] left-[0] my-auto w-[78%] md:w-full">
              <div className="md:h-[428px] h-[540px] m-auto w-full">
                <div className="absolute flex flex-col gap-[31px] justify-start md:pr-10 sm:pr-5 pr-[76px] py-[76px] right-[0] top-[0] w-[82%]">
                  <Img
                    className="h-[86px]"
                    src="images/img_vector_gray_200.svg"
                    alt="vector"
                  />
                  <div className="h-[150px] md:h-[159px] mb-[9px] md:ml-[0] ml-[130px] mr-4 relative w-4/5 sm:w-full">
                    <Img
                      className="h-16 ml-auto mr-[115px] mt-[21px]"
                      src="images/img_vector_gray_200.svg"
                      alt="vector_One"
                    />
                    <Text
                      className="absolute h-full inset-[0] justify-center m-auto sm:text-[40px] md:text-[46px] text-[50px] text-center text-teal-700 w-full"
                      size="txtPoppinsBold50"
                    >
                      <span className="text-red-900 font-poppins font-semibold">
                        Boost your business
                      </span>
                      <span className="text-teal-700 font-poppins font-semibold">
                        {" "}
                      </span>
                      <span className="text-gray-900 font-poppins font-semibold">
                        with
                      </span>
                      <span className="text-teal-700 font-poppins font-bold">
                        {" "}
                      </span>
                      <span className="text-gray-900 font-poppins font-bold">
                        Sreerastu
                      </span>
                    </Text>
                  </div>
                </div>
                <Img
                  className="absolute bottom-[0] h-[264px] left-[0] object-cover"
                  src="images/img_smoke.png"
                  alt="smoke"
                />
              </div>
              <div className="absolute md:h-[268px] h-[308px] left-[6%] top-[14%] w-[36%]">
                <div className="md:h-[268px] h-[307px] m-auto w-full">
                  <div className="md:h-[268px] h-[307px] m-auto w-full">
                    <div className="md:h-[268px] h-[307px] m-auto w-full">
                      <div className="md:h-[268px] h-[307px] m-auto w-full">
                        <div className="md:h-[268px] h-[307px] m-auto w-full">
                          <div className="md:h-[268px] h-[307px] m-auto w-full">
                            <div className="md:h-[268px] h-[307px] m-auto w-full">
                              <div className="md:h-[268px] h-[307px] m-auto w-full">
                                <div className="md:h-[268px] h-[307px] m-auto w-full">
                                  <div className="md:h-[268px] h-[307px] m-auto w-full">
                                    <div className="md:h-[268px] h-[307px] m-auto w-full">
                                      <div className="md:h-[268px] h-[307px] m-auto w-full">
                                        <div className="absolute md:h-[268px] h-[304px] inset-[0] justify-center m-auto w-full">
                                          <div className="md:h-[268px] h-[304px] m-auto w-full">
                                            <div className="md:h-[268px] h-[304px] m-auto w-full">
                                              <div className="md:h-[268px] h-[304px] m-auto w-full">
                                                <div className="absolute md:h-[268px] h-[303px] inset-[0] justify-center m-auto w-full">
                                                  <div className="md:h-[268px] h-[303px] m-auto w-full">
                                                    <div className="md:h-[268px] h-[303px] m-auto w-full">
                                                      <div className="md:h-[268px] h-[303px] m-auto w-full">
                                                        <div className="md:h-[268px] h-[303px] m-auto w-full">
                                                          <div className="md:h-[268px] h-[303px] m-auto w-full">
                                                            <div className="md:h-[268px] h-[303px] m-auto w-full">
                                                              <div className="md:h-[268px] h-[303px] m-auto w-full">
                                                                <div className="absolute md:h-[268px] h-[293px] inset-[0] justify-center m-auto w-full">
                                                                  <div className="md:h-[268px] h-[293px] m-auto w-full">
                                                                    <div className="md:h-[268px] h-[293px] m-auto w-full">
                                                                      <div className="md:h-[268px] h-[293px] m-auto w-full">
                                                                        <div className="md:h-[268px] h-[293px] m-auto w-full">
                                                                          <div className="md:h-[268px] h-[293px] m-auto w-full">
                                                                            <div className="md:h-[268px] h-[293px] m-auto w-full">
                                                                              <div className="md:h-[268px] h-[293px] m-auto w-full">
                                                                                <div className="md:h-[268px] h-[293px] m-auto w-full">
                                                                                  <div className="h-[293px] m-auto w-full">
                                                                                    <Img
                                                                                      className="h-8 mb-[-8.36px] ml-[121px] z-[1]"
                                                                                      src="images/img_user_deep_orange_200.svg"
                                                                                      alt="user_Three"
                                                                                    />
                                                                                    <div className="h-[268px] mt-auto mx-auto w-full">
                                                                                      <div className="absolute h-[268px] inset-[0] justify-center m-auto w-full">
                                                                                        <div className="flex flex-row gap-[22px] h-full items-start justify-between m-auto w-full">
                                                                                          <div className="h-[42px] md:h-[94px] mt-[52px] relative w-[17%]">
                                                                                            <Img
                                                                                              className="absolute h-[3px] inset-x-[0] mx-auto top-[0] w-[3px]"
                                                                                              src="images/img_vector_amber_600.svg"
                                                                                              alt="vector_Two"
                                                                                            />
                                                                                            <Img
                                                                                              className="h-0.5 ml-auto mr-[9px] mt-2.5 w-0.5"
                                                                                              src="images/img_vector_amber_600.svg"
                                                                                              alt="vector_Three"
                                                                                            />
                                                                                            <Img
                                                                                              className="absolute h-[42px] inset-[0] justify-center m-auto"
                                                                                              src="images/img_television.svg"
                                                                                              alt="television"
                                                                                            />
                                                                                          </div>
                                                                                          <div className="md:h-32 h-[268px] relative w-[78%]">
                                                                                            <div className="md:h-32 h-[268px] m-auto w-full">
                                                                                              <div className="absolute h-[268px] md:h-[98px] inset-[0] justify-center m-auto w-full">
                                                                                                <div className="h-[268px] md:h-[98px] m-auto w-full">
                                                                                                  <div className="h-[268px] md:h-[98px] m-auto w-full">
                                                                                                    <div className="h-[268px] md:h-[98px] m-auto w-full">
                                                                                                      <div className="h-[268px] md:h-[98px] m-auto w-full">
                                                                                                        <div className="absolute h-[268px] md:h-[98px] inset-y-[0] my-auto right-[0] w-[91%]">
                                                                                                          <div className="absolute h-[248px] md:h-[98px] inset-x-[0] mx-auto top-[0] w-full">
                                                                                                            <div className="h-[248px] md:h-[98px] m-auto w-full">
                                                                                                              <div className="h-[248px] md:h-[98px] m-auto w-full">
                                                                                                                <div className="h-[248px] md:h-[98px] m-auto w-full">
                                                                                                                  <div className="h-[248px] md:h-[98px] m-auto w-full">
                                                                                                                    <div className="h-[248px] md:h-[98px] m-auto w-full">
                                                                                                                      <div className="h-[248px] md:h-[98px] m-auto w-full">
                                                                                                                        <div className="h-[248px] md:h-[98px] m-auto w-full">
                                                                                                                          <div className="h-[248px] md:h-[98px] m-auto w-full">
                                                                                                                            <div className="h-[248px] md:h-[98px] m-auto w-full">
                                                                                                                              <div className="h-[248px] md:h-[98px] m-auto w-full">
                                                                                                                                <div className="h-[248px] md:h-[98px] m-auto w-full">
                                                                                                                                  <div className="absolute bottom-[0] h-[204px] md:h-[98px] left-[0] w-[205px]">
                                                                                                                                    <div className="absolute bottom-[0] h-[166px] md:h-[73px] left-[0] w-[82%]">
                                                                                                                                      <div className="h-[166px] md:h-[73px] m-auto w-full">
                                                                                                                                        <div className="absolute bottom-[0] h-[141px] md:h-[62px] left-[0] w-[141px]">
                                                                                                                                          <div className="absolute bottom-[0] h-20 md:h-[54px] left-[0] w-20">
                                                                                                                                            <div className="absolute h-20 md:h-[54px] inset-[0] justify-center m-auto w-20">
                                                                                                                                              <div className="h-20 md:h-[54px] m-auto w-20">
                                                                                                                                                <Img
                                                                                                                                                  className="absolute bottom-[0] h-[54px] left-[0]"
                                                                                                                                                  src="images/img_television_cyan_800.svg"
                                                                                                                                                  alt="television_One"
                                                                                                                                                />
                                                                                                                                                <Img
                                                                                                                                                  className="absolute h-[47px] right-[0] top-[0] w-12"
                                                                                                                                                  src="images/img_contrast.svg"
                                                                                                                                                  alt="contrast"
                                                                                                                                                />
                                                                                                                                              </div>
                                                                                                                                              <Img
                                                                                                                                                className="absolute bottom-[0] h-[41px] inset-x-[0] mx-auto w-[42px]"
                                                                                                                                                src="images/img_television_teal_900.svg"
                                                                                                                                                alt="television_Two"
                                                                                                                                              />
                                                                                                                                            </div>
                                                                                                                                            <Img
                                                                                                                                              className="absolute h-[47px] right-[0] top-[0]"
                                                                                                                                              src="images/img_checkmark.svg"
                                                                                                                                              alt="checkmark"
                                                                                                                                            />
                                                                                                                                            <Img
                                                                                                                                              className="absolute bottom-[0] h-[25px] left-[0]"
                                                                                                                                              src="images/img_settings.svg"
                                                                                                                                              alt="settings"
                                                                                                                                            />
                                                                                                                                          </div>
                                                                                                                                          <div
                                                                                                                                            className="absolute bg-cover bg-no-repeat flex flex-col h-[65px] items-center justify-end p-[18px] right-[0] top-[0] w-[49%]"
                                                                                                                                            style={{
                                                                                                                                              backgroundImage:
                                                                                                                                                "url('images/img_television.svg')",
                                                                                                                                            }}
                                                                                                                                          >
                                                                                                                                            <Img
                                                                                                                                              className="h-[21px] mt-[5px]"
                                                                                                                                              src="images/img_television_gray_900.svg"
                                                                                                                                              alt="television_Three"
                                                                                                                                            />
                                                                                                                                          </div>
                                                                                                                                        </div>
                                                                                                                                        <Img
                                                                                                                                          className="absolute h-[73px] object-cover right-[0] top-[0]"
                                                                                                                                          src="images/img_vector_73x83.png"
                                                                                                                                          alt="vector_Four"
                                                                                                                                        />
                                                                                                                                      </div>
                                                                                                                                      <div
                                                                                                                                        className="absolute bg-cover bg-no-repeat bottom-1/4 flex flex-col h-[73px] items-end justify-start left-[23%] pl-2 pt-2 w-[46%]"
                                                                                                                                        style={{
                                                                                                                                          backgroundImage:
                                                                                                                                            "url('images/img_group12.png')",
                                                                                                                                        }}
                                                                                                                                      >
                                                                                                                                        <Img
                                                                                                                                          className="h-[65px]"
                                                                                                                                          src="images/img_settings_cyan_800.svg"
                                                                                                                                          alt="settings_One"
                                                                                                                                        />
                                                                                                                                      </div>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                      className="absolute bg-cover bg-no-repeat flex flex-col h-[99px] items-start justify-start md:pr-10 sm:pr-5 pr-[45px] pt-[45px] right-[0] top-[0] w-[54%]"
                                                                                                                                      style={{
                                                                                                                                        backgroundImage:
                                                                                                                                          "url('images/img_group9.png')",
                                                                                                                                      }}
                                                                                                                                    >
                                                                                                                                      <Img
                                                                                                                                        className="h-12 mt-[5px]"
                                                                                                                                        src="images/img_settings_teal_900.svg"
                                                                                                                                        alt="settings_Two"
                                                                                                                                      />
                                                                                                                                    </div>
                                                                                                                                  </div>
                                                                                                                                  <Img
                                                                                                                                    className="absolute h-[83px] right-[0] top-[0]"
                                                                                                                                    src="images/img_contrast_teal_700.svg"
                                                                                                                                    alt="contrast_One"
                                                                                                                                  />
                                                                                                                                </div>
                                                                                                                                <div className="absolute flex flex-row gap-[5px] items-start justify-center right-[16%] top-[29%] w-[47%]">
                                                                                                                                  <Img
                                                                                                                                    className="h-7 mt-[52px]"
                                                                                                                                    src="images/img_settings_teal_900_28x38.svg"
                                                                                                                                    alt="settings_Three"
                                                                                                                                  />
                                                                                                                                  <Img
                                                                                                                                    className="h-[72px] mb-2"
                                                                                                                                    src="images/img_television_cyan_800_72x69.svg"
                                                                                                                                    alt="television_Four"
                                                                                                                                  />
                                                                                                                                </div>
                                                                                                                              </div>
                                                                                                                              <Img
                                                                                                                                className="absolute h-[78px] right-[0] top-[1%]"
                                                                                                                                src="images/img_checkmark.svg"
                                                                                                                                alt="checkmark_One"
                                                                                                                              />
                                                                                                                            </div>
                                                                                                                            <Img
                                                                                                                              className="absolute h-11 right-1/4 top-[27%]"
                                                                                                                              src="images/img_contrast_teal_700.svg"
                                                                                                                              alt="contrast_Two"
                                                                                                                            />
                                                                                                                          </div>
                                                                                                                          <Img
                                                                                                                            className="absolute h-[53px] object-cover right-[36%] top-1/4 w-[52px]"
                                                                                                                            src="images/img_sreicon021_53x52.png"
                                                                                                                            alt="sreicon021_One"
                                                                                                                          />
                                                                                                                        </div>
                                                                                                                        <Img
                                                                                                                          className="absolute bottom-[37%] h-[49px] right-[38%]"
                                                                                                                          src="images/img_user.svg"
                                                                                                                          alt="user"
                                                                                                                        />
                                                                                                                        <div
                                                                                                                          className="absolute bg-cover bg-no-repeat flex flex-col h-12 items-end justify-start right-[1%] top-[0] w-[34%]"
                                                                                                                          style={{
                                                                                                                            backgroundImage:
                                                                                                                              "url('images/img_group15.png')",
                                                                                                                          }}
                                                                                                                        >
                                                                                                                          <Img
                                                                                                                            className="h-[34px] mb-2.5 mr-0.5"
                                                                                                                            src="images/img_vector.svg"
                                                                                                                            alt="vector_Five"
                                                                                                                          />
                                                                                                                        </div>
                                                                                                                      </div>
                                                                                                                      <Img
                                                                                                                        className="absolute h-[53px] object-cover right-[34%] top-[19%]"
                                                                                                                        src="images/img_vector_53x59.png"
                                                                                                                        alt="vector_Six"
                                                                                                                      />
                                                                                                                    </div>
                                                                                                                    <Img
                                                                                                                      className="absolute bottom-[38%] h-[22px] left-[37%]"
                                                                                                                      src="images/img_settings_teal_900_22x29.svg"
                                                                                                                      alt="settings_Four"
                                                                                                                    />
                                                                                                                  </div>
                                                                                                                  <Img
                                                                                                                    className="absolute bottom-[17%] h-[71px] left-[16%] object-cover"
                                                                                                                    src="images/img_group12.png"
                                                                                                                    alt="vector_Seven"
                                                                                                                  />
                                                                                                                </div>
                                                                                                                <Img
                                                                                                                  className="absolute bottom-[17%] h-[60px] left-[23%] w-[60px]"
                                                                                                                  src="images/img_settings_cyan_800.svg"
                                                                                                                  alt="settings_Five"
                                                                                                                />
                                                                                                              </div>
                                                                                                              <Img
                                                                                                                className="absolute bottom-[35%] h-[26px] left-[34%]"
                                                                                                                src="images/img_settings_teal_900_22x29.svg"
                                                                                                                alt="settings_Six"
                                                                                                              />
                                                                                                            </div>
                                                                                                            <div
                                                                                                              className="absolute bg-cover bg-no-repeat bottom-[15%] md:h-[55px] h-[67px] left-[14%] w-[31%]"
                                                                                                              style={{
                                                                                                                backgroundImage:
                                                                                                                  "url('images/img_group12.png')",
                                                                                                              }}
                                                                                                            >
                                                                                                              <Img
                                                                                                                className="absolute bottom-[0] h-[55px] right-[0] w-[55px]"
                                                                                                                src="images/img_settings_cyan_800.svg"
                                                                                                                alt="settings_Seven"
                                                                                                              />
                                                                                                              <Img
                                                                                                                className="absolute bottom-[0] h-[25px] left-[0]"
                                                                                                                src="images/img_settings.svg"
                                                                                                                alt="settings_Eight"
                                                                                                              />
                                                                                                            </div>
                                                                                                          </div>
                                                                                                          <Img
                                                                                                            className="absolute bottom-[36%] h-7 left-[30%]"
                                                                                                            src="images/img_settings_teal_900_22x29.svg"
                                                                                                            alt="settings_Nine"
                                                                                                          />
                                                                                                          <Img
                                                                                                            className="absolute h-10 right-[14%] top-[16%]"
                                                                                                            src="images/img_vector_teal_900.svg"
                                                                                                            alt="vector_Eight"
                                                                                                          />
                                                                                                          <Img
                                                                                                            className="absolute bottom-[0] h-[53px] left-[9%] object-cover"
                                                                                                            src="images/img_group9.png"
                                                                                                            alt="vector_Nine"
                                                                                                          />
                                                                                                        </div>
                                                                                                        <Img
                                                                                                          className="absolute bottom-[13%] h-12 left-[29%]"
                                                                                                          src="images/img_contrast.svg"
                                                                                                          alt="contrast_Three"
                                                                                                        />
                                                                                                        <Img
                                                                                                          className="absolute bottom-[14%] h-[50px] left-[0] object-cover"
                                                                                                          src="images/img_group9.png"
                                                                                                          alt="vector_Ten"
                                                                                                        />
                                                                                                      </div>
                                                                                                      <Img
                                                                                                        className="absolute bottom-[26%] h-[43px] left-[13%]"
                                                                                                        src="images/img_contrast.svg"
                                                                                                        alt="contrast_Four"
                                                                                                      />
                                                                                                    </div>
                                                                                                    <Img
                                                                                                      className="absolute bottom-[0] h-[59px] left-1/4"
                                                                                                      src="images/img_edit.svg"
                                                                                                      alt="edit"
                                                                                                    />
                                                                                                  </div>
                                                                                                  <Img
                                                                                                    className="absolute bottom-[13%] h-12 left-[33%]"
                                                                                                    src="images/img_checkmark.svg"
                                                                                                    alt="checkmark_Two"
                                                                                                  />
                                                                                                  <Img
                                                                                                    className="absolute bottom-[19%] h-[35px] left-[0]"
                                                                                                    src="images/img_television_cyan_800_35x45.svg"
                                                                                                    alt="television_Five"
                                                                                                  />
                                                                                                </div>
                                                                                                <Img
                                                                                                  className="absolute bottom-[29%] h-[30px] left-[14%]"
                                                                                                  src="images/img_checkmark_gray_900.svg"
                                                                                                  alt="checkmark_Three"
                                                                                                />
                                                                                              </div>
                                                                                              <Img
                                                                                                className="absolute bottom-[14%] h-6 left-[0]"
                                                                                                src="images/img_contrast_teal_700.svg"
                                                                                                alt="contrast_Five"
                                                                                              />
                                                                                              <Img
                                                                                                className="absolute bottom-[0] h-[21px] left-[18%]"
                                                                                                src="images/img_contrast_teal_700.svg"
                                                                                                alt="contrast_Six"
                                                                                              />
                                                                                              <div className="absolute bottom-[11%] flex flex-row gap-12 items-start justify-center left-[23%] w-[34%]">
                                                                                                <Img
                                                                                                  className="h-[39px]"
                                                                                                  src="images/img_checkmark_white_a700.svg"
                                                                                                  alt="checkmark_Four"
                                                                                                />
                                                                                                <Img
                                                                                                  className="h-px mt-3 w-px"
                                                                                                  src="images/img_vector_cyan_800.svg"
                                                                                                  alt="vector_Eleven"
                                                                                                />
                                                                                              </div>
                                                                                              <Img
                                                                                                className="absolute h-[13px] left-[43%] top-[40%] w-[13px]"
                                                                                                src="images/img_close.svg"
                                                                                                alt="close"
                                                                                              />
                                                                                              <Img
                                                                                                className="absolute h-[17px] left-[41%] top-[40%]"
                                                                                                src="images/img_checkmark_cyan_800.svg"
                                                                                                alt="checkmark_Five"
                                                                                              />
                                                                                              <Img
                                                                                                className="absolute h-32 left-[6%] object-cover top-[21%]"
                                                                                                src="images/img_vector_128x50.png"
                                                                                                alt="vector_Twelve"
                                                                                              />
                                                                                            </div>
                                                                                            <Img
                                                                                              className="absolute h-[119px] left-[6%] object-cover top-[24%]"
                                                                                              src="images/img_vector_119x36.png"
                                                                                              alt="vector_Thirteen"
                                                                                            />
                                                                                          </div>
                                                                                        </div>
                                                                                        <div
                                                                                          className="absolute bg-cover bg-no-repeat h-8 md:h-[13px] left-[1%] pb-[7px] px-[7px] top-[19%] w-[15%]"
                                                                                          style={{
                                                                                            backgroundImage:
                                                                                              "url('images/img_television.svg')",
                                                                                          }}
                                                                                        >
                                                                                          <Img
                                                                                            className="absolute h-[13px] right-[22%] top-[0]"
                                                                                            src="images/img_music.svg"
                                                                                            alt="music"
                                                                                          />
                                                                                          <Img
                                                                                            className="absolute h-1.5 right-1/4 top-[22%]"
                                                                                            src="images/img_television.svg"
                                                                                            alt="television_Six"
                                                                                          />
                                                                                        </div>
                                                                                      </div>
                                                                                      <div
                                                                                        className="absolute bg-cover bg-no-repeat flex flex-col h-3.5 items-end justify-end left-[1%] top-[24%] w-[11%]"
                                                                                        style={{
                                                                                          backgroundImage:
                                                                                            "url('images/img_group21.svg')",
                                                                                        }}
                                                                                      >
                                                                                        <div
                                                                                          className="bg-cover bg-no-repeat flex flex-col h-[7px] items-end justify-start mr-1.5 mt-[3px] pl-0.5 w-2 md:w-full"
                                                                                          style={{
                                                                                            backgroundImage:
                                                                                              "url('images/img_group23.svg')",
                                                                                          }}
                                                                                        >
                                                                                          <Img
                                                                                            className="h-[7px]"
                                                                                            src="images/img_vector_white_a700.svg"
                                                                                            alt="vector_Fourteen"
                                                                                          />
                                                                                        </div>
                                                                                      </div>
                                                                                      <Img
                                                                                        className="absolute h-7 left-[41%] top-[12%]"
                                                                                        src="images/img_user_gray_900.svg"
                                                                                        alt="user_One"
                                                                                      />
                                                                                      <div
                                                                                        className="absolute bg-cover bg-no-repeat flex flex-col h-[79px] items-end justify-start left-[28%] top-[1%] w-[16%]"
                                                                                        style={{
                                                                                          backgroundImage:
                                                                                            "url('images/img_vector_128x50.png')",
                                                                                        }}
                                                                                      >
                                                                                        <div className="flex flex-row items-start justify-end mb-[15px] mr-[3px] w-[55%] md:w-full">
                                                                                          <Img
                                                                                            className="h-[57px] mt-[3px]"
                                                                                            src="images/img_user_orange_a400.svg"
                                                                                            alt="user_Two"
                                                                                          />
                                                                                          <Img
                                                                                            className="h-[21px]"
                                                                                            src="images/img_cut.svg"
                                                                                            alt="cut"
                                                                                          />
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>
                                                                                  <div className="absolute flex flex-row items-start justify-center left-[28%] top-[9%] w-[17%]">
                                                                                    <div
                                                                                      className="bg-cover bg-no-repeat flex flex-col h-[75px] items-start justify-start w-[63%]"
                                                                                      style={{
                                                                                        backgroundImage:
                                                                                          "url('images/img_group11.svg')",
                                                                                      }}
                                                                                    >
                                                                                      <Img
                                                                                        className="h-[74px] md:h-auto object-cover"
                                                                                        src="images/img_vector_74x30.png"
                                                                                        alt="vector_Fifteen"
                                                                                      />
                                                                                    </div>
                                                                                    <Img
                                                                                      className="h-[54px] ml-0.5"
                                                                                      src="images/img_settings_indigo_800.svg"
                                                                                      alt="settings_Ten"
                                                                                    />
                                                                                  </div>
                                                                                </div>
                                                                                <Img
                                                                                  className="absolute h-[53px] left-[41%] object-cover top-[9%]"
                                                                                  src="images/img_vector_53x12.png"
                                                                                  alt="vector_Sixteen"
                                                                                />
                                                                              </div>
                                                                              <Img
                                                                                className="absolute h-[33px] inset-x-[0] mx-auto object-cover top-[3%]"
                                                                                src="images/img_vector_33x43.png"
                                                                                alt="vector_Seventeen"
                                                                              />
                                                                            </div>
                                                                            <Img
                                                                              className="absolute h-[49px] left-[13%] object-cover top-[9%]"
                                                                              src="images/img_group15.png"
                                                                              alt="vector_Eighteen"
                                                                            />
                                                                          </div>
                                                                          <div className="absolute flex flex-row gap-10 items-start justify-center left-[13%] top-[3%] w-[43%]">
                                                                            <Img
                                                                              className="h-[43px] mt-[23px]"
                                                                              src="images/img_settings_gray_900.svg"
                                                                              alt="settings_Eleven"
                                                                            />
                                                                            <Img
                                                                              className="h-[34px]"
                                                                              src="images/img_settings_gray_900_34x42.svg"
                                                                              alt="settings_Twelve"
                                                                            />
                                                                          </div>
                                                                        </div>
                                                                        <div className="absolute flex flex-row items-end justify-between left-[9%] top-[9%] w-[35%]">
                                                                          <Img
                                                                            className="h-3 mt-11"
                                                                            src="images/img_question.svg"
                                                                            alt="question"
                                                                          />
                                                                          <Img
                                                                            className="h-[54px] mb-[3px]"
                                                                            src="images/img_favorite.svg"
                                                                            alt="favorite"
                                                                          />
                                                                        </div>
                                                                      </div>
                                                                      <div className="absolute flex flex-col items-end justify-start left-[13%] top-[10%] w-1/5">
                                                                        <Img
                                                                          className="h-[43px] mr-[3px]"
                                                                          src="images/img_vector_gray_900.svg"
                                                                          alt="vector_Nineteen"
                                                                        />
                                                                        <Img
                                                                          className="h-[3px]"
                                                                          src="images/img_vector_gray_900_3x9.svg"
                                                                          alt="vector_Twenty"
                                                                        />
                                                                      </div>
                                                                    </div>
                                                                    <div
                                                                      className="absolute bg-cover bg-no-repeat flex flex-col h-[29px] items-start justify-start left-[30%] pb-0.5 px-0.5 top-[15%] w-[3%]"
                                                                      style={{
                                                                        backgroundImage:
                                                                          "url('images/img_group17.svg')",
                                                                      }}
                                                                    >
                                                                      <Line className="bg-gray-900 h-[15px] mb-2.5 w-0.5" />
                                                                    </div>
                                                                  </div>
                                                                  <Img
                                                                    className="absolute h-[19px] left-[32%] top-[9%] w-5"
                                                                    src="images/img_settings_gray_900_19x20.svg"
                                                                    alt="settings_Thirteen"
                                                                  />
                                                                </div>
                                                                <div className="absolute flex flex-col items-end justify-start left-[35%] top-[13%] w-[10%]">
                                                                  <Img
                                                                    className="h-3"
                                                                    src="images/img_arrowright.svg"
                                                                    alt="arrowright"
                                                                  />
                                                                  <div className="flex flex-row gap-[26px] items-start justify-between w-[31px] md:w-full">
                                                                    <Line className="bg-gray-900 h-[31px] w-[3px]" />
                                                                    <Line className="bg-gray-900 h-5 mb-3 w-0.5" />
                                                                  </div>
                                                                </div>
                                                                <div
                                                                  className="absolute bg-cover bg-no-repeat flex flex-col h-[27px] items-center justify-start left-[36%] top-[0] w-[10%]"
                                                                  style={{
                                                                    backgroundImage:
                                                                      "url('images/img_group18.svg')",
                                                                  }}
                                                                >
                                                                  <div className="h-2.5 relative w-[54%]">
                                                                    <div className="absolute h-2.5 left-[0] top-[0] w-[71%]">
                                                                      <Img
                                                                        className="absolute h-2.5 inset-y-[0] my-auto right-[0] w-2.5"
                                                                        src="images/img_arrowright.svg"
                                                                        alt="arrowright_One"
                                                                      />
                                                                      <Img
                                                                        className="absolute bottom-[0] h-2 left-[0]"
                                                                        src="images/img_vector_gray_900_8x5.svg"
                                                                        alt="vector_TwentyFour"
                                                                      />
                                                                    </div>
                                                                    <Img
                                                                      className="absolute bottom-[0] h-[9px] right-[0]"
                                                                      src="images/img_vector_gray_900_9x12.svg"
                                                                      alt="vector_TwentyFive"
                                                                    />
                                                                  </div>
                                                                  <div className="flex flex-col h-0.5 items-center justify-start my-1 w-0.5">
                                                                    <Img
                                                                      className="h-px w-0.5"
                                                                      src="images/img_vector_blue_gray_900.svg"
                                                                      alt="vector_TwentySix"
                                                                    />
                                                                    <Img
                                                                      className="h-px w-0.5"
                                                                      src="images/img_vector_blue_gray_900_1x2.svg"
                                                                      alt="vector_TwentySeven"
                                                                    />
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <Img
                                                                className="absolute h-2.5 left-[34%] object-cover top-[12%]"
                                                                src="images/img_vector_10x18.png"
                                                                alt="vector_TwentyEight"
                                                              />
                                                            </div>
                                                            <Img
                                                              className="absolute h-[7px] left-[39%] object-cover top-[12%]"
                                                              src="images/img_vector_7x5.png"
                                                              alt="vector_TwentyNine"
                                                            />
                                                          </div>
                                                          <Img
                                                            className="absolute h-1 left-[39%] top-[14%] w-[3px]"
                                                            src="images/img_vector_teal_700.svg"
                                                            alt="vector_Thirty"
                                                          />
                                                        </div>
                                                        <div className="absolute flex flex-col items-end justify-start left-[32%] top-[4%] w-[8%]">
                                                          <Img
                                                            className="h-3.5"
                                                            src="images/img_checkmark.svg"
                                                            alt="checkmark_Six"
                                                          />
                                                          <Img
                                                            className="h-2.5"
                                                            src="images/img_vector_deep_orange_300.svg"
                                                            alt="vector_ThirtyOne"
                                                          />
                                                          <Img
                                                            className="h-[45px] mt-1.5"
                                                            src="images/img_settings_teal_700.svg"
                                                            alt="settings_Fourteen"
                                                          />
                                                        </div>
                                                      </div>
                                                      <Img
                                                        className="absolute h-1.5 left-[37%] top-[3%] w-[7px]"
                                                        src="images/img_group17.svg"
                                                        alt="favorite_One"
                                                      />
                                                    </div>
                                                    <Img
                                                      className="absolute h-[11px] inset-x-[0] mx-auto top-[3%]"
                                                      src="images/img_television.svg"
                                                      alt="television_Seven"
                                                    />
                                                  </div>
                                                  <Img
                                                    className="absolute h-3.5 right-[38%] top-[1%]"
                                                    src="images/img_television.svg"
                                                    alt="television_Eight"
                                                  />
                                                </div>
                                                <Img
                                                  className="absolute h-[18px] right-[32%] top-[0]"
                                                  src="images/img_television.svg"
                                                  alt="television_Nine"
                                                />
                                              </div>
                                              <Img
                                                className="absolute h-[18px] right-[32%] top-[0]"
                                                src="images/img_user_gray_900.svg"
                                                alt="user_Four"
                                              />
                                            </div>
                                            <div
                                              className="absolute bg-cover bg-no-repeat flex flex-col h-2.5 items-end justify-start pb-[5px] px-[5px] right-[44%] top-[3%] w-[8%]"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_user_gray_900.svg')",
                                              }}
                                            >
                                              <Img
                                                className="h-[5px]"
                                                src="images/img_vector_deep_orange_200.svg"
                                                alt="vector_ThirtyTwo"
                                              />
                                            </div>
                                          </div>
                                          <Img
                                            className="absolute h-[5px] left-[44%] top-[5%]"
                                            src="images/img_vector_gray_900_5x15.svg"
                                            alt="vector_ThirtyThree"
                                          />
                                        </div>
                                        <div
                                          className="absolute bg-cover bg-no-repeat flex flex-col h-[19px] items-start justify-start pb-[3px] right-[31%] top-[0] w-[3%]"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_television.svg')",
                                          }}
                                        >
                                          <Img
                                            className="h-[15px] md:h-auto object-cover"
                                            src="images/img_vector_15x7.png"
                                            alt="vector_ThirtyFour"
                                          />
                                        </div>
                                        <div className="absolute flex flex-row gap-6 inset-x-[0] items-start justify-center mx-auto top-[5%] w-[12%]">
                                          <Img
                                            className="h-1.5 mt-[3px]"
                                            src="images/img_vector_teal_700_6x4.svg"
                                            alt="vector_ThirtyFive"
                                          />
                                          <Img
                                            className="h-[9px] w-2.5"
                                            src="images/img_user_deep_orange_200_9x10.svg"
                                            alt="user_Five"
                                          />
                                        </div>
                                      </div>
                                      <div className="absolute flex flex-col inset-x-[0] justify-start mx-auto top-[1%] w-[28%]">
                                        <Img
                                          className="h-1.5 md:h-auto md:ml-[0] ml-[63px] object-cover"
                                          src="images/img_vector_6x31.png"
                                          alt="vector_ThirtySix"
                                        />
                                        <Img
                                          className="h-1 md:ml-[0] ml-[50px] mt-[9px]"
                                          src="images/img_vector_deep_orange_300_4x7.svg"
                                          alt="vector_ThirtySeven"
                                        />
                                        <Img
                                          className="h-[58px] mr-[25px] mt-[65px]"
                                          src="images/img_thumbsup.svg"
                                          alt="thumbsup"
                                        />
                                      </div>
                                    </div>
                                    <Img
                                      className="absolute h-[52px] left-[38%] object-cover top-[31%]"
                                      src="images/img_vector_52x62.png"
                                      alt="vector_ThirtyEight"
                                    />
                                  </div>
                                  <Img
                                    className="absolute bottom-[24%] h-[11px] left-[27%]"
                                    src="images/img_settings_white_a700.svg"
                                    alt="settings_Fifteen"
                                  />
                                </div>
                                <Img
                                  className="absolute bottom-[24%] h-[13px] left-[28%]"
                                  src="images/img_television_black_900_01.svg"
                                  alt="television_Ten"
                                />
                                <Img
                                  className="absolute h-3 inset-y-[0] my-auto right-[43%]"
                                  src="images/img_settings_white_a700.svg"
                                  alt="settings_Sixteen"
                                />
                              </div>
                              <Img
                                className="absolute h-3.5 inset-y-[0] my-auto right-[39%]"
                                src="images/img_television_black_900_01.svg"
                                alt="television_Eleven"
                              />
                            </div>
                            <Img
                              className="absolute h-[23px] left-[29%] top-[32%]"
                              src="images/img_vector_gray_900_23x42.svg"
                              alt="vector_ThirtyNine"
                            />
                          </div>
                          <Img
                            className="absolute h-[13px] left-[34%] top-[31%]"
                            src="images/img_group17.svg"
                            alt="favorite_Two"
                          />
                        </div>
                        <Img
                          className="absolute h-2 left-[36%] top-[31%]"
                          src="images/img_vector_gray_900_8x4.svg"
                          alt="vector_Forty"
                        />
                        <Img
                          className="absolute h-[9px] left-[31%] top-[38%]"
                          src="images/img_vector_gray_900_9x14.svg"
                          alt="vector_FortyOne"
                        />
                      </div>
                      <Img
                        className="absolute h-[60px] inset-y-[0] left-[30%] my-auto"
                        src="images/img_favorite_gray_900.svg"
                        alt="favorite_Three"
                      />
                    </div>
                    <div className="absolute bottom-[43%] flex flex-col items-start justify-start left-[31%] w-[4%]">
                      <Img
                        className="h-[3px] ml-0.5 md:ml-[0]"
                        src="images/img_vector_gray_900_3x9.svg"
                        alt="vector_FortyTwo"
                      />
                      <Img
                        className="h-1.5"
                        src="images/img_arrowright.svg"
                        alt="arrowright_Two"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[27%] h-1.5 left-[27%]"
                      src="images/img_television_gray_900_6x12.svg"
                      alt="television_Twelve"
                    />
                    <Line className="absolute bg-gray-900 h-5 left-[38%] top-[34%] w-1" />
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-[27px] items-start justify-end left-[38%] p-1 top-[32%] w-[17%]"
                    style={{
                      backgroundImage:
                        "url('images/img_settings_gray_900_34x42.svg')",
                    }}
                  >
                    <Img
                      className="h-3.5 mt-1"
                      src="images/img_vector_gray_900_8x5.svg"
                      alt="vector_FortyFour"
                    />
                  </div>
                </div>
                <div className="absolute flex flex-col gap-[30px] items-start justify-start right-[43%] top-[33%] w-[4%]">
                  <Img
                    className="h-2 w-2"
                    src="images/img_group17.svg"
                    alt="favorite_Four"
                  />
                  <Img
                    className="h-2"
                    src="images/img_vector_gray_900_8x12.svg"
                    alt="vector_FortyFive"
                  />
                </div>
                <Line className="absolute bg-gray-900 h-[18px] left-[43%] top-1/4 w-0.5" />
                <Img
                  className="absolute h-0.5 left-[40%] top-[10%]"
                  src="images/img_vector_blue_gray_900_2x4.svg"
                  alt="vector_FortySeven"
                />
                <Img
                  className="absolute h-1.5 left-[38%] top-[6%] w-1.5"
                  src="images/img_contrast_gray_900.svg"
                  alt="contrast_Seven"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-[0] flex flex-row gap-2.5 items-start justify-center right-[14%] w-[18%]">
            <a href="javascript:" className="text-base text-black-900_99">
              <Text size="txtPoppinsRegular16Black90099">
                Create an account
              </Text>
            </a>
            <Text
              className="common-pointer text-base text-gray-900 underline"
              size="txtPoppinsRegular16Gray900"
              onClick={() => navigate("/listvendorone")}
            >
              Signup
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-[33px] items-center mt-12 w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[485px] items-start justify-end p-[37px] sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group8.svg')" }}
          >
            <div className="flex flex-col justify-start md:ml-[0] ml-[74px] mt-[73px] md:px-5 w-[81%] md:w-full">
              <Text
                className="md:ml-[0] ml-[364px] sm:text-3xl md:text-[32px] text-[34px] text-black-900 text-center"
                size="txtPoppinsRegular34"
              >
                Why choose Sreerastu ?
              </Text>
              <Text
                className="ml-14 md:ml-[0] mt-[31px] text-base text-black-900_a2 text-center w-[95%] sm:w-full"
                size="txtPoppinsRegular16Black900a2"
              >
                <>
                  Get your business in front of 1 million monthly visitors!
                  Reach customers as they search the internet using
                  event-related terms such as &quot;wedding places&quot;,
                  &quot;party venues&quot; and &quot;corporate meeting locations
                </>
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mr-[19px] mt-[81px] w-[99%] md:w-full">
                <Text
                  className="md:mt-0 mt-5 sm:text-[23.65px] md:text-[25.65px] text-[27.65px] text-black-900 text-center"
                  size="txtPoppinsRegular2765Black900"
                >
                  <>
                    12,000+
                    <br />
                    Vendors
                  </>
                </Text>
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-[100px] items-center justify-center w-auto md:w-full">
                  <Text
                    className="max-w-[262px] md:max-w-full sm:text-[23.65px] md:text-[25.65px] text-[27.65px] text-black-900 text-center"
                    size="txtPoppinsRegular2765Black900"
                  >
                    Customers buying across India
                  </Text>
                  <Text
                    className="sm:text-[23.65px] md:text-[25.65px] text-[27.65px] text-black-900 text-center"
                    size="txtPoppinsRegular2765Black900"
                  >
                    <>
                      4 Lac+
                      <br />
                      Trust customers on online
                    </>
                  </Text>
                </div>
                <Text
                  className="md:mt-0 mt-4 sm:text-[23.65px] md:text-[25.65px] text-[27.65px] text-black-900 text-center"
                  size="txtPoppinsRegular2765Black900"
                >
                  <>
                    30,000+
                    <br />
                    Venues
                  </>
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1120px] mx-auto md:px-5 w-full">
            <div className="md:h-[261px] h-[278px] sm:h-[483px] relative w-[1120px] md:w-full">
              <div className="absolute flex flex-col gap-[34px] h-[259px] md:h-auto items-center justify-start left-[0] max-w-[950px] top-[0] w-full">
                <Text
                  className="sm:text-3xl md:text-[32px] text-[34px] text-black-900 text-center w-full"
                  size="txtPoppinsRegular34"
                >
                  How its Work ?
                </Text>
                <div className="flex flex-col gap-[33px] items-start justify-start w-[99%] md:w-full">
                  <div className="sm:h-[180px] h-[62px] md:ml-[0] ml-[5px] relative w-[94%] md:w-full">
                    <div className="absolute flex sm:flex-col flex-row gap-[18px] h-full inset-y-[0] items-center justify-between max-w-[821px] my-auto right-[0] w-full">
                      <Img
                        className="h-px w-[177px]"
                        src="images/img_line21.svg"
                        alt="lineTwentyOne"
                      />
                      <ListVendorStackplayTwo
                        className="h-[62px] relative w-[8%] sm:w-full"
                        textone="2"
                      />
                      <Img
                        className="h-px w-[177px]"
                        src="images/img_line21.svg"
                        alt="lineTwentyTwo"
                      />
                      <ListVendorStackplayTwo
                        className="h-[62px] relative w-[8%] sm:w-full"
                        textone="3"
                      />
                    </div>
                    <ListVendorStackplayTwo className="absolute h-[62px] inset-y-[0] left-[0] my-auto w-[7%]" />
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 h-[81px] md:h-auto items-start justify-between max-w-[938px] w-full">
                    <a
                      href="javascript:"
                      className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-black-900 w-auto"
                    >
                      <Text size="txtPoppinsRegular2304Black900">
                        Create Account
                      </Text>
                    </a>
                    <Text
                      className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-black-900 w-auto"
                      size="txtPoppinsRegular2304Black900"
                    >
                      Approved by our Agent
                    </Text>
                    <Text
                      className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-black-900 w-auto"
                      size="txtPoppinsRegular2304Black900"
                    >
                      Get Clients
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-5 items-start justify-start left-[0] w-4/5 md:w-full">
                <Text
                  className="text-base text-blue_gray-900 w-[31%] sm:w-full"
                  size="txtPoppinsRegular16Bluegray900"
                >
                  Add your basic details & your expertise
                </Text>
                <Text
                  className="md:ml-[0] ml-[99px] md:mt-0 mt-0.5 text-base text-blue_gray-900"
                  size="txtPoppinsRegular16Bluegray900"
                >
                  Our Agent will check & approved
                </Text>
                <Text
                  className="md:ml-[0] ml-[184px] text-base text-blue_gray-900"
                  size="txtPoppinsRegular16Bluegray900"
                >
                  Done
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[42px] items-center justify-start md:ml-[0] ml-[99px] mt-[134px] md:px-5 w-auto md:w-full">
          <Text
            className="sm:text-3xl md:text-[32px] text-[34px] text-black-900 w-auto"
            size="txtPoppinsRegular34"
          >
            Frequently Asked Questions
          </Text>
          <List
            className="sm:flex-col flex-row gap-5 grid md:grid-cols-1 grid-cols-2 justify-start w-auto md:w-full"
            orientation="horizontal"
          >
            <div className="flex flex-col gap-3.5 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <SelectBox
                  className="border border-black-900_99 border-solid leading-[normal] rounded-lg sm:text-[16.74px] md:text-[18.74px] text-[20.74px] text-left w-full"
                  placeholderClassName="text-blue_gray-900"
                  indicator={
                    <Img
                      className="h-3 mr-[0] w-[21px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="questionCounter"
                  options={questionCounterOptionsList}
                  isSearchable={false}
                  placeholder="1 Question"
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <SelectBox
                  className="border border-black-900_99 border-solid leading-[normal] rounded-lg sm:text-[16.74px] md:text-[18.74px] text-[20.74px] text-left w-full"
                  placeholderClassName="text-blue_gray-900"
                  indicator={
                    <Img
                      className="h-3 mr-[0] w-[21px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="questionCounter_One"
                  options={questionCounterOneOptionsList}
                  isSearchable={false}
                  placeholder="1 Question"
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <SelectBox
                  className="border border-black-900_99 border-solid leading-[normal] rounded-lg sm:text-[16.74px] md:text-[18.74px] text-[20.74px] text-left w-full"
                  placeholderClassName="text-blue_gray-900"
                  indicator={
                    <Img
                      className="h-3 mr-[0] w-[21px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="questionCounter_Two"
                  options={questionCounterTwoOptionsList}
                  isSearchable={false}
                  placeholder="1 Question"
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <SelectBox
                  className="border border-black-900_99 border-solid leading-[normal] rounded-lg sm:text-[16.74px] md:text-[18.74px] text-[20.74px] text-left w-full"
                  placeholderClassName="text-blue_gray-900"
                  indicator={
                    <Img
                      className="h-3 mr-[0] w-[21px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="questionCounter_Three"
                  options={questionCounterThreeOptionsList}
                  isSearchable={false}
                  placeholder="1 Question"
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[15px] items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <SelectBox
                  className="border border-black-900_99 border-solid leading-[normal] rounded-lg sm:text-[16.74px] md:text-[18.74px] text-[20.74px] text-left w-full"
                  placeholderClassName="text-blue_gray-900"
                  indicator={
                    <Img
                      className="h-3 mr-[0] w-[21px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="questionCounter"
                  options={questionCounterOptionsList1}
                  isSearchable={false}
                  placeholder="1 Question"
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <SelectBox
                  className="border border-black-900_99 border-solid leading-[normal] rounded-lg sm:text-[16.74px] md:text-[18.74px] text-[20.74px] text-left w-full"
                  placeholderClassName="text-blue_gray-900"
                  indicator={
                    <Img
                      className="h-3 mr-[0] w-[21px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="questionCounter_One"
                  options={questionCounterOneOptionsList1}
                  isSearchable={false}
                  placeholder="1 Question"
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <SelectBox
                  className="border border-black-900_99 border-solid leading-[normal] rounded-lg sm:text-[16.74px] md:text-[18.74px] text-[20.74px] text-left w-full"
                  placeholderClassName="text-blue_gray-900"
                  indicator={
                    <Img
                      className="h-3 mr-[0] w-[21px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="questionCounter_Two"
                  options={questionCounterTwoOptionsList1}
                  isSearchable={false}
                  placeholder="1 Question"
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <SelectBox
                  className="border border-black-900_99 border-solid leading-[normal] rounded-lg sm:text-[16.74px] md:text-[18.74px] text-[20.74px] text-left w-full"
                  placeholderClassName="text-blue_gray-900"
                  indicator={
                    <Img
                      className="h-3 mr-[0] w-[21px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="questionCounter_Three"
                  options={questionCounterThreeOptionsList1}
                  isSearchable={false}
                  placeholder="1 Question"
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                />
              </div>
            </div>
          </List>
        </div>
        <div className="flex flex-col gap-3.5 items-center mt-[59px] w-full">
          <div className="flex flex-col gap-5 justify-start md:px-5 w-[54%] md:w-full">
            <Text
              className="md:ml-[0] ml-[307px] sm:text-3xl md:text-[32px] text-[34px] text-black-900 text-center"
              size="txtPoppinsRegular34"
            >
              Our Customers Love us
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
                <div className="flex md:flex-1 flex-col gap-[17px] justify-start mb-[105px] w-[71%] md:w-full">
                  <div className="h-[189px] relative w-full">
                    <div className="absolute bg-gray-50 h-[189px] inset-[0] justify-center m-auto outline outline-[2px] outline-gray-900 rounded-bl-[109px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[109px] shadow-bs2 w-[97%]"></div>
                    <Text
                      className="absolute right-[0] text-[19.2px] text-black-900 top-[13%] w-[91%] sm:w-full"
                      size="txtPoppinsRegular192Black900"
                    >
                      I was thoroughly impressed with the level of service
                      provided by Sreerastu and would highly recommend them to
                      anyone looking for event planning assistance.
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[423px] text-base text-gray-900 text-right"
                    size="txtPoppinsRegular16Gray900"
                  >
                    @Kumar_Raj
                  </Text>
                </div>
                <Img
                  className="md:flex-1 h-48 sm:h-auto md:mt-0 mt-36 object-cover rounded-[113px] w-[30%] md:w-full"
                  src="images/img_ellipse10_192x226.png"
                  alt="ellipseTen"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-900 flex flex-col items-center justify-start p-7 sm:px-5 w-full">
            <div className="flex flex-col gap-[30px] items-center justify-start max-w-[1299px] mb-0.5 mx-auto md:px-5 w-full">
              <Text
                className="sm:text-[23.65px] md:text-[25.65px] text-[27.65px] text-white-A700"
                size="txtPoppinsRegular2765WhiteA700"
              >
                Choose the best plan for your business{" "}
              </Text>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="bg-blue_gray-100 h-[516px] md:mt-0 mt-[26px] rounded-[15px] w-[28%]"></div>
                <Img
                  className="h-[454px] ml-28 md:ml-[0] w-[419px]"
                  src="images/img_frame258.svg"
                  alt="frame258"
                />
                <div className="bg-blue_gray-100 h-[516px] ml-12 md:ml-[0] md:mt-0 my-[13px] rounded-[15px] w-[28%]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[536px] mt-[72px] md:px-5 w-auto">
          <Text
            className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-gray-900 w-auto"
            size="txtPoppinsRegular2304Gray900"
          >
            Get register in Sreerastu{" "}
          </Text>
        </div>
        <div className="flex flex-col items-end mt-[147px] md:px-10 sm:px-5 px-[505px] w-full">
          <div className="flex flex-row gap-8 items-start justify-start w-auto">
            <Button
              className="common-pointer cursor-pointer leading-[normal] min-w-[196px] text-base text-center"
              onClick={() => navigate("/listvendorone")}
              shape="round"
              color="gray_900"
              size="sm"
              variant="fill"
            >
              Register as a Vendor
            </Button>
            <Button
              className="common-pointer cursor-pointer leading-[normal] min-w-[139px] text-base text-center"
              onClick={() => navigate("/")}
              shape="round"
              color="gray_900"
              size="sm"
              variant="outline"
            >
              Hire a Vendor
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListVendorPage;
