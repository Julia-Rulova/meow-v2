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

      <div class="flex flex-col items-center mx-36">
        <img
          :src="user.ava"
          :alt="user.name"
          class="object-cover rounded-full w-48 h-48 -mb-8 z-10"
        />

        <div
          class="bg-primary text-white px-7 py-9 flex flex-col gap-3 items-center rounded-xl"
        >
          <ul class="flex flex-row gap-3">
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

          <h3 class="text-3xl uppercase">{{ user.name }}</h3>

          <div class="w-full flex flex-row items-end gap-6">
            <p>{{ user.descr }}</p>

            <img
              src="../public/catVolunteer.svg"
              alt="котик."
              class="w-60 object-contain"
            />
          </div>
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
