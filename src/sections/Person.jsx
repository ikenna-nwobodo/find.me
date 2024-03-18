import React from "react";

function Person() {
  return (
    <div className="text-black w-full relative z-40 flex flex-col items-center h-[40vh] md:h-[65vh] mt-[8vh]">
      <div className="bg-lime rounded-2xl md:rounded-[2rem] shadow-2xl relative flex justify-center md:justify-normal items-center overflow-hidden p-4 md:p-8 w-full md:w-8/12 h-full  md:h-full">
        <div className="flex flex-col gap-5 relative z-50">
          <p className="font-bold text-3xl md:text-[4rem] md:leading-[5rem] text-dark-purple">
            Find specialists with <br /> Find.me
          </p>
          <div className="w-full flex justify-center md:justify-start items-center">
            <div className="bg-white w-full md:w-8/12 h-[40px] flex relative justify-end items-center rounded-lg text-light-purple">
              <input
                type="text"
                className="flex-1 outline-none placeholder:text-light-purple/60 placeholder:text-sm absolute w-full h-full px-3 text-sm  tracking-wide font-medium top-0 left-0 rounded-lg outline-0 border-none"
                placeholder="Specialist or service"
              />
              <div className="bg-white backdrop-blur-xl grid place-items-center rounded-r-lg h-full relative z-30 px-2 w-[40px] cursor-pointer">
                <i class="fa-solid fa-magnifying-glass rounded-lg"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-5/12 top-0 z-40 right-0 hidden md:grid place-items-center absolute">
          <img
            src={require("../images/person.png")}
            alt=""
            className=""
            // width={2000}
          />
        </div>
        <div className="md:block hidden h-[200px] w-[200px] rounded-tl-full z-50 bg-light-purple absolute bottom-0 right-0"></div>
        <div className="md:block hidden h-[300px] w-[300px] rounded-tl-full z-10 bg-[#FF9472] absolute bottom-0 right-0"></div>
        <div className="md:h-[150px] h-[70px] w-[70px] md:w-[150px] rounded-br-full z-50 md:z-10 bg-light-purple absolute top-0 left-0"></div>
        <div className="md:h-[100px] h-[90px] w-[90px] md:w-[100px] rounded-br-full z-10 md:z-50 bg-[#FF9472] absolute top-0 left-0"></div>
      </div>
    </div>
  );
}

export default Person;
