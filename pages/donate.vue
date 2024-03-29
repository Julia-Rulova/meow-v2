<template>
  <section
    class="flex flex-col gap-6 justify-between w-full flex-1 min-h-screen"
  >
    <div class="flex flex-col gap-6">
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

      <div class="w-full flex flex-col items-center">
        <ul
          class="grid grid-cols-1 gap-4 w-full px-6 sm:grid-cols-2 md:px-0 md:w-2/3 lg:w-1/2"
        >
          <li
            class="bg-white px-4 py-5 shadow-xl flex flex-col items-center justify-between sm:py-10"
          >
            <h4 class="text-xl mb-5 font-semibold sm:text-2xl">СБЕРБАНК</h4>

            <div class="flex flex-col items-center w-full">
              <span class="text-primary font-semibold">
                1234 5678 9012 3456
              </span>
              <span>На имя Иван Иванович И.</span>
            </div>
          </li>
          <li
            class="bg-white px-4 py-5 shadow-xl flex flex-col items-center justify-between sm:py-10"
          >
            <h4 class="text-xl mb-5 font-semibold sm:text-2xl">
              ВТБ и СБЕРБАНК
            </h4>

            <div class="flex flex-col items-center w-full">
              <span class="text-primary font-semibold">+7 777 777 77 77</span>
              <span>На имя Иван Иванович И.</span>
            </div>
          </li>
        </ul>

        <div
          class="flex flex-col items-end gap-1.5 my-6 sm:gap-0 sm:flex-row sm:items-start sm:my-16"
        >
          <div
            class="text-lg bg-primary text-white relative p-4 text-center rounded-lg after:content-[''] after:inline-block after:w-4 after:h-4 after:bg-primary after:absolute after:origin-center after:[clip-path:polygon(0%_0%,100%_0%,50%_100%)] after:-bottom-2 after:-left-2 after:rotate-45 sm:after:left-auto sm:after:-bottom-2 sm:after:-right-2 sm:after:-rotate-45"
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
