// script.js

// Run after DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signupForm");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  // 🔐 Password show/hide toggle
  function setupPasswordToggle(inputId, toggleId) {
    const input = document.getElementById(inputId);
    const toggle = document.getElementById(toggleId);

    if (!input || !toggle) return;

    toggle.addEventListener("click", function () {
      const isPassword = input.getAttribute("type") === "password";
      input.setAttribute("type", isPassword ? "text" : "password");

      // Change eye icon
      toggle.classList.toggle("fa-eye");
      toggle.classList.toggle("fa-eye-slash");
    });
  }

  setupPasswordToggle("password", "togglePassword");
  setupPasswordToggle("confirmPassword", "toggleConfirmPassword");

  // ✅ Confirm password validation
  function validatePasswordMatch() {
    if (confirmPassword.value === "") {
      confirmPassword.setCustomValidity("Please confirm your password.");
    } else if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity("Passwords do not match.");
    } else {
      confirmPassword.setCustomValidity("");
    }
  }

  password.addEventListener("input", validatePasswordMatch);
  confirmPassword.addEventListener("input", validatePasswordMatch);

  // ✅ Bootstrap-style validation + submit handler
  form.addEventListener("submit", function (event) {
    validatePasswordMatch(); // check passwords first

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      // Form is valid – demo: prevent real submit and show message
      event.preventDefault();
      alert("Signup successful! 🎉");

      form.reset();
      form.classList.remove("was-validated");

      // Reset password fields & icons
      password.setAttribute("type", "password");
      confirmPassword.setAttribute("type", "password");

      const tp = document.getElementById("togglePassword");
      const tcp = document.getElementById("toggleConfirmPassword");

      if (tp) {
        tp.classList.remove("fa-eye-slash");
        tp.classList.add("fa-eye");
      }
      if (tcp) {
        tcp.classList.remove("fa-eye-slash");
        tcp.classList.add("fa-eye");
      }
    }

    form.classList.add("was-validated");
  });
});
