<template>
  <section
    class="flex flex-col gap-6 justify-between w-full flex-1 min-h-screen"
  >
    <div class="flex flex-col gap-3 lg:gap-6">
      <LayoutHeader></LayoutHeader>

      <UHorizontalNavigation
        :links="links"
        class="border-b px-8 bg-transparent static border-t-0"
        :ui="{
          base: 'justify-center sm:justify-start md:text-base',
          label: 'hidden sm:inline',
          inner: 'flex-1 sm:flex-auto',
          container: 'w-full sm:w-auto',
        }"
      />

      <div class="wrapper">
        <LayoutSort class="hidden lg:flex"></LayoutSort>

        <UiSheet>
          <UiSheetTrigger as-child>
            <UiButton class="flex lg:hidden gap-2 w-40">
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

        <div class="flex flex-col align-center justify-center w-full">
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

    <UButton
      size="sm"
      color="primary"
      variant="solid"
      label="Button"
      :trailing="false"
      class="rounded-full py-2 fixed bottom-5 right-5"
      @click="scrollToTop"
    >
      <Icon
        name="majesticons:arrow-up"
        width="28"
        height="28"
        style="color: white"
      ></Icon>
    </UButton>
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

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
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
    padding: 0 20px;
    align-items: flex-end;
    gap: 15px;
  }
}
</style>
