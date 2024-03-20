<template>
  <section
    class="flex flex-col gap-6 justify-between w-full flex-1 min-h-screen"
  >
    <div class="flex flex-col gap-6">
      <LayoutHeader></LayoutHeader>

      <div
        class="flex flex-col align-center justify-center w-full px-4 sm:px-9"
      >
        <CustomPreloader v-if="catsStore.loading"></CustomPreloader>

        <div
          v-else
          class="flex flex-col align-center justify-center gap-8 sm:gap-16 w-full"
        >
          <ul
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2.5"
          >
            <li v-for="cat in favoriteCatsSlice" :key="cat.$id" class="flex">
              <CatsCardMain :cat="cat"></CatsCardMain>
            </li>
          </ul>

          <CustomPagination
            :total="favoriteCats.length"
            @page-update="handlePageUpdate"
          ></CustomPagination>
        </div>
      </div>
    </div>

    <LayoutFooter></LayoutFooter>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useCatsStore } from "~/store/cats.store";

const catsStore = useCatsStore();

const favoriteCats = computed(() => catsStore.favoriteCats);
const favoriteCatsSlice = computed(() => catsStore.favoriteCatsSlice);

const handlePageUpdate = (e: number) => {
  catsStore.showFavoriteCatsPage(e);
};

onMounted(() => {
  catsStore.getFavoriteCats();
});
</script>
