import React from "react";

function Footer() {
  return (
    <div className="text-black bg-primary w-full md:w-10/12 rounded-2xl md:rounded-[2.5rem] overflow-hidden relative z-40 flex flex-col justify-between gap-4 md:gap-10 items-center h-max md:h-[50vh] mt-[8vh]">
      <div className="flex-1 flex md:flex-row flex-col gap-10 justify-between p-4 md:p-8 w-full rounded-t-[2.5rem]">
        <div className="text-white">
          <p className="text-2xl md:text-[4rem] md:leading-[4.5rem] font-bold">
            Find.me
          </p>
          <p className="text-sm font-semibold text-white/80">
            A lot of ways to find the best
          </p>
        </div>
        <div className="md:w-6/12 grid md:grid-cols-3 gap-8 md:gap-4">
          <div className="hidden md:flex flex-col gap-4">
            <p className="text-sm font-medium cursor-pointer text-white/70 hover:text-white">
              Home page
            </p>
            <p className="text-sm font-medium cursor-pointer text-white/70 hover:text-white">
              Specialists
            </p>
            <p className="text-sm font-medium cursor-pointer text-white/70 hover:text-white">
              Tasks
            </p>
            <p className="text-sm font-medium cursor-pointer text-white/70 hover:text-white">
              Supports
            </p>
            <p className="text-sm font-medium cursor-pointer text-white/70 hover:text-white">
              Faq
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium cursor-pointer text-white/70 hover:text-white">
              About Us
            </p>
            <p className="text-sm font-medium cursor-pointer text-white/70 hover:text-white">
              The Team
            </p>
            <p className="text-sm font-medium cursor-pointer text-white/70 hover:text-white">
              Partners
            </p>
            <p className="text-sm font-medium cursor-pointer text-white/70 hover:text-white">
              Privacy Policy
            </p>
            <p className="text-sm font-medium cursor-pointer text-white/70 hover:text-white">
              Contact Us
            </p>
          </div>
          <div className="hidden md:flex flex-col gap-4">
            <p className="text-sm font-medium cursor-pointer text-white/70 hover:text-white">
              Instagram
            </p>
            <p className="text-sm font-medium cursor-pointer text-white/70 hover:text-white">
              Facebook
            </p>
            <p className="text-sm font-medium cursor-pointer text-white/70 hover:text-white">
              Telegram
            </p>
            <p className="text-sm font-medium cursor-pointer text-white/70 hover:text-white">
              X
            </p>
            <p className="text-sm font-medium cursor-pointer text-white/70 hover:text-white">
              LinkedIn
            </p>
          </div>
          <div className="flex md:hidden items-center gap-4">
            <p className="text-sm font-medium cursor-pointer text-white/70 hover:text-white">
              <i class="fa-brands fa-instagram !text-[20px]"></i>
            </p>
            <p className="text-sm font-medium cursor-pointer text-white/70 hover:text-white">
              <i class="fa-brands fa-facebook !text-[20px]"></i>
            </p>
            <p className="text-sm font-medium cursor-pointer text-white/70 hover:text-white">
              <i class="fa-brands fa-telegram !text-[20px]"></i>
            </p>
            <p className="text-sm font-medium cursor-pointer text-white/70 hover:text-white">
              <i class="fa-brands fa-x-twitter !text-[20px]"></i>
            </p>
            <p className="text-sm font-medium cursor-pointer text-white/70 hover:text-white">
              <i class="fa-brands fa-linkedin !text-[20px]"></i>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full grid place-items-center py-6 border-t border-white">
        <div className="text-xs font-semibold text-white/60 flex md:flex-row flex-col items-center gap-2 md:gap-8">
          <p>
            Designed by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
              href="https://www.behance.net/gallery/192156095/Findme-A-platform-for-finding-specialists-Website?tracking_source=search_projects|web+design&l=34&"
            >
              Climbs.digital{" "}
            </a>
            &copy; 2023
          </p>
          <p className="md:rotate-0 rotate-90">|</p>
          <p>
            Developed by{" "}
            <a
              href="https://i-portfoliov2.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              Ikenna Nwobodo{" "}
            </a>
            &copy; 2024
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
