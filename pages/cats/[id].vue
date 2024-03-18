<template>
  <section
    class="flex flex-col gap-6 justify-between w-full flex-1 min-h-screen"
  >
    <div class="flex flex-col gap-6">
      <LayoutHeader></LayoutHeader>

      <CustomPreloader v-if="catsStore.loading"></CustomPreloader>

      <div class="grid grid-cols-2 gap-6 px-8">
        <CustomCarousel :imgs="catImgs"></CustomCarousel>

        <ul class="flex flex-col gap-5 justify-between">
          <li class="flex flex-col gap-4">
            <h1 class="text-5xl">{{ currentCat.name }}</h1>

            <ul class="flex flex-col gap-1">
              <li class="flex flex-col">
                <span class="text-sm text-slate-500"> Возраст:</span>
                <span> {{ currentCat.age }}</span>
              </li>
              <li class="flex flex-col">
                <span class="text-sm text-slate-500"> Вакцинация:</span>
                <span> {{ currentCat.vaccine ? "Есть" : "Нет" }}</span>
              </li>
              <li class="flex flex-col">
                <span class="text-sm text-slate-500"> Отношение к людям: </span>
                <span> {{ currentCat.relation_people }}</span>
              </li>
              <li class="flex flex-col">
                <span class="text-sm text-slate-500">
                  Отношение к другим животным:
                </span>
                <span> {{ currentCat.relation_animals }}</span>
              </li>
            </ul>

            <div class="flex flex-col">
              <span class="text-sm text-slate-500"> О котике: </span>
              <span> {{ currentCat.descr }}</span>
            </div>

            <ul class="flex flex-row flex-wrap gap-1">
              <li v-for="(item, index) in catTags" :key="index">
                <UBadge size="md">{{ item }}</UBadge>
              </li>
            </ul>
          </li>

          <li
            class="ring-2 ring-gray-200 py-3 px-4 rounded-lg flex flex-col gap-1 w-fit"
          >
            <span class="text-lg mb-2">
              Хотите взять себе котика или Вам нужна какая-либо дополнительная
              информация?
            </span>

            <div class="flex flex-row gap-5 items-center">
              <span class="underline font-semibold whitespace-nowrap">
                Контактный номер
              </span>

              <span>{{ currentCat.phone }}</span>
            </div>

            <div class="flex flex-row gap-5 items-center">
              <span class="underline font-semibold whitespace-nowrap">
                Номер волонтера
              </span>

              <span>+79037559189</span>

              <a href="https://t.me/+79037559189">
                <UiButton class="text-white gap-1">
                  <Icon
                    name="streamline:telegram"
                    width="20"
                    height="20"
                    style="color: white"
                  ></Icon>
                  Telegram
                </UiButton>
              </a>

              <a href="https://wa.me/+79037559189">
                <UiButton class="text-white gap-1">
                  <Icon
                    name="ic:baseline-whatsapp"
                    width="20"
                    height="20"
                    style="color: white"
                  ></Icon>
                  WhatsApp
                </UiButton>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <LayoutFooter></LayoutFooter>
  </section>
</template>

<script setup lang="ts">
import { useCatsStore } from "~/store/cats.store";
import type { ICat } from "~/store/cats.store";

const route = useRoute();
const catsStore = useCatsStore();

const cats = computed(() => catsStore.cats);

const currentCat = computed(
  () => cats.value.find((c) => c.$id === route.params.id) || ({} as ICat)
);

const catImgs = computed(() => {
  let arr = [];

  for (let i = 0; i < 10; i++) {
    arr.push(currentCat.value.img);
  }

  return arr;
});

const catTags = computed(() => currentCat.value.tags.split(" "));
</script>

<style scoped></style>
