const NavigationAction = () => {
  return (
    <>
      <div className="relative">
        <div className="relative w-[72px] flex justify-center mb-2">
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
                    id="b7d9cd21-14cc-414e-9f99-28934364ea13-blob_mask"
                  ></path>
                </defs>
                <mask id="b7d9cd21-14cc-414e-9f99-28934364ea13" fill="black" x="0" y="0" width="48" height="48">
                  <use href="#b7d9cd21-14cc-414e-9f99-28934364ea13-blob_mask" fill="white" className=""></use>
                </mask>
                <foreignObject x="0" y="0" width="48" height="48" mask="url(#b7d9cd21-14cc-414e-9f99-28934364ea13)">
                  <div
                    className="flex justify-center items-center w-12 h-12 bg-primary box-border text-green-360"
                    aria-label="Add a Server"
                    role="treeitem"
                    data-list-item-id="guildsnav___create-join-button"
                    tabIndex={-1}
                  >
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
                      <path
                        fill="currentColor"
                        d="M13 5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5Z"
                        className=""
                      ></path>
                    </svg>
                  </div>
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute -top-4 left-0 right-0 -bottom-1 flex flex-col items-stretch pointer-events-none">
          <div className="flex-[1_0_50%]"></div>
        </div>
      </div>
      <div className="relative">
        <div className="relative w-[72px] flex justify-center mb-2">
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
                    id="3491beba-a95c-4b96-8883-9e2fa0600d6e-blob_mask"
                  ></path>
                </defs>
                <mask id="3491beba-a95c-4b96-8883-9e2fa0600d6e" fill="black" x="0" y="0" width="48" height="48">
                  <use href="#3491beba-a95c-4b96-8883-9e2fa0600d6e-blob_mask" fill="white" className=""></use>
                </mask>
                <foreignObject x="0" y="0" width="48" height="48" mask="url(#3491beba-a95c-4b96-8883-9e2fa0600d6e)">
                  <div
                    className="flex justify-center items-center w-12 h-12 bg-primary box-border text-green-360"
                    aria-label="Explore Discoverable Servers"
                    role="treeitem"
                    data-list-item-id="guildsnav___guild-discover-button"
                    tabIndex={-1}
                  >
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
                      <path fill="currentColor" d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" className=""></path>
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM7.74 9.3A2 2 0 0 1 9.3 7.75l7.22-1.45a1 1 0 0 1 1.18 1.18l-1.45 7.22a2 2 0 0 1-1.57 1.57l-7.22 1.45a1 1 0 0 1-1.18-1.18L7.74 9.3Z"
                        clip-rule="evenodd"
                        className=""
                      ></path>
                    </svg>
                  </div>
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute -top-4 left-0 right-0 -bottom-1 flex flex-col items-stretch pointer-events-none">
          <div className="flex-[1_0_50%]"></div>
        </div>
      </div>
    </>
  );
};

export default NavigationAction;
