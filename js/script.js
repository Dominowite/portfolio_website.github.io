let currentVerticalSlide = 1; // Center vertically
let currentHorizontalSlide = 1; // Center horizontally
const outerContainer = document.getElementById('outer-container');
const centerBox = document.getElementById('center-box');
const centerBoxTitle = document.getElementById('center-box-title');
const centerBoxContent = document.getElementById('center-box-content');
const slideRows = document.querySelectorAll('.slide-row');
const totalVerticalSlides = slideRows.length; // Top, Center, Bottom
const totalHorizontalSlides = 3; // Left, Center, Right
const topBox = document.querySelector('.top-box');
const imgProfile = document.querySelector('.img_profile');

function slidePage(direction) {
    if (direction === 'up' && currentVerticalSlide > 0) {
        currentVerticalSlide--;
        if (currentVerticalSlide === 0) {
            centerBoxTitle.textContent = 'About Me'; // Change text to "About Me" when moving up
            centerBoxContent.textContent = 'This is about me content.'; // Add any content you want
            topBox.classList.add('slide-up'); // Add class to trigger animation
            imgProfile.classList.add('slide-up'); // Add class to trigger animation for img_profile
        } else {
            centerBoxTitle.textContent = 'Welcome'; // Reset text when moving down from Top Box
            centerBoxContent.textContent = 'This is Portfolio'; // Reset content
            topBox.classList.remove('slide-up'); // Remove class to reset animation
            imgProfile.classList.remove('slide-up'); // Remove class to reset animation for img_profile
        }
    } else if (direction === 'down' && currentVerticalSlide < totalVerticalSlides - 1) {
        currentVerticalSlide++;
        if (currentVerticalSlide === 2) {
            centerBoxTitle.textContent = 'Contact'; // Change text to "Contact" when moving down to Bottom Box
            centerBoxContent.textContent = 'This is contact content.'; // Add any content you want
        } else {
            centerBoxTitle.textContent = 'Welcome'; // Reset text when moving up from Bottom Box
            centerBoxContent.textContent = 'This is Portfolio'; // Reset content
        }
    } else if (direction === 'left' && currentHorizontalSlide > 0) {
        currentHorizontalSlide--;
        if (currentHorizontalSlide === 0) {
            centerBoxTitle.textContent = 'Skill'; // Change text to "Skill" when moving left to Left Box
            centerBoxContent.textContent = 'This is skill content.'; // Add any content you want
        } else {
            centerBoxTitle.textContent = 'Welcome'; // Reset text when moving right from Left Box
            centerBoxContent.textContent = 'This is Portfolio'; // Reset content
        }
    } else if (direction === 'right' && currentHorizontalSlide < totalHorizontalSlides - 1) {
        currentHorizontalSlide++;
        if (currentHorizontalSlide === 2) {
            centerBoxTitle.textContent = 'My Project'; // Change text to "My Project" when moving right to Right Box
            centerBoxContent.textContent = 'This is my project content.'; // Add any content you want
        } else {
            centerBoxTitle.textContent = 'Welcome'; // Reset text when moving left from Right Box
            centerBoxContent.textContent = 'This is Portfolio'; // Reset content
        }
    }

    outerContainer.style.transform = `translate(-${currentHorizontalSlide * 100}vw, -${currentVerticalSlide * 100}vh)`;

    // Adjust center box position when moving up or down
    if (direction === 'up' || direction === 'down') {
        if (currentVerticalSlide === 0) {
            centerBox.style.top = '80%'; // Adjust this value to set the center box position in Top Box
        } else if (currentVerticalSlide === 2) {
            centerBox.style.top = '20%'; // Adjust this value to set the center box position in Bottom Box
        } else {
            centerBox.style.top = '50%'; // Reset to center
        }
    }

    // Adjust center box position when moving left or right
    if (direction === 'left' || direction === 'right') {
        if (currentHorizontalSlide === 0) {
            centerBox.style.left = '80%'; // Adjust this value to set the center box position in Left Box
        } else if (currentHorizontalSlide === 2) {
            centerBox.style.left = '20%'; // Adjust this value to set the center box position in Right Box
        } else {
            centerBox.style.left = '50%'; // Reset to center
        }
    }

    manageArrows();
}

function manageArrows() {
    // Initialize all arrows to hidden
    document.querySelector('.top-arrow').style.display = 'none';
    document.querySelector('.bottom-arrow').style.display = 'none';
    document.querySelector('.left-arrow').style.display = 'none';
    document.querySelector('.right-arrow').style.display = 'none';

    // Display arrows based on current position
    if (currentVerticalSlide === 1 && currentHorizontalSlide === 1) { // Center Box
        document.querySelector('.top-arrow').style.display = 'block';
        document.querySelector('.bottom-arrow').style.display = 'block';
        document.querySelector('.left-arrow').style.display = 'block';
        document.querySelector('.right-arrow').style.display = 'block';
    } else if (currentVerticalSlide === 0) { // Top Box
        document.querySelector('.bottom-arrow').style.display = 'block';
    } else if (currentVerticalSlide === 2) { // Bottom Box
        document.querySelector('.top-arrow').style.display = 'block';
    } else if (currentHorizontalSlide === 0) { // Left Box
        document.querySelector('.right-arrow').style.display = 'block';
    } else if (currentHorizontalSlide === 2) { // Right Box
        document.querySelector('.left-arrow').style.display = 'block';
    }
}

// Set initial slide position to center box
outerContainer.style.transform = `translate(-${currentHorizontalSlide * 100}vw, -${currentVerticalSlide * 100}vh)`;
manageArrows(); // Initialize the arrows state
