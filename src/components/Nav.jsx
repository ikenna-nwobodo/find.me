import React from "react";

function Nav() {
  return (
    <div className="w-10/12 h-[7vh] mt-4 rounded-xl p-4 z-50 fixed flex justify-between items-center top-0">
      <div className="flex gap-8 items-center">
        <p className="text-xl font-bold text-white">Find.Me</p>
        <div className="hidden md:flex gap-4 items-center">
          <p className="text-sm font-semibold cursor-pointer text-white/70 hover:text-white">
            Specialists
          </p>
          <p className="text-sm font-semibold cursor-pointer text-white/70 hover:text-white">
            Projects
          </p>
        </div>
      </div>
      <div className="hidden md:flex gap-4 items-center">
        <p className="text-sm font-semibold cursor-pointer text-white/70 hover:text-white">
          Sign In
        </p>
        <p className="text-sm text-white font-medium cursor-pointer bg-light-purple rounded-lg px-4 py-2 hover:shadow-2xl hover:-translate-y-0.5">
          Start case
        </p>
      </div>
      <div className="md:hidden block">
        <i class="fa-solid fa-bars-staggered cursor-pointer"></i>
      </div>
    </div>
  );
}

export default Nav;
