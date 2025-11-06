function AudioPlayer({
  src,
  title,
  artist,
  genre,
  description,
  tags,
  youTubeTitle,
  youTubeLink,
}) {
  return (
    <div className="grid grid-flow-col-dense grid-cols-5">
      <div className="col-span-1">
        <audio id={`id${src}`}>
          <source src={src} type="audio/mpeg" />
          Your browser does not support the audio element. Bummer.
        </audio>
      </div>
      <div className="col-span-1">{title}</div>
      <div className="col-span-1">{artist}</div>
      <div className="col-span-1">{genre}</div>
      <div className="col-span-1">{description}</div>
    </div>
  );
}

export { AudioPlayer };
