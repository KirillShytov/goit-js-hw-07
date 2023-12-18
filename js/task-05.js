// const bodyElement = document.querySelector("body");
// const changeColorButton = document.querySelector("button.change-color");
// const colorSpan = document.querySelector("span.color");

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// changeColorButton.addEventListener("click", () => {
//   const color = getRandomHexColor;
//   bodyElement.style.backgroundColor = color;
//   colorSpan.textContent = color;
// });

const bodyElement = document.querySelector("body");
const changeColorButton = document.querySelector("button.change-color");
const colorSpan = document.querySelector("span.color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

changeColorButton.addEventListener("click", () => {
  const color = getRandomHexColor();
  bodyElement.style.backgroundColor = color;
  colorSpan.textContent = color;
});
