 <script>
    // Password Toggle Feature
    const togglePassword = document.querySelector('#togglePassword');
    const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirmPassword');

    togglePassword.addEventListener('click', function () {
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      this.classList.toggle('fa-eye-slash');
    });

    toggleConfirmPassword.addEventListener('click', function () {
      const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
      confirmPassword.setAttribute('type', type);
      this.classList.toggle('fa-eye-slash');
    });

    // Bootstrap Validation + Password Match
    (function () {
      'use strict'
      var forms = document.querySelectorAll('.needs-validation')
      Array.from(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
          let password = form.querySelector('#password');
          let confirmPassword = form.querySelector('#confirmPassword');

          if (!form.checkValidity() || password.value !== confirmPassword.value) {
            event.preventDefault();
            event.stopPropagation();

            if (password.value !== confirmPassword.value) {
              confirmPassword.setCustomValidity("Passwords do not match");
              confirmPassword.classList.add('is-invalid');
            } else {
              confirmPassword.setCustomValidity("");
              confirmPassword.classList.remove('is-invalid');
            }
          } else {
            confirmPassword.setCustomValidity("");
          }
          form.classList.add('was-validated');
        }, false);
      });
    })()
  </script>
