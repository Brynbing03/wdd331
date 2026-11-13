
/* unit 5 - typography playground */

// grab the stuff we need
const slider = document.querySelector("#size-slider");
const sizeValue = document.querySelector("#size-value");
const previewText = document.querySelector("#preview-text");
const resetButton = document.querySelector("#reset-button");

// update the text size when the slider moves
slider.addEventListener("input", () => {
    const newSize = slider.value;

    previewText.style.fontSize = `${newSize}px`;
    sizeValue.textContent = `${newSize}px`;
});

// reset everything back to normal
resetButton.addEventListener("click", () => {
    slider.value = 20;
    previewText.style.fontSize = "20px";
    sizeValue.textContent = "20px";
});
