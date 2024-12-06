let dropdown = document.querySelector(".dropdown");
let dropdownCategory = document.querySelector(".dropdowncategory");

dropdown.addEventListener('click', () => {
    dropdownCategory.style.display = dropdownCategory.style.display === "block" ? "none" : "block";
});

window.onclick = function(event) {
    if (!event.target.closest('.dropdown') && !event.target.closest('.dropdowncategory')) {
        dropdownCategory.style.display = "none"; 
    }
};
