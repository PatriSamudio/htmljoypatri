/*document.addEventListener("DOMContentLoaded", function () {
  var gifs = document.querySelectorAll(".gif");

  gifs.forEach(function (gif) {
    gif.addEventListener("load", function () {
      playGifOnce(gif);
    });
  });

  function playGifOnce(gif) {
    var animationDuration = 2000; // Ajusta el tiempo en milisegundos según la duración de tu animación

    setTimeout(function () {
      gif.style.animationName = "no-repeat";
      gif.style.animationDuration = "2s";
      gif.style.animationFillMode = "forwards";
      gif.style.animationPlayState = "paused"; // Pausa la animación después de la duración especificada
    }, animationDuration);
  }
});
*/