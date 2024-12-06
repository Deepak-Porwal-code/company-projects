let dropdown = document.querySelector(".dropdown");
let dropdownoptions = document.querySelector(".dropdownoptions");

// Event listener to toggle dropdown visibility
dropdown.addEventListener('click', () => {
    // Toggle the display property
    dropdownoptions.style.display = dropdownoptions.style.display === "block" ? "none" : "block";
});

// Optional: Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdown') && !event.target.closest('.dropdownoptions')) {
        dropdownoptions.style.display = "none"; // Close the dropdown
    }
};
