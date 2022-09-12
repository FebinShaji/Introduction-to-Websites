$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
});

const button = document.querySelector("button");
const close = document.querySelector(".close");
const companyvideo = document.querySelector(".companyvideo");
const video = document.querySelector("video");
button.addEventListener('click', ()=>{
  companyvideo.style.visibility = "visible";
  companyvideo.style.opacity = 1;
});
close.addEventListener('click', ()=>{
  companyvideo.style.visibility = "hidden";
  companyvideo.style.opacity = 0;
  video.pause();
  video.currentTime = 0;
});
