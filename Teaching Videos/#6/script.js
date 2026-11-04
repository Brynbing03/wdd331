
// CSS Scroll Snap Teaching Demo
// JavaScript is only used for the live controls.
// The actual snapping is handled by CSS!

const carousel = document.getElementById("carousel");

const snapType = document.getElementById("snapType");
const snapAlign = document.getElementById("snapAlign");
const snapStop = document.getElementById("snapStop");

const resetBtn = document.getElementById("resetBtn");
const currentCSS = document.getElementById("currentCSS");

const cards = document.querySelectorAll(".carousel-card");

// Update the demo whenever a setting changes
function updateDemo() {
  const type = snapType.value;
  const align = snapAlign.value;
  const stop = snapStop.checked ? "always" : "normal";

  // Update the parent container
  carousel.style.scrollSnapType =
    type === "none" ? "none" : `x ${type}`;

  // Update each child card
  cards.forEach((card) => {
    card.style.scrollSnapAlign = align;
    card.style.scrollSnapStop = stop;
  });

  // Show the current CSS on the page
  currentCSS.textContent =
    `scroll-snap-type: ${type === "none" ? "none" : `x ${type}`};\n` +
    `scroll-snap-align: ${align};\n` +
    `scroll-snap-stop: ${stop};`;
}

// Listen for control changes
snapType.addEventListener("change", updateDemo);
snapAlign.addEventListener("change", updateDemo);
snapStop.addEventListener("change", updateDemo);

// Reset everything back to the original settings
resetBtn.addEventListener("click", () => {
  snapType.value = "mandatory";
  snapAlign.value = "start";
  snapStop.checked = false;

  updateDemo();

  // Return to the beginning of the carousel
  carousel.scrollTo({
    left: 0,
    behavior: "instant"
  });
});

// Set the initial display
updateDemo();
