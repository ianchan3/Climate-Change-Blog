let videoSource = ['vid1.mp4', 'vid2.mp4', 'vid3.mp4'];
let videoCount = videoSource.length;
let myVideo = document.getElementById("myVideo");
let i = 0;

function videoPlay(videoNum) {
  myVideo.setAttribute("src", videoSource[videoNum]);
  myVideo.load();
  myVideo.play();
}
  myVideo.addEventListener('ended', replay, false);
  videoPlay(0);

function replay() {
  i++;
  if (i === videoCount) {
    i = 0;
    videoPlay(i);
  } else {
    videoPlay(i);
  }  
}
