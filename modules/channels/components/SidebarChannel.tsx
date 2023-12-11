import Link from "next/link";
import NextImage from "next/image";

//* Tipe Channel = Announcements, Stage, Text, Forum, Voice
//TODO: Jika Channel list di scroll maka background image akan mengecil sesuai dengan scroll

const SidebarChannel = () => {
  return (
    <div className="flex flex-col flex-[0_0_auto] w-60 min-h-0 bg-secondary overflow-hidden">
      <nav className="relative flex flex-col flex-1 bg-secondary box-border overflow-hidden select-none">
        <div className="relative cursor-pointer">
          <header className="relative z-[3] py-3 px-4 bg-transparent shadow-elevation-low box-border font-medium">
            <div
              className="flex items-center h-6 text-white-500"
              style={{ filter: "drop-shadow(0 1px 1px hsl(0 calc(1 * 0%) 0% / 0.8))" }}
            >
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
                        fill="rgba(192, 123, 226, 1)"
                        fillRule="evenodd"
                        d="m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                      ></path>
                    </svg>
                    <div className="absolute -top-[0.05px] left-[0.05px] right-0 bottom-0 flex justify-center items-center pointer-events-none">
                      <svg
                        className="w-3 h-3"
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
              <div className="z-[1] flex items-center flex-1 min-w-0 text-base font-semibold leading-5 whitespace-nowrap text-ellipsis overflow-hidden">
                WPU
              </div>
              <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none"></div>
              <div className="relative z-[4]">
                <div>
                  <svg width="18" height="18" className="button__07e07 dropdownButton__3f3df">
                    <g fill="none" fillRule="evenodd">
                      <path d="M0 0h18v18H0"></path>
                      <path stroke="currentColor" d="M4.5 4.5l9 9" strokeLinecap="round"></path>
                      <path stroke="currentColor" d="M13.5 4.5l-9 9" strokeLinecap="round"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </header>
          <div className="absolute top-0 left-0 w-full h-[135px] bg-modifier-accent shadow-elevation-low translate-y-0 opacity-100 overflow-hidden hidden">
            <div className="absolute top-0 left-0 w-[240px] h-[135px] translate-y-0 scale-100 before:contents-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[58px] before:bg-banner">
              <NextImage
                src="https://cdn.discordapp.com/banners/722002048643497994/a4fc972032f96e2829f6dd2904a87ee5.webp?size=240"
                alt=""
                width={240}
                height={135}
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <span
          className="absolute w-[1px] h-[1px] whitespace-nowrap overflow-hidden"
          style={{ clip: "rect(0 0 0 0)", clipPath: "inset(50%)" }}
        ></span>
        <div className="relative">
          <div className="absolute top-0 z-[2] flex justify-center w-full pb-4 bg-none overflow-hidden pointer-events-none">
            <div className="-mx-2 -mb-2 px-2 pb-2 -translate-y-[180%] pointer-events-auto">
              <div className="relative flex items-center w-20 h-4 my-1 py-1 px-2 bg-floating rounded-[20px] shadow-elevation-high opacity-95 cursor-pointer"></div>
            </div>
          </div>
        </div>
        <div className="relative z-[1] flex-auto min-h-0 pr-0 box-border overflow-x-hidden overflow-y-auto">
          <ul className="relative h-[4131px]">
            <div className="h-[84px] hidden"></div>
            <div className="h-3"></div>
            <div className="relative flex flex-col mb-3 pt-1.5 pl-2 pb-[7px] cursor-pointer after:contents-[''] after:absolute after:left-2 after:right-0 after:bottom-0 after:border-b after:border-modifier-accent after:cursor-pointer">
              <div className="flex justify-between items-center h-6 mx-2">
                <div className="flex">
                  <div className="text-white-500 text-xs font-bold leading-4 uppercase">Lvl 3</div>
                </div>
                <div className="flex items-center">
                  <div className="text-interactive-normal text-xs font-normal leading-4">
                    <strong>33</strong> Boosts
                  </div>
                  <svg
                    className="text-interactive-normal"
                    aria-hidden="true"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M9.3 5.3a1 1 0 0 0 0 1.4l5.29 5.3-5.3 5.3a1 1 0 1 0 1.42 1.4l6-6a1 1 0 0 0 0-1.4l-6-6a1 1 0 0 0-1.42 0Z"
                      className=""
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="relative w-progress-bar h-1 my-2 mr-auto ml-2 bg-floating rounded-[2px]">
                <div className="absolute z-[2] w-full h-1 bg-progress-bar rounded-[2px]"></div>
                <span
                  className="absolute z-[2] right-0 text-[10px]"
                  style={{ transform: "translate(calc(100% - 5px), -5px)" }}
                >
                  🎉
                </span>
              </div>
            </div>
            <li className="relative ml-2 py-[1px] overflow-visible">
              <div className="relative flex flex-col py-1.5 px-2 rounded box-border cursor-pointer before:contents-[''] before:absolute before:-top-[1px] before:left-0 before:right-0 before:-bottom-[1px] before:block before:cursor-pointer">
                <div className="flex">
                  <div className="relative mr-1.5">
                    <svg
                      className="block flex-[0_0_auto] w-5 h-5 text-channel-icon"
                      aria-hidden="true"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18.5 23c.88 0 1.7-.25 2.4-.69l1.4 1.4a1 1 0 0 0 1.4-1.42l-1.39-1.4A4.5 4.5 0 1 0 18.5 23Zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                        clipRule="evenodd"
                        fill="currentColor"
                        className=""
                      ></path>
                      <path
                        d="M3 3a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2H3ZM2 8a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 11a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2H3ZM2 16a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 19a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H3Z"
                        fill="currentColor"
                        className=""
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-auto text-muted text-base font-medium leading-5 whitespace-nowrap text-ellipsis overflow-hidden">
                    Browse Channels
                  </div>
                </div>
              </div>
            </li>
            <div className="w-full h-[1px] mt-[11px] ml-2 bg-modifier-accent"></div>
            <li className="relative pt-4">
              <div className="relative flex justify-between items-center h-6 pl-4 pr-2 box-border text-muted cursor-pointer">
                <div className="flex-auto overflow-hidden before:contents-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:block">
                  <svg
                    className="absolute top-1.5 left-0.5 w-3 h-3"
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
                      d="M5.3 9.3a1 1 0 0 1 1.4 0l5.3 5.29 5.3-5.3a1 1 0 1 1 1.4 1.42l-6 6a1 1 0 0 1-1.4 0l-6-6a1 1 0 0 1 0-1.42Z"
                      className=""
                    ></path>
                  </svg>
                  <h3 className="box-border text-muted text-xs font-semibold leading-4 tracking-[0.02em] uppercase whitespace-nowrap text-ellipsis overflow-hidden">
                    <div className="relative whitespace-nowrap text-ellipsis overflow-hidden">
                      Web Programming UNPAS
                    </div>
                  </h3>
                </div>
                <div className="flex-[0_0_auto] hidden"></div>
              </div>
            </li>
            <li className="relative">
              <div className="relative ml-2 py-[1px] overflow-visible">
                <div className="absolute top-1/2 -left-2 w-1 h-2 -mt-1 bg-interactive-active rounded-tr rounded-br"></div>
                <div>
                  <Link
                    href={"/"}
                    className="relative flex flex-col py-1.5 px-2 rounded box-border cursor-pointer before:contents-[''] before:absolute before:-top-[1px] before:left-0 before:right-0 before:-bottom-[1px] before:block before:cursor-pointer"
                  >
                    <div className="relative flex justify-center items-center">
                      <div className="relative mr-1.5">
                        <svg
                          className="block flex-[0_0_auto] w-5 h-5 text-channel-icon"
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
                      <div className="relative flex-auto text-white-500 text-base font-medium leading-5 whitespace-nowrap text-ellipsis overflow-hidden">
                        👋🏼selamat-datang
                      </div>
                      <div className="flex justify-center items-center flex-[0_0_auto]">
                        <div className="relative hidden ml-1 leading-[0] cursor-pointer">
                          <svg
                            className="block w-4 h-4"
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z"
                              fill="currentColor"
                              className=""
                            ></path>
                            <path
                              d="M16.83 12.93c.26-.27.26-.75-.08-.92A9.5 9.5 0 0 0 12.47 11h-.94A9.53 9.53 0 0 0 2 20.53c0 .81.66 1.47 1.47 1.47h.22c.24 0 .44-.17.5-.4.29-1.12.84-2.17 1.32-2.91.14-.21.43-.1.4.15l-.26 2.61c-.02.3.2.55.5.55h7.64c.12 0 .17-.31.06-.36C12.82 21.14 12 20.22 12 19a3 3 0 0 1 3-3h.5a.5.5 0 0 0 .5-.5V15c0-.8.31-1.53.83-2.07ZM12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                              fill="currentColor"
                              className=""
                            ></path>
                          </svg>
                        </div>
                        <div className="block ml-3">
                          <div className="relative leading-[0] cursor-pointer pointer-events-none">
                            <div className="flex justify-center items-center w-4 h-4 min-w-[16px] min-h-[16px] pr-[1px] bg-status-danger rounded-lg box-border text-white-500 text-xs font-bold text-center leading-4 uppercase tracking-[0.02em]">
                              1
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="absolute bottom-0 z-[2] flex justify-center w-full pt-4 bg-none overflow-hidden pointer-events-none">
          <div className="-mx-2 -mb-2 px-2 pb-2 translate-y-[180%] pointer-events-auto">
            <div className="relative flex items-center w-20 h-4 my-1 py-1 px-2 bg-floating rounded-[20px] shadow-elevation-high opacity-95 cursor-pointer"></div>
          </div>
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

export default SidebarChannel;
