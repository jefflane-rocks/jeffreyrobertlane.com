"use client";

function AudioList({
  src,
  title,
  artist,
  genre,
  description,
  tags,
  youTubeTitle,
  youTubeLink,
  handleSongSelect,
}) {
  return (
    <div
      className="table-row hover:bg-sky-800 hover:cursor-pointer"
      title={`click to play ${title}`}
      onClick={() => handleSongSelect(src, title)}
    >
      <div className="table-cell rounded-l-md">
        <span className="font-bold text-xl">{title}</span> by {artist} - {genre}
      </div>
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
