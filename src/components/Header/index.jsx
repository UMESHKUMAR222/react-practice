import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mx-auto w-[85%]">
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
              <div className="font-poppins leading-[normal] text-base text-left">
                Hyderabad
              </div>
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start w-[32%] md:w-full">
            <div className="flex sm:flex-col flex-row gap-6 items-center justify-center w-auto sm:w-full">
              <Text
                className="common-pointer text-base text-white-A700 w-auto"
                size="txtPoppinsRegular16WhiteA700"
                onClick={() => navigate("/vendors")}
              >
                About
              </Text>
              <Text
                className="common-pointer text-base text-white-A700 underline w-auto"
                size="txtPoppinsRegular16WhiteA700"
                onClick={() => navigate("/vendors")}
              >
                Register as vendor
              </Text>
              <div className="flex flex-col items-center justify-start w-[36%] sm:w-full">
                <Button
                  className="common-pointer cursor-pointer font-poppins h-9 leading-[normal] min-w-[136px] text-base text-center"
                  onClick={() => navigate("/signup")}
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
    </>
  );
};

Header.defaultProps = {};

export default Header;
