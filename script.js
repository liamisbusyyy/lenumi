// This JavaScript file handles all interactive elements of the portfolio website

// Get references to the buttons
const primaryButton = document.querySelector(".primary-btn");
const secondaryButton = document.querySelector(".secondary-btn");

// Enhanced button jiggle effect with additional feedback
// This supplements the CSS transform for a more interactive feel
primaryButton.addEventListener("click", function () {
  // Add a temporary class for additional animation effects
  this.classList.add("button-clicked");

  // Remove the class after animation completes
  setTimeout(() => {
    this.classList.remove("button-clicked");
  }, 300);

  // Add your button action here
  console.log("Primary button clicked - Book an intro call");
  // Example: window.location.href = 'booking.html';
});

secondaryButton.addEventListener("click", function () {
  // Add a temporary class for additional animation effects
  this.classList.add("button-clicked");

  // Remove the class after animation completes
  setTimeout(() => {
    this.classList.remove("button-clicked");
  }, 300);

  // Add your button action here
  console.log("Secondary button clicked - Email contact");
  // Example: window.location.href = 'mailto:contact@yourstudio.com';
});

// You can add more interactive elements below
// For example:
// - Image gallery functionality for the grey boxes
// - Form submission handling
// - Scroll animations
// - Navigation menu toggle for mobile
