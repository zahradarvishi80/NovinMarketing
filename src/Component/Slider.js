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
               
              <div
              key={index} className='z-0 bg-[#40E0D0] flex-row flex w-[100%] h-[250px] sm:w-[100%] sm:h-[300px] xl:w-[100%] xl:h-[500px] xl:rounded-xl mt-10  rounded-xl flex-col w-[100%] justify-center'>
              </div>

              <img  
              className="w-[180px] h-[180px] sm:w-[180px] sm:h-[200px] md:w-[230px] md:h-[250px] flex sm:-mt-[30%] md:-mt-[25%] md:ml-[65%] -mt-[35%] ml-[60%] lg:w-[270px] lg:h-[290px] lg:-mt-[27%] xl:w-[370px] xl:h-[450px] xl:-mt-[35%] "
                src={item.image}/>

            <div className="xl:w-[50%] xl:h-[300px] xl:mt-20 w-[8%] xl:w-[8%]    h-[240px] sm:h-[280px]  absolute top-[13%] flex  flex-col">
               <div className="flex w-[80px] h-[25px]  sm:w-[90px] lg:ml-[83%] md:w-[100px] sm:h-[30px] md:h-[32px] ml-[70%] md:ml-[80%] rounded-2xl lg:w-[130px] lg:h-[30px] bg-blue-50 md:mt-[5%] mt-[15%] sm:mt-[10%] justify-center">
                <p className="text-[16px] mt-1 lg:text-xl"
                style={{
                    fontFamily:"sans-serif",
                //     fontSize:20,
                //     marginLeft:25,
                //     marginTop:5
                }}
                >خدمات</p>
               
               </div>
               <p style={{
                    fontFamily:"sans-serif"}} className="flex md:text-2xl text-xl mr-3 md:-mr-2 font-bold xl:text-3xl justify-end mt-5  ">  {item.title}</p>
                <p style={{
                    fontFamily:"sans-serif"}} className="flex mt-3 md:-mr-2  md:text-lg xl:text-xl text-md font-bold justify-end"> {item.desc} </p>
             <div className="flex w-[99%] xl:justify-items-end xl:justify-end h-[30px] rounded-xl flex-row mt-5  md:h-[40px] justify-around">
                <div className="flex w-32 h-10 xl:mr-20 justify-around justify-items-center justify-self-center content-around">
                <p  style={{
                    fontFamily:"sans-serif"}} className="flex text-md md:text-lg text-[#5400C6]  font-light">
                        <span  className="flex text-lg font-bold md:text-xl mr-1">مشاور</span>
                         در خواست </p>
                </div>
                <div className="flex w-20 h-8 sm:w-24 sm:h-10 md:w-28 bg-[#5400C6]  rounded-2xl sm:rounded-[20px] justify-around justify-items-center justify-self-center content-around">
                <button >
                    <p className="flex sm:text-md md:text-[17px] text-sm font-light text-[white] p-2" style={{
                    fontFamily:"sans-serif"}}>
                    نمونه کار ها
                    </p>
                  </button>
                </div>
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