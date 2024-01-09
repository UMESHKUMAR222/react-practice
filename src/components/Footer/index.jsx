import React from "react";

import { Img, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[649px] items-center justify-center py-8 w-full"
          style={{ backgroundImage: "url('images/img_group60.png')" }}
        >
          <div className="flex flex-col items-center justify-center mt-[63px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[150px] items-start justify-between w-auto md:w-full">
              <div className="flex flex-col justify-start w-[37%] md:w-full">
                <div className="flex relative w-[284px]">
                  <Img
                    className="h-[136px] my-auto object-cover w-[92px]"
                    src="images/img_sreicon021.png"
                    alt="sreicon021_One"
                  />
                  <Img
                    className="h-[47px] ml-[-13.68px] my-auto object-cover w-[205px] z-[1]"
                    src="images/img_sreicon011.png"
                    alt="sreicon011_One"
                  />
                </div>
                <div className="flex flex-col gap-[19px] items-start justify-start md:ml-[0] ml-[7px] w-[99%] md:w-full">
                  <div className="flex flex-row gap-9 items-start justify-start p-[3px] w-[48%] md:w-full">
                    <Img
                      className="h-[42px] ml-[3px] mt-1.5 w-[42px]"
                      src="images/img_save.svg"
                      alt="save"
                    />
                    <Img
                      className="h-[29px] mt-[11px] w-[29px]"
                      src="images/img_info.svg"
                      alt="info"
                    />
                    <Img
                      className="h-7 mt-[11px] w-[29px]"
                      src="images/img_link.svg"
                      alt="link"
                    />
                  </div>
                  <div className="flex flex-col gap-2.5 h-[104px] md:h-auto items-start justify-start p-2.5 w-[422px] sm:w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-[34px] w-[34px]"
                        src="images/img_circummobile3.svg"
                        alt="circummobileThree"
                      />
                      <Text
                        className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-gray-50_a2 w-auto"
                        size="txtPoppinsRegular2304"
                      >
                        1234567891
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto sm:w-full">
                      <Img
                        className="h-9 w-9"
                        src="images/img_materialsymbolsmailoutline.svg"
                        alt="materialsymbols"
                      />
                      <Text
                        className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-gray-50_a2 w-auto"
                        size="txtPoppinsRegular2304"
                      >
                        Sreerastu_help@gmail.com
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[25px] items-center justify-start w-[211px]">
                <div className="flex flex-col items-start justify-start p-2.5 w-auto">
                  <Text
                    className="sm:text-[23.65px] md:text-[25.65px] text-[27.65px] text-gray-50_a2 w-auto"
                    size="txtPoppinsRegular2765Gray50a2"
                  >
                    COMPANY
                  </Text>
                </div>
                <ul className="flex flex-col gap-[25px] items-start justify-start w-auto md:w-full common-column-list">
                  <li>
                    <div className="flex flex-row gap-5 items-center justify-center">
                      <div className="bg-gray-50 h-[11px] rounded-[5px] w-[11px]"></div>
                      <Text
                        className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-gray-50_a2 w-auto"
                        size="txtPoppinsRegular2304"
                      >
                        <>About us</>
                      </Text>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-5 items-center justify-center">
                      <div className="bg-gray-50 h-[11px] rounded-[5px] w-[11px]"></div>
                      <Text
                        className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-gray-50_a2"
                        size="txtPoppinsRegular2304"
                      >
                        <>
                          Terms &<br />
                          Conditions
                        </>
                      </Text>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-5 items-center justify-center">
                      <div className="bg-gray-50 h-[11px] rounded-[5px] w-[11px]"></div>
                      <Text
                        className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-gray-50_a2 w-auto"
                        size="txtPoppinsRegular2304"
                      >
                        Policies
                      </Text>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-5 items-center justify-center">
                      <div className="bg-gray-50 h-[11px] rounded-[5px] w-[11px]"></div>
                      <Text
                        className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-gray-50_a2 w-auto"
                        size="txtPoppinsRegular2304"
                      >
                        Privacy
                      </Text>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-[18px] items-center justify-center w-[226px]">
                <div className="flex flex-col items-start justify-start p-2.5 w-auto">
                  <Text
                    className="sm:text-[23.65px] md:text-[25.65px] text-[27.65px] text-gray-50_a2 w-auto"
                    size="txtPoppinsRegular2765Gray50a2"
                  >
                    OFFERINGS
                  </Text>
                </div>
                <ul className="flex flex-col gap-[18px] items-start justify-center w-auto md:w-full common-column-list">
                  <li>
                    <div className="flex flex-row gap-5 items-center justify-center">
                      <div className="bg-gray-50 h-[11px] rounded-[5px] w-[11px]"></div>
                      <Text
                        className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-gray-50_a2 w-auto"
                        size="txtPoppinsRegular2304"
                      >
                        All Services
                      </Text>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-5 items-center justify-center">
                      <div className="bg-gray-50 h-[11px] rounded-[5px] w-[11px]"></div>
                      <Text
                        className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-gray-50_a2 w-auto"
                        size="txtPoppinsRegular2304"
                      >
                        Vendor
                      </Text>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-5 items-center justify-center">
                      <div className="bg-gray-50 h-[11px] rounded-[5px] w-[11px]"></div>
                      <Text
                        className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-gray-50_a2 w-auto"
                        size="txtPoppinsRegular2304"
                      >
                        Find A Venue{" "}
                      </Text>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <Text
              className="mt-[83px] text-base text-gray-50_b2"
              size="txtPoppinsRegular16Gray50b2"
            >
              Copyright@ 2023. Sreerastu Pvt. Ltd.
            </Text>
            <div className="bg-red-900 flex flex-col items-center justify-start w-full">
              <Line className="bg-gray-50 h-px rotate-[-180deg] w-full" />
              <ul className="flex sm:flex-col flex-row sm:gap-10 gap-[75px] items-center justify-center max-w-[777px] mt-[18px] w-full common-column-list">
                <li>
                  <Text
                    className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-gray-50"
                    size="txtPoppinsRegular2304Gray50"
                  >
                    Home
                  </Text>
                </li>
                <li>
                  <Text
                    className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-gray-50"
                    size="txtPoppinsRegular2304Gray50"
                  >
                    About Us
                  </Text>
                </li>
                <li>
                  <Text
                    className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-gray-50"
                    size="txtPoppinsRegular2304Gray50"
                  >
                    Contact Us
                  </Text>
                </li>
                <li>
                  <Text
                    className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-gray-50"
                    size="txtPoppinsRegular2304Gray50"
                  >
                    Find A Venue | Vendor
                  </Text>
                </li>
              </ul>
              <Line className="bg-gray-50 h-px mt-[25px] rotate-[-180deg] w-full" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
