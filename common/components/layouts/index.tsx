import { ReactNode } from "react";

import Sidebar from "./sidebar";

interface LayoutsProps {
  children: ReactNode;
}

const Layouts = ({ children }: LayoutsProps) => {
  return (
    <div
      className="absolute flex flex-col w-full h-full bg-tertiary overflow-hidden"
      style={{ textRendering: "optimizeLegibility" }}
    >
      <div className="flex flex-auto min-h-0">
        <div className="flex-1 min-w-0">
          <div className="relative z-auto h-full">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col bg-tertiary">
              <div className="relative flex flex-col flex-auto min-w-0 min-h-0 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col bg-transparent overflow-hidden">
                  <div className="relative flex w-full h-full overflow-hidden">
                    <Sidebar />
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layouts;
