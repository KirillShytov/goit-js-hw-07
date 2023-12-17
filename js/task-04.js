const form = document.querySelector(".login-form");
const btn = document.querySelector("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    email: e.target.email.value,
    password: e.target.password.value,
  };
  console.log(data);
  if (e.target.email.value === "" || e.target.password.value === "") {
    alert("All form fields must be filled in");
  }
  form.reset();
});
