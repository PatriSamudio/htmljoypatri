document.addEventListener("DOMContentLoaded", function() {
  var gif = document.getElementsByClassName("gif");

  gif.onload = function() {
      // Cuando la imagen se ha cargado completamente
      gif.classList.add("activarAnimacion");
  };
});

function playAudio() {
  var audio = document.getElementById("miAudio");
  audio.play();
}

