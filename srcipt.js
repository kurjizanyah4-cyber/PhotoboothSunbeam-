const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const snapButton = document.getElementById("snap");
const saveButton = document.getElementById("save");

const context = canvas.getContext("2d");

// =========================
// START CAMERA
// =========================

navigator.mediaDevices.getUserMedia({
video: true
})
.then(function(stream) {

```
video.srcObject = stream;
```

})
.catch(function(error) {

```
console.error("Camera error:", error);

alert("Unable to access the camera. Please allow camera access.");
```

});

// =========================
// TAKE PHOTO
// =========================

snapButton.addEventListener("click", function() {

```
context.drawImage(
    video,
    0,
    0,
    canvas.width,
    canvas.height
);

canvas.style.display = "block";
```

});

// =========================
// SAVE PHOTO
// =========================

saveButton.addEventListener("click", function() {

```
const image = canvas.toDataURL("image/png");

const link = document.createElement("a");

link.href = image;

link.download = "photobot-photo.png";

link.click();
```

});
