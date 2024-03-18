import React, { useEffect, useState } from "react";

function Nav() {
  const [bg, setbg] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menu, showMenu] = useState(false);
  const setMenu = () => {
    showMenu(!menu);
  };
  const controlNavbar = () => {
    if (window.scrollY > 750) {
      setbg(true);
    } else {
      setbg(false);
    }
    setLastScrollY(window.scrollY);
  };
  console.log(lastScrollY);
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`w-10/12 md:w-10/12 h-[7vh] mt-4 rounded-xl bg-light-purple/60 backdrop-blur-lg p-4 z-50 fixed flex justify-between items-center top-0 ${
        bg
          ? "!md:bg-light-purple/60 !md:backdrop-blur-lg"
          : "md:bg-transparent md:backdrop-blur-0"
      }`}
    >
      <div className="flex gap-8 items-center">
        <p className="text-base md:text-xl font-bold text-white">Find.Me</p>
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
        {menu ? (
          <i
            onClick={setMenu}
            class="fa-solid fa-xmark cursor-pointer !text-white"
          ></i>
        ) : (
          <i
            onClick={setMenu}
            class="fa-solid fa-bars-staggered cursor-pointer !text-white"
          ></i>
        )}
      </div>
      {menu && (
        <div className="absolute flex gap-4 flex-col -bottom-[180px] w-full shadow-2xl h-max min-h-[100px] right-0 rounded-xl bg-white menu p-4">
          <p
            onClick={setMenu}
            className="text-sm font-semibold cursor-pointer w-max text-light-purple/70 hover:text-light-purple"
          >
            Specialists
          </p>
          <p
            onClick={setMenu}
            className="text-sm font-semibold cursor-pointer w-max text-light-purple/70 hover:text-light-purple"
          >
            Projects
          </p>
          <p
            onClick={setMenu}
            className="text-sm font-semibold cursor-pointer w-max text-light-purple/70 hover:text-light-purple"
          >
            Sign In
          </p>
          <p
            onClick={setMenu}
            className="text-sm text-white font-medium cursor-pointer bg-light-purple rounded-lg px-4 py-2 hover:shadow-2xl hover:-translate-y-0.5"
          >
            Start case
          </p>
        </div>
      )}
    </div>
  );
}

export default Nav;
