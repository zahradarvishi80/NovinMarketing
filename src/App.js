// import Carousel from "./Component/Carousel";
import SlikSlider from "./Component/Slider";
import CarouselSlid from "./Component/CarouselSlider";
import Describtion from "./Component/Describtion";
function App() {
  return (
    <div className="flex max-w-md mx-auto flex-col bg-white container sm:max-w-xl  md:max-w-3xl  lg:max-w-4xl  xl:max-w-6xl 2xl:max-w-20xl 2xl:bg-orange-400">
    <SlikSlider/>
    <CarouselSlid/>  
    <Describtion/>
    </div>
  );
}

export default App;
