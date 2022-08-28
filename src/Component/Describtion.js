import laptop from "../img/laptop.png"


const Describtion=()=>{


    return(
        <div className="flex w-[100%] h-[400px] shadow-2xl flex-row mt-20 mb-20">
        <div className="flex w-[60%] h-[400px]  items-end flex-col">
            <p className="mt-[15%] text-lg"> شرکت</p>
            <p className="text-xl font-bold ">طراحان داتیس ایرانیان</p>
            <p className="mt-[5%] text-sm text-end text-grey-300">
            در واقع یک تیم برنامه‌ نویسی این سیستم را به این صورت برنامه‌نویسی کرده‌اند. بنابراین می‌توان گفت برنامه‌نویسی یک علم است که به کمک آن می‌توان به کامپیوتر دستوراتی برای اجرا داد. دستورات را در قالب کدهایی به کامپیوتر می‌دهیم این اطلاعات و دستورات در مغز کامپیوتر(CPU) پردازش می‌شوند و خروجی کار به کاربر نمایش داده می‌شود
            </p>
            <div className="flex w-[55%] h-[100px] mt-5 justify-around">
            <button className="flex w-44 text-center text-sm justify-center p-2 h-10 rounded-full  bg-[#40E0D0]">
                دانلود کاتالوگ</button>  
            <button className="flex w-36 h-10 rounded-full text-sm justify-center bg-[#030752] text-center p-2 text-white">
                درباره ی ما
            </button>                
            </div> 
        </div>

        <div className="flex w-[40%] h-[400px]  justify-end">
            <img src={laptop} />
        </div>
        {/* */}
        </div>
    )
}

export default Describtion