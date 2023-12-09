const NavigationDown = () => {
  return (
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
                  id="e1353162-91dc-4429-ac87-3d314793d26d-blob_mask"
                ></path>
              </defs>
              <mask id="e1353162-91dc-4429-ac87-3d314793d26d" fill="black" x="0" y="0" width="48" height="48">
                <use href="#e1353162-91dc-4429-ac87-3d314793d26d-blob_mask" fill="white" className=""></use>
              </mask>
              <foreignObject x="0" y="0" width="48" height="48" mask="url(#e1353162-91dc-4429-ac87-3d314793d26d)">
                <div
                  className="flex justify-center items-center w-12 h-12 bg-primary box-border text-green-360"
                  aria-label="Download Apps"
                  role="treeitem"
                  data-list-item-id="guildsnav___app-download-button"
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
                      d="M12 2a1 1 0 0 1 1 1v10.59l3.3-3.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42l3.3 3.3V3a1 1 0 0 1 1-1ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z"
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
  );
};

export default NavigationDown;
