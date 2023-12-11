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
                    {" "}
                    {/* Kalau tidak ada valuenya maka widthnya w-36 jika ada maka w-60  */}
                    <div className="relative flex-1 h-[inherit] py-0.5 text-sm font-medium leading-5 overflow-hidden">
                      <div className="relative z-[1] h-5 border-none rounded-sm overflow-hidden">
                        <div className="px-0.5 pb-5 outline-none select-text whitespace-pre-wrap break-words overflow-x-auto overflow-y-hidden">
                          <div>
                            <div>
                              <input
                                type="text"
                                placeholder="Search"
                                className="relative inline-block w-full min-w-[1px] bg-transparent outline-none text-left whitespace-pre text-normal placeholder:text-muted"
                                style={{ direction: "ltr", caretColor: "hsl(210 calc(1 * 9.1%) 87.1% / 1)" }}
                              />
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
                  <div className="absolute top-0 left-4 right-4 z-[2] flex items-center h-8 min-h-[24px] bg-brand-experiment rounded-b-lg shadow-elevation-low capitalize opacity-95 cursor-pointer hidden">
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
                      <ol className="block w-full h-full min-h-0 overflow-hidden">
                        <span className="hidden">
                          Use the up and down arrow keys to navigate between messages quickly. New messages will be
                          added to the bottom of the list as they come in.
                        </span>
                        <div className="flex flex-col justify-end m-4">
                          <div className="flex flex-col items-center pt-4 px-4">
                            <div className="flex flex-col items-center max-w-[400px]">
                              <div>
                                <h3 className="text-header-primary text-[32px] font-bold text-center leading-10">
                                  <p>Welcome to</p>
                                  <p>WPU</p>
                                </h3>
                                <div className="mt-2 mb-0 text-interactive-normal text-sm font-normal text-center leading-[18px]">
                                  This is the beginning of this server.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative left-auto right-auto z-[1] flex justify-center items-center h-0 mt-6 mb-2 ml-4 mr-3.5 border-t border-status-danger pointer-events-none">
                          <span className="block flex-[0_0_auto] py-0.5 px-1 bg-primary rounded-lg text-status-danger text-xs font-semibold leading-[13px]">
                            September 24, 2020
                          </span>
                          <span className="absolute -top-[7px] right-0 flex justify-center items-center h-[13px] pl-[1px] pr-1 bg-status-danger rounded-tr rounded-br text-white-500 text-[10px] font-bold leading-[9px] uppercase">
                            <svg
                              className="absolute top-0 -left-2 block h-[13px]"
                              aria-hidden="true"
                              role="img"
                              width="8"
                              height="13"
                              viewBox="0 0 8 13"
                            >
                              <path
                                className="text-status-danger fill-status-danger"
                                stroke="currentColor"
                                fill="transparent"
                                d="M8.16639 0.5H9C10.933 0.5 12.5 2.067 12.5 4V9C12.5 10.933 10.933 12.5 9 12.5H8.16639C7.23921 12.5 6.34992 12.1321 5.69373 11.4771L0.707739 6.5L5.69373 1.52292C6.34992 0.86789 7.23921 0.5 8.16639 0.5Z"
                              ></path>
                            </svg>
                            New
                          </span>
                        </div>
                        <li className="relative outline-none">
                          <div className="relative min-h-[2.75rem] mt-[1.0625rem] py-[0.125rem] pl-message pr-12 break-words select-text">
                            <div className="static ml-0 pl-0" style={{ textIndent: "0" }}>
                              <NextImage
                                src="https://cdn.discordapp.com/avatars/376337405185097728/02a31ea74809b148c7d8c563cae76948.webp?size=80"
                                alt=""
                                width={40}
                                height={40}
                                className="absolute left-4 z-[1] w-10 h-10 mt-message-profile rounded-full pointer-events-auto overflow-hidden cursor-pointer select-none"
                              />
                              <h3 className="relative block min-h-[1.375rem] text-muted leading-[1.375rem] whitespace-break-spaces overflow-hidden">
                                <span className="mr-0">
                                  <span className="relative text-[rgb(46,204,113)] text-base font-medium leading-[1.375rem] align-baseline overflow-hidden">
                                    Sandhika Galih
                                  </span>
                                  <span>
                                    <NextImage
                                      src="https://cdn.discordapp.com/role-icons/761212763476328474/2aaf1fc6ac1a1c41824ea59fac6c603f.webp?size=20&quality=lossless"
                                      alt=""
                                      width={20}
                                      height={20}
                                      className="relative top-[1px] inline-block w-role h-role ml-1 object-contain align-top cursor-pointer overflow-hidden"
                                    />
                                  </span>
                                </span>
                                <span className="inline-block h-5 ml-1 text-muted text-xs font-medium leading-[1.375rem] align-baseline pointer-events-none cursor-default">
                                  <time>
                                    <i className="absolute inline-block opacity-0">-</i>
                                    09/24/2020 6:30 PM
                                  </time>
                                </span>
                              </h3>
                              <div className="relative ml-message-container pl-message text-normal text-base leading-[1.375rem] whitespace-break-spaces break-words select-text overflow-hidden">
                                <strong>
                                  <span>Mohon agar membaca seluruh pesan di bawah ini</span>
                                  <span>, atau kalian tidak dapat mengakses channel</span>
                                  <span>-channel di server ini secara penuh</span>
                                </strong>
                                <span> Halo Teman</span>
                                <span>-teman semua</span>
                                <span>! Selamat datang di Server Discord </span>
                                <strong>
                                  <span>Web Programming Unpas</span>
                                </strong>
                              </div>
                            </div>
                            <div
                              className="relative grid grid-flow-row gap-y-1 h-fit min-w-0 min-h-0 py-[0.125rem]"
                              style={{ gridTemplateColumns: "repeat(auto-fill, minmax(100%, 1fr))" }}
                            >
                              <div className="flex flex-col justify-self-start self-start w-full min-w-[160px] max-w-[432px] p-4 bg-secondary rounded cursor-default select-none">
                                <h3 className="mb-3 text-interactive-normal text-xs font-bold leading-4 uppercase tracking-[0.02em] whitespace-nowrap text-ellipsis overflow-hidden">
                                  You've been invited to join a server
                                </h3>
                                <div className="flex flex-wrap gap-4">
                                  <div className="flex items-center flex-[1000_0_auto] gap-4 max-w-full">
                                    <div className="relative flex-[0_0_auto] w-[50px] h-[50px] bg-primary rounded-[15px] overflow-hidden">
                                      <NextImage
                                        src="https://cdn.discordapp.com/icons/722002048643497994/a_d85c162eea1f847b930479656e07dbfd.webp?size=56"
                                        alt=""
                                        width={56}
                                        height={56}
                                        className="object-cover"
                                      />
                                    </div>
                                    <div className="flex flex-col justify-center items-stretch flex-auto flex-nowrap min-w-[1px]">
                                      <div>
                                        <h3 className="mb-0.5 text-header-primary text-base font-semibold leading-5 whitespace-nowrap text-ellipsis overflow-hidden cursor-pointer">
                                          <span className="flex items-center overflow-hidden">
                                            <div className="flex items-center flex-[0_1_auto] max-w-full overflow-hidden">
                                              <span className="flex-auto min-w-0 whitespace-nowrap text-ellipsis overflow-hidden">
                                                WPU
                                              </span>
                                            </div>
                                            <span className="ml-1">
                                              <div className="mr-2">
                                                <div>
                                                  <div className="relative flex justify-center items-center w-4 h-4">
                                                    <svg
                                                      className="w-full h-full"
                                                      aria-hidden="true"
                                                      role="img"
                                                      width="16"
                                                      height="16"
                                                      viewBox="0 0 16 15.2"
                                                    >
                                                      <path
                                                        fill="rgba(194, 124, 222, 1)"
                                                        fillRule="evenodd"
                                                        d="m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                                                      ></path>
                                                    </svg>
                                                    <div className="absolute -top-[0.05px] left-[0.05px] right-0 bottom-0 flex justify-center items-center pointer-events-none">
                                                      <svg
                                                        aria-hidden="true"
                                                        role="img"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="10"
                                                        height="10"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                      >
                                                        <path
                                                          fill="hsl(0 calc(1 * 0%) 100% / 1)"
                                                          fillRule="evenodd"
                                                          d="M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-4.16 5.85A9 9 0 0 0 15 3.52V4a3 3 0 0 1-3 3h-.77c-.13 0-.23.1-.23.23A2.77 2.77 0 0 1 8.23 10c-.13 0-.23.1-.23.23v1.52c0 .14.11.25.25.25H13a3 3 0 0 1 3 3v.77c0 .13.1.23.23.23 1.2 0 2.23.77 2.61 1.85ZM3.18 10.18A9 9 0 0 0 11 20.94v-2.7c0-.14-.1-.24-.23-.24h-.65A2.12 2.12 0 0 1 8 15.88c0-.56-.22-1.1-.62-1.5l-4.2-4.2Z"
                                                          clipRule="evenodd"
                                                          className=""
                                                        ></path>
                                                      </svg>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </span>
                                          </span>
                                        </h3>
                                      </div>
                                      <strong className="text-interactive-normal text-sm font-normal leading-[18px]">
                                        <div className="flex items-center flex-wrap gap-x-3">
                                          <div className="flex items-center flex-[0_1_auto] min-w-0">
                                            <i className="block flex-[0_0_auto] w-2 h-2 mr-1 bg-green-360 rounded-full"></i>
                                            <span className="flex-[0_1_auto] mr-0 text-interactive-normal whitespace-nowrap text-ellipsis overflow-hidden">
                                              6,036 Online
                                            </span>
                                          </div>
                                          <div className="flex items-center flex-[0_1_auto] min-w-0">
                                            <i className="block flex-[0_0_auto] w-2 h-2 mr-1 bg-primary-400 rounded-full"></i>
                                            <span className="flex-[0_1_auto] mr-0 text-interactive-normal whitespace-nowrap text-ellipsis overflow-hidden">
                                              45,481 Members
                                            </span>
                                          </div>
                                        </div>
                                      </strong>
                                    </div>
                                  </div>
                                  <button
                                    type="button"
                                    className="relative flex justify-center items-center flex-[1_0_auto] self-center w-auto h-10 py-0.5 px-4 bg-positive rounded-[3px] text-white-500 text-sm font-medium leading-5 whitespace-nowrap text-ellipsis overflow-hidden cursor-pointer select-none"
                                  >
                                    <div className="mx-auto whitespace-nowrap text-ellipsis overflow-hidden">
                                      Joined
                                    </div>
                                  </button>
                                </div>
                              </div>
                              <div className="flex items-center justify-self-start self-start flex-wrap -mb-2 pb-1">
                                <div>
                                  <div className="mr-1 mb-1 bg-secondary rounded-lg opacity-100 cursor-pointer select-none">
                                    <div className="relative flex items-center py-[0.125rem] px-[0.375rem]">
                                      <div>
                                        <NextImage
                                          src="https://discord.com/assets/7a934d8b65db3219592b.svg"
                                          alt=""
                                          width={16}
                                          height={16}
                                          className="w-4 h-4 min-w-[auto] min-h-[auto] my-[0.125rem] object-contain align-bottom"
                                        />
                                      </div>
                                      <div className="min-w-[36px] ml-[0.375rem] text-brand-experiment-200 font-semibold text-center">
                                        6613
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="hidden"></div>
                              </div>
                            </div>
                            <div className="absolute top-0 right-0">
                              <div className="absolute -top-4 right-0 z-[1] pl-8 pr-3.5 opacity-0 pointer-events-none">
                                <div className="relative grid grid-flow-col justify-start items-center h-8 bg-primary rounded shadow-elevation-stroke select-none overflow-hidden">
                                  <div className="relative flex justify-center items-center min-w-[24px] h-6 p-1 text-interactive-normal cursor-pointer">
                                    <svg
                                      className="block w-5 h-5 object-contain"
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
                                        d="M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                                        clipRule="evenodd"
                                        className=""
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <form className="relative shrink-0 -mt-2 px-4 before:contents-[''] before:absolute before:top-0 before:left-0 before:w-5 before:h-2 before:bg-header-bar">
                  <div className="relative w-full mb-6 bg-primary rounded-lg">
                    <div
                      className="max-h-[50vh] bg-channel-textarea rounded-lg opacity-50 overflow-x-hidden overflow-y-auto"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="relative flex pl-4 cursor-not-allowed">
                        <div className="relative w-full h-11 min-h-[44px] p-0 border-none bg-transparent text-normal text-base font-normal leading-[1.375rem] pointer-events-none resize-none">
                          <div>
                            <div className="absolute left-0 right-2.5 py-[11px] pr-2.5 text-channel-placeholder whitespace-nowrap text-ellipsis overflow-hidden pointer-events-none select-none">
                              You do not have permission to send messages in this channel.
                            </div>
                            <div className="relative left-0 right-2.5 py-[11px] pr-2.5 outline-none text-normal text-base text-left leading-[1.375rem] whitespace-break-spaces caret-normal break-words select-text"></div>{" "}
                            {/* Ini harusnya texarea */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=""></div>
                  </div>
                </form>
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
