import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FiSearch } from "react-icons/fi";
import { Error, Loader, SongCard } from "../components";
import { useGetSongsBySearchQuery } from "../redux/services/shazamCore";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);

  const songs = data?.tracks?.hits?.map((song) => song.track);

  if (error) return <Error />;
  return (
    <div className="flex flex-col  sm:ml-[200px] w-screen overflow-auto">
      {/* */}
      <form
        autoComplete="off"
        className="p-2 text-gray-400 focus-within:text-gray-600">
        <label htmlFor="search-field" className="sr-only">
          Search all files
        </label>
        <div className="flex flex-row justify-start items-center">
          <FiSearch className="w-5 h-5 ml-4" />
          <input
            name="search-field"
            id="search-field"
            autoComplete="off"
            className="flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-white p-4"
            placeholder="Search"
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
      {/* */}

      {data && (
        <div className="flex flex-col">
          <h2 className="font-bold text-3xl text-white text-center mt-10 mb-4">
            Showing results for <span className="font-black">{searchTerm}</span>
          </h2>
          <div className="flex flex-wrap w-full self-center 2xl:justify-start justify-center gap-1 ">
            {songs?.map((song, i) => (
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
      )}
    </div>
  );
};

export default Search;
