<template>
  <section
    class="flex flex-col gap-6 justify-between w-full flex-1 min-h-screen"
  >
    <div class="flex flex-col gap-3 md:gap-6">
      <LayoutHeader></LayoutHeader>

      <div class="flex flex-col gap-6 lg:px-9 lg:flex-row">
        <UVerticalNavigation
          :links="links"
          class="hidden border-r border-gray-200 h-[85vh] sticky top-5 left-8 w-1/5 lg:block"
          :ui="{
            active: 'border-r border-r-2 border-r-primary rounded-r-none',
          }"
        >
          <template #default="{ link }">
            <span
              class="group-hover:text-primary relative text-lg whitespace-nowrap"
            >
              {{ link.label }}
            </span>
          </template>
        </UVerticalNavigation>

        <UHorizontalNavigation
          :links="links"
          class="lg:hidden border-b px-8 bg-transparent static border-t-0"
        />

        <div class="flex-1 flex flex-col gap-4 px-4 lg:px-0">
          <div class="w-full flex flex-row gap-3">
            <UInput
              icon="i-heroicons-magnifying-glass-20-solid"
              size="md"
              color="white"
              :trailing="false"
              placeholder="Введите имя для поиска"
              class="flex-1"
            />

            <ModalEditCat :cat="catsStore.newCat" :title="'Добавить котика'">
              <UiButton class="flex gap-1">
                <Icon
                  name="ic:round-plus"
                  width="20"
                  height="20"
                  style="color: white"
                ></Icon>
                <span class="text-white hidden md:inline">Добавить котика</span>
              </UiButton>
            </ModalEditCat>
          </div>

          <CustomPreloader v-if="catsStore.loading"></CustomPreloader>

          <div
            v-else-if="cats.length === 0"
            class="w-full flex flex-col items-center justify-center mt-20"
          >
            <span class="text-xl">У Вас пока нет котиков</span>
            <span>
              Добавляйте котиков в избранное с помощью кнопки в верху страницы
            </span>

            <img src="../public/cat.svg" class="w-48 object-cover mt-8" />
          </div>

          <ul
            v-else
            class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:flex lg:flex-col"
          >
            <li v-for="cat in cats" :key="cat.$id" class="flex">
              <CatsCardProfile :cat="cat"></CatsCardProfile>
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

definePageMeta({
  middleware: "cat-auth",
});

const catsStore = useCatsStore();

const links = [
  {
    label: "Аккаунт",
    to: "/profile",
  },
  {
    label: "Мои котики",
    to: "/my-cats",
  },
];

const cats = computed(() => catsStore.cats);
</script>
