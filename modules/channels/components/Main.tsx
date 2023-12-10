import Link from "next/link";
import NextImage from "next/image";

const Main = () => {
  return (
    <main className="flex flex-col w-full bg-primary overflow-hidden">
      <section className="relative z-[2] flex flex-col justify-center flex-[0_0_auto] w-full min-w-0 min-h-[48px] p-2 bg-primary box-border text-normal text-base leading-5 cursor-default">
        <div className="flex flex-1 box-border">
          <div className="relative flex items-center flex-auto min-w-0 box-border overflow-hidden after:contents-[''] after:absolute after:top-0 after:right-0 after:w-2 after:h-full after:bg-header-bar">
            <div className="relative flex-[0_0_auto] w-auto h-6 mx-2 box-border">
              <svg
                x="0"
                y="0"
                className="block w-6 h-6 box-border text-channel-icon"
                aria-hidden="true"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
            <div className="flex-[0_0_auto] min-w-[auto] mr-2 box-border">
              <h1 className="flex justify-start items-center box-border text-header-primary text-base font-semibold leading-5 whitespace-nowrap overflow-hidden">
                Friends
              </h1>
            </div>
            <div className="flex-[0_0_auto] w-[1px] h-6 mx-2 bg-modifier-accent box-border"></div>
            <div className="flex box-border">
              <div className="relative flex justify-center items-center shrink-0 min-w-[40px] mx-2 py-0.5 px-2 rounded box-border text-interactive-normal text-base font-medium text-center leading-5 whitespace-nowrap text-ellipsis overflow-hidden cursor-pointer">
                Online
              </div>
              <div className="relative flex justify-center items-center shrink-0 min-w-[40px] mx-2 py-0.5 px-2 rounded box-border text-interactive-normal text-base font-medium text-center leading-5 whitespace-nowrap text-ellipsis overflow-hidden cursor-pointer">
                All
              </div>
              <div className="relative flex justify-center items-center shrink-0 min-w-[40px] mx-2 py-0.5 px-2 rounded box-border text-interactive-normal text-base font-medium text-center leading-5 whitespace-nowrap text-ellipsis overflow-hidden cursor-pointer">
                Pending
              </div>
              <div className="relative flex justify-center items-center shrink-0 min-w-[40px] mx-2 py-0.5 px-2 rounded box-border text-interactive-normal text-base font-medium text-center leading-5 whitespace-nowrap text-ellipsis overflow-hidden cursor-pointer">
                Blocked
              </div>
              <div className="relative flex justify-center items-center shrink-0 min-w-[40px] mx-2 py-0.5 px-2 bg-transparent rounded box-border text-positive text-base font-medium text-center leading-5 whitespace-nowrap text-ellipsis overflow-hidden cursor-default">
                Add Friend
              </div>
            </div>
          </div>
          <div className="flex items-center flex-[0_0_auto] min-w-0 box-border">
            <div className="flex box-border leading-5 cursor-default">
              <div className="relative flex-[0_0_auto] w-auto h-6 mx-2 box-border cursor-pointer">
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
                    d="M19 14a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z"
                    fill="currentColor"
                    className=""
                  ></path>
                  <path
                    d="M20.76 12.57c.4.3 1.23.13 1.24-.37V12a10 10 0 1 0-18.44 5.36c.12.19.1.44-.04.61l-2.07 2.37A1 1 0 0 0 2.2 22h10c.5-.01.67-.84.37-1.24A3 3 0 0 1 15 16h.5a.5.5 0 0 0 .5-.5V15a3 3 0 0 1 4.76-2.43Z"
                    fill="currentColor"
                    className=""
                  ></path>
                </svg>
              </div>
              <div className="flex-[0_0_auto] w-[1px] h-6 mx-2 bg-modifier-accent box-border"></div>
            </div>
            <div className="relative box-border">
              <div className="relative w-auto h-6 mx-2 box-border cursor-pointer">
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
            <Link href={"/"} className="box-borders text-link">
              <div className="relative w-auto h-6 mx-2 box-border cursor-pointer">
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
      <div className="relative flex h-full overflow-hidden before:contents-[''] before:absolute before:-top-[1px] before:left-0 before:right-0 before:z-[1] before:block before:h-[1px] before:shadow-elevation-low before:pointer-events-none">
        <div className="flex flex-col flex-auto overflow-hidden">
          <header className="shrink-0 py-5 px-[30px] border-b border-modifier-accent">
            <h2 className="mb-2 text-header-primary text-base font-semibold leading-5 uppercase cursor-default">
              Add Friend
            </h2>
            <form autoComplete="off">
              <div className="text-interactive-normal text-sm font-normal leading-5 cursor-default">
                You can add friends with their Discord username.
              </div>
              <div className="relative flex items-center mt-4 px-3 border border-input-border bg-tertiary rounded-lg">
                <div className="z-[1] flex flex-col flex-auto mr-4 py-1 border-none bg-transparent box-border text-normal text-base font-medium leading-5 tracking-[0.04em] whitespace-pre">
                  <input
                    type="text"
                    placeholder="You can add friends with their Discord username."
                    className="w-full h-10 p-0 border-none bg-[initial] rounded-[3px] box-border text-normal text-base font-medium leading-5 tracking-[0.04em] whitespace-pre placeholder:text-input-placeholder placeholder:text-base placeholder:font-normal placeholder:leading-5 placeholder:tracking-[0.04em] placeholder:whitespace-pre"
                  />
                </div>
                <button
                  type="submit"
                  className="relative flex justify-center items-center w-auto h-8 min-w-[60px] min-h-[32px] py-0.5 px-4 bg-brand-experiment rounded-[3px] box-border text-white-500 text-sm font-medium leading-4 opacity-50 cursor-not-allowed select-none"
                >
                  <div className="mx-auto bg-modifier whitespace-nowrap text-ellipsis overflow-hidden">
                    Send Friend Request
                  </div>
                </button>
              </div>
            </form>
          </header>
          <div className="relative flex-auto">
            <div className="flex justify-center items-center opacity-100">
              <div className="flex flex-col justify-center items-center flex-auto flex-nowrap w-full h-full max-w-[440px] mx-auto">
                <div className="flex-[0_1_auto] w-[376px] h-[162px] mb-10">
                  <NextImage src="/assets/friends.svg" alt="" width={376} height={162} className="object-cover" />
                </div>
                <div className="flex-[0_1_auto]">
                  <div className="mt-2 text-muted text-base text-center leading-5">
                    Wumpus is waiting on friends. You don't have to though!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[0_1_30%] min-w-[360px] max-w-[420px] bg-secondary">
          <aside className="h-full bg-primary">
            <div className="relative h-full ml-0.5 p-[17px] border-l border-modifier-accent box-border overflow-x-hidden overflow-y-auto">
              <h2 className="mt-2 mb-4 text-header-primary text-xl font-bold leading-6">Active Now</h2>
              <div className="flex flex-col justify-center items-center p-4 bg-primary rounded-lg text-center">
                <h2 className="mb-1 text-header-primary text-base font-semibold leading-5">It's quiet for now...</h2>
                <div className="text-interactive-normal text-sm font-normal leading-[18px]">
                  When a friend starts an activity—like playing a game or hanging out on voice—we'll show it here!
                </div>
              </div>
              <div className="absolute h-4 min-w-[1px] min-h-0 pointer-events-none"></div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Main;
