"use client";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import WavesurferPlayer from "@wavesurfer/react";
import { useEffect, useRef, useState } from "react";
import { AudioList } from "./AudioList";
import { getDuration } from "@/utilities/calc";

function AudioPlayer({ audioPlayerList }) {
  const [currentSong, setCurrentSong] = useState(audioPlayerList.at(0).src);
  const [currentSongTitle, setCurrentSongTitle] = useState(
    audioPlayerList.at(0).title
  );
  const [currentSongDuration, setCurrentSongDuration] = useState();
  const [wavesurfer, setWavesurfer] = useState(null);
  const [onRedrawFired, setOnRedrawFired] = useState(false);
  const [onReadyFired, setOnReadyFired] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("top of useEffect", wavesurfer);
    if (wavesurfer) {
      console.log("inside if(wavesurfer) in useEffect");
      setOnReadyFired(false);
      console.log(`useEffect -> onReadyFired = ${onReadyFired}`);
      //   setOnRedrawFired((b) => !b);
      wavesurfer.stop();
      wavesurfer.empty();
      wavesurfer.load(currentSong);
    }
  }, [currentSong]);

  const onReady = (ws) => {
    console.log("onReady fired.");
    setWavesurfer(ws);
    setIsPlaying(false);
    setCurrentSongDuration(getDuration(ws.getDuration()));
    setIsLoading(true);
    setOnReadyFired(true);
  };
  const onRedrawComplete = (event) => {
    console.log(
      `onRedrawComplete fired. onReadyFired=${onReadyFired} onRedrawFired=${onRedrawFired}`
    );
    setIsLoading(false);
  };
  const onRedraw = () => {
    console.log("onRedraw fired.");
    setOnRedrawFired(true);
  };
  const onPlayPause = () => {
    wavesurfer && wavesurfer.playPause();
  };
  const onFinish = () => {
    wavesurfer && wavesurfer.stop();
  };
  function handleSongSelect(src, title) {
    console.log(`handleSongSelect src=${src}`);
    setIsLoading(true);
    setCurrentSong(src);
    setCurrentSongTitle(title);
  }
  return (
    <div className="centered-block">
      <div
        className={`${isLoading ? "" : "hidden"} h-28 flex place-items-center`}
      >
        <p>Loading...</p>
      </div>
      <div className={`${isLoading ? "hidden" : ""} flex`}>
        <div className="inline-block mr-5 place-content-center ">
          <button
            onClick={onPlayPause}
            className="hover:cursor-pointer inline-block align-middle"
          >
            {isPlaying ? (
              <PauseIcon className="h-8 w-8 inline-block align-middle" />
            ) : (
              <PlayIcon className="h-8 w-8 inline-block align-middle" />
            )}
            &nbsp;{currentSongTitle}&nbsp;{currentSongDuration}
          </button>
        </div>
        <div className="inline-block align-middle flex-1">
          <WavesurferPlayer
            height={112}
            waveColor="lightblue"
            onReady={onReady}
            onRedraw={onRedraw}
            onRedrawcomplete={onRedrawComplete}
            onFinish={onFinish}
            url={audioPlayerList.at(0).src}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
        </div>
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
