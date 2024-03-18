<template>
  <section class="page flex">
    <slot />
  </section>
</template>

<script setup lang="ts">
import { useCatsStore } from "~/store/cats.store";
import { useAuthStore } from "~/store/auth.store";

const catsStore = useCatsStore();
const authStore = useAuthStore();

catsStore.getCats();
authStore.getUser();
</script>

<style scoped>
.page {
  background-color: var(--background);
  min-height: 100vh;
}
</style>
