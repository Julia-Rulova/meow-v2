<template>
  <section
    class="flex flex-col gap-6 justify-between w-full flex-1 min-h-screen"
  >
    <div class="flex flex-col gap-6">
      <LayoutHeader></LayoutHeader>

      <div class="wrapper">
        <LayoutSort></LayoutSort>

        <div class="flex align-center justify-center gap-3 w-full">
          <CustomPreloader v-if="catsStore.loading"></CustomPreloader>

          <ul
            v-else
            class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2.5"
          >
            <li v-for="cat in cats" :key="cat.$id" class="flex">
              <CatsCardMain :cat="cat"></CatsCardMain>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <LayoutFooter></LayoutFooter>
  </section>
</template>

<script setup lang="ts">
import { useCatsStore } from "~/store/cats.store";

const catsStore = useCatsStore();

const cats = computed(() => catsStore.cats);
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 25px;
  padding: 0 35px 35px;
}

@media screen and (max-width: 1240px) {
  .wrapper {
    grid-template-columns: 1fr 2fr;
  }
}
</style>
