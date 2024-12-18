// Open the popup when the page loads
window.onload = function() {
    openPopup();
};

// JavaScript for Class Booking functionality
function bookClass(className) {
    // Show the modal popup
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-content").innerHTML = `
        <h2>Class Booked!</h2>
        <p>You have successfully booked the <strong>${className}</strong> class.</p>
        <span class="success-icon">✔️</span>
    `;
}

// Close the modal when the user clicks on the close button
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function openPopup() {
    document.getElementById("popup").style.display = "block";
    startCountdown(); // Start countdown when the popup opens
}

// Function to close the popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Function to start the countdown
function startCountdown() {
    // Set the date we're counting down to (modify this date for your sale end)
    var saleEndDate = new Date("Nov 28, 2024 23:59:59").getTime();

    // Update the countdown every 1 second
    var timer = setInterval(function() {
        var now = new Date().getTime();
        var timeLeft = saleEndDate - now;

        // Time calculations for days, hours, minutes, and seconds
        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Display the result in the #countdown div
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

        // If the countdown is over, display a message
        if (timeLeft < 0) {
            clearInterval(timer);
            document.getElementById("countdown").innerHTML = "SALE ENDED";
        }
    }, 1000);
}