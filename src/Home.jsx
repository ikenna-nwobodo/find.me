import React from "react";

function Home() {
  return (
    <div className="w-11/12 flex flex-col relative z-40 gap-10 items-center h-max md:min-h-[90vh] mt-[8vh]">
      <div className="flex flex-col items-center gap-8">
        <p className="text-[2rem] md:text-[4rem] font-bold text-center text-white w-10/12">
          Find a specialist in any direction
        </p>
        <div className="md:w-10/12 w-full flex md:flex-row flex-col gap-6 md:gap-4 justify-between items-start">
          <div className="w-full md:w-9/12 flex flex-col gap-6 md:gap-3">
            <div className="bg-white w-full md:w-11/12 h-[40px] flex relative justify-end items-center rounded-lg text-light-purple">
              <input
                type="text"
                className="flex-1 outline-none placeholder:text-light-purple/60 placeholder:text-sm absolute w-full h-full px-3 text-sm  tracking-wide font-medium top-0 left-0 rounded-lg outline-0 border-none"
                placeholder="Specialist or service"
              />
              <div className="bg-white backdrop-blur-xl grid place-items-center rounded-r-lg h-full relative z-30 px-2 w-[40px] cursor-pointer">
                <i class="fa-solid fa-magnifying-glass rounded-lg"></i>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-3 items-center">
              <p className="text-light-purple md:w-max w-10/12 text-center tracking-wide capitalize hover:text-white hover:bg-light-purple text-xs cursor-pointer font-semibold px-4 py-3 rounded-lg bg-white">
                Creating web-sites
              </p>
              <p className="text-light-purple md:w-max w-10/12 text-center tracking-wide capitalize hover:text-white hover:bg-light-purple text-xs cursor-pointer font-semibold px-4 py-3 rounded-lg bg-white">
                Web Design
              </p>
              <p className="text-light-purple md:w-max w-10/12 text-center tracking-wide capitalize hover:text-white hover:bg-light-purple text-xs cursor-pointer font-semibold px-4 py-3 rounded-lg bg-white">
                Marketing
              </p>
            </div>
          </div>
          <div className="w-full md:w-3/12 h-full">
            <div className="flex cabt items-center tracking-wide justify-center gap-2 h-[40px] cursor-pointer hover:text-white hover:bg-light-purple bg-white w-full rounded-lg text-sm font-semibold text-center text-light-purple">
              Create Case
              <i class="fa-solid icca fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-xl w-full md:w-10/12 h-[40vh] hidden lg:grid grid-cols-6 gap-4">
        <div className="bg-white rounded-xl relative  col-span-2 overflow-hidden">
          <img
            // src="https://plus.unsplash.com/premium_photo-1664879730345-ae3381805040"
            src="https://plus.unsplash.com/premium_photo-1670588892177-48887618307d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="absolute w-full h-full top-0 left-0 object-cover"
          />
        </div>
        <div className="rounded-xl flex flex-col justify-between gap-6 overflow-hidden relative ">
          <div className="bg-white p-1.5 py-3 shadow-xl flex flex-col gap-4 items-center rounded-xl flex-1">
            <div className="flex items-center w-full gap-x-2">
              <div className="bg-lime px-1 rounded-full">
                <i class="fa-solid fa-arrow-trend-up !text-light-purple"></i>
              </div>
              <p className="text-sm font-bold">Higher and More</p>
            </div>
            <div className="text-xs font-bold flex flex-col gap-2 text-black/60">
              <p>Everyday we increase the number of specialists on our site</p>
              <p>
                Because of this, the level and quality of work performance
                increases
              </p>
            </div>
          </div>
          <div className="bg-white shadow-xl gap-2 flex items-center p-1.5 h-1/6 rounded-xl">
            <div className="bg-lime px-1 rounded-full">
              <i class="fa-solid fa-eye !text-light-purple"></i>
            </div>
            <p className="text-sm font-bold">Arbitration System</p>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden relative flex flex-col justify-between gap-6 col-span-2">
          <div className="bg-white shadow-xl gap-2 flex items-center p-1.5 h-1/5 rounded-xl">
            <div className="bg-lime grid place-items-center rounded-full p-1">
              <span class="material-symbols-outlined !text-light-purple">
                paid
              </span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">Easy payment</p>
              <p className="text-xs font-bold text-black/60">
                Easy payment method in platform
              </p>
            </div>
          </div>
          <div className="flex-1 rounded-xl relative h-4/5 shadow-xl overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1709865803790-1d929a9386b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="absolute w-full h-full top-0 left-0 object-cover"
            />
          </div>
        </div>
        <div className="bg-white shadow-xl rounded-xl overflow-hidden relative">
          <img
            src="https://plus.unsplash.com/premium_photo-1709311449969-57ca0f6d4489?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="absolute w-full h-full top-0 left-0 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
