// script.js

document.querySelector(".btn").addEventListener("click", function () {
  // Select the .cam element
  var camElement = document.querySelector(".cam");
  var btnElement = document.querySelector(".btn");

  // Add the class that triggers the animation
  camElement.classList.add("left");
  btnElement.classList.add("obtn");
});

function camera() {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
        var video = document.getElementById("video");
        video.srcObject = stream;
        video.onplay();
      })
      .catch(function (error) {
        console.log("unable to access camera: " + error);
      });
  }
}
