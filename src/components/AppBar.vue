<script setup lang="ts"></script>

<template>
  <div class="appbar">
    <button class="full-height">menu</button>
    <div class="apptitle full-height">
      <h1>TIMELINE TOOL</h1>
    </div>
  </div>
</template>

<style scoped>
  .appbar {
    height: 3rem;
    display: flex;
    align-items: center;
    border-bottom: 2px solid var(--accent);
  }
  .apptitle {
    width: 100%;
    text-align: center;
  }
  button {
    display: block;
  }
  h1 {
    line-height: 0.2rem;
  }
</style>
