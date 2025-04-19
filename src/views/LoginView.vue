Code snippet
<template>
  <div class="login-container">
    <img src="@/assets/mubadala-logo.png" alt="Mubadala Logo" class="logo">

    <h1 class="title">Log In</h1>

    <p class="subtitle">
      Welcome back, by clicking below you will be redirected to SSO log in.
    </p>

    <button @click="handleSsoLogin" class="button btn-primary sso-button">
      Log In with SSO
    </button>

    <p class="footer-text">Powered by TAKAFO</p>

  </div>
</template>

<script>
// Step 2: Add Basic Interactivity
export default {
  name: 'LoginView',
  methods: {
    // Step 2: Method for SSO Login button click
    handleSsoLogin() {
      // In a real application, this is where you would trigger the
      // Single Sign-On flow, which often involves redirecting the user
      // to an external Identity Provider (like Azure AD, Okta, etc.)
      // This usually requires backend coordination or specific frontend libraries.

      // For now, we'll just simulate the action.
      console.log('Attempting SSO Login - Redirecting (simulation)...');
      alert('SSO Login flow initiated (simulation). Check console.');

      // Example (conceptual - do not use directly without SSO setup):
      // window.location.href = 'YOUR_SSO_PROVIDER_LOGIN_URL';
    }
  }
};
</script>

<style scoped>
/* Step 3: Styling - Adapt styles from previous screens */

/* Container - adjust padding/margins if needed */
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  width: 100%;
  box-sizing: border-box;
  text-align: center; /* Center text elements like subtitle */
}

/* Logo, Title, Footer - Should match previous screens */
.logo { max-width: 150px; margin-bottom: 40px; }
.title { color: #333; font-size: 24px; font-weight: 600; margin-bottom: 15px; /* Less space below title */ }
.footer-text { margin-top: 60px; font-size: 12px; color: #888; }

/* Subtitle styling */
.subtitle {
  color: #555; /* Slightly lighter than title */
  font-size: 16px;
  max-width: 350px; /* Limit width of subtitle */
  line-height: 1.5;
  margin-bottom: 30px; /* Space below subtitle */
}

/* Base button styling - Reuse from PasswordSuccess */
.button {
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid transparent;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  text-align: center;
}

/* Primary Button Styling - Reuse from PasswordSuccess */
.btn-primary {
  background-color: #003870;
  color: white;
  border-color: #003870;
}

.btn-primary:hover {
  background-color: #002a52;
  border-color: #002a52;
}

/* Specific styling/sizing for the SSO button */
.sso-button {
  min-width: 250px; /* Give the button a decent minimum width */
  /* Or use max-width similar to form inputs if preferred */
  /* max-width: 320px; */
  /* width: 100%; */ /* Uncomment if using max-width */
}

</style>
