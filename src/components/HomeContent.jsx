import ShortsGrid from "./ShortsGrid";
import VideoGrid from "./VideoGrid";
import SideBar from "./SideBar";

const HomeContent = () => {
  return (
    <>
   <div className="grid grid-cols-12 h-full">
      {/* Sidebar taking 2 columns */}
      <div className=" hidden md:block col-span-1">
        <SideBar />
      </div>
      
      {/* Main content taking 16 columns */}
      <div className="col-span-12   md:col-span-11">
        <VideoGrid />
        <ShortsGrid />
        <VideoGrid />
      </div>
    </div>
    </>
  );
};

export default HomeContent;
