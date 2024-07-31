const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

const login = document.getElementById("login1");

function sign() {
  let email = document.querySelector(".emaill");
  let passs = document.querySelector(".passs");

  // console.log(email.value,passs.value);

  if (email.value == "user@gmail.com" && passs.value == "123") {
    window.location = "DashBoard.html";
    // console.log(email.value,passs.value);
  }
}