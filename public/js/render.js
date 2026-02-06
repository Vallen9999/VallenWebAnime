export function renderAnimeList(container, list) {
  if (!Array.isArray(list) || list.length === 0) {
    container.innerHTML = "<p>Data tidak ditemukan.</p>";
    return;
  }

  container.innerHTML = list.map(item => `
    <div class="anime-card">
      <img src="${item.image || ""}" alt="${item.title || ""}">
      <h3>${item.title || "-"}</h3>
    </div>
  `).join("");
}