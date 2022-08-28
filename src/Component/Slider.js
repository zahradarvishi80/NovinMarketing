import Slider from "react-slick";
import NovinSlider from "../Json/NovinSlider";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
const SlikSlider=()=>{
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // speed: 2000,
        // autoplaySpeed: 5000,
        // cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };
    return(
        <div>
        <div className=" w-[100%] flex justify-center">
        <div className="w-[100%]">
          <Slider {...settings}>
          {NovinSlider.map((item,index) => {
            return (
                <div className="flex flex-row">
                <>
              <div
              key={index} className='z-0 h-[540px] mt-10 bg-[#40E0D0] rounded-xl flex-col w-[100%] justify-center'>
              </div>

              <img  
              className=" w-[400px] h-[450px] flex -mt-[32%] ml-[60%]"
                src={item.image}/></>

            <div className="w-[50%] h-[550px] -mt-[50%] flex  flex-col">
               <div className="flex w-[100px] h-[40px] rounded-2xl bg-blue-100 ml-[80%] mt-[25%]">
                <p style={{
                    fontFamily:"sans-serif",
                    fontSize:20,
                    marginLeft:25,
                    marginTop:5
                }}>خدمات</p>
               
               </div>
                <p style={{
                    fontFamily:"sans-serif"}} className="flex font-sans text-2xl font-bold justify-end mr-5 mt-3 ">  {item.title}</p>
                <p style={{
                    fontFamily:"sans-serif"}} className="flex  text-lg font-light justify-end m-1"> {item.desc} </p>
            <div className="flex w-[70%] h-[100px] rounded-2xl flex-row ml-[30%] justify-around">
                <div className="flex w-28 h-10  justify-around justify-items-center justify-self-center content-around">
                <p  style={{
                    fontFamily:"sans-serif"}} className="flex text-lg text-[#5400C6] font-light">
                        <span  className="flex text-xl font-bold mr-1">مشاور</span>
                         در خواست </p>
                </div>
                <div className="flex w-32 h-10 bg-[#5400C6]  rounded-[30px] justify-around justify-items-center justify-self-center content-around">
                <button >
                    <p className="flex text-md font-light text-[white] p-2" style={{
                    fontFamily:"sans-serif"}}>
                    نمونه کار ها
                    </p>
                  </button>
                </div>
            </div>
            
            <div className="flex w-[20%] h-[100px] ml-[10%] rounded-2xl flex-row  justify-around"> 
          
            <div className="flex w-10 h-10 rounded-full border-2 border-[#ABB2B9]"></div> 
            <div className="flex w-10 h-10 rounded-full border-2  border-[#ABB2B9]"></div>
            </div>
            </div>

              </div>
            );
          })}
          </Slider>
        </div>
      </div>
      </div>
  
        
    //       <div className=" flex w-500 h-400 m-100 justify-center items-start "> 
    //         <img className="flex mt-20" src={background} alt="background" />  
    //         <img className="absolute  mt-52 ml-52" src={saye} alt="phone" />  
    //         <img className="absolute  mt-36 ml-60" src={phone} alt="phone" />  
    //         <div  className="flex w-200 h-300 top-56 mr-40 absolute flex-col">
    //         {/* */}   
    //         {/* <img src={box} className="absolute ml-4 -mt-1" /> */}
    //         <div className="flex w-16 h-6  rounded-xl bg-blue-50">
         
    //            <p className="text-sm text-center flex ml-3">خدمات</p></div>
           
    //         </div>  
    //         <p className="text-xl text-center">طراحی اپلیکیشن</p>
    //       </div>
    //     {/* </Slider>/ */}

   
    //   </div>
    )
}
export default SlikSlider