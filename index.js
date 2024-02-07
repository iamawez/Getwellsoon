document.addEventListener("DOMContentLoaded", function () {
      const signUpButton = document.getElementById("signUp");
      const signInButton = document.getElementById("signIn");
      const container = document.getElementById("container");
    
      signUpButton.addEventListener("click", () => {
        container.classList.add("right-panel-active");
      });
    
      signInButton.addEventListener("click", () => {
        container.classList.remove("right-panel-active");
      });
    
      // Handle Signup
      const signUpForm = document.querySelector(".sign-up-container form");
      signUpForm.addEventListener("submit", function (event) {
        event.preventDefault();
    
        const name = signUpForm.querySelector('input[name="name"]').value;
        const email = signUpForm.querySelector('input[name="email"]').value;
        const password = signUpForm.querySelector('input[name="password"]').value;
    
        // Store user information in localStorage
        const user = { name, email, password };
        localStorage.setItem("user", JSON.stringify(user));
    
        // Switch to the Sign In panel after successful signup
        container.classList.remove("right-panel-active");
      });
    
      // Handle Signin
      const signInForm = document.querySelector(".sign-in-container form");
      signInForm.addEventListener("submit", function (event) {
        event.preventDefault();
    
        const emailInput = signInForm.querySelector('input[name="email"]');
        const passwordInput = signInForm.querySelector('input[name="password"]');
    
        const email = emailInput.value;
        const password = passwordInput.value;
    
        // Retrieve user information from localStorage
        const storedUser = JSON.parse(localStorage.getItem("user"));
    
        if (
          storedUser &&
          storedUser.email === email &&
          storedUser.password === password
        ) {
          // Clear input fields
          emailInput.value = "";
          passwordInput.value = "";
    
          alert("Login successful!");
          window.location.href = "home.html"
          // You may want to redirect the user or perform additional actions
        } else {
          alert("Invalid credentials. Please try again.");
        }
      });
    });
    