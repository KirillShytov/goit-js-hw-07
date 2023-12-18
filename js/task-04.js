const form = document.querySelector(".login-form");
const btn = document.querySelector("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.email.value.trim();
  const password = e.target.password.value.trim();

  if (email === "" || password === "") {
    alert("Потрібно заповнити всі поля форми");
    return;
  }
  const data = {
    email: email,
    password: password,
  };
  console.log(data);
  form.reset();
});
