// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // Contact form (mock submit — no backend, just friendly feedback)
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var success = document.getElementById('contact-success');
      contactForm.reset();
      if (success) success.style.display = 'block';
    });
  }

  // Login form (simple front-end only check — this is a college project demo)
  var loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var error = document.getElementById('login-error');
      var email = document.getElementById('email').value.trim();
      var password = document.getElementById('password').value.trim();

      if (email.length === 0 || password.length < 6) {
        error.textContent = 'Enter a valid email and a password of at least 6 characters.';
        error.style.display = 'block';
        return;
      }
      error.style.display = 'none';
      var btn = loginForm.querySelector('button[type="submit"]');
      btn.textContent = 'Logging in...';
      setTimeout(function () {
        alert('Login successful! (Demo only — no server is connected.)');
        btn.textContent = 'Log In';
      }, 700);
    });
  }
});
