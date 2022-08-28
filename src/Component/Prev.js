import React from "react";
import { BsArrowLeft } from "react-icons/bs";
// import "../Css/SamplePrevArrow.css";
function Prev(props) {
  const {onClick } = props;
  return (
    <div className="flex z-10 absolute rounded-sm p-8 top-[50%] -left-[8%]"  onClick={onClick}>
      <BsArrowLeft className="absolute top-[50%] left-[35%]" />
    </div>
  );
}
export default Prev;
