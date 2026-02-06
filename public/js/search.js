import { getAnime } from "./store.js";
import { renderAnime } from "./render.js";

let t;
const input = document.getElementById("searchInput");

if (input) {
  input.addEventListener("input", e => {
    clearTimeout(t);
    t = setTimeout(() => {
      const q = e.target.value.toLowerCase();
      renderAnime(getAnime().filter(a => a.title.toLowerCase().includes(q)));
    }, 300);
  });
}