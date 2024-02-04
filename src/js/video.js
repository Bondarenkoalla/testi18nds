document.addEventListener('DOMContentLoaded', function () {
  var video = document.querySelector('.videoSection__video');

  video.addEventListener('click', function () {
      if (video.paused) {
          video.play();
      } else {
          video.pause();
      }
  });
});