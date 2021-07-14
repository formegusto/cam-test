function load() {
  const video = document.getElementsByTagName("video")[0];
  const capture = document.getElementById("capture");

  navigator.getUserMedia(
    { video: true },
    (stream) => {
      video.srcObject = stream;
    },
    (error) => {
      console.error(error);
    }
  );

  capture?.addEventListener("click", takepicture);
}

function takepicture() {
  const canvas = document.getElementsByTagName("canvas")[0];
  const video = document.getElementsByTagName("video")[0];
  const photo = document.getElementById("photo");
  const context = canvas.getContext("2d");

  context?.drawImage(video, 0, 0, 300, 300);

  const data = canvas.toDataURL("image/png");
  photo?.setAttribute("src", data);
}

document.body.onload = load;
