
const slider = document.querySelector("#tileSize");
const sizeValue = document.querySelector("#sizeValue");
const patterns = document.querySelectorAll(".pattern");

slider.addEventListener("input", () => {
  const size = slider.value;

  sizeValue.textContent = `${size}px`;

  patterns.forEach((pattern) => {
    pattern.style.backgroundSize = `${size}px ${size}px`;
  });
});

const button = document.querySelector("#toggleAnimation");
const animatedGradient = document.querySelector(".animated-gradient");

button.addEventListener("click", () => {
  animatedGradient.classList.toggle("paused");

  const isPaused = animatedGradient.classList.contains("paused");

  button.textContent = isPaused
    ? "Play Animation"
    : "Pause Animation";
});
