document.addEventListener("DOMContentLoaded", function () {
    // JavaScript to handle flipping photos and showing descriptions
    window.flipPhoto = function(photo) {
        const inner = photo.querySelector(".photo-inner");
        inner.classList.toggle("flipped");
        if (inner.classList.contains("flipped")) {
            photo.style.zIndex = 1;
            photo.style.transform = "scale(1.1)";
        } else {
            photo.style.zIndex = 0;
            photo.style.transform = "scale(1)";
        }
    };
});
