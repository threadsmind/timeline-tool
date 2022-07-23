<script setup lang="ts">
  import AppLayout from '@c/AppLayout.vue'
</script>

<template>
  <AppLayout msg="Timeline Tool" />
</template>

<style>
  :root {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    color-scheme: light dark;
    color: var(--primary);
    background-color: var(--secondary);

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    --primary: #e6f3e2;
    --secondary: #1d1e1c;
    --accent: #266411;
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
    background-color: var(--primary);
    color: var(--secondary);
    border-radius: 0;
    border-style: none;
    padding: 0.5rem;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    :root {
      --primary: #1d1e1c;
      --secondary: #e6f3e2;
      --accent: #266411;
    }
  }
</style>
