<template>
  <section
    class="flex flex-col gap-6 justify-between w-full flex-1 min-h-screen"
  >
    <div class="flex flex-col gap-6">
      <LayoutHeader></LayoutHeader>

      <div class="flex flex-col justify-center items-center">
        <CustomCarousel :imgs="catImgs"></CustomCarousel>
        <span>{{ currentCat }}</span>
      </div>
    </div>

    <LayoutFooter></LayoutFooter>
  </section>
</template>

<script setup lang="ts">
import { useCatsStore } from "~/store/cats.store";

const catsStore = useCatsStore();

let catImgs = [
  {
    url: "https://i.pinimg.com/736x/27/c4/c7/27c4c7f5d6f13bc47fae33c83ef794c7--autumn-animals-cat-wallpaper.jpg",
  },
  {
    url: "https://i.pinimg.com/736x/27/c4/c7/27c4c7f5d6f13bc47fae33c83ef794c7--autumn-animals-cat-wallpaper.jpg",
  },
  {
    url: "https://i.pinimg.com/736x/27/c4/c7/27c4c7f5d6f13bc47fae33c83ef794c7--autumn-animals-cat-wallpaper.jpg",
  },
  {
    url: "https://i.pinimg.com/736x/27/c4/c7/27c4c7f5d6f13bc47fae33c83ef794c7--autumn-animals-cat-wallpaper.jpg",
  },
  {
    url: "https://i.pinimg.com/736x/27/c4/c7/27c4c7f5d6f13bc47fae33c83ef794c7--autumn-animals-cat-wallpaper.jpg",
  },
  {
    url: "https://i.pinimg.com/736x/27/c4/c7/27c4c7f5d6f13bc47fae33c83ef794c7--autumn-animals-cat-wallpaper.jpg",
  },
  {
    url: "https://i.pinimg.com/736x/27/c4/c7/27c4c7f5d6f13bc47fae33c83ef794c7--autumn-animals-cat-wallpaper.jpg",
  },
  {
    url: "https://i.pinimg.com/736x/27/c4/c7/27c4c7f5d6f13bc47fae33c83ef794c7--autumn-animals-cat-wallpaper.jpg",
  },
  {
    url: "https://i.pinimg.com/736x/27/c4/c7/27c4c7f5d6f13bc47fae33c83ef794c7--autumn-animals-cat-wallpaper.jpg",
  },
  {
    url: "https://i.pinimg.com/736x/27/c4/c7/27c4c7f5d6f13bc47fae33c83ef794c7--autumn-animals-cat-wallpaper.jpg",
  },
];

const currentCat = computed(() => catsStore.currentCat);
</script>

<style scoped></style>
