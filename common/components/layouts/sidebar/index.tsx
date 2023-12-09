import NavigationTop from "./NavigationTop";
import SidebarDivider from "../../elements/SidebarDivider";
import Navigation from "./Navigation";
import NavigationDown from "./NavigationDown";

const Sidebar = () => {
  return (
    <nav className="relative flex flex-col shrink-0 w-[72px] bg-tertiary overflow-hidden">
      <ul className="relative flex flex-col h-full">
        <div className="absolute top-0 left-0 right-0 z-10 w-[72px] h-10 pt-2 pointer-events-none box-border overflow-hidden">
          <div className="relative flex justify-center items-center -translate-y-[180%] h-6 bg-accent rounded-xl shadow-modifier opacity-90 text-white-500 text-xs font-semibold leading-4 uppercase cursor-pointer pointer-events-auto before:contents-[''] before:absolute before:-top-2 before:-left-2 before:-right-2 before:bottom-0">
            <span className="block">new</span>
          </div>
        </div>
        <div
          className="relative flex-auto min-h-0 pt-3 pr-0 box-border overflow-x-hidden overflow-y-auto select-none"
          style={{ scrollbarWidth: "none" }}
        >
          <NavigationTop />
          <SidebarDivider />
          <Navigation />
          <SidebarDivider />
          <NavigationDown />
        </div>
        <div className="absolute left-0 right-0 bottom-0 z-10 w-[72px] h-10 p-2 box-border pointer-events-none overflow-hidden">
          <div className="relative flex justify-center items-center h-6 translate-y-0 bg-status-danger shadow-modifier rounded-xl opacity-90 pointer-events-auto text-white-500 text-xs font-semibold leading-4 uppercase before:contents-[''] before:absolute before:top-0 before:-left-2 before:-right-2 before:-bottom-2">
            <span className="block">new</span>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Sidebar;
