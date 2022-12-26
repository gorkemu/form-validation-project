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

email.addEventListener("focusout", (e) => {
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

validation.addEventListener("input", (e) => {
  hideCharacters();
});

validation.addEventListener("focusout", (e) => {
  if (validation !== password) {
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
  if (validation !== password) {
    validationError.textContent = "Passwords do not match";
  } else if (validation.validity.valueMissing) {
    validationError.textContent = "Please confirm your password";
  }
  validationError.style.display = "block";
}

function hideCharacters() {
  validation.classList.add("hidden");
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

  if (validation !== password) {
    showValidationError();
    e.preventDefault();
  }
});
