export function initPlayer() {
  document.addEventListener("DOMContentLoaded", () => {
    const player = document.querySelector("#player");
    if (!player) return;

    player.addEventListener("play", () => {
      console.log("Playing...");
    });
  });
}