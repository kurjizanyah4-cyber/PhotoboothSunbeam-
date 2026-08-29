/ Get elements
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snapButton = document.getElementById('snap');
const saveButton = document.getElementById('save');
const context = canvas.getContext('2d');

// Access the device camera and stream to video element
navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        video.srcObject = stream;
    })
    .catch((error) => {
        console.error('Error accessing the camera: ', error);
    });

// Event listener for the snap button
snapButton.addEventListener('click', () => {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.style.display = 'block'; // Show canvas with the captured image
});

// Event listener for the save button
saveButton.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png'); // Convert canvas to image
    link.download = 'photo.png'; // Set a default filename
    link.click(); // Trigger the download
});
