import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const delay = Number(event.target.elements.delay.value);
  const state = event.target.elements.state.value;

  if (delay < 0) {
    iziToast.show({
      message: `❌ Please enter a positive delay.`,
      position: 'topRight',
      color: 'red',
    });
    return;
  }

  createPromise(delay, state)
    .then(() => {
      iziToast.show({
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        color: 'green',
      });
    })
    .catch(() => {
      iziToast.show({
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
        color: 'red',
      });
    });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve();
      } else {
        reject();
      }
    }, delay);
  });
}
