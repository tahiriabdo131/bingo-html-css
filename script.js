const modal = document.getElementById("modal");
const modal__content = document.getElementById("modal__content");
const btn_play = document.getElementById("btn-play");

btn_play.addEventListener("click", () => {
    modal.style.visibility = 'visible';
});

modal__content.addEventListener("click", () => {
    modal.style.visibility = 'hidden';
});