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

/* Stop scrolldown animation when schools section comes into view */
const scrolldown = document.querySelector('.scrolldown');
const schoolsSection = document.getElementById('schools');

// Create an Intersection Observer
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Fade out the scroll-down animation
                scrolldown.style.opacity = '0';
                setTimeout(() => {
                    scrolldown.style.display = 'none'; // Hide completely after fading
                }, 800); // Transition duration 
            } else {
                // Show and fade in the scroll-down animation
                scrolldown.style.display = 'block'; // Ensure it's visible again
                setTimeout(() => {
                    scrolldown.style.opacity = '1'; // Fade in after reappearing
                }, 0);
            }
        });
    },
    {
        threshold: 0.6, // Adjusts how much of the section needs to be in view
    }
);

// Observe the schools section
observer.observe(schoolsSection);

// Hover animations for williams and berkeley sections
const schools = document.getElementById('schools'); 
const williams = document.getElementById('williams');
const berkeley = document.getElementById('berkeley');

schools.addEventListener('mouseenter', () => {
    williams.addEventListener('mouseenter', () => {
        williams.classList.add('active'); // Add the active class
    });
    berkeley.addEventListener('mouseenter', () => {
        berkeley.classList.add('active'); // Add the active class
    });
});

schools.addEventListener('mouseleave', () => {
    williams.classList.remove('active'); // Remove the active class
    berkeley.classList.remove('active'); // Remove the active class
});

