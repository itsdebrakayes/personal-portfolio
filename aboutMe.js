document.addEventListener("DOMContentLoaded", function () {
    // JavaScript to handle flipping photos and showing descriptions
    window.flipPhoto = function(photo) {
        const description = photo.querySelector(".description");
        description.style.display = description.style.display === "none" ? "flex" : "none";
    };
});
