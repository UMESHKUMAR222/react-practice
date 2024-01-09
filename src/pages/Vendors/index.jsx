import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import VendorsCategory from "components/VendorsCategory";
import VendorsFilter from "components/VendorsFilter";

import { CloseSVG } from "../../assets/images";

const VendorsPage = () => {
  const [searchvalue, setSearchvalue] = React.useState("");
  const vendorsCategoryPropList = [
    {},
    { photographers: "Decorators" },
    {},
    { photographers: "Caterers" },
    { photographers: "Pandits" },
    { photographers: "Venues" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="h-[316px] md:px-5 relative w-full">
          <Header className="bg-gray-900 flex flex-col items-center justify-center mx-auto w-full" />
          <div className="absolute flex flex-col gap-[34px] h-full inset-[0] justify-center m-auto w-full">
            <div className="flex flex-col gap-1.5 justify-start md:ml-[0] ml-[88px] w-[79%] md:w-full">
              <Input
                name="search"
                placeholder="Search for vendors"
                value={searchvalue}
                onChange={(e) => setSearchvalue(e)}
                className="!placeholder:text-gray-50_b2 !text-gray-50_b2 leading-[normal] p-0 sm:pl-5 text-[19.2px] text-left w-full"
                wrapClassName="flex md:ml-[0] ml-[826px] pl-[30px] pr-[5px] rounded-[10px] w-auto"
                suffix={
                  searchvalue?.length > 0 ? (
                    <CloseSVG
                      className="mt-auto mb-1.5 cursor-pointer ml-[35px]"
                      onClick={() => setSearchvalue("")}
                      fillColor="#faf9f9b2"
                      height={8}
                      width={26}
                      viewBox="0 0 26 8"
                    />
                  ) : (
                    <Img
                      className="mt-auto mb-1.5 cursor-pointer ml-[35px]"
                      src="images/img_search.png"
                      alt="search"
                    />
                  )
                }
                color="gray_50"
                size="xs"
                variant="outline"
              ></Input>
              <Text
                className="text-sm text-white-A700"
                size="txtPoppinsRegular14WhiteA700"
              >
                <span className="text-white-A700 font-poppins text-left font-normal">
                  Home /{" "}
                </span>
                <span className="text-white-A700 font-poppins text-left font-normal">
                  Vendors
                </span>
              </Text>
            </div>
            <div className="h-[235px] relative w-full">
              <Img
                className="h-[235px] m-auto object-cover w-full"
                src="images/img_rectangle49.png"
                alt="rectangleFortyNine"
              />
              <div className="absolute bg-gray-900 border border-black-900 border-solid bottom-[26%] flex flex-col h-[43px] md:h-auto items-center justify-start px-2 right-[0] rounded-md shadow-bs w-[70px]">
                <Img
                  className="h-[25px] w-[25px]"
                  src="images/img_cart.svg"
                  alt="cart"
                />
              </div>
            </div>
          </div>
        </div>
        <VendorsFilter className="flex flex-row flex-wrap gap-6 items-center justify-start max-w-[917px] mx-auto md:px-5 w-full" />
        <List
          className="flex flex-col gap-[33px] items-start max-w-[1169px] mt-5 mx-auto md:px-5 w-full"
          orientation="vertical"
        >
          {vendorsCategoryPropList.map((props, index) => (
            <React.Fragment key={`VendorsCategory${index}`}>
              <VendorsCategory
                className="flex flex-1 flex-col items-center justify-start w-full"
                {...props}
              />
            </React.Fragment>
          ))}
        </List>
        <Button
          className="cursor-pointer leading-[normal] min-w-[116px] mt-[46px] text-base text-center"
          shape="round"
          color="gray_900"
          size="sm"
          variant="fill"
        >
          Load more
        </Button>
        <Footer className="bg-white-A700 flex items-center justify-center mt-[15px] md:px-5 shadow-bs w-full" />
      </div>
    </>
  );
};

export default VendorsPage;
