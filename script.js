// JS Start

let playing = true;

function pausePlay() {
  if (playing) {
    play.style.display = "none";
    pause.style.display = "block";

    track.play();
    playing = false;
  } else {
    pause.style.display = "none";
    play.style.display = "block";

    track.pause();
    playing = true;
  }
}

play.addEventListener("click", pausePlay);
pause.addEventListener("click", pausePlay);

// JS End - ASH: AlirezaSharifi
