import React from "react";
import { BsArrowRight } from "react-icons/bs";
// import "../Css/SampleNextArrow.css";
function Next(props) {
  const { onClick } = props;
  return (
    <div className="flex z-10 w-20 h-20 absolute  p-8 top-[50%] -mr-[10%] right-0 " onClick={onClick}>
      <BsArrowRight />
    </div>
  );
}
export default Next;
