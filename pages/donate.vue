<template>
  <section
    class="flex flex-col gap-6 justify-between w-full flex-1 min-h-screen"
  >
    <div class="flex flex-col gap-6">
      <LayoutHeader></LayoutHeader>

      <UHorizontalNavigation
        :links="links"
        class="border-b border-gray-200 dark:border-gray-800 px-8"
        :ui="{
          base: 'text-base',
        }"
      />

      <div class="w-full flex flex-col items-center">
        <ul class="grid grid-cols-2 gap-4 w-1/2">
          <li
            class="bg-white px-4 py-10 shadow-xl flex flex-col items-center justify-between"
          >
            <h4 class="text-2xl mb-5 font-semibold">СБЕРБАНК</h4>

            <div class="flex flex-col items-center w-full">
              <span class="text-primary font-semibold"
                >1234 5678 9012 3456</span
              >
              <span>На имя Иван Иванович И.</span>
            </div>
          </li>
          <li
            class="bg-white px-4 py-10 shadow-xl flex flex-col items-center justify-between"
          >
            <h4 class="text-2xl mb-5 font-semibold">ВТБ и СБЕРБАНК</h4>

            <div class="flex flex-col items-center w-full">
              <span class="text-primary font-semibold">+7 777 777 77 77</span>
              <span>На имя Иван Иванович И.</span>
            </div>
          </li>
        </ul>

        <div class="flex flex-row items-start my-16">
          <div
            class="text-lg bg-primary text-white relative p-4 text-center rounded-lg after:content-[''] after:inline-block after:w-4 after:h-4 after:bg-primary after:absolute after:-bottom-2 after:-right-2 after:origin-center after:-rotate-45 after:[clip-path:polygon(0%_0%,100%_0%,50%_100%)]"
          >
            Спасибо! 🐱❤️
          </div>
          <img src="../public/catDonate.svg" class="w-64 h-64 object-contain" />
        </div>
      </div>
    </div>

    <LayoutFooter></LayoutFooter>
  </section>
</template>

<script setup lang="ts">
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
