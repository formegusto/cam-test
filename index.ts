function load() {
  const video = document.getElementsByTagName("video")[0];

  navigator.getUserMedia(
    { video: true },
    (stream) => {
      video.srcObject = stream;
    },
    (error) => {
      console.error(error);
    }
  );
}

document.body.onload = load;
