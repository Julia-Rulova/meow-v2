<template>
  <section class="page flex">
    <slot />
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.page {
  background-color: var(--background);
  min-height: 100vh;
}
</style>
