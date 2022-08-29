import React from "react";
import { IoIosArrowForward } from "react-icons/io";
// import "../Css/SampleNextArrow.css";
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    // <div className="flex w-[40%]  h-[40px] ml-[10%] flex-row  justify-around"> 
    <div className="flex md:-mt-[5%] md:w-8 md:h-8 md:rounded-full sm:-mt-5 lg:-ml-9 sm:w-6 sm:h-6 border-2 border-[#ABB2B9] mt-3 z-10 absolute rounded-xl  top-[78%] left-[22%] " onClick={onClick}>
      <IoIosArrowForward color="#ABB2B9" className="sm:ml-1  md:mt-1 md:ml-1  sm:mt-[0.5px]"/>
    </div>
  );
}
export default SampleNextArrow;
