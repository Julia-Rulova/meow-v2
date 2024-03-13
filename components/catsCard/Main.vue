<template>
  <UiCard class="flex-1 flex flex-col">
    <img
      :src="props.cat.img"
      :alt="props.cat.name"
      class="rounded-t-xl object-cover h-60"
    />

    <UiCardContent class="flex flex-col py-3 px-4 justify-between flex-1 gap-3">
      <div>
        <h3 class="text-xl mb-2 font-semibold">
          {{ props.cat.name }},
          <span class="text-lg font-light">
            {{
              props.cat.age + " " + getNoun(props.cat.age, "год", "года", "лет")
            }}
          </span>
        </h3>

        <p class="text-s">{{ props.cat.descr }}</p>
      </div>

      <span class="text-2xl underline decoration-primary">
        {{ cat.price.toLocaleString() }} ₽
      </span>
    </UiCardContent>

    <UlCardFooter class="px-4 py-4">
      <UiButton class="w-full text-white">Добавить в корзину</UiButton>
    </UlCardFooter>
  </UiCard>
</template>

<script setup lang="ts">
import { getNoun } from "@/utils/getNoun";

const props = defineProps(["cat"]);
</script>

<style scoped></style>
