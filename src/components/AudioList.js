"use client";

import Image from "next/image";
import Link from "next/link";

function AudioList({
  index,
  src,
  title,
  artist,
  genre,
  description,
  tags,
  lyricVideo,
  oneStop,
  handleSongSelect,
}) {
  return (
    <>
      {index == 0 && (
        <div className="table-header-group">
          <div className="table-row lg:text-xl sm:text-base font-bold bg-gray-900">
            <div className="table-cell">
              <span className="w-full">Song</span>
            </div>
            <div className="table-cell text-center">
              <span className=" text-center">Video</span>
            </div>
            <div className="table-cell">Description</div>
          </div>
        </div>
      )}
      <div className="table-row">
        <div
          className="table-cell rounded-md  hover:bg-sky-800 hover:cursor-pointer max-w-50 text-wrap items-center"
          title={`click to play ${title}`}
          onClick={() => handleSongSelect(index, src, title)}
        >
          <span className="font-bold text-base lg:text-xl w-full text-center">
            {title}
          </span>{" "}
          {oneStop ? <sup>1</sup> : ""}
        </div>
        <div
          className="table-cell"
          title={lyricVideo && `click to open ${title} lyric video on YouTube`}
        >
          {lyricVideo && (
            <Link
              href={lyricVideo}
              target="_blank"
              className="font-bold text-base lg:text-xl hover:cursor-pointer rounded-md "
            >
              <Image
                src="/yt_icon_red_digital.png"
                height={40}
                width={46.697674418604651}
                alt="YouTube Logo"
                className="block ml-auto mr-auto"
              />
            </Link>
          )}
        </div>
        <div className="table-cell text-base lg:text-lg">
          {genre} by {artist} - {description}
        </div>
        <div className="hidden ml-2 flex-wrap gap-2.5 mt-2 rounded-r-md">
          {tags.map((item) => (
            <span className="tag-dark" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export { AudioList };
