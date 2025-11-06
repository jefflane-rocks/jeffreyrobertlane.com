function AudioPlayer({
  src,
  title,
  description,
  tags,
  youTubeTitle,
  youTubeLink,
}) {
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
      <div>
        <audio controls>
          <source src={src} type="audio/mpeg" />
          Your browser does not support the audio element. Bummer.
        </audio>
      </div>
    </div>
  );
}

export { AudioPlayer };
