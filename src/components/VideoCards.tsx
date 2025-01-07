import React from "react";

const VideoCard = (props:any) => {
  return (
    <div className="justify-center xl:col-span-2 mx-5 my-3 sm:mx-1 cursor-pointer">
      {/* Main Image */}
      <img
        src={props.imagelink}
        alt="Flower"
        className="w-full max-w-full rounded-xl mx-auto mb-2 h-48"
      />

      {/* Content Section */}
      <div className="grid grid-cols-12 gap-4 px-4 py-2 pt-0 rounded-lg mx-auto mt-0">
        {/* Profile Image */}
        <div className="col-span-2 flex justify-center mt-1">
          <img
            src={props.imagelink}
            alt="Profile"
            className="rounded-full h-7 w-7 border border-indigo-500"
          />
        </div>

        {/* Text Content */}
        <div className="col-span-9 flex flex-col justify-center">
          <p className="text-white font-medium text-sm md:text-xs">
            {props.title}
          </p>
          <p className="text-gray-400 text-xs md:text-xs">{props.channel}</p>
          <p className="text-gray-400 text-xs md:text-xs">
            {props.views} • {props.timestamp}
          </p>
        </div>

        {/* Dots Menu */}
        <div className="col-span-1 flex justify-center mt-2">
          <div className="space-y-1">
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
