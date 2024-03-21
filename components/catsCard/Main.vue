<template>
  <UiCard class="flex-1 flex flex-col relative group">
    <img
      :src="props.cat.img"
      :alt="props.cat.name"
      class="rounded-t-xl object-cover h-60 w-full"
    />

    <UiCardContent class="flex flex-col py-3 px-4 justify-between flex-1 gap-3">
      <div>
        <h3 class="text-xl mb-2 font-semibold">
          {{ props.cat.name }},
          <span class="text-lg font-light">
            {{
              props.cat.years +
              " " +
              getNoun(props.cat.years, "год", "года", "лет") +
              " " +
              props.cat.months +
              " " +
              getNoun(props.cat.months, "месяц", "месяца", "месяцев")
            }}
          </span>
        </h3>

        <ul class="flex flex-col gap-1">
          <li>
            <p class="text-sm">
              <Icon
                name="material-symbols-light:syringe-outline"
                width="20"
                height="20"
              ></Icon>
              <span
                class="underline mr-2 max-w-36 font-semibold decoration-primary"
              >
                Вакцинация:
              </span>

              <Icon
                v-if="props.cat.vaccine"
                name="lets-icons:check-round-fill"
                width="21"
                height="21"
                style="color: green"
              ></Icon>
              <Icon
                v-else
                name="ion:close-circle"
                width="20"
                height="20"
                style="color: red"
              ></Icon>
            </p>
          </li>
          <li>
            <p class="text-sm">
              <Icon
                name="solar:people-nearby-outline"
                width="18"
                height="18"
              ></Icon>
              <span
                class="underline mr-2 max-w-36 font-semibold decoration-primary"
              >
                Отношение к людям:
              </span>
              {{ props.cat.relation_people }}
            </p>
          </li>
          <li>
            <p class="text-sm">
              <Icon
                name="fluent:animal-dog-16-regular"
                width="18"
                height="18"
              ></Icon>
              <span
                class="underline mr-2 whitespace-nowrap font-semibold decoration-primary"
              >
                Отношение к другим животным:
              </span>
              {{ props.cat.relation_animals }}
            </p>
          </li>
        </ul>

        <ul class="flex flex-row gap-x-1 flex-wrap mt-4">
          <li v-for="(item, index) in catTags" :key="index" class="text-sm">
            #{{ item }}
          </li>
        </ul>
      </div>
    </UiCardContent>

    <UiCardFooter class="px-4 py-4 flex flex-row gap-2">
      <NuxtLink :to="`/cats/${props.cat.$id}`" class="w-11/12">
        <UiButton class="w-full text-white"> Подробнее </UiButton>
      </NuxtLink>

      <UiButton size="icon" @click="setFavorite">
        <Icon
          v-if="favoriteActive"
          name="clarity:star-solid"
          style="color: white"
          width="20"
          height="20"
        ></Icon>
        <Icon
          v-else
          name="clarity:star-line"
          style="color: white"
          width="20"
          height="20"
        ></Icon>
      </UiButton>
    </UiCardFooter>

    <ModalDefault
      :title="'Удалить котика'"
      :descr="'Вы действительно хотите удалить котика? Это действие нельзя будет отменить.'"
      :cancel="'Отменить'"
      :action="'Подтвердить'"
      v-if="props.cat.owner_id === user.id"
    >
      <UiButton
        size="icon"
        class="hidden group-hover:block absolute -top-4 -right-4 z-10"
      >
        <Icon
          name="mi:delete"
          width="20"
          height="20"
          style="color: white"
        ></Icon>
      </UiButton>
    </ModalDefault>
  </UiCard>
</template>

<script setup lang="ts">
import { getNoun } from "@/utils/getNoun";
import { useAuthStore } from "~/store/auth.store";
import { useCatsStore } from "~/store/cats.store";

const props = defineProps(["cat"]);

const authStore = useAuthStore();
const catsStore = useCatsStore();

const user = computed(() => authStore.user);

const favoriteCats = computed(() => catsStore.favoriteCats);

const catTags = computed(() => props.cat.tags.split(" "));

const favoriteActive = computed(() =>
  favoriteCats.value.find((f) => f.$id === props.cat.$id)
);

const setFavorite = () => {
  catsStore.setFavoriteCat(props.cat);
};
</script>

<style scoped></style>
