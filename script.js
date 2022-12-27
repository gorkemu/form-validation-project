const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector(".email-error");
const country = document.getElementById("country");
const countryError = document.querySelector(".country-error");
const zipCode = document.getElementById("zip-code");
const zipCodeError = document.querySelector(".zip-code-error");
const password = document.getElementById("password");
const passwordError = document.querySelector(".password-error");
const validation = document.getElementById("validation");
const validationError = document.querySelector(".validation-error");
const passwordContainer = document.querySelector(".password-container");
const validationContainer = document.querySelector(".validation-container");
const passwordEyeIcon = document.querySelector(".password-eye-icon");
const validationEyeIcon = document.querySelector(".validation-eye-icon");
const meterElement = document.querySelector(".password-meter");
const meterBarElement = document.querySelector(".password-meter-bar");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

email.addEventListener("focusout", (e) => {
  console.log(e.target === eyeIcon);
  if (email.validity.valid) {
    emailError.textContent = "";
  } else {
    showEmailError();
  }
});

email.addEventListener("focus", (e) => {
  emailError.textContent = "";
  emailError.style.display = "block";
});

function showEmailError() {
  if (email.validity.typeMismatch) {
    emailError.textContent =
      "Email address must contain an @ symbol and a domain name (e.g. example@gmail.com)";
  } else if (email.validity.valueMissing) {
    emailError.textContent = "You must enter your email address";
  }
  emailError.style.display = "block";
}

country.addEventListener("focusout", (e) => {
  if (country.validity.valid) {
    countryError.textContent = "";
  } else {
    showCountryError();
  }
});

country.addEventListener("focus", (e) => {
  countryError.textContent = "";
  countryError.style.display = "block";
});

function showCountryError() {
  if (country.validity.valueMissing) {
    countryError.textContent = "Please select your country";
  }
  countryError.style.display = "block";
}

zipCode.addEventListener("focusout", (e) => {
  if (zipCode.validity.valid) {
    zipCodeError.textContent = "";
  } else {
    showZipCodeError();
  }
});

zipCode.addEventListener("focus", (e) => {
  zipCodeError.textContent = "";
  zipCodeError.style.display = "block";
});

function showZipCodeError() {
  if (zipCode.validity.valueMissing) {
    zipCodeError.textContent = "Please enter your zip code";
  } else if (zipCode.validity.patternMismatch) {
    zipCodeError.textContent = "Zip code must be 5 digits";
  }

  zipCodeError.style.display = "block";
}

passwordEyeIcon.addEventListener("mousedown", (e) => {
  e.preventDefault();
});

passwordEyeIcon.addEventListener("focus", (e) => {
  e.preventDefault();
});

passwordEyeIcon.addEventListener("click", togglePasswordTextSecurity);

function togglePasswordTextSecurity() {
  if (password.type === "password") {
    password.type = "text";
    passwordEyeIcon.innerHTML = '<i class="fa fa-eye-slash"></i>';
  } else {
    password.type = "password";
    passwordEyeIcon.innerHTML = '<i class="fa fa-eye"></i>';
  }
}

password.addEventListener("focusout", (e) => {
  if (password.validity.valid) {
    passwordError.textContent = "";
  } else {
    showPasswordError();
  }
});

password.addEventListener("focus", (e) => {
  passwordError.textContent = "";
  passwordError.style.display = "block";
});

function showPasswordError() {
  if (password.validity.valueMissing) {
    passwordError.textContent = "Please enter your password";
  } else if (password.validity.tooShort) {
    passwordError.textContent = "Password must be at least 8 characters";
  } else if (password.validity.tooLong) {
    passwordError.textContent = "Password must be no more than 16 characters";
  } else if (password.validity.patternMismatch) {
    passwordError.textContent =
      "Password must contain at least one number, one special character, and one uppercase letter";
  }
  passwordError.style.display = "block";
}

password.addEventListener("input", checkPassword);

function checkPassword() {
  const passwordValue = password.value;

  let score = 0;

  if (passwordValue.length >= 8) {
    score += 1;
  }
  if (passwordValue.length <= 16) {
    score += 1;
  }
  if (passwordValue.match(/[A-Z]/)) {
    score += 1;
  }
  if (passwordValue.match(/[0-9]/)) {
    score += 1;
  }
  if (passwordValue.match(/[^a-zA-Z0-9]/)) {
    score += 1;
  }
  if (passwordValue.match(/[^!@#$%^&*(),.?":{}|<>]/)) {
    score += 1;
  }

  const width = (score / 6) * 100;

  meterBarElement.style.width = width + "%";

  if (score === 0) {
    meterBarElement.style.background = "#f44336";
  } else if (score < 3) {
    meterBarElement.style.background = "#ff9800";
  } else if (score < 6) {
    meterBarElement.style.background = "#fdd835";
  } else {
    meterBarElement.style.background = "#4caf50";
  }
}

validationEyeIcon.addEventListener("mousedown", (e) => {
  e.preventDefault();
});

validationEyeIcon.addEventListener("focus", (e) => {
  e.preventDefault();
});

validationEyeIcon.addEventListener("click", toggleValidationTextSecurity);

function toggleValidationTextSecurity() {
  if (validation.type === "password") {
    validation.type = "text";
    validationEyeIcon.innerHTML = '<i class="fa fa-eye-slash"></i>';
  } else {
    validation.type = "password";
    validationEyeIcon.innerHTML = '<i class="fa fa-eye"></i>';
  }
}

validation.addEventListener("focusout", (e) => {
  if (validation.value !== password.value) {
    showValidationError();
  } else if (validation.validity.valueMissing) {
    validationError.textContent = "Please confirm your password";
    validationError.style.display = "block";
  } else {
    validationError.textContent = "";
  }
});

validation.addEventListener("focus", (e) => {
  validationError.textContent = "";
  validationError.style.display = "block";
});

function showValidationError() {
  if (validation.value !== password.value) {
    validationError.textContent = "Passwords do not match";
  } else if (validation.validity.valueMissing) {
    validationError.textContent = "Please confirm your password";
  }
  validationError.style.display = "block";
}

form.addEventListener("submit", (e) => {
  if (!email.validity.valid) {
    showEmailError();
    e.preventDefault();
  }

  if (!country.validity.valid) {
    showCountryError();
    e.preventDefault();
  }

  if (!zipCode.validity.valid) {
    showZipCodeError();
    e.preventDefault();
  }

  if (!password.validity.valid) {
    showPasswordError();
    e.preventDefault();
  }

  if (validation.value !== password.value) {
    showValidationError();
    e.preventDefault();
  }

  if (
    email.validity.valid &&
    country.validity.valid &&
    zipCode.validity.valid &&
    password.validity.valid &&
    validation.value === password.value
  ) {
    modal.style.display = "block";

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };

    e.preventDefault();
  }
});

const closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", () => {
  document.getElementById("myModal").style.display = "none";
});
