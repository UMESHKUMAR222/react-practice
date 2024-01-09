import React from "react";

import {
  Button,
  Img,
  Line,
  List,
  PagerIndicator,
  SelectBox,
  Slider,
  Text,
} from "components";
import Header from "components/Header";

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

const Home1Page = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-center justify-end w-full">
          <Header className="bg-gray-900 flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="h-[595px] md:h-[641px] md:px-5 relative w-full">
            <Img
              className="h-[595px] m-auto object-cover w-full"
              src="images/img_vector3.png"
              alt="vectorThree"
            />
            <div className="absolute bottom-[12%] flex flex-col md:gap-10 gap-[159px] justify-start right-[0] w-[95%]">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <Img
                  className="h-[47px] md:h-auto md:mt-0 mt-[136px] object-cover"
                  src="images/img_subtract.png"
                  alt="subtract"
                />
                <div className="flex md:flex-1 flex-col gap-4 items-start justify-start md:ml-[0] ml-[58px] w-auto md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-5 items-start justify-start w-auto md:w-full">
                        <Text
                          className="sm:text-[38.96px] md:text-[44.96px] text-[48.96px] text-gray-50 text-shadow-ts w-auto"
                          size="txtPoppinsRegular4896"
                        >
                          <span className="text-white-A700 font-poppins text-left font-normal">
                            Find
                          </span>
                          <span className="text-gray-50 font-poppins text-left font-normal">
                            {" "}
                          </span>
                          <span className="text-yellow-A700 font-poppins text-left font-normal">
                            Best Vendors
                          </span>
                          <span className="text-gray-50 font-poppins text-left font-normal">
                            {" "}
                          </span>
                          <span className="text-white-A700 font-poppins text-left font-normal">
                            For Every Special Event
                          </span>
                        </Text>
                        <div className="h-10 relative w-[35%] sm:w-full">
                          <Text
                            className="ml-[11px] mt-1 text-[19.2px] text-white-A700_7e"
                            size="txtPoppinsRegular192"
                          >
                            Search an event
                          </Text>
                          <div className="absolute flex flex-row gap-4 h-full inset-[0] items-center justify-between m-auto w-auto">
                            <div className="h-10 orange_100_lime_900_border outline outline-[2px] rounded-[10px] w-[74%]"></div>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[87px] text-base text-center"
                              shape="round"
                              color="yellow_A700"
                              size="sm"
                              variant="fill"
                            >
                              Search
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex sm:flex-col flex-row gap-2.5 h-[41px] md:h-auto items-start justify-start w-[477px] sm:w-full">
                        <Button
                          className="cursor-pointer leading-[normal] min-w-[114px] rounded-[16px] text-center text-sm"
                          color="gray_50"
                          size="sm"
                          variant="outline"
                        >
                          Wedding
                        </Button>
                        <Button
                          className="cursor-pointer leading-[normal] min-w-[141px] rounded-[16px] text-center text-sm"
                          color="gray_50"
                          size="sm"
                          variant="outline"
                        >
                          Engagement
                        </Button>
                        <Button
                          className="cursor-pointer leading-[normal] min-w-[109px] rounded-[16px] text-center text-sm"
                          color="gray_50"
                          size="sm"
                          variant="outline"
                        >
                          Birthday
                        </Button>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex sm:flex-col flex-row gap-2.5 h-[41px] md:h-auto items-start justify-start w-[532px] sm:w-full">
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[140px] rounded-[16px] text-center text-sm"
                            color="gray_50"
                            size="sm"
                            variant="outline"
                          >
                            Baby shower
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[162px] rounded-[16px] text-center text-sm"
                            color="gray_50"
                            size="sm"
                            variant="outline"
                          >
                            House Warming
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[108px] rounded-[16px] text-center text-sm"
                            color="gray_50"
                            size="sm"
                            variant="outline"
                          >
                            Farewell
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="h-[47px] md:h-auto md:ml-[0] ml-[58px] md:mt-0 mt-[136px] object-cover"
                  src="images/img_subtract_47x27.png"
                  alt="subtract_One"
                />
                <div className="bg-gray-900 border border-black-900 border-solid flex flex-col h-[43px] md:h-auto items-center justify-start mb-[177px] ml-3.5 md:ml-[0] md:mt-0 mt-2.5 px-2 rounded-md shadow-bs w-[70px]">
                  <Img
                    className="h-[25px] w-[25px]"
                    src="images/img_cart.svg"
                    alt="cart"
                  />
                </div>
              </div>
              <PagerIndicator
                className="flex gap-[7.5px] h-3.5 items-center justify-center md:ml-[0] ml-[584px] w-[100px]"
                count={5}
                activeCss="inline-block cursor-pointer rounded-[50%] h-3.5 bg-yellow-A700 w-3.5"
                activeIndex={1}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-3.5 bg-gray-200 w-3.5"
                selectedWrapperCss="inline-block"
                unselectedWrapperCss="inline-block"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[30px] items-center justify-start max-w-[1161px] mt-[67px] mx-auto md:px-5 w-full">
            <Text
              className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900"
              size="txtPoppinsMedium34"
            >
              All Vendors
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
          <div className="flex flex-col items-center justify-start max-w-[1120px] mt-[46px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[35px] items-center justify-start w-full">
              <Text
                className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900"
                size="txtPoppinsMedium34"
              >
                How its works
              </Text>
              <Img
                className="h-[363px]"
                src="images/img_group32.svg"
                alt="groupThirtyTwo"
              />
            </div>
          </div>
          <div className="bg-black-900_36 flex flex-col gap-[35px] items-center justify-start mt-12 p-[45px] md:px-10 sm:px-5 w-full">
            <Text
              className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900"
              size="txtPoppinsMedium34"
            >
              Browse via event
            </Text>
            <div className="flex flex-col items-center justify-start max-w-[1123px] mb-10 mx-auto w-full">
              <div className="flex flex-col gap-5 items-center justify-start w-full">
                <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                  <div className="flex md:flex-1 md:flex-col flex-row gap-5 items-start justify-start w-auto md:w-full">
                    <div className="h-[262px] relative w-[66%] md:w-full">
                      <Img
                        className="h-[262px] m-auto object-cover rounded-[10px] w-full"
                        src="images/img_rectangle31.png"
                        alt="rectangleThirtyOne"
                      />
                      <Text
                        className="absolute inset-x-[0] mx-auto sm:text-[23.65px] md:text-[25.65px] text-[27.65px] text-center text-gray-50 top-[39%] w-max"
                        size="txtPoppinsRegular2765"
                      >
                        Weddings
                      </Text>
                    </div>
                    <div className="h-[262px] relative w-[32%] md:w-full">
                      <Img
                        className="h-[262px] m-auto object-cover rounded-[10px] w-full"
                        src="images/img_rectangle31_262x265.png"
                        alt="rectangleThirtyOne_One"
                      />
                      <Text
                        className="absolute inset-x-[0] mx-auto sm:text-[23.65px] md:text-[25.65px] text-[27.65px] text-center text-gray-50 top-[40%] w-max"
                        size="txtPoppinsRegular2765"
                      >
                        Engagment
                      </Text>
                    </div>
                  </div>
                  <div className="h-[262px] relative w-[24%] md:w-full">
                    <Img
                      className="h-[262px] m-auto object-cover rounded-[10px] w-full"
                      src="images/img_rectangle31_1.png"
                      alt="rectangleThirtyOne_Two"
                    />
                    <Text
                      className="absolute inset-x-[0] mx-auto sm:text-[23.65px] md:text-[25.65px] text-[27.65px] text-center text-gray-50 top-[39%] w-max"
                      size="txtPoppinsRegular2765"
                    >
                      Reception
                    </Text>
                  </div>
                </div>
                <div className="flex md:h-[1393px] h-[544px] justify-end relative w-full">
                  <div className="flex md:flex-col flex-row gap-5 h-full items-center justify-between mt-auto mx-auto w-auto">
                    <List
                      className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 grid-cols-2 w-1/2 md:w-full"
                      orientation="horizontal"
                    >
                      <div className="h-[262px] relative w-full">
                        <Img
                          className="h-[262px] m-auto object-cover rounded-[10px] w-full"
                          src="images/img_rectangle31_2.png"
                          alt="rectangleThirtyOne"
                        />
                        <Text
                          className="absolute bottom-[30%] inset-x-[0] mx-auto sm:text-[23.65px] md:text-[25.65px] text-[27.65px] text-center text-gray-50"
                          size="txtPoppinsRegular2765"
                        >
                          <>
                            Baby
                            <br /> Showers
                          </>
                        </Text>
                      </div>
                      <div className="h-[262px] relative w-full">
                        <Img
                          className="h-[262px] m-auto object-cover rounded-[10px] w-full"
                          src="images/img_rectangle31_3.png"
                          alt="rectangleThirtyOne"
                        />
                        <Text
                          className="absolute bottom-[30%] inset-x-[0] mx-auto sm:text-[23.65px] md:text-[25.65px] text-[27.65px] text-center text-gray-50"
                          size="txtPoppinsRegular2765"
                        >
                          <>
                            House <br />
                            warming
                          </>
                        </Text>
                      </div>
                    </List>
                    <div className="h-[262px] relative w-[24%] md:w-full">
                      <Img
                        className="h-[262px] m-auto object-cover rounded-[10px] w-full"
                        src="images/img_rectangle31_4.png"
                        alt="rectangleThirtyOne_Three"
                      />
                      <Text
                        className="absolute inset-x-[0] mx-auto sm:text-[23.65px] md:text-[25.65px] text-[27.65px] text-center text-gray-50 top-[38%] w-max"
                        size="txtPoppinsRegular2765"
                      >
                        More
                      </Text>
                    </div>
                  </div>
                  <div className="absolute flex md:flex-col flex-row gap-[21px] md:h-auto h-full inset-[0] items-start justify-between m-auto w-auto">
                    <div className="h-[262px] relative w-[24%] md:w-full">
                      <Img
                        className="h-[262px] m-auto object-cover rounded-[10px] w-full"
                        src="images/img_rectangle31_5.png"
                        alt="rectangleThirtyOne_Four"
                      />
                      <Text
                        className="absolute inset-x-[0] mx-auto sm:text-[23.65px] md:text-[25.65px] text-[27.65px] text-center text-gray-50 top-[38%] w-max"
                        size="txtPoppinsRegular2765"
                      >
                        Anniversaries
                      </Text>
                    </div>
                    <div className="h-[262px] relative w-[24%] md:w-full">
                      <Img
                        className="h-[262px] m-auto object-cover rounded-[10px] w-full"
                        src="images/img_rectangle31_6.png"
                        alt="rectangleThirtyOne_Five"
                      />
                      <Text
                        className="absolute bottom-[30%] inset-x-[0] mx-auto sm:text-[23.65px] md:text-[25.65px] text-[27.65px] text-center text-gray-50"
                        size="txtPoppinsRegular2765"
                      >
                        <>
                          Corporate
                          <br /> Events
                        </>
                      </Text>
                    </div>
                    <div className="h-[544px] relative w-[24%] md:w-full">
                      <Img
                        className="h-[544px] m-auto object-cover rounded-[10px] w-full"
                        src="images/img_rectangle31_544x265.png"
                        alt="rectangleThirtyOne_Six"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto sm:text-[23.65px] md:text-[25.65px] text-[27.65px] text-center text-gray-50 w-max"
                        size="txtPoppinsRegular2765"
                      >
                        Haldi
                      </Text>
                    </div>
                    <div className="h-[262px] relative w-[24%] md:w-full">
                      <Img
                        className="h-[262px] m-auto object-cover rounded-[10px] w-full"
                        src="images/img_rectangle31_7.png"
                        alt="rectangleThirtyOne_Seven"
                      />
                      <Text
                        className="absolute inset-x-[0] mx-auto sm:text-[23.65px] md:text-[25.65px] text-[27.65px] text-center text-gray-50 top-[38%] w-max"
                        size="txtPoppinsRegular2765"
                      >
                        Reunions
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1125px] mt-[50px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[25px] items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900"
                  size="txtPoppinsMedium34"
                >
                  Frequently Asked Questions
                </Text>
              </div>
              <div className="flex flex-col gap-3 items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <SelectBox
                    className="border border-black-900_99 border-solid leading-[normal] sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-left w-full"
                    placeholderClassName="text-blue_gray-900"
                    indicator={
                      <Img
                        className="h-3.5 mr-[0] w-[26px]"
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
                    size="sm"
                    variant="fill"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <SelectBox
                    className="border border-black-900_99 border-solid leading-[normal] sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-left w-full"
                    placeholderClassName="text-blue_gray-900"
                    indicator={
                      <Img
                        className="h-3.5 mr-[0] w-[26px]"
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
                    size="sm"
                    variant="fill"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <SelectBox
                    className="border border-black-900_99 border-solid leading-[normal] sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-left w-full"
                    placeholderClassName="text-blue_gray-900"
                    indicator={
                      <Img
                        className="h-3.5 mr-[0] w-[26px]"
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
                    size="sm"
                    variant="fill"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200_01 flex flex-col items-center justify-start mt-[61px] p-[74px] md:px-10 sm:px-5 shadow-bs1 w-full">
            <div className="flex flex-col items-center justify-start mb-[3px] w-[38%] md:w-full">
              <div className="flex flex-col gap-11 items-start justify-start w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-auto sm:w-full">
                  <Text
                    className="sm:text-3xl md:text-[32px] text-[34px] text-black-900 text-center w-[162px]"
                    size="txtPoppinsRegular34"
                  >
                    Sreerastu
                  </Text>
                  <Text
                    className="text-[19.2px] text-black-900_b2 text-center w-auto"
                    size="txtPoppinsRegular192Black900b2"
                  >
                    Make your special events to more memorable.❤️
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-[77px] items-center justify-center w-auto sm:w-full">
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[176px] rounded-[11px] text-[19.2px] text-center"
                    shape="round"
                    color="gray_900"
                    size="sm"
                    variant="fill"
                  >
                    Hire a Vendor
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[235px] text-[19.2px] text-center"
                    shape="round"
                    color="black_900"
                    size="md"
                    variant="outline"
                  >
                    Register as a Vendor
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[54px] items-center justify-start mt-[60px] md:px-5 w-[46%] md:w-full">
            <Text
              className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 text-center"
              size="txtPoppinsMedium34"
            >
              Our Customers Love us
            </Text>
            <div className="md:h-[210px] sm:h-[235px] h-[289px] relative w-full">
              <div className="absolute bg-gray-50 flex flex-col md:gap-10 gap-[65px] justify-end left-[0] outline outline-[2px] outline-gray-900 p-[5px] rounded-bl-[109px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[109px] shadow-bs2 top-[0]">
                <Text
                  className="md:ml-[0] mt-5 mx-[45px] text-[19.2px] text-black-900 w-[85%] sm:w-full"
                  size="txtPoppinsRegular192Black900"
                >
                  I was thoroughly impressed with the level of service provided
                  by Sreerastu and would highly recommend them to anyone looking
                  for event planning assistance.
                </Text>
                <Text
                  className="md:ml-[0] ml-[417px] mr-[63px] text-base text-gray-900 text-right"
                  size="txtPoppinsRegular16Gray900"
                >
                  @Kumar_Raj
                </Text>
              </div>
              <Img
                className="absolute bottom-[0] h-[104px] object-cover right-[0] rounded-[52px] w-[103px]"
                src="images/img_ellipse10.png"
                alt="ellipseTen"
              />
            </div>
          </div>
          <div className="flex flex-row gap-[43px] items-center justify-center md:px-5 w-[9%] md:w-full">
            <Button
              className="flex h-[37px] items-center justify-center rounded-[18px] w-[37px]"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              <Img src="images/img_arrowleft_red_900.svg" alt="arrowleft" />
            </Button>
            <Button
              className="flex h-[37px] items-center justify-center rotate-[180deg] rounded-[18px] w-[37px]"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              <Img
                src="images/img_arrowleft_red_900_37x37.svg"
                alt="arrowleft_One"
              />
            </Button>
          </div>
          <footer className="bg-white-A700 flex items-center justify-center mt-24 md:px-5 shadow-bs w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[649px] items-center justify-center pr-[3px] py-[3px] w-full"
              style={{ backgroundImage: "url('images/img_group60.png')" }}
            >
              <div className="flex flex-col items-center justify-center mb-[29px] mt-[92px] w-full">
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
                        <a href="javascript:">
                          <div className="flex flex-row gap-5 items-center justify-center">
                            <div className="bg-gray-50 h-[11px] rounded-[5px] w-[11px]"></div>
                            <Text
                              className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-gray-50_a2 w-auto"
                              size="txtPoppinsRegular2304"
                            >
                              <>About us</>
                            </Text>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:">
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
                        </a>
                      </li>
                      <li>
                        <a href="javascript:">
                          <div className="flex flex-row gap-5 items-center justify-center">
                            <div className="bg-gray-50 h-[11px] rounded-[5px] w-[11px]"></div>
                            <Text
                              className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-gray-50_a2 w-auto"
                              size="txtPoppinsRegular2304"
                            >
                              Policies
                            </Text>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:">
                          <div className="flex flex-row gap-5 items-center justify-center">
                            <div className="bg-gray-50 h-[11px] rounded-[5px] w-[11px]"></div>
                            <a
                              href="javascript:"
                              className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-gray-50_a2 w-auto"
                            >
                              <Text size="txtPoppinsRegular2304">Privacy</Text>
                            </a>
                          </div>
                        </a>
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
                        <a href="javascript:">
                          <div className="flex flex-row gap-5 items-center justify-center">
                            <div className="bg-gray-50 h-[11px] rounded-[5px] w-[11px]"></div>
                            <Text
                              className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-gray-50_a2 w-auto"
                              size="txtPoppinsRegular2304"
                            >
                              All Services
                            </Text>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:">
                          <div className="flex flex-row gap-5 items-center justify-center">
                            <div className="bg-gray-50 h-[11px] rounded-[5px] w-[11px]"></div>
                            <Text
                              className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-gray-50_a2 w-auto"
                              size="txtPoppinsRegular2304"
                            >
                              Vendor
                            </Text>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:">
                          <div className="flex flex-row gap-5 items-center justify-center">
                            <div className="bg-gray-50 h-[11px] rounded-[5px] w-[11px]"></div>
                            <Text
                              className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-gray-50_a2 w-auto"
                              size="txtPoppinsRegular2304"
                            >
                              Find A Venue{" "}
                            </Text>
                          </div>
                        </a>
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
                      <a
                        href="javascript:"
                        className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-gray-50"
                      >
                        <Text size="txtPoppinsRegular2304Gray50">Home</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-gray-50"
                      >
                        <Text size="txtPoppinsRegular2304Gray50">About Us</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-gray-50"
                      >
                        <Text size="txtPoppinsRegular2304Gray50">
                          Contact Us
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="sm:text-[19.04px] md:text-[21.04px] text-[23.04px] text-gray-50"
                      >
                        <Text size="txtPoppinsRegular2304Gray50">
                          Find A Venue | Vendor
                        </Text>
                      </a>
                    </li>
                  </ul>
                  <Line className="bg-gray-50 h-px mt-[25px] rotate-[-180deg] w-full" />
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
