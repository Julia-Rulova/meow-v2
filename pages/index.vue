<template>
  <section
    class="flex flex-col gap-6 justify-between w-full flex-1 min-h-screen"
  >
    <div class="flex flex-col gap-6">
      <LayoutHeader></LayoutHeader>

      <div class="wrapper">
        <LayoutForm></LayoutForm>

        <div class="flex flex-col align-end gap-3">
          <UiSelect>
            <UiSelectTrigger class="w-[280px] bg-white">
              <UiSelectValue placeholder="Сортировать" />
            </UiSelectTrigger>
            <UiSelectContent>
              <UiSelectGroup>
                <UiSelectItem value="default">По умолчанию</UiSelectItem>
                <UiSelectItem value="cheaper">Сначала дешевле</UiSelectItem>
                <UiSelectItem value="expensive">Сначала дороже</UiSelectItem>
                <UiSelectItem value="atoz">По алфавиту (А 🠖 Я)</UiSelectItem>
                <UiSelectItem value="ztoa">По алфавиту (Я 🠖 А)</UiSelectItem>
              </UiSelectGroup>
            </UiSelectContent>
          </UiSelect>

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

catsStore.getCats();
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
