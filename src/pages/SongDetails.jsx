import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from "../redux/services/shazamCore";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data , isFetching: isFetchinRelatedSongs, error,} = useGetSongRelatedQuery(songid);
  const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery(songid);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data:data, i }));
    dispatch(playPause(true));
  };

  if (isFetchingSongDetails) return <Loader title="Searching song details" />;
  if (isFetchinRelatedSongs) return <Loader title="Searching song details" />;
  return (
    <div className="flex flex-col overflow-auto w-screen mt-4 ml-2">
      <div className="sm:w-[68%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]  sm:self-end self-center lg:self-center">
        <DetailsHeader data={songData} />
        <div className="mb-10 ml-2">
          <h2 className="text-white text-3xl font-bold ">Lyrics:</h2>

          <div className="mt-5">
            {songData?.sections[1].type === "LYRICS" ? (
              songData?.sections[1]?.text.map((line, i) => (
                <p
                  key={`lyrics-${line}-${i}`}
                  className="text-gray-400 text-base my-1">
                  {line}
                </p>
              ))
            ) : (
              <p className="text-gray-400 text-base my-1">
                Sorry, No lyrics found!
              </p>
            )}
          </div>
        </div>

        <RelatedSongs
          data={data}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      </div>
    </div>
  );
};

export default SongDetails;