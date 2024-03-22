import { FaTwitter, FaTelegram } from "react-icons/fa";
function Hero() {
  return (
    <section className=" pt-4  pb-[8rem] ">
      <div className="container-wrapper">
      
        <div className="relative z-50">
          <div className=" flex justify-between flex-col sm:flex-row items-center ">
       

            <div className=" max-w-2xl  py-8 px-4 rounded-3xl border-2 border-[#000000]">
            <h1 className="font-groot-one text-lg sm:text-3xl py-2 ">
         Welcome to ShibaSol, The playful blend of Solana's speed with the charm of Shiba Inus. 
         </h1>
         
              <div className=" py-2">
                <a
                  href="https://solscan.io/token/ECd4fK2qevgXqkiEVYp7Yzr8H2i1iR9M3mjpFF7VFn2h"
                  target="_blank"
                  className="my-2 font-groot-two flex justify-start text-xs  text-[#000000] sm:text-xl font-bold "
                >
                  {" "}
                  Contract : ECd4fK2qevgXqkiEVYp7Yzr8H2i1iR9M3mjpFF7VFn2h
                </a>
              </div>

              <div className="relative z-40 flex items-center justify-start my-4 max-sm:flex-col max-sm:space-y-4 sm:space-x-5">
              <a
                  href="https://www.dextools.io/app/en/solana/pair-explorer/DsoLd7ioLe8612UWRtk38PHfEu2PEKgE6JZz386oB68a?t=1710859158007"
                  target="_blank"
                  className="text-base py-2 uppercase font-sushi-one px-10 rounded-xl bg-[#f02c2f] shadow-lg shadow-black/40 text-[#ffffff]  font-bold  border-[#000000] border-2"
                >
                  DEXTOOLS
                </a>
               
            
                <div className="flex items-center space-x-4 text-xl [&_a:hover]:opacity-70">
            <a target="_blank" href="https://twitter.com/ShibaSolb" className=" text-4xl">
              <FaTwitter fill="#000" />
            </a>
            <a target="_blank" href="https://t.me/ShibaSolo" className=" text-4xl">
              <FaTelegram fill="#000" />
            </a>
          </div>
            
              </div>
            </div>

            <div className=" w-full">
              <img src="images/hero2.png" alt="" className=" h-auto sm:h-[400px] mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
