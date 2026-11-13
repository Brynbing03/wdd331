
// CSS Typography Demo
// WDD 331R - Teaching Video #7


// DEMO 1: Text Wrapping

const wrapSelect = document.getElementById("wrapSelect");
const wrapHeading = document.getElementById("wrapHeading");
const wrapParagraph = document.getElementById("wrapParagraph");
const wrapCode = document.getElementById("wrapCode");

wrapSelect.addEventListener("change", () => {
  const value = wrapSelect.value;

  wrapHeading.style.textWrap = value;
  wrapParagraph.style.textWrap = value;

  wrapCode.textContent = `text-wrap: ${value};`;
});


// DEMO 2: Drop Caps

const dropButton = document.getElementById("dropButton");
const dropText = document.getElementById("dropText");

dropButton.addEventListener("click", () => {
  dropText.classList.toggle("enabled");

  const enabled = dropText.classList.contains("enabled");

  if (enabled) {
    dropButton.textContent = "Turn Drop Cap Off";
  } else {
    dropButton.textContent = "Turn Drop Cap On";
  }
});


// DEMO 3: Line Clamping

const clampSlider = document.getElementById("clampSlider");
const clampText = document.getElementById("clampText");
const clampValue = document.getElementById("clampValue");
const clampCode = document.getElementById("clampCode");

clampSlider.addEventListener("input", () => {
  const lines = clampSlider.value;

  clampText.style.webkitLineClamp = lines;
  clampValue.textContent = lines;

  clampCode.textContent =
    `display: -webkit-box;\n` +
    `-webkit-box-orient: vertical;\n` +
    `-webkit-line-clamp: ${lines};\n` +
    `overflow: hidden;`;
});


// DEMO 4: The ch Unit

const chSlider = document.getElementById("chSlider");
const measureText = document.getElementById("measureText");
const chValue = document.getElementById("chValue");
const chCode = document.getElementById("chCode");

chSlider.addEventListener("input", () => {
  const width = chSlider.value;

  measureText.style.maxWidth = `${width}ch`;
  chValue.textContent = `${width}ch`;

  chCode.textContent = `max-width: ${width}ch;`;
});


// DEMO 5: lh and rlh Units

const rhythmSelect = document.getElementById("rhythmSelect");
const rhythmExample = document.getElementById("rhythmExample");

rhythmSelect.addEventListener("change", () => {
  if (rhythmSelect.value === "rhythm") {
    rhythmExample.classList.add("rhythm-demo");
  } else {
    rhythmExample.classList.remove("rhythm-demo");
  }
});
