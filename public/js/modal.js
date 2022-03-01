const btns = document.getElementsByClassName('trigger');
const spans = document.getElementsByClassName('close-button');
const modals = document.getElementsByClassName('modal');

[...btns].forEach((btn, ind) => {
  btn.onclick = () => (modals[ind].classList.toggle("show-modal"));
});

[...spans].forEach((span, ind) => {
  span.onclick = () => (modals[ind].classList.toggle("show-modal"));
});

window.onclick = (e) => {
  [...modals].forEach((modal) => {
    if (e.target === modal) {
      modal.classList.toggle("show-modal");
    }
  });
};  