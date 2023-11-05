onload = () =>{
        document.body.classList.remove("container");
        playSound();
};

function playSound() {
        var audio = new Audio("music.mp3");
        audio.volume = 0.4;
        audio.play();
        if (typeof audio.loop == "boolean") {
          audio.loop = true;
        } else {
          audio.addEventListener(
            "ended",
            function () {
              this.currentTime = 0;
              this.play();
            },
            false
          );
        }
      }