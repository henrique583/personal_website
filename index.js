window.onload = function () {
    // Get all the images and store them in an array
    const images = document.querySelectorAll('.photo');
    let currentIndex = 0;
    const imageCount = images.length;

    // Function to show the next image
    function showNextImage() {
        // Remove 'active' class from all images
        images.forEach((img) => img.classList.remove('active'));

        // Add 'active' class to the current image
        images[currentIndex].classList.add('active');

        // Move to the next image, looping back to the start if necessary
        currentIndex = (currentIndex + 1) % imageCount;
    }

    // Show the first image immediately
    showNextImage();

    // Set an interval to loop through the images every 3 seconds
    setInterval(showNextImage, 3600);
};