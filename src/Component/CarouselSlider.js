
import React from "react";
import MovieItems from "../Json/MovieItems";
import Slider from "react-slick";
import Next from "./Next";
import Prev from "./Prev";
export default function SlickSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <Next />,
    prevArrow: <Prev />,
  };
  return (
    <div className="w-[98%] h-[500px] rounded-3xl bg-blue-50 mt-[140px]">
      <Slider {...settings}>
        {MovieItems.map((item) => {
          return (
            <div className="flex mt-[50px] h-[370px] border-white bg-white rounded-2xl ml-[2%]  h-[300px] transition hover:-translate-y-1 hover:scale-110  duration-600">
              <img
                src={item.img}
                alt="itemsMovie"
                className="flex w-[80%] h-[40%] m-5  rounded h-[200px] transition hover:-translate-y-1 hover:scale-110  duration-600"
              ></img>
              <div className="flex w-[97%] border-[1px] border-grey-900"/>
              <div className="flex w-[100%] h-10 justify-end mt-3">
                <div
                  style={{
                    background: `linear-gradient(90deg , ${item.Sc} 0% , ${item.Se} 130%) `,
                    width: `${item.width}`,
                  }}
                  className="flex h-6 rounded-lg mr-4"
                >
                  <div
                    style={{
                      background: `${item.colorfont}`,
                    }}
                    className="flex w-1 h-1 mt-3 mr-1 rounded-full justify-center items-center justify-items-center"
                  ></div>
                  <p
                    style={{
                      fontFamily: "Bold",
                      fontSize: 12,
                      textAlign: "center",
                      marginTop: 5,
                      marginRight: 2,
                      color: `${item.colorfont}`,
                    }}
                  >
                    {item.title}
                  </p>
                  
                </div>
                {/* <div className="w-[90%] h-20 border-b-2 border-gray-200 flex">
                <p style={{ fontFamily: "Bold" }}>{item.desc}</p>
              </div> */}
              </div>
              <div className="flex w-[95%] flex-col h-20">


              <div className="w-[90%] h-20 flex">
                <p style={{ fontFamily: "Bold" }}>{item.desc}</p>
              </div>


              <div className="w-[100%] h-20 flex-row flex">
                <img src={item.View} className="w-10 h-8 p-3 mt-14"></img>
                <p
                  style={{
                    color: "#4D6982",
                    fontFamily: "Medium",
                    fontSize: 12,
                    marginTop: 63,
                  }}
                >
                  {" "}
                  {item.view}{" "}
                </p>

                <img
                  src={item.Calendar}
                  className="flex w-9 h-9 p-3 mt-14"
                ></img>

                <p
                  style={{
                    color: "#4D6982",
                    fontFamily: "Medium",
                    marginTop: 63,
                    fontSize: 12,
                  }}
                >
                  {" "}
                  {item.date}{" "}
                </p>
             
              </div>

              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
