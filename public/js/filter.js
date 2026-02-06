import { getAnime } from "./store.js";
import { renderAnime } from "./render.js";

document.querySelectorAll(".genre-btn").forEach(btn => {
  btn.onclick = () => {
    const g = btn.dataset.genre;
    renderAnime(getAnime().filter(a => a.genres?.includes(g)));
  };
});