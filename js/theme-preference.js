/* save the light and dark mode preference */
(() => {
    const storageKey = "theme-preference";
    const root = document.documentElement;
    const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    );

    let savedTheme = null;

    try {
        savedTheme = localStorage.getItem(storageKey);
    } catch {
        // storage might be unavailable
    }

    // use the saved preference or the system default
    let preference =
        savedTheme === "light" || savedTheme === "dark"
            ? savedTheme
            : "system";

    function applyTheme() {
        const isDark = preference === "dark" ||
            (preference === "system" && systemDark.matches);

        root.dataset.theme = isDark ? "dark" : "light";

        const toggle = document.getElementById("theme-toggle");

        if (toggle) {
            toggle.checked = isDark;
            toggle.setAttribute(
                "aria-label",
                isDark ? "Turn on light mode" : "Turn on dark mode"
            );
        }

        const resetButton = document.getElementById("theme-system");

        if (resetButton) {
            resetButton.hidden = preference === "system";
        }
    }

    function savePreference() {
        try {
            if (preference === "system") {
                localStorage.removeItem(storageKey);
            } else {
                localStorage.setItem(storageKey, preference);
            }
        } catch {
            // storage might be unavailable
        }
    }

    // save changes when the slider is clicked
    document.addEventListener("change", (event) => {
        if (event.target.id === "theme-toggle") {
            preference = event.target.checked ? "dark" : "light";
            savePreference();
            applyTheme();
        }
    });

    // reset back to the computer's theme
    document.addEventListener("click", (event) => {
        if (event.target.id === "theme-system") {
            preference = "system";
            savePreference();
            applyTheme();
        }
    });

    // follow system changes when using system default
    systemDark.addEventListener("change", () => {
        if (preference === "system") {
            applyTheme();
        }
    });

    // sync the controls when the page loads
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", applyTheme);
    } else {
        applyTheme();
    }
})();
