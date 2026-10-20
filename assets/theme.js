(function () {
  var root = document.documentElement;
  var stored = localStorage.getItem("theme");
  if (stored) {
    root.setAttribute("data-theme", stored);
  }

  function currentIsDark() {
    var attr = root.getAttribute("data-theme");
    if (attr === "dark") return true;
    if (attr === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function updateButtonLabel(btn) {
    btn.textContent = currentIsDark() ? "Switch to light mode" : "Switch to dark mode";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    updateButtonLabel(btn);
    btn.addEventListener("click", function () {
      var next = currentIsDark() ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      updateButtonLabel(btn);
    });
  });
})();
