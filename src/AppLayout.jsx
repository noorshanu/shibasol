import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

import Intro from "./sections/Intro";
import MemeMark from "./sections/MemeMark";
import Partner from "./sections/Partner";
import MemeCards from "./sections/MemeCards";
import Footer from "./sections/Footer";
import RoadMap from "./sections/RoadMap";

function AppLayout() {
  return (
    <>
      <main className="  bg-main ">
        <Navbar />

        <Hero />
      </main>
     

      <div className=" relative">
        <img src="images/side.png" alt="" className=" floating h-[200px] sm:h-[300px] absolute -top-[14%] sm:-top-[22%] left-0" />
        <dl className="h-[50px]" />
        <Intro />
        <dl className="h-[50px]" />
        {/* <div className=" bg-[#473314]">
        <MemeCards />
        </div> */}
        {/* <div className=" h-[100px]  py-4  mb-2 bg-[#0000005d] ">
        <MemeMark />
      </div> */}
        {/* <div>
          <RoadMap/>
        </div> */}
        {/* <div>
          <Partner />
        </div> */}
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
