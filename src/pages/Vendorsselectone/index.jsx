import React from "react";

import {
  Button,
  Datepicker,
  Img,
  Input,
  Line,
  List,
  Slider,
  Text,
} from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import VendorsSelectOneCard from "components/VendorsSelectOneCard";
import VendorsSelectOneColumnellipsetwelve from "components/VendorsSelectOneColumnellipsetwelve";
import VendorsSelectOneContent from "components/VendorsSelectOneContent";

import { CloseSVG } from "../../assets/images";

const VendorsselectonePage = () => {
  const [searchvalue, setSearchvalue] = React.useState("");
  const vendorsSelectOneContentPropList = [
    {},
    { price: "₹ 600/day", candidphotography: "TRADITIONAL PHOTOGRAPHY" },
    { price: "₹ 3500/day", candidphotography: "CINEMATIC VIDEOGRAPHY" },
    { price: "₹ 3000/day", candidphotography: "TRADITIONAL VIDEOGRAPHY" },
    { price: "₹ 5000/(40 Pages)", candidphotography: "PHOTO ALBUM" },
  ];
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-end mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <Header className="bg-gray-900 flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="bg-red-900 flex md:flex-col flex-row md:gap-10 gap-[89px] items-end justify-end md:pl-10 sm:pl-5 pl-[41px] pt-[41px] w-full">
            <div className="flex md:flex-1 flex-col gap-2 justify-start w-[81%] md:w-full">
              <Text
                className="md:ml-[0] ml-[436px] sm:text-3xl md:text-[32px] text-[34px] text-gray-50"
                size="txtPoppinsRegular34Gray50"
              >
                Photographers
              </Text>
              <Input
                name="search"
                placeholder="Search for Photographers"
                value={searchvalue}
                onChange={(e) => setSearchvalue(e)}
                className="!placeholder:text-gray-50_b2 !text-gray-50_b2 leading-[normal] p-0 text-[19.2px] text-left w-full"
                wrapClassName="flex md:ml-[0] ml-[748px] rounded-[10px] w-auto"
                suffix={
                  searchvalue?.length > 0 ? (
                    <CloseSVG
                      className="mt-auto mb-[3px] cursor-pointer h-[26px] ml-[35px]"
                      onClick={() => setSearchvalue("")}
                      fillColor="#faf9f9b2"
                      height={26}
                      width={26}
                      viewBox="0 0 26 26"
                    />
                  ) : (
                    <Img
                      className="mt-auto mb-[3px] cursor-pointer h-[26px] ml-[35px]"
                      src="images/img_search_gray_50.svg"
                      alt="search"
                    />
                  )
                }
                color="gray_50"
                size="md"
                variant="outline"
              ></Input>
              <Text
                className="mr-[739px] text-sm text-white-A700"
                size="txtPoppinsRegular14WhiteA700"
              >
                <span className="text-white-A700 font-poppins text-left font-normal">
                  Home /{" "}
                </span>
                <span className="text-white-A700 font-poppins text-left font-normal">
                  Vendors
                </span>
                <span className="text-white-A700 font-poppins text-left font-normal">
                  /Photographers/
                </span>
                <span className="text-white-A700 font-poppins text-left font-normal">
                  s
                </span>
                <span className="text-white-A700 font-poppins text-left font-normal">
                  rinivas photography
                </span>
              </Text>
            </div>
            <div className="bg-gray-900 border border-black-900 border-solid flex flex-col h-[43px] md:h-auto items-center justify-start mb-1 md:mt-0 mt-[89px] px-2 md:px-5 rounded-md shadow-bs w-[70px]">
              <Img
                className="h-[25px] w-[25px]"
                src="images/img_cart.svg"
                alt="cart"
              />
            </div>
          </div>
        </div>
        <Text
          className="md:ml-[0] ml-[163px] mt-9 sm:text-3xl md:text-[32px] text-[34px] text-gray-900"
          size="txtPoppinsMedium34Gray900"
        >
          Srinivas photography
        </Text>
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col gap-[46px] items-center justify-center max-w-[1440px] w-full">
            <div className="flex flex-col gap-[45px] items-center justify-start max-w-[1122px] mx-auto md:px-5 w-full">
              <div className="flex flex-col items-center justify-center w-auto md:w-full">
                <div className="flex flex-col gap-3 items-center justify-start w-auto md:w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                    <Text
                      className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-black-900 w-auto"
                      size="txtPoppinsRegular2304Black900"
                    >
                      About
                    </Text>
                    <Text
                      className="max-w-[1114px] md:max-w-full text-base text-black-900"
                      size="txtPoppinsRegular16"
                    >
                      Weddings in Hyderabad are a perfect blend of tradition and
                      modernity. The grand weddings at the gorgeous locations of
                      the royal city must be captured in the lenses of the
                      talented wedding photographers. These best wedding
                      photographers in Hyderabad are listed on WeddingBazaar in
                      both luxurious as well as pocket-friendly budget. Go
                      through the list and browse through the details carefully
                      to select the one who’s going to be responsible for saving
                      the memories of your biggest day. Contact them directly or
                      ask for their quotations on the website.
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[19px] items-start justify-start w-auto md:w-full">
                    <div className="flex flex-col gap-[23px] items-start justify-center w-auto md:w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-center py-2.5 w-auto md:w-full">
                        <Img
                          className="h-[464px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[645px] md:w-full"
                          src="images/img_rectangle70.png"
                          alt="rectangleSeventy"
                        />
                        <div className="flex md:flex-col flex-row gap-[21px] items-start justify-start w-auto md:w-full">
                          <Img
                            className="h-[134px] md:h-auto object-cover rounded-[10px] w-[137px] sm:w-full"
                            src="images/img_rectangle71.png"
                            alt="rectangleSeventyOne"
                          />
                          <Img
                            className="h-[134px] md:h-auto object-cover rounded-[10px] w-[137px] sm:w-full"
                            src="images/img_rectangle77.png"
                            alt="rectangleSeventySeven"
                          />
                          <Img
                            className="h-[134px] md:h-auto object-cover rounded-[10px] w-[137px] sm:w-full"
                            src="images/img_rectangle76.png"
                            alt="rectangleSeventySix"
                          />
                          <div className="h-[134px] relative w-[23%] md:w-full">
                            <Img
                              className="h-[134px] m-auto object-cover rounded-[10px] w-full"
                              src="images/img_rectangle75.png"
                              alt="rectangleSeventyFive"
                            />
                            <a
                              href="javascript:"
                              className="absolute h-max inset-[0] justify-center m-auto text-[19.2px] text-white-A700 w-max"
                            >
                              <Text size="txtPoppinsRegular192WhiteA700">
                                See all
                              </Text>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[45px] items-start justify-start w-auto md:w-full">
                        <div className="flex flex-col gap-2 items-start justify-center w-auto">
                          <div className="flex flex-col items-start justify-start sm:px-5 px-[22px] w-auto">
                            <Text
                              className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-black-900 w-auto"
                              size="txtPoppinsRegular2304Black900"
                            >
                              PAYMENT POLICY
                            </Text>
                          </div>
                          <div className="flex flex-col gap-1 items-start justify-start w-auto">
                            <Text
                              className="text-base text-black-900 w-auto"
                              size="txtPoppinsRegular16"
                            >
                              50% - At the Time of booking
                            </Text>
                            <Text
                              className="text-base text-black-900 w-auto"
                              size="txtPoppinsRegular16"
                            >
                              30% - On Event date
                            </Text>
                            <Text
                              className="text-base text-black-900 w-auto"
                              size="txtPoppinsRegular16"
                            >
                              20% - After deliverables are delivered
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-center w-auto">
                          <div className="flex flex-col items-start justify-start sm:px-5 px-[22px] w-auto">
                            <Text
                              className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-black-900 w-auto"
                              size="txtPoppinsRegular2304Black900"
                            >
                              TRAVEL POLICY
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="text-base text-black-900 w-auto"
                              size="txtPoppinsRegular16"
                            >
                              Travel & Stay paid by client
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-gray-900 w-auto"
                        size="txtPoppinsRegular2304Gray900"
                      >
                        Pricing
                      </Text>
                      <div className="flex flex-col gap-6 items-center justify-center w-auto sm:w-full">
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[210px] items-center justify-end p-4 w-full"
                          style={{
                            backgroundImage: "url('images/img_group84.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-[42px] items-start justify-start mt-1.5 w-auto sm:w-full">
                            <div className="md:h-[62px] sm:h-[68px] h-[89px] relative w-full">
                              <div className="absolute flex flex-row gap-[145px] inset-x-[0] items-center justify-between mx-auto px-2.5 top-[0] w-[390px] sm:w-full">
                                <Text
                                  className="sm:text-[30.799999999999997px] md:text-[36.8px] text-[40.8px] text-blue_gray-800 w-auto"
                                  size="txtPoppinsRegular408"
                                >
                                  <span className="md:text-[25px] sm:text-[23px] text-gray-900 font-inter text-left text-[27px] font-normal">
                                    ₹
                                  </span>
                                  <span className="md:text-[25.65px] sm:text-[23.65px] text-gray-900 font-poppins text-left text-[27.65px] font-semibold">
                                    6000
                                  </span>
                                  <span className="md:text-[25.65px] sm:text-[23.65px] text-blue_gray-800 font-poppins text-left text-[27.65px] font-normal">
                                    /
                                  </span>
                                  <span className="text-blue_gray-800 font-poppins text-left text-[19.2px] font-normal">
                                    Day
                                  </span>
                                </Text>
                                <div className="border border-black-900_4c border-solid flex flex-row gap-[5.04px] h-[34px] md:h-auto items-center justify-center px-[13.44px] rounded-lg w-auto">
                                  <Img
                                    className="h-5 rounded-[1px] w-5"
                                    src="images/img_star6_20x20.svg"
                                    alt="starSix"
                                  />
                                  <Text
                                    className="text-[16.13px] text-blue_gray-900 text-right"
                                    size="txtPoppinsRegular1613"
                                  >
                                    3.5
                                  </Text>
                                </div>
                              </div>
                              <div className="absolute bottom-[0] flex sm:flex-col flex-row gap-2.5 inset-x-[0] items-center justify-center mx-auto px-2.5 py-1.5 w-auto">
                                <Img
                                  className="h-[17px] w-[18px]"
                                  src="images/img_inbox.svg"
                                  alt="inbox"
                                />
                                <Text
                                  className="text-[19.2px] text-blue_gray-800 w-auto"
                                  size="txtPoppinsRegular192Bluegray800"
                                >
                                  For Photo + Video (See Full Price list).
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[82px] items-end justify-start w-auto">
                              <Button
                                className="cursor-pointer font-poppins leading-[normal] min-w-[165px] text-base text-center"
                                shape="round"
                                color="gray_900"
                                size="sm"
                                variant="fill"
                              >
                                ₹ Get Quatation
                              </Button>
                              <Button
                                className="cursor-pointer font-inter h-10 leading-[normal] min-w-[102px] text-center text-sm"
                                shape="round"
                                color="red_900"
                                size="md"
                                variant="outline"
                              >
                                Call/Chat
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-300_99 border border-black-900_99 border-solid flex flex-col gap-5 h-[351px] md:h-auto items-center justify-center rounded-[10px] w-[458px] sm:w-full">
                          <List
                            className="flex flex-col gap-[19px] items-center w-[93%]"
                            orientation="vertical"
                          >
                            {vendorsSelectOneContentPropList.map(
                              (props, index) => (
                                <React.Fragment
                                  key={`VendorsSelectOneContent${index}`}
                                >
                                  <VendorsSelectOneContent
                                    className="flex flex-row items-end justify-between w-[423px] sm:w-full"
                                    {...props}
                                  />
                                </React.Fragment>
                              ),
                            )}
                          </List>
                          <div className="flex flex-col font-inter items-start justify-start md:px-10 sm:px-5 px-[148px] py-2.5 w-auto sm:w-full">
                            <Button
                              className="cursor-pointer h-[43px] leading-[normal] min-w-[152px] text-center text-sm"
                              shape="round"
                              color="teal_700"
                              size="md"
                              variant="fill"
                            >
                              Custom package
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start max-w-[1114px] w-full">
                <Text
                  className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-black-900 w-auto"
                  size="txtPoppinsRegular2304Black900"
                >
                  Reviews (10)
                </Text>
                <div className="flex flex-col gap-[30px] items-start justify-start w-auto md:w-full">
                  <VendorsSelectOneColumnellipsetwelve className="flex flex-col gap-3 items-start justify-start w-auto md:w-full" />
                  <VendorsSelectOneColumnellipsetwelve
                    className="flex flex-col gap-3 items-start justify-start w-auto md:w-full"
                    username="Varun"
                  />
                  <VendorsSelectOneColumnellipsetwelve
                    className="flex flex-col gap-3 items-start justify-start w-auto md:w-full"
                    username="Raghu"
                  />
                </div>
                <Button
                  className="!text-black-900 cursor-pointer leading-[normal] min-w-[639px] md:min-w-full sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-center"
                  shape="round"
                  color="black_900"
                  size="sm"
                  variant="outline"
                >
                  See 7 More Reviews
                </Button>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-auto md:w-full">
                <Text
                  className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-black-900 w-auto"
                  size="txtPoppinsRegular2304Black900"
                >
                  More works of Srinivas photography
                </Text>
                <Img
                  className="h-[249px] w-[1120px]"
                  src="images/img_frame167.svg"
                  alt="frame167"
                />
              </div>
            </div>
            <Line className="bg-black-900_63 h-px w-full" />
            <div className="flex flex-col gap-[46px] items-center justify-start max-w-[1130px] mx-auto md:px-5 w-full">
              <div className="flex sm:flex-col flex-row gap-2.5 items-end justify-between max-w-[1130px] p-2.5 w-full">
                <Text
                  className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-black-900 w-auto"
                  size="txtPoppinsRegular2304Black900"
                >
                  Similar Wedding Photographers
                </Text>
                <a
                  href="javascript:"
                  className="text-[19.2px] text-black-900 w-auto"
                >
                  <Text size="txtPoppinsRegular192Black900">See all</Text>
                </a>
              </div>
              <div className="flex flex-col font-lexenddeca items-start justify-start w-auto md:w-full">
                <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  {new Array(12).fill({}).map((props, index) => (
                    <React.Fragment key={`VendorsSelectOneCard${index}`}>
                      <VendorsSelectOneCard
                        className="flex flex-1 flex-col items-center justify-start outline outline-[1px] outline-black-900_99 rounded-[10px] w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <Button
                className="cursor-pointer leading-[normal] min-w-[116px] text-base text-center"
                shape="round"
                color="gray_900"
                size="sm"
                variant="fill"
              >
                Load more
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-start max-w-[1161px] mt-[55px] mx-auto md:px-5 w-full">
            <Text
              className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-black-900 w-auto"
              size="txtPoppinsRegular2304Black900"
            >
              If you’re also looking for
            </Text>
            <Slider
              autoPlay
              autoPlayInterval={2000}
              activeIndex={sliderState}
              responsive={{
                0: { items: 1 },
                550: { items: 2 },
                1050: { items: 3 },
              }}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              activeSlideCSS="scale-[1.00]"
              ref={sliderRef}
              className="w-full"
              items={[...Array(9)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="flex flex-col items-center justify-start mx-2.5">
                    <div className="bg-gray-100_4c flex md:flex-col flex-row gap-[50px] items-center justify-center max-w-[1113px] outline outline-[1px] outline-black-900_4c sm:px-5 px-[30px] py-[15px] rounded-[10px] w-full">
                      <div className="flex flex-col gap-1.5 items-center justify-center w-auto">
                        <Img
                          className="h-[90px] w-[90px]"
                          src="images/img_photographer01.svg"
                          alt="photographerOne"
                        />
                        <Text
                          className="text-base text-black-900 w-auto"
                          size="txtPoppinsRegular16"
                        >
                          Photographer
                        </Text>
                      </div>
                      <div className="flex flex-col gap-1.5 items-center justify-center w-auto">
                        <Img
                          className="h-[90px] w-[90px]"
                          src="images/img_makeupartists01.svg"
                          alt="makeupartistsOne"
                        />
                        <Text
                          className="text-base text-black-900 w-auto"
                          size="txtPoppinsRegular16"
                        >
                          Makeup Artists
                        </Text>
                      </div>
                      <div className="flex flex-col gap-1.5 items-center justify-center w-auto">
                        <Img
                          className="h-[90px] w-[90px]"
                          src="images/img_catering01.svg"
                          alt="cateringOne"
                        />
                        <Text
                          className="text-base text-black-900 w-auto"
                          size="txtPoppinsRegular16"
                        >
                          Caterers
                        </Text>
                      </div>
                      <div className="flex flex-col gap-1.5 items-center justify-center w-auto">
                        <Img
                          className="h-[90px] w-[90px]"
                          src="images/img_catering01.svg"
                          alt="choreographerOne"
                        />
                        <Text
                          className="text-base text-black-900 w-auto"
                          size="txtPoppinsRegular16"
                        >
                          Choreographers
                        </Text>
                      </div>
                      <div className="flex flex-col gap-1.5 items-center justify-center w-auto">
                        <Img
                          className="h-[90px] w-[90px]"
                          src="images/img_catering01.svg"
                          alt="pandithOne"
                        />
                        <Text
                          className="text-base text-black-900 w-auto"
                          size="txtPoppinsRegular16"
                        >
                          Pandits
                        </Text>
                      </div>
                      <List
                        className="md:flex-1 sm:flex-col flex-row gap-[50px] grid grid-cols-2 w-[22%] md:w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col gap-1.5 items-center justify-center w-auto">
                          <Img
                            className="h-[90px] w-[90px]"
                            src="images/img_ticket.svg"
                            alt="ticket"
                          />
                          <Text
                            className="text-base text-black-900 w-auto"
                            size="txtPoppinsRegular16"
                          >
                            Decorators
                          </Text>
                        </div>
                        <div className="flex flex-col gap-1.5 items-center justify-center w-auto">
                          <Img
                            className="h-[90px] w-[90px]"
                            src="images/img_venues01.svg"
                            alt="venuesOne"
                          />
                          <Text
                            className="text-base text-black-900 w-auto"
                            size="txtPoppinsRegular16"
                          >
                            Venues
                          </Text>
                        </div>
                      </List>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
          <Footer className="bg-white-A700 flex items-center justify-center mt-[174px] md:px-5 shadow-bs w-full" />
        </div>
      </div>
    </>
  );
};

export default VendorsselectonePage;
