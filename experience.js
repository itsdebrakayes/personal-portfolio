document.addEventListener("DOMContentLoaded", function () {
    // JavaScript to handle opening job descriptions
    window.openExperience = function(photo) {
        const description = photo.querySelector(".description");
        description.style.display = description.style.display === "none" ? "block" : "none";
    };
});
