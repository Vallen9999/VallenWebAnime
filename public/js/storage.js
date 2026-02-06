export function saveProgress(anime, ep, time) {
  localStorage.setItem(
    `watch_${anime}`,
    JSON.stringify({ ep, time })
  );
}

export function loadProgress(anime) {
  return JSON.parse(localStorage.getItem(`watch_${anime}`));
}