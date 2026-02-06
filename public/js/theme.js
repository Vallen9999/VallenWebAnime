const THEME_KEY = "theme";

export function initTheme(toggleBtn) {
  const saved = localStorage.getItem(THEME_KEY) || "light";
  document.body.dataset.theme = saved;

  toggleBtn.addEventListener("click", () => {
    const next = document.body.dataset.theme === "dark" ? "light" : "dark";
    document.body.dataset.theme = next;
    localStorage.setItem(THEME_KEY, next);
  });
}