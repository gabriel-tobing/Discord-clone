import Link from "next/link";
import NextImage from "next/image";

import Sidebar from "./Sidebar";
import Main from "./Main";
import SidebarChannel from "./SidebarChannel";

const Channels = () => {
  return (
    <>
      {/* <Sidebar />
      <Main /> */}
      <SidebarChannel />
      <div className="relative flex flex-col flex-auto min-w-0 min-h-0 bg-primary overflow-hidden">
        <section className="relative z-[100] flex flex-col justify-center flex-[0_0_auto] w-full min-w-0 min-h-[48px] p-2 bg-primary box-border text-normal text-base leading-5 cursor-default">
          <div className="flex flex-1 box-border">
            <div className="relative flex items-center flex-1 min-w-0 box-border overflow-hidden after:contents-[''] after:absolute after:top-0 after:right-0 after:w-2 after:h-full after:bg-header-bar">
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
            </div>
            <div className=""></div>
          </div>
        </section>
        <div className=""></div>
      </div>
    </>
  );
};

export default Channels;
