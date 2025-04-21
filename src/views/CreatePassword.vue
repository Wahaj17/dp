<template>
  <div class="create-password-container">
    <img src="@/assets/mubadala-logo.png" alt="Mubadala Logo" class="logo">
    <h1 class="title">Create Your Password</h1>

    <form @submit.prevent="setPassword" class="password-form">

      <div class="input-group">
        <IconMail class="icon" />
        <input
          type="email"
          value="humanrosie@deliverypartner.com"
          readonly
          class="input-field readonly-email"
          aria-label="Email"
        >
      </div>

      <div class="input-group">
        <IconLock class="icon" />
        <input
          type="password"
          v-model="password"
          placeholder="Create Password"
          required
          class="input-field"
          aria-label="Create Password"
        >
        <span class="icon-toggle" @click="toggleCreatePasswordVisibility">
          <IconEyeSlash v-if="isCreatePasswordVisible" />
          <IconEye v-else />
        </span>
      </div>

      <div class="input-group">
        <IconLock class="icon" />
        <input
          type="password"
          v-model="confirmPassword"
          placeholder="Confirm Password"
          required
          class="input-field"
          aria-label="Confirm Password"
        >
        <span class="icon-toggle" @click="toggleConfirmPasswordVisibility">
          <IconEyeSlash v-if="isConfirmPasswordVisible" />
          <IconEye v-else />
        </span>
      </div>

      <button type="submit" class="submit-button">Set Password</button>
    </form>

    <p class="footer-text">Powered by TAKAFO</p> </div>
</template>

<script>
import IconEye from '@/components/IconEye.vue';
import IconEyeSlash from '@/components/IconEyeSlash.vue';
import IconLock from '@/components/IconLock.vue'; // Import Lock Icon
import IconMail from '@/components/IconMail.vue'; // Import Mail Icon


export default {
  name: 'CreatePassword',

  components: {
    IconEye,
    IconEyeSlash,
    IconLock,
    IconMail,
  },

  data() {

    return {
      password: '',
      confirmPassword: '',
      isCreatePasswordVisible: false,
      isConfirmPasswordVisible: false,
    };
  },
  methods: {

    setPassword() {

      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match!"); // Simple feedback for the user
        return;
      }


      console.log('Password successfully validated (simulation).');
      console.log('Email:', 'humanrosie@deliverypartner.com');
      console.log('Password:', this.password);

      this.$router.push('/password-success');
    },
    toggleCreatePasswordVisibility() {
      this.isCreatePasswordVisible = !this.isCreatePasswordVisible;
    },
    toggleConfirmPasswordVisibility() {
      this.isConfirmPasswordVisible = !this.isConfirmPasswordVisible;
    },
  },
};
</script>

<style scoped>

.create-password-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  width: 100%;

  font-family: sans-serif;
  box-sizing: border-box;
}


.logo {
  max-width: 150px;
  margin-bottom: 30px;
}

.title {
  color: #333; /* Dark grey text */
  font-size: 24px; /* Title font size */
  font-weight: 600; /* Slightly bold */
  margin-bottom: 30px; /* Space below title */
}

.password-form {
  width: 100%;
  max-width: 400px; /* Limit form width */
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.input-group {
  position: relative; /* Needed for positioning icons inside */
  display: flex;
  align-items: center;
}

.icon {
  position: absolute;
  left: 15px; /* Position icon inside the input padding */
  top: 50%; /* Align vertically */
  transform: translateY(-50%); /* Fine-tune vertical alignment */
  color: #aaa; /* SVG stroke/fill color (if using currentColor) */

  align-items: center;
  pointer-events: none;
  z-index: 10;
}
.icon-toggle {
  position: absolute;
  right: 15px; /* Position eye icon on the right */
  color: #aaa;
  cursor: pointer; /* Hint that it might be clickable */
  font-size: 16px;
}

.icon-toggle {
  position: absolute;
  right: 15px; /* Position icon on the right */
  top: 50%; /* Align vertically */
  transform: translateY(-50%); /* Fine-tune vertical alignment */
  color: #000; /* SVG stroke/fill color (if using currentColor) */
  cursor: pointer; /* Hint that it's clickable */
  display: flex; /* Helps with alignment if needed */
  align-items: center;
  justify-content: center;
  /* padding: 5px; */
}

.icon-toggle:hover {
   color: #000000;
}


.input-field {
  width: 100%;
  padding: 12px 15px 12px 45px; /* Top, Right, Bottom, Left (space for icon) */
  border: 1px solid #e0e0e0; /* Light border */
  border-radius: 8px; /* Rounded corners */
  font-size: 16px;
  background-color: #fff; /* White background */
  box-sizing: border-box; /* Include padding/border in width */
}
.input-field.readonly-email {
  background-color: #f0f0f0; /* Slightly different background for readonly */
  color: #666; /* Grey text */
  cursor: not-allowed;
}
.input-field::placeholder {
  color: #aaa; /* Placeholder text color */
}

.submit-button {
  width: 100%;
  padding: 12px 20px;
  background-color: #003870;
  color: white; /* White text */
  border: none; /* No border */
  border-radius: 8px; /* Rounded corners */
  font-size: 16px;
  font-weight: bold;
  cursor: pointer; /* Indicate it's clickable */
  margin-top: 15px; /* Space above button */
  transition: background-color 0.2s ease; /* Smooth hover effect */
}

.submit-button:hover {
  background-color: #002a52; /* Slightly darker blue on hover */
}

.footer-text {
  margin-top: 40px; /* Space above footer */
  font-size: 12px; /* Small text */
  color: #888; /* Light grey text */
}
</style>
