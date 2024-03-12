<template>
  <UiCard class="flex-1 flex flex-col">
    <img
      :src="props.cat.img"
      :alt="props.cat.name"
      class="rounded-t-xl object-cover h-60"
    />

    <UiCardContent class="flex flex-col py-3 px-4 justify-between flex-1 gap-3">
      <div>
        <h3 class="text-xl mb-2 font-semibold">{{ props.cat.name }}</h3>

        <p class="text-s">{{ props.cat.descr }}</p>
      </div>

      <span class="text-2xl underline decoration-primary">
        {{ cat.price.toLocaleString() }} p.
      </span>
    </UiCardContent>

    <UlCardFooter class="px-4 py-4">
      <UiButton class="w-full text-white">Добавить в корзину</UiButton>
    </UlCardFooter>
  </UiCard>
</template>

<script setup lang="ts">
const props = defineProps(["cat"]);
</script>

<style scoped></style>
