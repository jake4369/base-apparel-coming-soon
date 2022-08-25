const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("submit-btn");
const errorIcon = document.getElementById("img-error");
const errorLabel = document.getElementById("error-label");

let emailValid;

function checkEmail() {
  const email = emailInput.value;
  const filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!filter.test(email) || email === "") {
    errorIcon.style.display = "block";
    errorLabel.style.display = "block";
    emailInput.style.border = "2px solid #F96464";
    emailValid = false;
  } else {
    errorIcon.style.display = "none";
    errorLabel.style.display = "none";
    emailInput.style.border = "1px solid #ce9898";
    emailValid = true;
  }
}

submitBtn.addEventListener("click", (e) => {
  checkEmail();
  if (!emailValid) {
    e.preventDefault();
  } else {
    form = document.querySelector("form");
    form.reset();
  }
});

emailInput.addEventListener("input", () => {
  if (emailInput.value !== "") {
    errorIcon.style.display = "none";
    errorLabel.style.display = "none";
    emailInput.style.border = "1px solid #ce9898";
  }
});
