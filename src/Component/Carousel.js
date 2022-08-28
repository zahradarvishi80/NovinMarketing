import React from "react";
import Slider from "react-slick";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import DescMakeen from "../Json/DescMakeen";
export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className=" w-[100%] flex justify-center flex-col ">

      <div className="w-[100%]">
        <Slider {...settings}>
          {DescMakeen.map((item) => {
            return (
              <div className='flex flex-col'>
                <div
                  className="w-[380px] rounded-lg h-[200px] absolute hidden child "
                />
                <div className="w-[4%] h-[100px] absolute  flex mt-16 ml-24">
                  <p
                    style={{
                      fontFamily: "Medium",
                      fontSize: 14,
                      position: "absolute",
                      marginTop: 10,
                      color: "#4D6982",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
                <img src={item.img}></img>
                <div className="w-[70%] h-[100px] flex -mt-10 flex-row ml-24">
                  <div
                    className="w-[75%] h-[100px] flex-col"
                    style={{ direction: "rtl" }}
                  >
                    <p
                      style={{
                        fontFamily: "Bold",
                        marginTop: 20,
                        marginRight: 10,
                      }}
                    >
                      {item.name}
                    </p>
                    <p style={{ fontFamily: "Bold", marginRight: 10 }}>
                      {item.job}{" "}
                    </p>
                  </div>
                  <img
                    src={item.Image}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 10,
                      marginTop: 12,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <style jsx>
        {`
          .parent:hover .child {
            position: absolute;
            display: flex;
          }
        `}
      </style>
    </div>
  );
}
