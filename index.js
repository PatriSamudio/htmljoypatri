document.addEventListener("DOMContentLoaded", function() {
  var gif = document.getElementsByClassName("gif");

  gif.onload = function() {
      // Cuando la imagen se ha cargado completamente
      gif.classList.add("activarAnimacion");
  };
});

function reproducirMusica() {
  var audio = document.getElementById("miAudio");

  if (audio.paused) {
      audio.play();
  } else {
      audio.pause();
      audio.currentTime = 0; // Reiniciar la reproducción al principio
  }

}