"use client";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import WavesurferPlayer from "@wavesurfer/react";
import { useEffect, useRef, useState } from "react";
import { AudioList } from "./AudioList";
import { createKey } from "next/dist/shared/lib/router/router";

function AudioPlayer({ audioPlayerList }) {
  const [currentSong, setCurrentSong] = useState(audioPlayerList.at(0).src);
  const [wavesurfer, setWavesurfer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("top of useEffect", wavesurfer);
    if (wavesurfer) {
      console.log("inside if(wavesurfer) in useEffect");
      wavesurfer.stop();
      wavesurfer.load(currentSong);
    }
  }, [currentSong]);

  const onReady = (ws) => {
    setWavesurfer(ws);
    setIsPlaying(false);
    setIsLoading(false);
  };

  const onPlayPause = () => {
    wavesurfer && wavesurfer.playPause();
  };

  function handleSongSelect(src) {
    console.log(`handleSongSelect src=${src}`);
    setIsLoading(true);
    setCurrentSong(src);
  }
  return (
    <div className="centered-block">
      <div
        className={`${isLoading ? "" : "hidden"} h-28 flex place-items-center`}
      >
        <p>Loading...</p>
      </div>
      <div className={`${isLoading ? "hidden" : ""}`}>
        <button onClick={onPlayPause} className="hover:cursor-pointer">
          {isPlaying ? (
            <PauseIcon className="h-8 w-8" />
          ) : (
            <PlayIcon className="h-8 w-8" />
          )}
        </button>
        <WavesurferPlayer
          height={112}
          waveColor="aliceblue"
          onReady={onReady}
          url={audioPlayerList.at(0).src}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>

      {audioPlayerList.map((item) => (
        <AudioList
          key={item.title}
          title={item.title}
          genre={item.genre}
          artist={item.artist}
          tags={item.tags}
          description={item.description}
          src={item.src}
          handleSongSelect={handleSongSelect}
        />
      ))}
    </div>
  );
}

export default AudioPlayer;
