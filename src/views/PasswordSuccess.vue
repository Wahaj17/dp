<template>
  <div class="password-success-container">
    <img src="@/assets/mubadala-logo.png" alt="Mubadala Logo" class="logo">

    <h1 class="title">Password Successfully Created</h1>

    <div class="button-container">
      <button @click="goToLogin" class="button btn-primary">Continue to log in</button>

      <button @click="goBack" class="button btn-secondary">Go Back</button>
    </div>

    <p class="footer-text">Powered by TAKAFO</p> </div>
</template>

<script>
// Step 2: Add Basic Interactivity (The 'Brain' of the component)
export default {
  name: 'PasswordSuccess',
  methods: {
    // 'methods' holds functions (actions) for the component.
    goToLogin() {
      // This function runs when the "Continue to log in" button is clicked.
      // It uses Vue Router ($router) to navigate to the '/login' path.
      // We will need to define a '/login' route later.
      this.$router.push('/login');
    },
    goBack() {
      // This function runs when the "Go Back" button is clicked.
      // It uses Vue Router ($router) to go back one step in the browser's history.
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
/* Step 3: Make it Look Right (Styling rules only for this component) */

/* Container for the whole screen - very similar to CreatePassword */
.password-success-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Use padding to create space around content, adjust as needed */
  padding: 60px 20px; /* More vertical padding maybe */
  width: 100%;
  box-sizing: border-box;
  /* Vertical centering is handled by #app styles in global CSS */
}

/* Logo styling - Reuse or ensure consistency */
.logo {
  max-width: 150px;
  margin-bottom: 40px; /* More space below logo */
}

/* Title styling */
.title {
  color: #333;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 40px; /* Space below title */
}

/* Container for the buttons */
.button-container {
  display: flex;
  flex-direction: column; /* Stack buttons vertically */
  align-items: center; /* Center buttons horizontally */
  gap: 15px; /* Space between buttons */
  width: 100%;
  max-width: 320px; /* Constrain button container width */
}

/* Base button styling */
.button {
  width: 100%; /* Make buttons fill container width */
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid transparent; /* Base border */
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  text-align: center;
}

/* Primary Button Styling (Blue) */
.btn-primary {
  background-color: #003870; /* Dark blue from screenshot */
  color: white;
  border-color: #003870;
}

.btn-primary:hover {
  background-color: #002a52; /* Darker blue on hover */
  border-color: #002a52;
}

/* Secondary Button Styling (White outline) */
.btn-secondary {
  background-color: #fff; /* White background */
  color: #003870; /* Blue text */
  border-color: #003870; /* Blue border */
}

.btn-secondary:hover {
  background-color: #f8f9fa; /* Slightly off-white hover */
  border-color: #002a52;
  color: #002a52;
}

/* Footer text styling - Reuse or ensure consistency */
.footer-text {
  margin-top: 60px; /* More space above footer */
  font-size: 12px;
  color: #888;
}
</style>
