import React from "react";
import { IoIosArrowBack } from "react-icons/io";
// import "../Css/SamplePrevArrow.css";
function SamplePrevArrow(props) {
  const {onClick } = props;
  return (
    <div  className="flex z-10 absolute rounded-xl p-8 top-[67%] left-[4%] " onClick={onClick}>
      <IoIosArrowBack color="#ABB2B9" />
    </div>
  );
}
export default SamplePrevArrow;
