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
export default {
  name: 'LoginView',
  methods: {

    handleSsoLogin() {

      console.log('Attempting SSO Login - Redirecting (simulation)...');
      alert('SSO Login flow initiated (simulation). Check console.');


      this.$router.push('/outsource');
    }
  }
};
</script>

<style scoped>

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
}


.logo { max-width: 150px; margin-bottom: 40px; }
.title { color: #333; font-size: 24px; font-weight: 600; margin-bottom: 15px; /* Less space below title */ }
.footer-text { margin-top: 60px; font-size: 12px; color: #888; }

.subtitle {
  color: #555; /* Slightly lighter than title */
  font-size: 16px;
  max-width: 350px; /* Limit width of subtitle */
  line-height: 1.5;
  margin-bottom: 30px; /* Space below subtitle */
}

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

.btn-primary {
  background-color: #003870;
  color: white;
  border-color: #003870;
}

.btn-primary:hover {
  background-color: #002a52;
  border-color: #002a52;
}


.sso-button {
  min-width: 250px;

}

</style>
