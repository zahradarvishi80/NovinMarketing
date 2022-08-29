
import React from "react";
import CaroselSlider from "../Json/CarouselSlider";
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
    // cssEase: "linear",
    nextArrow: <Next />,
    prevArrow: <Prev />,
    responsive: [
      {
        //md
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        //x1
        breakpoint:1280,
        settings: {
          slidesToShow:2,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true
        }
      },
      {
        //sm
        breakpoint: 768,
        settings: {
          slidesToShow:2,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true
        }
      },
      {
        //
        breakpoint: 640,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="w-[90%] h-[500px]  m-5 ">
      <Slider {...settings}>
        {CaroselSlider.map((item) => {
          return (
            <div className="flex xl:ml-[15%] xl:h-[400px] mt-[50px] mr-5 md:h-[350px] sm:h-[260px] border-[1px] border-black shadow-2xl h-[300px] border-white bg-white rounded-2xl transition hover:-translate-y-1 hover:scale-10  duration-600">
              <img
                src={item.img}
                alt="items"
                className="flex w-[80%] h-[40%] lg:w-[85%] xl:m-5 lg:m-8 md:m-7 m-10 sm:m-6  h-[200px]"
              ></img>
              <div className="flex invisible md:visible md:w-[97%] md:border-[1px] md:border-grey-900"/>
              <div className="flex invisible md:visible md:w-[100%] md:h-10 md:justify-end md:mt-3">
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
                    className="flex invisible md:visible md:w-1 md:h-1 md:mt-3 md:mr-1 md:rounded-full md:justify-center md:items-center md:justify-items-center"
                  ></div>
                  <p
                  className="invisible md:visible"
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
              <div className="flex invisible md:visible  md:w-[99%] md:flex-col md:h-20">


              <div className="xl:w-[90%] invisible xl:visible xl:h-20 flex xl:justify-end">
                <p style={{ fontFamily: "Bold" }}>{item.desc}</p>
              </div>


              <div style={{
                    // display: flex,
                    marginTop: -20,
                    flexDirection: "row",
                    alignContent: 'center',
                    justifyContent: "flex-start",
                    alignItems: 'flex-end',
              }} className="md:w-[100%] invisible md:visible  lg:visible xl:visible md:h-10 md:flex-row flex">
                <img src={item.View} className="flex w-10 h-8 p-3"></img>
                <p
                  style={{
                    color: "#4D6982",
                    fontFamily: "Medium",
                    fontSize: 12,
                    // backgroundColor:"red",
                    marginBottom:"2%"
                  }}
                >
                  {" "}
                  {item.view}{" "}
                </p>

                <img
                  src={item.Calendar}
                  className="flex w-9 h-9 p-3 mt-16"
                ></img>

                <p
                  style={{
                    color: "#4D6982",
                    fontFamily: "Medium",
                
                    fontSize: 12,
                    // backgroundColor:"red",
                    marginBottom:"2%"

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
