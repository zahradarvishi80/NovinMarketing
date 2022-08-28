import React from "react";
import { IoIosArrowForward } from "react-icons/io";
// import "../Css/SampleNextArrow.css";
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="flex z-10 absolute rounded-xl p-8 top-[67%] left-[9%] " onClick={onClick}>
      <IoIosArrowForward color="#ABB2B9"/>
    </div>
  );
}
export default SampleNextArrow;
