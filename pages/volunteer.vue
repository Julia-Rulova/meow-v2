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

      <div
        class="flex flex-col items-start mx-4 gap-4 sm:mx-10 sm:gap-8 md:mx-36 lg:gap-16 lg:flex-row mt-3 sm:mt-8"
      >
        <div
          class="flex h-full flex-col items-center justify-center w-full sm:flex-row sm:justify-start sm:items-end lg:items-start lg:flex-col"
        >
          <div class="relative lg:min-w-none sm:min-w-72 lg:mb-12">
            <div
              class="hidden sm:flex border-4 border-primary w-52 h-52 rounded-xl relative z-0 lg:absolute lg:-bottom-8 lg:-left-8 lg:w-72 lg:h-72"
            ></div>

            <img
              :src="user.ava"
              :alt="user.name"
              class="object-cover h-52 w-full z-10 shadow-[6px_3px_25px_-7px_rgba(0,0,0,0.72)] rounded-xl sm:w-52 sm:absolute sm:-top-4 sm:left-4 lg:relative lg:top-0 lg:left-0 lg:w-72 lg:h-72"
            />
          </div>

          <ul
            class="hidden sm:flex flex-row flex-wrap gap-3 border-primary border-dashed flex-col -ml-8 border-l-2 pl-2 h-fit lg:h-auto"
          >
            <li>
              <a
                :href="'tel:' + user.phone"
                class="flex flex-row items-center gap-2"
              >
                <Icon name="pepicons-pop:phone-circle" class="w-5 h-5"></Icon>
                <span> {{ user.phone }}</span>
              </a>
            </li>
            <li>
              <a :href="user.telegram" class="flex flex-row items-center gap-2">
                <Icon name="streamline:telegram" class="w-5 h-5"></Icon>
                <span> {{ user.telegram }}</span>
              </a>
            </li>
            <li>
              <a :href="user.inst" class="flex flex-row items-center gap-2">
                <Icon name="fa6-brands:instagram" class="w-5 h-5"></Icon>
                <span>{{ user.inst }}</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="flex flex-col gap-3 sm:gap-7">
          <h3
            class="text-6xl uppercase [font-family:monospace] text text-primary font-semibold"
          >
            {{ user.name }}
          </h3>

          <p>{{ user.descr }}</p>
        </div>

        <ul
          class="flex flex-row flex-wrap gap-3 mt-4 border-primary border-t-2 pt-1.5 border-dashed sm:hidden"
        >
          <li>
            <a
              :href="'tel:' + user.phone"
              class="flex flex-row items-center gap-2"
            >
              <Icon name="pepicons-pop:phone-circle" class="w-5 h-5"></Icon>
              <span> {{ user.phone }}</span>
            </a>
          </li>
          <li>
            <a :href="user.telegram" class="flex flex-row items-center gap-2">
              <Icon name="streamline:telegram" class="w-5 h-5"></Icon>
              <span> {{ user.telegram }}</span>
            </a>
          </li>
          <li>
            <a :href="user.inst" class="flex flex-row items-center gap-2">
              <Icon name="fa6-brands:instagram" class="w-5 h-5"></Icon>
              <span>{{ user.inst }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <LayoutFooter></LayoutFooter>
  </section>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/store/auth.store";

const authStore = useAuthStore();

const user = computed(() => authStore.user);

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
.text {
  animation: slideUp 1.5s forwards;
  display: inline-block;
  transform: translateY(150%);
  opacity: 0;
}

@keyframes slideUp {
  0% {
    transform: translateX(150%);
    opacity: 0;
  }
  25% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.75;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}
</style>
