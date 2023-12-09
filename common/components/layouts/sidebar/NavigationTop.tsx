const NavigationTop = () => {
  return (
    <div className="relative">
      <div className="relative flex justify-center w-[72px] mb-2">
        <div
          className="absolute top-0 left-0 flex justify-start items-center w-2 h-12 overflow-hidden"
          style={{ contain: "layout size" }}
        >
          <span className="absolute w-2 h-10 block -ml-1 bg-header-primary rounded-tr rounded-br opacity-100 transform-none"></span>
        </div>
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
                  id="ce0ecd7e-c1ae-4e71-9c34-722a11d9c403-blob_mask"
                ></path>
              </defs>
              <mask id="ce0ecd7e-c1ae-4e71-9c34-722a11d9c403" fill="black" x="0" y="0" width="48" height="48">
                <use href="#ce0ecd7e-c1ae-4e71-9c34-722a11d9c403-blob_mask" fill="white" className=""></use>
              </mask>
              <foreignObject mask="url(#ce0ecd7e-c1ae-4e71-9c34-722a11d9c403)" x="0" y="0" width="48" height="48">
                <div
                  className="flex justify-center items-center w-12 h-12"
                  role="treeitem"
                  data-list-item-id="guildsnav___home"
                  tabIndex={-1}
                  aria-label="Direct Messages"
                >
                  <div className="w-12 h-12 flex justify-center items-center bg-brand-experiment text-white-500">
                    <svg
                      aria-hidden="true"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19.73 4.87a18.2 18.2 0 0 0-4.6-1.44c-.21.4-.4.8-.58 1.21-1.69-.25-3.4-.25-5.1 0-.18-.41-.37-.82-.59-1.2-1.6.27-3.14.75-4.6 1.43A19.04 19.04 0 0 0 .96 17.7a18.43 18.43 0 0 0 5.63 2.87c.46-.62.86-1.28 1.2-1.98-.65-.25-1.29-.55-1.9-.92.17-.12.32-.24.47-.37 3.58 1.7 7.7 1.7 11.28 0l.46.37c-.6.36-1.25.67-1.9.92.35.7.75 1.35 1.2 1.98 2.03-.63 3.94-1.6 5.64-2.87.47-4.87-.78-9.09-3.3-12.83ZM8.3 15.12c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.89 2.27-2 2.27Zm7.4 0c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.88 2.27-2 2.27Z"
                        className=""
                      ></path>
                    </svg>
                  </div>
                </div>
              </foreignObject>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationTop;
