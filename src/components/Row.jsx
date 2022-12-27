import React from "react";
import { right, left } from "../assets/index";
import { useSelector } from "react-redux";
import { useGetSongsByGenreQuery } from "../redux/services/shazamCore";
import { Error, Loader, SongCard } from "../components";

const Row = ({ i, genre, name }) => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByGenreQuery(genre);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + i);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider" + i);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  if (isFetching) return <Loader title="Loading songs..." />;

  return (
    <div className="relative  flex flex-col  ">
      <div className=" flex justify-between items-center">
        <h2 className="text-white font-bold md:text-xl p-4">{name}</h2>
        <div className="mr-2 -mb-6 hidden sm:flex">
          <button onClick={slideLeft} className="mr-3 cursor-pointer z-10 ">
            <img className="w-4 h-auto" src={left} />
          </button>
          <button onClick={slideRight} className="mr-2 cursor-pointer z-10 ">
            <img className="w-4 h-auto" src={right} />
          </button>
        </div>
      </div>

      <div
        id={"slider" + i}
        className="w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide ">
        {data?.tracks?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
