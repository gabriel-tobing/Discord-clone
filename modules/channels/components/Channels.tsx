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
              <div className="relative flex-[0_0_auto] w-auto h-6 mx-2 box-border">
                <svg
                  x="0"
                  y="0"
                  className="block w-6 h-6 text-channel-icon"
                  aria-hidden="true"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M15 2a3 3 0 0 1 3 3v12H5.5a1.5 1.5 0 0 0 0 3h14a.5.5 0 0 0 .5-.5V5h1a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h10Zm-.3 5.7a1 1 0 0 0-1.4-1.4L9 10.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l5-5Z"
                    clipRule="evenodd"
                    className=""
                  ></path>
                </svg>
              </div>
              <span
                className="absolute w-[1px] h-[1px] whitespace-nowrap overflow-hidden"
                style={{ clip: "rect(0 0 0 0)", clipPath: "inset(50%)" }}
              >
                Text Channel
              </span>
              <div className="flex-[0_0_auto] mr-2 min-w-[auto]">
                <h1 className="flex justify-start items-center text-header-primary text-base font-semibold leading-5 whitespace-nowrap overflow-hidden">
                  <span
                    className="absolute w-[1px] h-[1px] whitespace-nowrap overflow-hidden"
                    style={{ clip: "rect(0 0 0 0)", clipPath: "inset(50%)" }}
                  >
                    WPU
                  </span>
                  👋🏼selamat-datang
                </h1>
              </div>
            </div>
            <div className="flex items-center flex-[0_0_auto] min-w-0">
              <div className="relative flex items-center flex-[0_0_auto] w-auto h-6 mx-2 cursor-pointer">
                <svg
                  x="0"
                  y="0"
                  className="block w-6 h-6 text-interactive-normal"
                  aria-hidden="true"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72a1 1 0 0 1 .07 1.58l-1 1 .35.36ZM15.66 16.8a1 1 0 0 1-1.38.28l-8.49-5.66A1 1 0 1 1 6.9 9.76l8.49 5.65a1 1 0 0 1 .27 1.39ZM17.1 14.25a1 1 0 1 0 1.11-1.66L9.73 6.93a1 1 0 0 0-1.11 1.66l8.49 5.66Z"
                    fill="currentColor"
                    className=""
                  ></path>
                </svg>
              </div>
              <div className="relative flex items-center flex-[0_0_auto] w-auto h-6 mx-2 cursor-pointer">
                <svg
                  x="0"
                  y="0"
                  className="block w-6 h-6 text-interactive-normal"
                  aria-hidden="true"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M1.3 21.3a1 1 0 1 0 1.4 1.4l20-20a1 1 0 0 0-1.4-1.4l-20 20ZM3.13 16.13c.11.27.46.28.66.08L15.73 4.27a.47.47 0 0 0-.07-.74 6.97 6.97 0 0 0-1.35-.64.62.62 0 0 1-.38-.43 2 2 0 0 0-3.86 0 .62.62 0 0 1-.38.43A7 7 0 0 0 5 9.5v2.09a.5.5 0 0 1-.13.33l-1.1 1.22A3 3 0 0 0 3 15.15v.28c0 .24.04.48.13.7ZM18.64 9.36c.13-.13.36-.05.36.14v2.09c0 .12.05.24.13.33l1.1 1.22a3 3 0 0 1 .77 2.01v.28c0 .67-.34 1.29-.95 1.56-1.31.6-4 1.51-8.05 1.51-.46 0-.9-.01-1.33-.03a.48.48 0 0 1-.3-.83l8.27-8.28ZM9.18 19.84A.16.16 0 0 0 9 20a3 3 0 1 0 6 0c0-.1-.09-.17-.18-.16a24.84 24.84 0 0 1-5.64 0Z"
                    className=""
                  ></path>
                </svg>
              </div>
              <div className="relative flex items-center flex-[0_0_auto] w-auto h-6 mx-2 cursor-pointer">
                <svg
                  x="0"
                  y="0"
                  className="block w-6 h-6 text-interactive-normal"
                  aria-hidden="true"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19.38 11.38a3 3 0 0 0 4.24 0l.03-.03a.5.5 0 0 0 0-.7L13.35.35a.5.5 0 0 0-.7 0l-.03.03a3 3 0 0 0 0 4.24L13 5l-2.92 2.92-3.65-.34a2 2 0 0 0-1.6.58l-.62.63a1 1 0 0 0 0 1.42l9.58 9.58a1 1 0 0 0 1.42 0l.63-.63a2 2 0 0 0 .58-1.6l-.34-3.64L19 11l.38.38ZM9.07 17.07a.5.5 0 0 1-.08.77l-5.15 3.43a.5.5 0 0 1-.63-.06l-.42-.42a.5.5 0 0 1-.06-.63L6.16 15a.5.5 0 0 1 .77-.08l2.14 2.14Z"
                    className=""
                  ></path>
                </svg>
              </div>
              <div className="relative flex items-center flex-[0_0_auto] w-auto h-6 mx-2 cursor-pointer">
                <svg
                  x="0"
                  y="0"
                  className="block w-6 h-6 text-interactive-normal"
                  aria-hidden="true"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM18.44 17.27c.15.43.54.73 1 .73h1.06c.83 0 1.5-.67 1.5-1.5a7.5 7.5 0 0 0-6.5-7.43c-.55-.08-.99.38-1.1.92-.06.3-.15.6-.26.87-.23.58-.05 1.3.47 1.63a9.53 9.53 0 0 1 3.83 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0c0 .83-.67 1.5-1.5 1.5a.2.2 0 0 1-.2-.16c-.2-.96-.56-1.87-.88-2.54-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.32.67-.67 1.58-.88 2.54a.2.2 0 0 1-.2.16A1.5 1.5 0 0 1 2 20.5Z"
                    className=""
                  ></path>
                </svg>
              </div>
              <div className="mx-2">
                <div className="relative z-[100] overflow-visible">
                  <div className="flex items-stretch w-36 h-6 px-0.5 bg-tertiary rounded shadow-none text-normal cursor-text overflow-hidden">
                    <div className="relative flex-1 h-[inherit] py-0.5 text-sm font-medium leading-5 overflow-hidden">
                      <div className="absolute z-[1] pl-1 pr-0.5 pb-5 text-muted">
                        <div className="whitespace-pre-wrap">Search</div>
                      </div>
                      <div className="relative z-[1] h-5 border-none rounded-sm overflow-hidden">
                        <div className="px-0.5 pb-5 outline-none select-text whitespace-pre-wrap break-words overflow-x-auto overflow-y-hidden">
                          <div>
                            <div>
                              <div
                                className="relative inline-block min-w-[1px] text-left whitespace-pre"
                                style={{ direction: "ltr" }}
                              >
                                <span className="min-w-[1px]">
                                  <br />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center w-6 h-6 cursor-text">
                      <div className="relative w-4 h-4">
                        <svg
                          className="absolute top-0 left-0 z-[2] w-full h-full rotate-0 text-muted opacity-100"
                          aria-hidden="true"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M15.62 17.03a9 9 0 1 1 1.41-1.41l4.68 4.67a1 1 0 0 1-1.42 1.42l-4.67-4.68ZM17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                            clipRule="evenodd"
                            className=""
                          ></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          role="img"
                          className="absolute top-0 left-0 z-[2] w-full h-full rotate-90 text-muted opacity-0"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative w-auto h-6 mx-2 cursor-pointer">
                  <svg
                    x="0"
                    y="0"
                    className="block w-6 h-6 text-interactive-normal"
                    aria-hidden="true"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-2.65c-.5 0-.85.5-.85 1a3 3 0 1 1-6 0c0-.5-.35-1-.85-1H5.5A1.5 1.5 0 0 1 4 11.5v-6Z"
                      clipRule="evenodd"
                      className=""
                    ></path>
                  </svg>
                </div>
              </div>
              <Link href={"/"} className="text-link">
                <div className="relative w-auto h-6 mx-2 cursor-pointer">
                  <svg
                    x="0"
                    y="0"
                    className="block w-6 h-6 text-interactive-normal"
                    aria-hidden="true"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" fill="transparent" className=""></circle>
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-.28-16c-.98 0-1.81.47-2.27 1.14A1 1 0 1 1 7.8 7.01 4.73 4.73 0 0 1 11.72 5c2.5 0 4.65 1.88 4.65 4.38 0 2.1-1.54 3.77-3.52 4.24l.14 1a1 1 0 0 1-1.98.27l-.28-2a1 1 0 0 1 .99-1.14c1.54 0 2.65-1.14 2.65-2.38 0-1.23-1.1-2.37-2.65-2.37ZM13 17.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
                      clipRule="evenodd"
                      className=""
                    ></path>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <div className="relative justify-stretch items-stretch flex-auto min-w-0 min-h-0 before:contents-[''] before:absolute before:-top-[1px] before:left-0 before:right-0 before:z-[1] before:block before:h-[1px] before:shadow-elevation-low before:pointer-events-none">
          <div className="relative flex w-full h-full">
            <div className="absolute flex w-full h-full">
              <main className="relative flex flex-col flex-auto min-w-0 min-h-0 bg-primary">
                <span
                  className="absolute w-[1px] h-[1px] whitespace-nowrap overflow-hidden"
                  style={{ clip: "rect(0 0 0 0)", clipPath: "inset(50%)" }}
                ></span>
                <div className="relative z-0 flex flex-auto min-w-0 min-h-0">
                  <div className="absolute top-0 left-4 right-4 z-[2] flex items-center h-8 min-h-[24px] bg-brand-experiment rounded-b-lg shadow-elevation-low capitalize opacity-95 cursor-pointer">
                    <button
                      type="button"
                      className="relative block flex-auto h-6 px-3 bg-none whitespace-nowrap text-ellipsis overflow-hidden text-white-500 text-sm font-medium text-left leading-6 cursor-pointer"
                      style={{ appearance: "none" }}
                    >
                      <span className="whitespace-nowrap text-ellipsis overflow-hidden">
                        4+ new messages since 6:30 PM on September 24, 2020
                      </span>
                    </button>
                    <button
                      type="button"
                      className="relative flex justify-start items-center flex-[0_0_auto] h-6 px-3 bg-none text-white-500 text-sm font-semibold text-left leading-6 cursor-pointer"
                      style={{ appearance: "none" }}
                    >
                      Mark As Read
                      <svg
                        className="relative -top-[1px] block w-4 h-4 ml-2"
                        aria-hidden="true"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12.66 21.98c.4-.03.56-.51.28-.8l-.06-.06a3 3 0 1 1 4.24-4.24l.53.52c.2.2.5.2.7 0l2.53-2.52a3 3 0 0 1 .64-.5c.14-.07.24-.2.27-.34a10 10 0 1 0-18.24 3.32c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12c.22 0 .44 0 .66-.02Z"
                          className=""
                        ></path>
                        <path
                          fill="currentColor"
                          d="M23.7 17.7a1 1 0 0 0-1.4-1.4L18 20.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l5-5Z"
                          className=""
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div
                    className="absolute top-0 left-0 right-0 bottom-0 flex-auto min-h-0 overflow-x-hidden overflow-y-auto"
                    style={{ overflowAnchor: "none" }}
                  >
                    <div
                      className="relative flex flex-col justify-end items-center min-h-full"
                      style={{ overflowAnchor: "none" }}
                    >
                      <ol className="min-h-0 overflow-hidden">
                        <span className="hidden">
                          Use the up and down arrow keys to navigate between messages quickly. New messages will be
                          added to the bottom of the list as they come in.
                        </span>
                        <div className="flex flex-col justify-end m-4"></div>
                        <div className=""></div>
                        <div className=""></div>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className=""></div>
                <div className=""></div>
              </main>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Channels;
