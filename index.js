// Photo roulette animation
window.onload = function() {
    const photos = document.querySelectorAll('.photo-roulette .photo');
    let currentIndex = 0;

    // Add the show class and initial class to the first photo immediately
    photos[currentIndex].classList.add('show', 'initial');

    function showNextPhoto() {
        photos[currentIndex].classList.remove('show');
        currentIndex = (currentIndex + 1) % photos.length;
        photos[currentIndex].classList.add('show');
    }

    // Remove the initial class after a short delay
    setTimeout(function() {
        photos[currentIndex].classList.remove('initial');
    }, 50); // Adjust the delay as needed

    // Start the interval after a short delay to avoid initial fade-in
    setInterval(showNextPhoto, 5000); // Change image every 5 seconds
};

// 