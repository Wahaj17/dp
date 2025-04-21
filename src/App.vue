<template>
  <RouterView />
</template>

<style scoped>

:global(#app) {

  margin: 0 auto;
  font-weight: normal;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
               Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
