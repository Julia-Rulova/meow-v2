<template>
  <section class="page flex">
    <slot />

    <!-- <NuxtLink to="/donate" class="fixed bottom-6 right-3 rounded-full p-1.5 bg-primary/30 z-20">
      <div class="border border-primary flex-1 absolute top-1.5 right-1.5 left-1.5 bottom-1.5 rounded-full animate-button-pulse"</div>
      <UButton
        size="sm"
        color="primary"
        variant="solid"
        label="Button"
        :trailing="false"
        class="rounded-full px-3 py-2"
      >
        <Icon
          name="bx:donate-heart"
          width="28"
          height="28"
          style="color: white"
        ></Icon>
      </UButton>
    </NuxtLink> -->
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
