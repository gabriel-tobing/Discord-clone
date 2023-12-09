import NextImage from "next/image";

//* Speaker Icon muncul ketika ada yang menggunakan channel type suara atau radio

const ServerList = () => {
  return (
    <div aria-label="Servers">
      <div className="relative flex justify-center w-[72px] mb-2">
        <div
          className="absolute top-0 left-0 flex justify-start items-center w-2 h-12 overflow-hidden"
          style={{ contain: "layout size" }}
        >
          <span className="absolute block w-2 h-2 -ml-1 bg-header-primary rounded-tr rounded-br transform-none opacity-100"></span>
        </div>
        <div>
          <div>
            <div className="relative w-12 h-12 box-border cursor-pointer">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className="absolute top-0 left-0 w-12 h-12 box-border"
                overflow="visible"
                style={{ contain: "paint" }}
              >
                <defs>
                  <path
                    d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z"
                    id="2aef2658-fd5c-4a18-be1b-081318afa0f8-blob_mask"
                  ></path>
                  <rect
                    id="2aef2658-fd5c-4a18-be1b-081318afa0f8-upper_badge_masks"
                    x="28"
                    y="-4"
                    width="24"
                    height="24"
                    rx="12"
                    ry="12"
                    transform="translate(20 -20)"
                  ></rect>
                  <rect
                    id="2aef2658-fd5c-4a18-be1b-081318afa0f8-lower_badge_masks"
                    x="28"
                    y="28"
                    width="24"
                    height="24"
                    rx="12"
                    ry="12"
                    transform="translate(0 0)"
                  ></rect>
                </defs>
                <mask id="2aef2658-fd5c-4a18-be1b-081318afa0f8" fill="black" x="0" y="0" width="48" height="48">
                  <use href="#2aef2658-fd5c-4a18-be1b-081318afa0f8-blob_mask" fill="white" className=""></use>
                  <use href="#2aef2658-fd5c-4a18-be1b-081318afa0f8-upper_badge_masks" fill="black"></use>
                  <use href="#2aef2658-fd5c-4a18-be1b-081318afa0f8-lower_badge_masks" fill="black"></use>
                </mask>
                <mask id="2aef2658-fd5c-4a18-be1b-081318afa0f8-stroke_mask">
                  <rect width="150%" height="150%" x="-25%" y="-25%" fill="white"></rect>
                  <use href="#2aef2658-fd5c-4a18-be1b-081318afa0f8-upper_badge_masks" fill="black"></use>
                  <use href="#2aef2658-fd5c-4a18-be1b-081318afa0f8-lower_badge_masks" fill="black"></use>
                </mask>
                <foreignObject mask="url(#2aef2658-fd5c-4a18-be1b-081318afa0f8)" x="0" y="0" width="48" height="48">
                  <div
                    className="flex justify-center items-center w-12 h-12"
                    role="treeitem"
                    data-list-item-id="guildsnav___705970542250950696"
                    tabIndex={-1}
                    aria-label=" 4 mentions, Progate Indonesia"
                  >
                    <NextImage
                      className="block w-12 h-12 object-cover pointer-events-none"
                      src="https://cdn.discordapp.com/icons/705970542250950696/b41ff8f90188d7c8b57fc578a95b49a5.webp?size=96"
                      alt=" "
                      width={48}
                      height={48}
                      aria-hidden="true"
                      priority
                    />
                  </div>
                </foreignObject>
              </svg>
              <div className="absolute right-0 bottom-0 z-[2] translate-x-0 translate-y-0 pointer-events-none">
                <div className="flex justify-center items-center w-4 h-4 min-w-[16px] min-h-[16px] pr-[1px] bg-status-danger rounded-lg box-border text-white-500 text-xs font-bold text-center leading-4 uppercase tracking-[0.02em]">
                  4
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute -top-4 left-0 right-0 -bottom-1 flex flex-col items-stretch pointer-events-none"
          aria-hidden="true"
        >
          <div className="flex-[1_0_50%]"></div>
          <div className="flex-[1_0_50%]"></div>
        </div>
      </div>
      <div className="relative w-[72px] flex justify-center mb-2">
        <div
          className="absolute top-0 left-0 flex justify-start items-center w-2 h-12 overflow-hidden"
          style={{ contain: "layout size" }}
        >
          <span className="absolute block w-2 h-2 -ml-1 bg-header-primary rounded-tr rounded-br transform-none opacity-100"></span>
        </div>
        <div>
          <div>
            <div className="relative w-12 h-12 box-border cursor-pointer">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className="absolute top-0 left-0 w-12 h-12 box-border"
                overflow="visible"
                style={{ contain: "paint" }}
              >
                <defs>
                  <path
                    d="M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z"
                    id="8af333ae-b059-4a6e-8a09-622b2ed0588e-blob_mask"
                  ></path>
                  <rect
                    id="8af333ae-b059-4a6e-8a09-622b2ed0588e-upper_badge_masks"
                    x="28"
                    y="-4"
                    width="24"
                    height="24"
                    rx="12"
                    ry="12"
                    transform="translate(0 0)"
                  ></rect>
                  <rect
                    id="8af333ae-b059-4a6e-8a09-622b2ed0588e-lower_badge_masks"
                    x="22"
                    y="28"
                    width="30"
                    height="24"
                    rx="12"
                    ry="12"
                    transform="translate(0 0)"
                  ></rect>
                </defs>
                <mask id="8af333ae-b059-4a6e-8a09-622b2ed0588e" fill="black" x="0" y="0" width="48" height="48">
                  <use href="#8af333ae-b059-4a6e-8a09-622b2ed0588e-blob_mask" fill="white" className=""></use>
                  <use href="#8af333ae-b059-4a6e-8a09-622b2ed0588e-upper_badge_masks" fill="black"></use>
                  <use href="#8af333ae-b059-4a6e-8a09-622b2ed0588e-lower_badge_masks" fill="black"></use>
                </mask>
                <mask id="8af333ae-b059-4a6e-8a09-622b2ed0588e-stroke_mask">
                  <rect width="150%" height="150%" x="-25%" y="-25%" fill="white"></rect>
                  <use href="#8af333ae-b059-4a6e-8a09-622b2ed0588e-upper_badge_masks" fill="black"></use>
                  <use href="#8af333ae-b059-4a6e-8a09-622b2ed0588e-lower_badge_masks" fill="black"></use>
                </mask>
                <foreignObject mask="url(#8af333ae-b059-4a6e-8a09-622b2ed0588e)" x="0" y="0" width="48" height="48">
                  <div
                    className="flex justify-center items-center w-12 h-12"
                    role="treeitem"
                    data-list-item-id="guildsnav___887712251887382578"
                    tabIndex={-1}
                    aria-label=" 64 mentions, Cuy Universe"
                  >
                    <NextImage
                      className="block w-12 h-12 object-cover pointer-events-none"
                      src="https://cdn.discordapp.com/icons/887712251887382578/c788e1a3d97f85ad86261e9e8fc6b8f3.webp?size=96"
                      alt=" "
                      width={48}
                      height={48}
                      aria-hidden="true"
                      priority
                    />
                  </div>
                </foreignObject>
              </svg>
              <div className="absolute right-0 bottom-0 z-[2] translate-x-0 translate-y-0 opacity-100 pointer-events-none">
                <div className="flex justify-center items-center w-[22px] h-4 min-w-[16px] min-h-[16px] bg-status-danger rounded-lg text-white-500 text-xs font-bold text-center leading-4 uppercase tracking-[0.02em]">
                  64
                </div>
              </div>
              <div className="absolute top-0 right-0 translate-x-0 translate-y-0 opacity-100 pointer-events-none">
                <div className="flex justify-center items-center w-4 h-4 min-w-[16px] min-h-[16px] bg-accent rounded-lg box-border text-white-500 text-xs font-bold text-center leading-4 uppercase tracking-[0.02em]">
                  <svg
                    className="w-full h-full p-0.5"
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
                      d="M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z"
                      className=""
                    ></path>
                    <path
                      fill="currentColor"
                      d="M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z"
                      className=""
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -top-4 left-0 right-0 -bottom-1 flex flex-col items-stretch pointer-events-none">
          <div className="flex-[1_0_50%]"></div>
          <div className="flex-[1_0_50%]"></div>
        </div>
      </div>
    </div>
  );
};

export default ServerList;
