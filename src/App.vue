<template>
  <RouterView />
</template>

<style scoped>
/* Remove any previous styles inside <style scoped> and use these: */

/* Style the root element Vue mounts to (usually in index.html) */
/* Using :global() because #app is outside this component's scope */
:global(#app) {
  /* max-width: 1280px; Optional: Set a max width for the whole app */

  margin: 0 auto; /* Center the app container horizontally */
  /* padding: 2rem; Add some padding around the app */
  font-weight: normal;

  min-height: 100vh;
  display: flex; /* Use flexbox for centering content */
  flex-direction: column;
  justify-content: center; /* Center content vertically */

  /* Set the overall page background color here */
  /* background-color: #f8f9fa;  */
  /* Light grey background */

  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
               Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50; /* Default text color */
}

/* If there were other styles like 'header', 'nav', 'logo', 'wrapper',
   ensure they are removed as they are not needed in this simplified App.vue */

</style>
