import "./theme.js";
import "./store.js";
import "./render.js";
import "./search.js";
import "./filter.js";

fetch("/api/anime")
  .then(res => res.json())
  .then(r => {
    import("./store.js").then(m => {
      m.setAnime(r.data || []);
      import("./render.js").then(rn => rn.renderAnime(r.data || []));
    });
  })
  .catch(() => console.warn("API error"));