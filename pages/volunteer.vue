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

      <div class="flex flex-row justify-center gap-6 px-12">
        <div class="flex flex-col gap-6">
          <img
            :src="user.ava"
            :alt="user.name"
            class="object-cover rounded w-80 min-w-80"
          />

          <ul class="flex flex-col gap-1 pl-3 border-l-2 border-primary">
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

        <div class="flex flex-col gap-3">
          <h3 class="text-2xl">{{ user.name }}</h3>

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
];
</script>
