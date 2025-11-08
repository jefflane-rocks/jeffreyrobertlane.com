// JS Calculation

function getDuration(seconds) {
  let duration = Math.trunc(seconds);
  let mins = Math.trunc(duration / 60);
  let secs = duration % 60;
  let leading = "";
  if (secs < 10) {
    leading = "0";
  }
  return mins.toString() + ":" + leading + secs.toString();
}

export { getDuration };
