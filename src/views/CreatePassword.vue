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
import IconEyeSlash from '@/components/IconEyeSlash.vue'
import IconLock from '@/components/IconLock.vue'; // Import Lock Icon
import IconMail from '@/components/IconMail.vue'; // Import Mail Icon
// Step 2: Add Basic Interactivity (The 'Brain' of the component)

export default {
  name: 'CreatePassword',

  components: {
    IconEye,       // Register IconEye
    IconEyeSlash,
    IconLock,
    IconMail,
  },

  data() {
    // 'data' holds information the component needs to keep track of.
    // Here, we need to store what the user types into the password fields.
    return {
      password: '', // Starts empty, linked to 'Create Password' input by v-model
      confirmPassword: '', // Starts empty, linked to 'Confirm Password' input by v-model
      isCreatePasswordVisible: false,
      isConfirmPasswordVisible: false,
    };
  },
  methods: {
    // 'methods' holds functions that the component can run, like responding to clicks.
    setPassword() {
      // This function runs when the form is submitted (button is clicked).
      // '.prevent' on @submit stops the page from reloading, which is default form behavior.

      // Basic check: Do the passwords match?
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match!"); // Simple feedback for the user
        return; // Stop the function here
      }

      // For now, just print the values to the browser's developer console.
      // This is useful for checking things during development.
      // Later, this is where you would send the password to your server.
      // Simulate successful password setting
      console.log('Password successfully validated (simulation).');
      console.log('Email:', 'humanrosie@deliverypartner.com');
      console.log('Password:', this.password);

  // Remove previous alert if any
  // alert('Password setting simulated! Check the console (F12).');

  // *** Add navigation to the success screen ***
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
/* Step 3: Make it Look Right (Styling rules only for this component) */

/* Container for the whole screen */
.create-password-container {
  display: flex; /* Allows easy centering and layout */
  flex-direction: column; /* Stack elements vertically */
  align-items: center; /* Center items horizontally */
  padding: 40px 20px; /* Space around the content */
  width: 100%;
  /* The dotted background in the screenshot is complex, using a simple color for now */
  font-family: sans-serif; /* Basic font */
  box-sizing: border-box;
}

/* Logo styling */
.logo {
  max-width: 150px; /* Limit logo size */
  margin-bottom: 30px; /* Space below logo */
}

/* Title styling */
.title {
  color: #333; /* Dark grey text */
  font-size: 24px; /* Title font size */
  font-weight: 600; /* Slightly bold */
  margin-bottom: 30px; /* Space below title */
}

/* Form styling */
.password-form {
  width: 100%;
  max-width: 400px; /* Limit form width */
  display: flex;
  flex-direction: column;
  gap: 15px; /* Space between input groups */
}

/* Styling for the group containing icon and input */
.input-group {
  position: relative; /* Needed for positioning icons inside */
  display: flex;
  align-items: center;
}

/* Basic icon styling (placeholders) */
.icon {
  position: absolute;
  left: 15px; /* Position icon inside the input padding */
  top: 50%; /* Align vertically */
  transform: translateY(-50%); /* Fine-tune vertical alignment */
  color: #aaa; /* SVG stroke/fill color (if using currentColor) */
  /* display: flex; Helps with alignment if needed */
  align-items: center;
  /* The pointer-events might be useful if the icon interferes with clicking the input */
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
  /* Optional: Add padding if needed for easier clicking */
  /* padding: 5px; */
}

/* Optional: Change color on hover */
.icon-toggle:hover {
   color: #000000;
}


/* Input field styling */
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

/* Button Styling */
.submit-button {
  width: 100%;
  padding: 12px 20px;
  background-color: #003870; /* Dark blue from screenshot (approximated) */
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

/* Footer text styling */
.footer-text {
  margin-top: 40px; /* Space above footer */
  font-size: 12px; /* Small text */
  color: #888; /* Light grey text */
}
</style>
