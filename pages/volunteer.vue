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

      <div class="flex flex-row items-start mx-36 gap-16 mt-8">
        <div class="flex flex-col h-full">
          <div class="relative min-w-72 mb-12">
            <div
              class="border-4 border-primary w-72 h-72 absolute -bottom-8 -left-8 z-0 rounded-xl"
            ></div>

            <img
              :src="user.ava"
              :alt="user.name"
              class="object-cover w-72 h-72 z-10 relative rounded-xl"
            />
          </div>

          <ul
            class="flex flex-col gap-3 -ml-8 border-l-2 pl-2 border-primary border-dashed"
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

        <div class="flex flex-col gap-7">
          <h3
            class="text-6xl uppercase [font-family:monospace] text text-primary font-semibold"
          >
            {{ user.name }}
          </h3>

          <p>{{ user.descr }}</p>
        </div>
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
