// ===================================
// COUNTDOWN LOGIC
// ===================================

// Set the event date: 14 December 2025 at 6:00 PM IST (GMT+0530)
const eventDate = new Date("December 14, 2025 18:00:00 GMT+0530").getTime();

// Get the elements to display the time
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const messageEl = document.getElementById('event-message');

// Update the countdown every 1 second
const countdownInterval = setInterval(function() {

    const now = new Date().getTime();
    const distance = eventDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result, adding a leading zero
    daysEl.innerHTML = String(days).padStart(2, '0');
    hoursEl.innerHTML = String(hours).padStart(2, '0');
    minutesEl.innerHTML = String(minutes).padStart(2, '0');
    secondsEl.innerHTML = String(seconds).padStart(2, '0');

    // If the countdown is finished
    if (distance < 0) {
        clearInterval(countdownInterval); 
        daysEl.innerHTML = '00';
        hoursEl.innerHTML = '00';
        minutesEl.innerHTML = '00';
        secondsEl.innerHTML = '00';
        messageEl.innerHTML = "🎉 Accounts Settled! Nicku is a legend! Let's book Tomorrowland 2026! 🎉"; 
    }
}, 1000);


// ===================================
// SLIDESHOW LOGIC
// ===================================

let slideIndex = 0;
const slides = document.getElementsByClassName("nicku-slide");

function showSlides() {
    // 1. Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    
    // 2. Increment index and wrap around
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // 3. Show the current slide
    if (slides.length > 0) {
        slides[slideIndex - 1].classList.add('active');
    }
    
    // 4. Call this function again after 4 seconds (4000 milliseconds)
    setTimeout(showSlides, 4000); 
}

// Start the slideshow immediately if there are slides
if (slides.length > 0) {
    slides[0].classList.add('active'); // Ensure the first slide is visible immediately
    setTimeout(showSlides, 4000); // Start the rotation after 4 seconds
}
