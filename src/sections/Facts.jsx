import React from "react";

function Facts() {
  return (
    <div className="text-black w-full relative z-40 grid md:grid-cols-3 gap-8 md:gap-10 items-center md:min-h-[50vh] mt-[8vh]">
      <div className="bg-light-purple rounded-2xl shadow-md p-4 md:p-10 flex flex-col gap-3 h-full">
        <div className="bg-white md:w-[5rem] w-10 h-10 grid place-items-center rounded-full md:h-[5rem]">
          <i class="fa-solid fa-people-group !md:text-[2.5rem] !text-xl"></i>
        </div>
        <p className="md:text-2xl text-xl font-bold md:mb-3">
          Transaction support of administrators
        </p>
        <p className="pb-4 md:pb-0 text-sm text-black/70 font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="bg-lime rounded-2xl shadow-md p-4 md:p-10 flex flex-col gap-3 h-full">
        <div className="bg-white md:w-[5rem] w-10 h-10 grid place-items-center rounded-full md:h-[5rem]">
          <i class="fa-solid fa-landmark !md:text-[2.5rem] !text-xl"></i>
        </div>
        <p className="md:text-2xl text-xl font-bold mb-3">
          Specialists who have passed verification
        </p>
        <p className="pb-4 md:pb-0 text-sm text-black/70 font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="bg-[#FF9472] rounded-2xl shadow-md p-4 md:p-10 flex flex-col gap-3 h-full">
        <div className="bg-white md:w-[5rem] w-10 h-10 grid place-items-center rounded-full md:h-[5rem]">
          <i class="fa-solid fa-hand-holding-dollar !md:text-[2.5rem] !text-xl"></i>
        </div>
        <p className="md:text-2xl text-xl font-bold mb-3">
          Instant replenishment and withdrawal of funds
        </p>
        <p className="pb-4 md:pb-0 text-sm text-black/70 font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

export default Facts;
