import React from "react";

function Stats() {
  return (
    <div className="text-black w-full md:w-11/12 flex flex-col relative z-40 gap-10 items-center h-max min-h-[90vh] mt-[8vh]">
      <div className="w-full flex justify-center relative items-center flex-col py-4">
        <div className="w-11/12 flex justify-start mb-8">
          <div className="bg-black/30 w-full md:w-6/12 h-[1px]"></div>
        </div>
        <div className="w-10/12 grid md:grid-cols-2 gap-6">
          <p className="text-2xl md:text-[3rem] md:text-left text-center font-bold tracking-wide">
            We help real people find good specialists
          </p>
          <div className="flex md:flex-row flex-col justify-center gap-4 items-center">
            <div className="flex flex-col justify-center items-center">
              <p className="text-[2.5rem] md:text-[4rem] font-extrabold">98%</p>
              <p className="text-sm md:text-base font-bold text-black/60">
                Client Satisfaction
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-[2.5rem] md:text-[4rem] font-extrabold">45%</p>
              <p className="text-sm md:text-base font-bold text-black/60">
                Client Satisfaction
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-[2.5rem] md:text-[4rem] font-extrabold">
                300k+
              </p>
              <p className="text-sm md:text-base font-bold text-black/60">
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>
        <div className="w-11/12 mt-8 flex justify-end">
          <div className="bg-black/20 w-full md:w-6/12 h-[1px]"></div>
        </div>
      </div>
      <div className="flex-1 w-full flex flex-col justify-center items-center relative">
        <div className="bg-primary w-full md:w-10/12 p-4 md:p-2 relative z-20 flex-1 flex flex-col gap-8 justify-center items-center rounded-2xl md:rounded-[3rem] shadow-2xl overflow-hidden">
          <p className="text-lg md:text-4xl font-semibold md:font-bold text-center text-white">
            A lot of directions in on{" "}
            <span className="text-lime">platform</span>. <br />
            Click buttons below to find <br />{" "}
            <span className="text-lime">your specialist</span>
          </p>
          <div className="flex flex-wrap gap-3 md:gap-6 items-center justify-center">
            <div className="bg-white text-black px-4 md:px-6 py-2 md:py-4 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold cursor-pointer hover:bg-dark-purple hover:text-white hover:shadow-2xl">
              #designers
            </div>
            <div className="bg-white text-black px-4 md:px-6 py-2 md:py-4 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold cursor-pointer hover:bg-dark-purple hover:text-white hover:shadow-2xl">
              #web developers
            </div>
            <div className="bg-white text-black px-4 md:px-6 py-2 md:py-4 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold cursor-pointer hover:bg-dark-purple hover:text-white hover:shadow-2xl">
              #cleaners
            </div>
            <div className="bg-white text-black px-4 md:px-6 py-2 md:py-4 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold cursor-pointer hover:bg-dark-purple hover:text-white hover:shadow-2xl">
              #workers
            </div>
            <div className="bg-white text-black px-4 md:px-6 py-2 md:py-4 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold cursor-pointer hover:bg-dark-purple hover:text-white hover:shadow-2xl">
              #english
            </div>
            <div className="bg-white text-black px-4 md:px-6 py-2 md:py-4 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold cursor-pointer hover:bg-dark-purple hover:text-white hover:shadow-2xl">
              #spain
            </div>
            <div className="bg-white text-black px-4 md:px-6 py-2 md:py-4 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold cursor-pointer hover:bg-dark-purple hover:text-white hover:shadow-2xl">
              #physicists
            </div>
            <div className="bg-white text-black px-4 md:px-6 py-2 md:py-4 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold cursor-pointer hover:bg-dark-purple hover:text-white hover:shadow-2xl">
              #teachers
            </div>
            <div className="bg-white text-black px-4 md:px-6 py-2 md:py-4 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold cursor-pointer hover:bg-dark-purple hover:text-white hover:shadow-2xl">
              #babysitters
            </div>
            <div className="bg-white text-black px-4 md:px-6 py-2 md:py-4 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold cursor-pointer hover:bg-dark-purple hover:text-white hover:shadow-2xl">
              #masseuses
            </div>
            <div className="bg-white text-black px-4 md:px-6 py-2 md:py-4 rounded-lg md:rounded-xl text-xs font-semibold cursor-pointer hover:bg-dark-purple hover:text-white hover:shadow-2xl">
              #managers
            </div>
          </div>
        </div>
        <div className="bg-lime h-16 w-16 md:h-32 md:w-32 -rotate-12 absolute md:z-0 z-40 hidden md:block -bottom-12 md:top-5 right-0 rounded-xl shadow-2xl"></div>
        <div className="bg-light-purple h-16 w-16 md:h-32 md:w-32 rotate-45 hidden md:block absolute bottom-5 left-0 z-40 rounded-xl shadow-2xl"></div>
      </div>
    </div>
  );
}

export default Stats;
