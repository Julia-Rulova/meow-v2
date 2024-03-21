<template>
  <section
    class="flex flex-col gap-6 justify-between w-full flex-1 min-h-screen"
  >
    <div class="flex flex-col gap-6">
      <LayoutHeader></LayoutHeader>

      <div
        class="flex flex-col items-center justify-center w-full px-4 sm:px-9"
      >
        <CustomPreloader v-if="catsStore.loading"></CustomPreloader>

        <div
          v-else-if="favoriteCats.length === 0"
          class="w-full flex flex-col items-center justify-center mt-20"
        >
          <span class="text-xl">В избранном пусто</span>
          <span> Добавляйте котиков в избранное с помощью ⭐️ </span>

          <img src="../public/cat.svg" class="w-52 object-cover mt-8" />
        </div>

        <div
          v-else
          class="flex flex-col align-center justify-center gap-8 sm:gap-16 w-full"
        >
          <TransitionGroup
            name="list"
            tag="ul"
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2.5"
          >
            <li v-for="cat in favoriteCatsSlice" :key="cat.$id" class="flex">
              <CatsCardMain :cat="cat"></CatsCardMain>
            </li>
          </TransitionGroup>

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

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
