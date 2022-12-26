import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Error, Loader, RelatedSongs, SongCard } from "../components";
import {
  useGetSongRelatedQuery,
  useGetSongsBySearchQuery,
} from "../redux/services/shazamCore";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const ArtistDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: artistData,
    isFetching: isFetchingSongDetails,
    error,
  } = useGetSongsBySearchQuery(id);
  const { data, isFetching: isFetchinRelatedSongs } = useGetSongRelatedQuery(
    artistData?.tracks?.hits[0]?.track.key
  );

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data: data, i }));
    dispatch(playPause(true));
  };

  if (isFetchingSongDetails)
    return <Loader title="Loading artist details..." />;
  return (
    <div className="flex flex-col pb-20 sm:ml-[200px] h-screen w-screen overflow-auto">
      <div className="flex flex-wrap w-full self-center 2xl:justify-start justify-center gap-1 my-10">
        {artistData?.tracks?.hits?.map((song, i) => (
          <SongCard
            key={song.track.key}
            song={song.track}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={artistData}
            i={i}
          />
        ))}
      </div>
      {isFetchinRelatedSongs ? (
        <Loader title="Loading Related Songs..." />
      ) : data?.tracks ? (
        <div className=" md:ml-[20px] md:w-[70%] lg:w-[60%] xl:w-[40%] 2xl:w-[30%] self-center  sm:self-start ">
          <RelatedSongs
            data={data}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        </div>
      ) : (
        <div className="text-white md:text-xl text-center my-10">
          {" "}
          No Related Songs Were Found
        </div>
      )}
      {error && <Error />}
    </div>
  );
};

export default ArtistDetails;
