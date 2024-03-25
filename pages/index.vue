<template>
  <section
    class="flex flex-col gap-6 justify-between w-full flex-1 min-h-screen"
  >
    <div class="flex flex-col gap-6">
      <LayoutHeader></LayoutHeader>

      <UHorizontalNavigation
        :links="links"
        class="border-t border-gray-200 dark:border-gray-800 px-3 bg-white fixed bottom-0 z-10 lg:border-b lg:px-8 lg:bg-transparent lg:static lg:border-t-0"
        :ui="{
          base: 'text-base',
        }"
      />

      <div class="wrapper">
        <LayoutSort class="hidden lg:flex"></LayoutSort>

        <div class="mx-5 bg-white w-full px-3 py-4">
          <UiSheet>
            <UiSheetTrigger as-child>
              <UiButton
                class="flex lg:hidden sticky top-4 right-0 left-4 z-10 gap-2 w-40"
              >
                <span class="text-white text-md">Фильтры</span>

                <Icon
                  name="mage:filter"
                  height="20"
                  width="20"
                  style="color: white"
                ></Icon>
              </UiButton>
            </UiSheetTrigger>
            <UiSheetContent
              side="left"
              class="bg-white w-full sm:w-3/4 lg:hidden"
            >
              <LayoutSort></LayoutSort>
            </UiSheetContent>
          </UiSheet>
        </div>

        <div
          class="flex flex-col align-center justify-center w-full px-5 lg:p-0"
        >
          <CustomPreloader v-if="catsStore.loading"></CustomPreloader>

          <div
            v-else
            class="flex flex-col align-center justify-center gap-16 w-full"
          >
            <ul
              class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2.5"
            >
              <li v-for="cat in cats" :key="cat.$id" class="flex">
                <CatsCardMain :cat="cat"></CatsCardMain>
              </li>
            </ul>

            <CustomPagination :total="cats.length"></CustomPagination>
          </div>
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

const links = [
  {
    label: "Главная",
    icon: "i-heroicons-home",
    to: "/",
  },
  {
    label: "О волонтере",
    icon: "i-heroicons-heart",
    to: "/volunteer",
  },
  {
    label: "Помочь котикам",
    icon: "i-bx-donate-heart",
    to: "/donate",
  },
];
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

@media screen and (max-width: 1023px) {
  .wrapper {
    display: flex;
    flex-direction: column;
    padding: 0;
    align-items: flex-end;
  }
}
</style>
