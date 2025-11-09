"use client";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import WavesurferPlayer from "@wavesurfer/react";
import { useEffect, useRef, useState } from "react";
import { AudioList } from "./AudioList";
import { getDuration } from "@/utilities/calc";

function AudioPlayer({ audioPlayerList }) {
  const [currentSong, setCurrentSong] = useState(audioPlayerList.at(0).src);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentSongTitle, setCurrentSongTitle] = useState(
    audioPlayerList.at(0).title
  );
  const [currentSongDuration, setCurrentSongDuration] = useState();
  const [wavesurfer, setWavesurfer] = useState(null);
  const [onRedrawFired, setOnRedrawFired] = useState(false);
  const [onReadyFired, setOnReadyFired] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [autoPlay, setAutoPlay] = useState(false);

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
    // return () => {
    //   if (wavesurfer) {
    //     console.log("calling wavesurfer.destroy()");
    //     wavesurfer.destroy();
    //   }
    // };
  }, [currentSong]);

  const onReady = (ws) => {
    console.log("onReady fired.");
    setWavesurfer(ws);
    setIsPlaying(false);
    setCurrentSongDuration(getDuration(ws.getDuration()));
    setIsLoading(true);
    setOnReadyFired(true);
    //if (autoPlay) ws.playPause();
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
    if (wavesurfer) {
      wavesurfer.playPause();
      setAutoPlay(true);
    }
  };

  const stop = () => {
    if (wavesurfer) {
      wavesurfer.stop();
      setAutoPlay(false);
    }
  };

  const onFinish = () => {
    console.log(`onFinish is firing. isLoading = ${isLoading}`);
    /* 
        It appears there is an issue in wavesurfer that causes the following error in Safari:
        Unhandled Promise Rejection: AbortError: Fetch is aborted
        [Error] Failed to load resource: The operation couldn’t be completed. (WebKitBlobResource error 1.)

        The autoPlay feature works fantastic in every other browser.  Need to figure out if this feature is ok to omit or if I should be finding a new waveform player.
    */
    // if (wavesurfer && autoPlay && !isLoading) {
    //   if (autoPlay) {
    //     if (currentSongIndex < audioPlayerList.length - 1) {
    //       console.log(`currentSongIndex is ${currentSongIndex}`);
    //       const nextSongIndex = currentSongIndex + 1;
    //       console.log(`nextSongIndex is ${nextSongIndex}`);
    //       setCurrentSongIndex((n) => n + 1);
    //       handleSongSelect(
    //         nextSongIndex,
    //         audioPlayerList.at(nextSongIndex).src,
    //         audioPlayerList.at(nextSongIndex).title
    //       );
    //     }
    //   }
    // }
  };
  function handleSongSelect(index, src, title) {
    console.log(`handleSongSelect src=${src}`);
    setIsLoading(true);
    setCurrentSongIndex(index);
    setCurrentSong(src);
    setCurrentSongTitle(title);
  }
  const wsEmpty = () => {
    wavesurfer && wavesurfer.empty();
  };

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
          {/* &nbsp;
          <button onClick={wsEmpty}>Empty</button>&nbsp;
          <button onClick={stop}>Stop</button> */}
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

      {audioPlayerList.map((item, index) => (
        <AudioList
          key={index}
          index={index}
          title={item.title}
          genre={item.genre}
          artist={item.artist}
          tags={item.tags}
          description={item.description}
          src={item.src}
          lyricVideo={item?.lyricVideo ?? ""}
          handleSongSelect={handleSongSelect}
        />
      ))}
    </div>
  );
}

export default AudioPlayer;
