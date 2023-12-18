const formInput = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const box = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyEl() {
  box.textContent = "";
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const size = 30 + 10 * i;
    const divBox = document.createElement("div");
    divBox.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
    boxes.insertAdjacentElement("beforeend", divBox);
  }
  formInput.value = "";
}

btnCreate.addEventListener("click", () => {
  if (formInput.value >= 1 && formInput.value <= 100) {
    createBoxes(formInput.value);
  }
});
btnDestroy.addEventListener("click", destroyEl);
