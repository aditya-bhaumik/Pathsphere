document.querySelectorAll(".tab-link").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab-link").forEach((btn) => btn.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach((content) => content.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
    animateTabContent(document.getElementById(button.dataset.tab));
  });
});

function animateTabContent(tabContent) {
  tabContent.style.opacity = 0;
  setTimeout(() => {
    tabContent.style.opacity = 1;
    tabContent.style.transition = "opacity 0.5s";
  }, 50);
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function validatePassword(password) {

    let matchPassword = [];
    matchPassword.push("[$@$!%*#?&]");
    matchPassword.push("[A-Z]");
    matchPassword.push("[a-z]");
    matchPassword.push("[0-9]");

    // console.log(matchPassword)

    if(password.length<8) return 4;

    for (let i   = 0  ; i < matchPassword.length ; i++){
        if (!RegExp(matchPassword[i]).test(String(password))) {
            switch (i){
                case 0:
                    return 0;
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 3:
                    return 3;
            }
        }
    }
}

document
  .getElementById("login-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const emailError = document.getElementById("login-email-error");
    const passwordError = document.getElementById("login-password-error");
    const successMessage = document.getElementById("login-success");

    let valid = true;

    if (!validateEmail(email)) {
      emailError.textContent = "Invalid email address";
      valid = false;
    } else {
      emailError.textContent = "";
    }

    if (validatePassword(password)=== 0 || validatePassword(password)=== 1 || validatePassword(password)=== 2 || validatePassword(password)=== 3 || validatePassword(password)=== 4 ) {
        switch (validatePassword(password)){
            case 0 :
                passwordError.textContent = 'Password must contains a special character';
                break;
            case 1 :
                passwordError.textContent = 'Password must contains at least a capital letter';
                break;
            case 2 :
                passwordError.textContent = 'Password must contains at least a small letter';
                break;
            case 3 :
                passwordError.textContent = 'Password must contains a number';
                break;
            case 4 :
                passwordError.textContent = 'Password must be at least 8 characters';
                break;
        }
        valid = false;
    } else {
      passwordError.textContent = "";
    }

    if (valid) {
      const loginBtn = document.getElementById("login-btn");
      loginBtn.disabled = true;
      loginBtn.textContent = "Logging in...";
      console.log("Login submitted");
      setTimeout(() => {
        loginBtn.disabled = false;
        loginBtn.textContent = "Login";
        successMessage.style.display = "block";
        successMessage.style.opacity = 0;
        setTimeout(() => {
          successMessage.style.opacity = 1;
          successMessage.style.transition = "opacity 0.5s";
        }, 50);
        localStorage.setItem("isLoggedIn", "true"); // Store login status
        window.location.href = "/";
        setTimeout(() => {
          successMessage.style.display = "none";
          const urlParams = new URLSearchParams(window.location.search);
          const redirect = urlParams.get("redirect");
          if (redirect === "scholarships") {
            window.location.href =
              "/pages/scholarship-feature/scholarships.html"; // Redirect to scholarships page after login
          }
        }, 2000); // Hide success message after 2 seconds
      }, 2000);
    }
  });

document
  .getElementById("signup-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById(
      "signup-confirm-password"
    ).value;
    const emailError = document.getElementById("signup-email-error");
    const passwordError = document.getElementById("signup-password-error");
    const confirmPasswordError = document.getElementById(
      "signup-confirm-password-error"
    );
    const successMessage = document.getElementById("signup-success");

    let valid = true;

    if (!validateEmail(email)) {
      emailError.textContent = "Invalid email address";
      valid = false;
    } else {
      emailError.textContent = "";
    }

    if (validatePassword(password)=== 0 || validatePassword(password)=== 1 || validatePassword(password)=== 2 || validatePassword(password)=== 3 || validatePassword(password)=== 4 ) {
        switch (validatePassword(password)){
            case 0 :
                passwordError.textContent = 'Password must contains a special character';
                break;
            case 1 :
                passwordError.textContent = 'Password must contains at least a capital letter';
                break;
            case 2 :
                passwordError.textContent = 'Password must contains at least a small letter';
                break;
            case 3 :
                passwordError.textContent = 'Password must contains a number';
                break;
            case 4 :
                passwordError.textContent = 'Password must be at least 8 characters';
                break;
        }
        valid = false;
    } else {
      passwordError.textContent = "";
    }

    if (password !== confirmPassword) {
      confirmPasswordError.textContent = "Passwords do not match";
      valid = false;
    } else {
      confirmPasswordError.textContent = "";
    }

    if (valid) {
      const signupBtn = document.getElementById("signup-btn");
      signupBtn.disabled = true;
      signupBtn.textContent = "Signing up...";
      console.log("Signup submitted");
      setTimeout(() => {
        signupBtn.disabled = false;
        signupBtn.textContent = "Sign Up";
        successMessage.style.display = "block";
        successMessage.style.opacity = 0;
        setTimeout(() => {
          successMessage.style.opacity = 1;
          successMessage.style.transition = "opacity 0.5s";
        }, 50);
        setTimeout(() => {
          successMessage.style.display = "none";
          switchToLogin(); // Switch to login tab after successful signup
        }, 2000); // Hide success message after 2 seconds
      }, 2000);
    }
  });

// Clear success message on user interaction
document.querySelectorAll("#signup-form input").forEach((input) => {
  input.addEventListener("input", () => {
    document.getElementById("signup-success").style.display = "none";
  });
});

document.querySelectorAll("#login-form input").forEach((input) => {
  input.addEventListener("input", () => {
    document.getElementById("login-success").style.display = "none";
  });
});

function togglePassword(id) {
  const input = document.getElementById(id);
  const icon = input.nextElementSibling;
  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

function openModal() {
  const modal = document.getElementById("passwordRecoveryModal");
  modal.style.display = "flex";
  modal.style.opacity = 0;
  setTimeout(() => {
    modal.style.opacity = 1;
    modal.style.transition = "opacity 0.5s";
  }, 50);
}

function closeModal() {
  const modal = document.getElementById("passwordRecoveryModal");
  modal.style.opacity = 0;
  setTimeout(() => {
    modal.style.display = "none";
  }, 500);
}

document.getElementById("password-recovery-form")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById("recovery-email").value;
    const emailError = document.getElementById("recovery-email-error");
    const successMessage = document.getElementById("recovery-success");

    if (!validateEmail(email)) {
      emailError.textContent = "Invalid email address";
    } else {
      emailError.textContent = "";
      // Simulate sending recovery email
      console.log("Recovery email sent");
      successMessage.style.display = "block";
      successMessage.style.opacity = 0;
      setTimeout(() => {
        successMessage.style.opacity = 1;
        successMessage.style.transition = "opacity 0.5s";
      }, 50);
      setTimeout(() => {
        successMessage.style.display = "none";
        closeModal();
      }, 3000); // Hide success message after 3 seconds
    }
  });

function switchToLogin() {
  document
    .querySelectorAll(".tab-link")
    .forEach((btn) => btn.classList.remove("active"));
  document
    .querySelectorAll(".tab-content")
    .forEach((content) => content.classList.remove("active"));

  const loginTab = document.querySelector('.tab-link[data-tab="login"]');
  const loginContent = document.getElementById("login");

  loginTab.classList.add("active");
  loginContent.classList.add("active");
  animateTabContent(loginContent);
}

document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Assuming signup is successful:
    showSignupSuccessMessage();

    // Clear the form
    document.getElementById("signup-form").reset();
  });

function showSignupSuccessMessage() {
    var messageBox = document.getElementById("signup-success-message");
    if(messageBox){
        messageBox.style.display = "block"; // Show the message
    }

    // Hide the message after 3 seconds
    setTimeout(function() {
        if(messageBox){
            messageBox.style.display = "none";
        }
    }, 3000);
}
