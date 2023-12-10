import Link from "next/link";
import NextImage from "next/image";

const Sidebar = () => {
  return (
    <div className="flex flex-col flex-[0_0_auto] w-60 min-h-0 bg-secondary overflow-hidden">
      <nav className="relative flex flex-col flex-1 bg-secondary box-border overflow-hidden select-none">
        <div className="relative z-[2] flex items-center flex-[0_0_auto] h-12 px-2.5 shadow-elevation-low">
          <button
            type="button"
            className="w-full h-7 px-1.5 bg-tertiary rounded shadow-none overflow-hidden text-muted text-sm font-medium text-left leading-6 whitespace-nowrap text-ellipsis"
          >
            Find or start a conversation
          </button>
        </div>
        <div className="relative flex-auto min-h-0 pr-0 bg-secondary box-border overflow-x-hidden overflow-y-auto">
          <ul className="relative h-80">
            <div className="h-2" aria-hidden="true"></div>
            <li className="relative block max-w-[224px] ml-2 py-[1px] rounded box-border">
              <div className="flex items-center w-full pr-2 bg-modifier-selected rounded-[inherit] box-border text-white-500 cursor-pointer">
                <Link
                  href={"/"}
                  className="flex items-center gap-2 flex-auto min-w-0 text-inherit text-ellipsis whitespace-nowrap overflow-hidden"
                >
                  <div className="flex items-center grow h-[42px] min-w-0 px-2">
                    <div className="flex justify-center items-center flex-[0_0_auto] w-8 h-8 mr-3">
                      <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path fill="currentColor" d="M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" className=""></path>
                        <path
                          fill="currentColor"
                          d="M3 5v-.75C3 3.56 3.56 3 4.25 3s1.24.56 1.33 1.25C6.12 8.65 9.46 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.2-.15 7.65 7.65 0 0 0-1.32-2.3c-.15-.2-.42-.06-.39.17l.25 2c.02.15-.1.28-.25.28H9a2 2 0 0 1-2-2v-2.22c0-1.57-.67-3.05-1.53-4.37A15.85 15.85 0 0 1 3 5Z"
                          className=""
                        ></path>
                      </svg>
                    </div>
                    <div className="flex-auto min-w-0 whitespace-nowrap text-ellipsis overflow-hidden">
                      <div className="flex justify-start items-center">
                        <div className="flex-[0_1_auto] text-base font-medium leading-5 whitespace-nowrap text-ellipsis overflow-hidden">
                          Friends
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </li>
            <li className="relative block max-w-[224px] ml-2 py-[1px] rounded box-border">
              <div className="flex items-center w-full pr-2 rounded-[inherit] box-border text-muted cursor-pointer">
                <Link
                  href={"/"}
                  className="flex items-center gap-2 flex-auto min-w-0 text-inherit text-ellipsis whitespace-nowrap overflow-hidden"
                >
                  <div className="flex items-center grow h-[42px] min-w-0 px-2">
                    <div className="flex justify-center items-center flex-[0_0_auto] w-8 h-8 mr-3">
                      <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path fill="currentColor" d="M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" className=""></path>
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                          clipRule="evenodd"
                          className=""
                        ></path>
                        <path fill="currentColor" d="M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z" className=""></path>
                      </svg>
                    </div>
                    <div className="flex-auto min-w-0 whitespace-nowrap text-ellipsis overflow-hidden">
                      <div className="flex justify-start items-center">
                        <div className="flex-[0_1_auto] text-base font-medium leading-5 whitespace-nowrap text-ellipsis overflow-hidden">
                          Nitro
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </li>
            <li className="relative block max-w-[224px] ml-2 py-[1px] rounded box-border">
              <div className="flex items-center w-full pr-2 rounded-[inherit] box-border text-muted cursor-pointer">
                <Link
                  href={"/"}
                  className="flex items-center gap-2 flex-auto min-w-0 text-inherit text-ellipsis whitespace-nowrap overflow-hidden"
                >
                  <div className="flex items-center grow h-[42px] min-w-0 px-2">
                    <div className="flex justify-center items-center flex-[0_0_auto] w-8 h-8 mr-3">
                      <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M2.63 4.19A3 3 0 0 1 5.53 2H7a1 1 0 0 1 1 1v3.98a3.07 3.07 0 0 1-.3 1.35A2.97 2.97 0 0 1 4.98 10c-2 0-3.44-1.9-2.9-3.83l.55-1.98ZM10 2a1 1 0 0 0-1 1v4a3 3 0 0 0 3 3 3 3 0 0 0 3-2.97V3a1 1 0 0 0-1-1h-4ZM17 2a1 1 0 0 0-1 1v3.98a3.65 3.65 0 0 0 0 .05A2.95 2.95 0 0 0 19.02 10c2 0 3.44-1.9 2.9-3.83l-.55-1.98A3 3 0 0 0 18.47 2H17Z"
                          className=""
                        ></path>
                        <path
                          fill="currentColor"
                          d="M21 11.42V19a3 3 0 0 1-3 3h-2.75a.25.25 0 0 1-.25-.25V16a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v5.75c0 .14-.11.25-.25.25H6a3 3 0 0 1-3-3v-7.58c0-.18.2-.3.37-.24a4.46 4.46 0 0 0 4.94-1.1c.1-.12.3-.12.4 0a4.49 4.49 0 0 0 6.58 0c.1-.12.3-.12.4 0a4.45 4.45 0 0 0 4.94 1.1c.17-.07.37.06.37.24Z"
                          className=""
                        ></path>
                      </svg>
                    </div>
                    <div className="flex-auto min-w-0 whitespace-nowrap text-ellipsis overflow-hidden">
                      <div className="flex justify-start items-center">
                        <div className="flex-[0_1_auto] text-base font-medium leading-5 whitespace-nowrap text-ellipsis overflow-hidden">
                          Shop
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </li>
            <h2 className="flex h-10 pt-[18px] pr-2 pb-1 pl-[18px] box-border text-muted text-xs font-semibold leading-4 uppercase tracking-[0.02em] whitespace-nowrap text-ellipsis overflow-hidden">
              <span className="flex-1 text-ellipsis overflow-hidden">Direct Messages</span>
              <div className="relative flex-[0_1_0%] w-4 h-4 mr-2.5 cursor-pointer">
                <svg
                  x="0"
                  y="0"
                  className="block flex-[0_1_0%] w-4 h-4 mr-2.5 text-interactive-normal"
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
                    d="M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z"
                    className=""
                  ></path>
                </svg>
              </div>
            </h2>
            <li className="relative block max-w-[224px] py-[1px] rounded box-border ml-2">
              <div className="flex items-center w-full rounded-[inherit] box-border text-muted cursor-pointer">
                <Link
                  href={"/"}
                  className="flex items-center flex-auto gap-2 min-w-0 text-inherit whitespace-nowrap text-ellipsis overflow-hidden"
                >
                  <div className="flex items-center h-[42px] min-w-0 px-2 rounded">
                    <div className="flex justify-center items-center flex-[0_0_auto] w-8 h-8 mr-3">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          className="absolute block w-auto pointer-events-none"
                          aria-hidden="true"
                          style={{ contain: "paint" }}
                        >
                          <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-default)">
                            <div className="grid w-full h-full">
                              <NextImage
                                src="https://cdn.discordapp.com/avatars/643945264868098049/c6a249645d46209f337279cd2ca998c7.webp?size=32"
                                alt=""
                                width={32}
                                height={32}
                                className="block w-full h-full object-cover pointer-events-none"
                                style={{ gridArea: "1/1" }}
                              />
                            </div>
                          </foreignObject>
                        </svg>
                      </div>
                    </div>
                    <div className="flex-auto min-w-0 whitespace-nowrap text-ellipsis overflow-hidden">
                      <div className="flex justify-start items-center">
                        <div className="flex-[0_1_auto] text-base font-medium leading-5 whitespace-nowrap text-ellipsis overflow-hidden">
                          <div className="relative whitespace-nowrap text-ellipsis overflow-hidden">Discord</div>
                        </div>
                        <span
                          className="inline-flex items-center shrink-0 h-[15px] align-top mt-[1px] ml-1 px-1 bg-brand-experiment rounded-[3px] text-white-500 text-[0.625rem] uppercase"
                          style={{ textIndent: "0" }}
                        >
                          <svg
                            aria-label="System Message"
                            className="inline-block w-[15px] h-[15px] -ml-1"
                            aria-hidden="false"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              d="M18.7 7.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.29 7.3-7.3a1 1 0 0 1 1.4 0Z"
                              clipRule="evenodd"
                              className=""
                            ></path>
                          </svg>
                          <span className="relative align-top text-[10px] font-medium leading-[15px]">System</span>
                        </span>
                      </div>
                      <div className="-mt-0.5 whitespace-nowrap text-ellipsis overflow-hidden">
                        <div className="text-xs font-medium leading-4 whitespace-nowrap text-ellipsis overflow-hidden">
                          Official Discord Message
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <section className="z-[1] flex-[0_0_auto] bg-secondary-alt">
        <div className="relative overflow-visible"></div>
        <div className="flex items-center h-[52px] mb-[1px] px-2 bg-secondary-alt text-sm font-medium">
          <div className="flex items-center min-w-[120px] -ml-0.5 mr-2 pl-0.5">
            <div className="relative shrink-0 w-8 h-8 rounded-full cursor-pointer">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                className="absolute block w-auto pointer-events-none"
                style={{ contain: "paint" }}
                aria-hidden="true"
              >
                <mask id=":r0:" width="32" height="32">
                  <circle cx="16" cy="16" r="16" fill="white"></circle>
                  <rect color="black" x="19" y="19" width="16" height="16" rx="8" ry="8"></rect>
                </mask>
                <foreignObject x="0" y="0" width="32" height="32" mask="url(#:r0:)">
                  <div className="grid w-full h-full">
                    <NextImage
                      src="https://discord.com/assets/1aba1e971aefb18a265e.png"
                      alt=" "
                      width={32}
                      height={32}
                      className="block w-full h-full object-cover pointer-events-none before:contents-[''] before:block before:w-full before:h-full before:bg-modifier-accent"
                      style={{ gridArea: "1/1" }}
                    />
                  </div>
                </foreignObject>
                <svg x="14.5" y="17" width="25" height="15" viewBox="0 0 25 15">
                  <mask id=":r1:">
                    <rect x="7.5" y="5" width="10" height="10" rx="5" ry="5" fill="white"></rect>
                    <rect x="6.25" y="3.75" width="7.5" height="7.5" rx="3.75" ry="3.75" fill="black"></rect>
                    <polygon
                      points="-2.16506,-2.5 2.16506,0 -2.16506,2.5"
                      fill="black"
                      transform="scale(0) translate(13.125 10)"
                      style={{ transformOrigin: "13.125px 10px" }}
                    ></polygon>
                    <circle fill="black" cx="12.5" cy="10" r="0"></circle>
                  </mask>
                  <rect fill="#f0b232" width="25" height="15" mask="url(#:r1:)"></rect>
                </svg>
                <rect
                  x="22"
                  y="22"
                  width="10"
                  height="10"
                  fill="transparent"
                  aria-hidden="true"
                  className="pointer-events-auto"
                ></rect>
              </svg>
            </div>
            <div className="min-w-0 grow mr-1 py-1 pl-2 cursor-pointer select-text">
              <div className="max-w-[76px]">
                <div className="text-header-primary text-sm font-normal leading-[18px] whitespace-nowrap text-ellipsis overflow-hidden">
                  Callmejunnn.
                </div>
              </div>
              <div>
                <div className="text-interactive-normal text-xs font-normal leading-4 whitespace-nowrap text-ellipsis overflow-hidden">
                  <div
                    className="relative inline-block w-full box-border align-top text-left cursor-default"
                    style={{ contain: "paint" }}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 bottom-0 block w-full whitespace-nowrap text-ellipsis overflow-hidden pointer-events-none opacity-0"
                      style={{ transformStyle: "preserve-3d", transform: "translate3d(0, 107%, 0)" }}
                    >
                      callmejunnn.
                    </div>
                    <div
                      className="block w-full whitespace-nowrap text-ellipsis overflow-hidden pointer-events-none"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      Online
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-stretch flex-[1_0_auto] flex-nowrap">
            <button
              type="button"
              className="relative flex justify-center items-center w-8 h-8 rounded box-border text-interactive-normal text-sm font-medium leading-[0] cursor-pointer select-none"
            >
              <div>
                <svg
                  aria-hidden="true"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="hsl(359 calc(1 * 87.3%) 59.8% / 1)"
                    d="m2.7 22.7 20-20a1 1 0 0 0-1.4-1.4l-20 20a1 1 0 1 0 1.4 1.4ZM10.8 17.32c-.21.21-.1.58.2.62V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.06A8 8 0 0 0 20 10a1 1 0 0 0-2 0c0 1.45-.52 2.79-1.38 3.83l-.02.02A5.99 5.99 0 0 1 12.32 16a.52.52 0 0 0-.34.15l-1.18 1.18ZM15.36 4.52c.15-.15.19-.38.08-.56A4 4 0 0 0 8 6v4c0 .3.03.58.1.86.07.34.49.43.74.18l6.52-6.52ZM5.06 13.98c.16.28.53.31.75.09l.75-.75c.16-.16.19-.4.08-.61A5.97 5.97 0 0 1 6 10a1 1 0 0 0-2 0c0 1.45.39 2.81 1.06 3.98Z"
                    className=""
                  ></path>
                </svg>
              </div>
            </button>
            <button
              type="button"
              className="relative flex justify-center items-center w-8 h-8 rounded box-border text-interactive-normal text-sm font-medium leading-[0] cursor-pointer select-none"
            >
              <div>
                <svg
                  aria-hidden="true"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 3a9 9 0 0 0-8.95 10h1.87a5 5 0 0 1 4.1 2.13l1.37 1.97a3.1 3.1 0 0 1-.17 3.78 2.85 2.85 0 0 1-3.55.74 11 11 0 1 1 10.66 0c-1.27.71-2.73.23-3.55-.74a3.1 3.1 0 0 1-.17-3.78l1.38-1.97a5 5 0 0 1 4.1-2.13h1.86A9 9 0 0 0 12 3Z"
                    className=""
                  ></path>
                </svg>
              </div>
            </button>
            <button
              type="button"
              className="relative flex justify-center items-center w-8 h-8 rounded box-border text-interactive-normal text-sm font-medium leading-[0] cursor-pointer select-none"
            >
              <div>
                <svg
                  aria-hidden="true"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="hsl(215 calc(1 * 8.8%) 73.3% / 1)"
                    fillRule="evenodd"
                    d="M10.56 1.1c-.46.05-.7.53-.64.98.18 1.16-.19 2.2-.98 2.53-.8.33-1.79-.15-2.49-1.1-.27-.36-.78-.52-1.14-.24-.77.59-1.45 1.27-2.04 2.04-.28.36-.12.87.24 1.14.96.7 1.43 1.7 1.1 2.49-.33.8-1.37 1.16-2.53.98-.45-.07-.93.18-.99.64a11.1 11.1 0 0 0 0 2.88c.06.46.54.7.99.64 1.16-.18 2.2.19 2.53.98.33.8-.14 1.79-1.1 2.49-.36.27-.52.78-.24 1.14.59.77 1.27 1.45 2.04 2.04.36.28.87.12 1.14-.24.7-.95 1.7-1.43 2.49-1.1.8.33 1.16 1.37.98 2.53-.07.45.18.93.64.99a11.1 11.1 0 0 0 2.88 0c.46-.06.7-.54.64-.99-.18-1.16.19-2.2.98-2.53.8-.33 1.79.14 2.49 1.1.27.36.78.52 1.14.24.77-.59 1.45-1.27 2.04-2.04.28-.36.12-.87-.24-1.14-.96-.7-1.43-1.7-1.1-2.49.33-.8 1.37-1.16 2.53-.98.45.07.93-.18.99-.64a11.1 11.1 0 0 0 0-2.88c-.06-.46-.54-.7-.99-.64-1.16.18-2.2-.19-2.53-.98-.33-.8.14-1.79 1.1-2.49.36-.27.52-.78.24-1.14a11.07 11.07 0 0 0-2.04-2.04c-.36-.28-.87-.12-1.14.24-.7.96-1.7 1.43-2.49 1.1-.8-.33-1.16-1.37-.98-2.53.07-.45-.18-.93-.64-.99a11.1 11.1 0 0 0-2.88 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                    clipRule="evenodd"
                    className=""
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
