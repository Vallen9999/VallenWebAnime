export let animeStore = [];

export function setAnime(data) {
  animeStore = Array.isArray(data) ? data : [];
}

export function getAnime() {
  return animeStore;
}