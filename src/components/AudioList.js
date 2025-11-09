"use client";

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
  handleSongSelect,
}) {
  return (
    <div className="table-row">
      <div
        className="table-cell rounded-md  hover:bg-sky-800 hover:cursor-pointer"
        title={`click to play ${title}`}
        onClick={() => handleSongSelect(index, src, title)}
      >
        <span className="font-bold text-xl">{title}</span>
      </div>
      <div
        className="table-cell"
        title={lyricVideo && `click to open ${title} lyric video on YouTube`}
      >
        {lyricVideo && (
          <Link
            href={lyricVideo}
            target="_blank"
            className="font-bold text-xl hover:bg-sky-800 hover:cursor-pointer rounded-md p-2"
          >
            Watch Lyric Video on YouTube
          </Link>
        )}
      </div>
      <div className="table-cell">{genre}</div>
      <div className="table-cell">{description}</div>
      <div className="hidden ml-2 flex-wrap gap-2.5 mt-2 rounded-r-md">
        {tags.map((item) => (
          <span className="tag-dark" key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export { AudioList };
