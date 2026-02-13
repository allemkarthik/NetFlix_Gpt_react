import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%]  md:px-24 absolute text-white bg-gradient-to-r from-black ">
      <div className="my-12 md:m-0">
        <h1 className="text  md:text-3xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-4  w-1/4">{overview}</p>
        <div className="md:m-0 p-0">
          <button className="bg-white text-black py-1 md:py-4 px-3 md:px-8 md:text-xl  rounded-lg hover:bg-white/80">
            ▶Play
          </button>
          <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-8 text-xl bg-gray/80 rounded-lg">
            ℹ️More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
