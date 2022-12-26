import React from "react";

import SongBar from "./SongBar";

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => 

  data?.tracks && (
    <div className=" flex flex-col ">
      <h1 className="font-bold text-3xl text-white ml-2"> Related Songs:</h1>
    
      <div className="mt-6 w-full flex flex-col">
        {data.tracks.map((song, i) => (
          <SongBar
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        ))}
      </div>
    </div>
  );
;

export default RelatedSongs;
