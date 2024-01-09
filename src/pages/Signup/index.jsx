import React from "react";

import { Button, Img, Line, Text } from "components";

const SignupPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-start justify-start mx-auto md:px-10 sm:px-5 px-[91px] py-[46px] shadow-bs3 w-auto sm:w-full md:w-full">
        <div className="bg-gray-300 flex flex-row gap-[45px] items-center justify-start pl-[38px] md:px-5 rounded-lg w-1/4 md:w-full">
          <a
            href="javascript:"
            className="sm:text-[18.12px] md:text-[20.12px] text-[22.12px] text-blue_gray-900_99"
          >
            <Text size="txtPoppinsRegular2212">Login</Text>
          </a>
          <Button
            className="!text-gray-200 cursor-pointer leading-[normal] min-w-[142px] rounded-lg sm:text-[18.12px] md:text-[20.12px] text-[22.12px] text-center"
            shape="round"
            color="gray_900"
            size="sm"
            variant="fill"
          >
            Signup
          </Button>
        </div>
        <Text
          className="text-[19.2px] text-black-900 w-auto"
          size="txtPoppinsRegular192Black900"
        >
          Full Name
        </Text>
        <Text
          className="text-[19.2px] text-black-900 w-auto"
          size="txtPoppinsRegular192Black900"
        >
          1234567891
        </Text>
        <div className="flex flex-col gap-6 items-start justify-start w-auto">
          <div className="flex flex-col gap-[55px] justify-start w-full">
            <Text
              className="md:ml-[0] ml-[5px] text-base text-black-900"
              size="txtPoppinsRegular16"
            >
              Full Name *
            </Text>
            <Line className="bg-black-900_99 h-px rotate-[-180deg] w-full" />
          </div>
          <div className="flex flex-col md:gap-10 gap-[61px] justify-start w-full">
            <Text
              className="md:ml-[0] ml-[5px] text-base text-black-900"
              size="txtPoppinsRegular16"
            >
              Phone No *
            </Text>
            <Line className="bg-black-900_99 h-px rotate-[-180deg] w-full" />
          </div>
          <div className="flex flex-col md:gap-10 gap-[66px] justify-start w-full">
            <Text
              className="md:ml-[0] ml-[5px] text-base text-black-900"
              size="txtPoppinsRegular16"
            >
              Email Address *
            </Text>
            <Line className="bg-black-900_99 h-px rotate-[-180deg] w-full" />
          </div>
          <div className="flex flex-col md:gap-10 gap-[62px] justify-start w-full">
            <Text
              className="md:ml-[0] ml-[5px] text-base text-black-900"
              size="txtPoppinsRegular16"
            >
              Password *
            </Text>
            <Line className="bg-black-900_99 h-px rotate-[-180deg] w-full" />
          </div>
        </div>
        <div className="flex flex-col items-center max-w-[1176px] mx-auto w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Img
              className="h-[1124px] md:h-auto object-cover w-full"
              src="images/img_sreicon022.png"
              alt="sreicon022"
            />
          </div>
        </div>
        <Text
          className="text-[19.2px] text-black-900 w-auto"
          size="txtPoppinsRegular192Black900"
        >
          mail@gmail.com
        </Text>
        <Img
          className="h-6 w-6"
          src="images/img_component7.svg"
          alt="componentSeven"
        />
        <Text
          className="text-[19.2px] text-black-900 w-auto"
          size="txtPoppinsRegular192Black900"
        >
          123@ABC
        </Text>
        <div className="flex flex-row gap-0.5 items-center justify-center w-auto">
          <Img
            className="h-[30px] w-[30px]"
            src="images/img_component10.svg"
            alt="componentTen"
          />
          <Text
            className="text-base text-center text-red-900 w-[285px]"
            size="txtPoppinsRegular16Red900"
          >
            <span className="text-red-900 font-poppins font-normal">
              Agree to our{" "}
            </span>
            <a
              href="javascript:"
              className="text-red-900 font-poppins font-normal underline"
            >
              T&C
            </a>
            <span className="text-red-900 font-poppins font-normal"> and </span>
            <a
              href="javascript:"
              className="text-red-900 font-poppins font-normal underline"
            >
              <>
                Privacy Policy
                <br />
              </>
            </a>
          </Text>
        </div>
        <Button
          className="cursor-pointer leading-[normal] min-w-[143px] sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-center"
          shape="round"
          color="gray_900_87"
          size="sm"
          variant="fill"
        >
          Get OTP
        </Button>
      </div>
    </>
  );
};

export default SignupPage;
