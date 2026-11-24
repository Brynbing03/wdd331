
// ==========================
// TEACHING VIDEO #8
// interpolate-size Demo
// ==========================

// ANIMATION ON / OFF

const animationToggle =
  document.querySelector("#animation-toggle");

const animationStatus =
  document.querySelector("#animation-status");

animationToggle.addEventListener("change", () => {
  const enabled = animationToggle.checked;

  document.body.classList.toggle(
    "no-animation",
    !enabled
  );

  animationStatus.textContent = enabled
    ? "ON"
    : "OFF";
});


// ==========================
// ANIMATION SPEED SLIDER
// ==========================

const speedSlider =
  document.querySelector("#speed-slider");

const speedValue =
  document.querySelector("#speed-value");

speedSlider.addEventListener("input", () => {
  const speed = speedSlider.value;

  document.documentElement.style.setProperty(
    "--speed",
    `${speed}s`
  );

  speedValue.textContent = `${speed}s`;
});


// ==========================
// OLD VS NEW COMPARISON
// ==========================

const oldButton =
  document.querySelector("#old-button");

const newButton =
  document.querySelector("#new-button");

const oldPanel =
  document.querySelector("#old-panel");

const newPanel =
  document.querySelector("#new-panel");

function togglePanel(button, panel) {
  const isExpanded =
    panel.classList.toggle("expanded");

  button.setAttribute(
    "aria-expanded",
    String(isExpanded)
  );
}

oldButton.addEventListener("click", () => {
  togglePanel(oldButton, oldPanel);
});

newButton.addEventListener("click", () => {
  togglePanel(newButton, newPanel);
});


// ==========================
// BROWSER SUPPORT CHECK
// ==========================

const supportsInterpolateSize = CSS.supports(
  "interpolate-size",
  "allow-keywords"
);

console.log(
  "interpolate-size supported:",
  supportsInterpolateSize
);

if (!supportsInterpolateSize) {
  console.log(
    "This browser does not support interpolate-size."
  );
}
