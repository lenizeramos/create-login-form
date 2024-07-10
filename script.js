document.addEventListener("DOMContentLoaded", () => {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let login = document.getElementById("login");
  let remindMe = document.getElementById("checkbox");

  let emailIcon = document.getElementById("email-icon");
  let passwordIcon = document.getElementById("password-icon");
  let eyeIcon = document.getElementById("eye-icon");

  // email focus
  email.addEventListener("focus", () => {
    emailIcon.classList.add("focus");
  });
  email.addEventListener("blur", () => {
    emailIcon.classList.remove("focus");
  });
  // password focus
  password.addEventListener("focus", () => {
    passwordIcon.classList.add("focus");
  });
  password.addEventListener("blur", () => {
    passwordIcon.classList.remove("focus");
  });

  // eye functionality
  eyeIcon.addEventListener("click", () => {
    password.focus();
    if (password.type === "password") {
      password.type = "text";
      eyeIcon.classList.add("open");
    } else {
      password.type = "password";
      eyeIcon.classList.remove("open");
    }
  });

  // login button
  login.addEventListener("click", (event) => {
    event.preventDefault();
    if (email.value != "" && password.value != "") {
      console.log(
        `E-mail: ${email.value}, Password: ${password.value}, Remind me: ${remindMe.checked}.`
      );
    } else {
      console.log("Your e-mail or password is incorrect!");
    }
  });
});
