const formInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

formInput.addEventListener("input", (event) => {
  const trimValue = event.target.value.trim();
  output.textContent = trimValue || "Anonymous";
});
