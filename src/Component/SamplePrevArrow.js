import React from "react";
import { IoIosArrowBack } from "react-icons/io";
function SamplePrevArrow(props) {
  const {onClick } = props;
  return (
    <div  className=" flex md:-mt-[5%] md:w-8 md:h-8 md:rounded-full sm:-mt-5 sm:w-6 sm:h-6 rounded-full border-2 mt-3 border-[#ABB2B9] flex z-10 absolute rounded-xl top-[78%] left-[9%]  " onClick={onClick}>
      <IoIosArrowBack color="#ABB2B9" className="sm:mr-1 sm:mt-[0.5px] md:mt-1 md:ml-1 "/>
    </div>
  );
}
export default SamplePrevArrow;
