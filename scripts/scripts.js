document.addEventListener('DOMContentLoaded', () => {
    // Add your JavaScript here for animations or interactions
});

document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const video = this.querySelector('.portfolio-video');
        video.loop = true; // Ensure the video loops
        video.play();
    });

    item.addEventListener('mouseleave', function() {
        const video = this.querySelector('.portfolio-video');
        video.pause();
        video.currentTime = 0; // Reset video to the beginning
    });
});


//showreel page //
let currentVideoIndex = 0;

function stopCurrentVideo() {
    const currentVideo = document.querySelectorAll('.portfolio-videoShowreel')[currentVideoIndex];
    if (currentVideo) {
        currentVideo.pause();
        currentVideo.currentTime = 0; // Reset the video to the beginning
    }
}

document.querySelector('.right-arrow').addEventListener('click', function() {
    const videoWrapper = document.querySelector('.video-wrapper');
    const videoItems = document.querySelectorAll('.video-item');

    // Stop the currently playing video
    stopCurrentVideo();

    // Update the index to show the next video
    currentVideoIndex = (currentVideoIndex + 1) % videoItems.length;

    // Move the wrapper to show the next video
    videoWrapper.style.transform = `translateX(-${currentVideoIndex * 100}vw)`;
});

document.querySelector('.left-arrow').addEventListener('click', function() {
    const videoWrapper = document.querySelector('.video-wrapper');
    const videoItems = document.querySelectorAll('.video-item');

    // Stop the currently playing video
    stopCurrentVideo();

    // Update the index to show the previous video
    currentVideoIndex = (currentVideoIndex - 1 + videoItems.length) % videoItems.length;

    // Move the wrapper to show the previous video
    videoWrapper.style.transform = `translateX(-${currentVideoIndex * 100}vw)`;
});

let hideTimeout;

function showArrows() {
    // Remove the class that hides the arrows
    document.querySelector('.video-container').classList.remove('hide-arrows');

    // Clear any previous timeout
    clearTimeout(hideTimeout);

    // Set a timeout to hide the arrows after a few seconds of no mouse movement
    hideTimeout = setTimeout(() => {
        document.querySelector('.video-container').classList.add('hide-arrows');
    }, 1000); // Adjust the delay as needed (2000ms = 2 seconds)
}

// Add event listeners to show arrows on mouse movement
document.querySelector('.video-container').addEventListener('mousemove', showArrows);

// Hide arrows initially
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.video-container').classList.add('hide-arrows');
});
