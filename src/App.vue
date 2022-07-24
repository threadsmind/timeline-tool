<script setup lang="ts">
  import AppLayout from '@c/AppLayout.vue'
</script>

<template>
  <AppLayout />
</template>

<style>
  :root {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    color-scheme: light dark;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    --palette-primary: #e6f3e2;
    --palette-secondary: #1d1e1c;
    --palette-accent: #266411;
    --palette-shadow: #121212;
    --palette-warn: #d01742;

    --z-index-appBar: 100;
    --z-index-menu: 50;

    --height-appBar: 3rem;

    --spacing: 0.5rem;
  }
  * {
    box-sizing: border-box;
    max-width: 100%;
    max-height: 100%;
  }
  body,
  html {
    line-height: 1.15;
    margin: 0;
    max-width: 100vw;
    max-height: 100vh;
    color: var(--palette-primary);
    background-color: var(--palette-secondary);
  }
  h1 {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  button,
  input,
  select {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button {
    text-transform: none;
    background-color: var(--palette-primary);
    color: var(--palette-secondary);
    border-radius: 0;
    border-style: none;
    padding: var(--spacing);
    cursor: pointer;
  }
  button:hover,
  button:active {
    opacity: 0.7;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
  ul {
    padding: 0;
    list-style: none;
    margin: 0;
  }

  #app {
    height: 100vh;
    width: 100vw;
  }

  .full-height {
    height: 100%;
  }

  .tab-panel {
    padding: var(--spacing);
  }

  @media (prefers-color-scheme: light) {
    :root {
      --palette-primary: #1d1e1c;
      --palette-secondary: #e6f3e2;
      --palette-accent: #266411;
      --palette-shadow: #c0c0c0;
    }
  }
</style>
