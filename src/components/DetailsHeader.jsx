import React from "react";
import { Link } from "react-router-dom";

const DetailsHeader = ({ data }) => {
  return (
    <div className="relative  w-full flex flex-col ">
      <div className=" flex items-center my-10">
        <img
          alt="profile"
          src={data?.images?.coverart}
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
        />

        <div className=" ml-2 sm:ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">
            {data?.title}
          </p>

          <Link to={`/artists/${data?.subtitle.split(" ").slice(0, 1)}`}>
            <p className="text-base text-gray-400 mt-1">{data?.subtitle}</p>
          </Link>

          {data?.sections[0]?.metadata[2] && (
            <p className="text-base text-gray-400 mt-1">
              {data?.sections[0]?.metadata[2]?.title}
              <span>: {data?.sections[0]?.metadata[2]?.text} </span>
            </p>
          )}

          {data?.sections[0]?.metadata[0] && (
            <p className="text-base text-gray-400 mt-1 hidden sm:flex">
              {data?.sections[0]?.metadata[0]?.title}
              <span> : {data?.sections[0]?.metadata[0]?.text} </span>
            </p>
          )}
          <p className="text-base text-gray-400 mt-1">
            {data?.genres?.primary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;

{
  /** <div
            className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
              activeSong?.title === songData.title
                ? "flex bg-black bg-opacity-70"
                : "hidden"
            }`}>
            <PlayPause
              isPlaying={isPlaying}
              activeSong={activeSong}
              song={songData}
              handlePause={handlePauseClick}
              handlePlay={handlePlayClick}
            />
          </div> */
}
