// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Function for updating date and time
    function updateDateTime() {
        var currentDateTime = new Date();
        var dateElement = document.getElementById('currentDate');
        var timeElement = document.getElementById('currentTime');

        // Format the date and time
        var formattedDate = currentDateTime.toLocaleDateString();
        var formattedTime = currentDateTime.toLocaleTimeString();

        // Update the content
        dateElement.textContent = 'Current Date: ' + formattedDate;
        timeElement.textContent = 'Current Time: ' + formattedTime;
    }

    // Nav menu toggle function
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    // Call the function to update date and time when the page loads
    updateDateTime();
});
