import React from "react";
import { useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { useGetSongsByGenreQuery } from "../redux/services/shazamCore";

const TopCharts = () => {
  const { data, isFetching, error } = useGetSongsByGenreQuery(
    "genre-global-chart-12"
  );
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  if (isFetching) return <Loader title="Loading Top Charts" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col  sm:ml-[200px] w-screen overflow-auto">
      <h2 className="font-bold text-3xl text-white text-center mt-10 mb-4">
        WorldWide Hits
      </h2>

      <div className="flex flex-wrap w-full self-center 2xl:justify-start justify-center gap-1 ">
        {data?.tracks.map((song, i) => (
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

export default TopCharts;
