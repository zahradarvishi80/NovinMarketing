import laptop from "../img/laptop.png"


const Describtion=()=>{


    return(
        <div className="grid w-[100%] h-[250px] xl:h-[300px] shadow-2xl grid-cols-2 mt-20 mb-20">
       <div className="flex w-[100%] h-[250px] lg:w-[500px] md:w-[450px] xl:ml-[25%] items-end flex-col">
            <p className="mt-[5%] xl:text-lg text-sm"> شرکت</p>
            <p className="text-md font-bold  xl:text-xl ">طراحان داتیس ایرانیان</p>
            <p className="mt-[3%] sm:text-[12px] xl:text-[14px] md:text-[13px] text-[10px] text-end text-grey-300">
            در واقع یک تیم برنامه‌ نویسی این سیستم را به این صورت برنامه‌نویسی کرده‌اند. بنابراین می‌توان گفت برنامه‌نویسی یک علم است که به کمک آن می‌توان به کامپیوتر دستوراتی برای اجرا داد. دستورات را در قالب کدهایی به کامپیوتر می‌دهیم این اطلاعات و دستورات در مغز کامپیوتر(CPU) پردازش می‌شوند و خروجی کار به کاربر نمایش داده می‌شود
            </p>
            <div className="flex w-[100%] h-[100px] mt-5 justify-around">
            <button className="flex w-20 lg:w-40 lg:h-10 md:w-28 text-center lg:text-[15px] lg:p-2 text-[10px] justify-center mt-3 h-5 rounded-full  bg-[#40E0D0]">
                دانلود کاتالوگ</button>  
            <button className="flex w-28 md:w-36 lg:w-52 lg:h-10 lg:text-[15px] lg:p-2 h-5 rounded-full text-[10px] justify-center bg-[#030752] text-center text-center text-[10px] justify-center mt-3 h-5 rounded-full text-white">
                درباره ی ما
            </button>                
            </div> 
        </div>

        {/*  */}
        {/* */}
         <div className="flex w-[100%] lg:w-[400px] sm:w-[250px] sm:h-[250px] sm:ml-[13%] h-[100%]   justify-start">
            <img src={laptop} className=" md:ml-[20%] xl:w-[800px]  " />
        </div>
        </div>
    )
}

export default Describtion