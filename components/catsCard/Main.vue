<template>
  <UiCard class="flex-1 flex flex-col relative group">
    <img
      :src="props.cat.img"
      :alt="props.cat.name"
      class="rounded-t-xl object-cover h-60"
    />

    <UiCardContent class="flex flex-col py-3 px-4 justify-between flex-1 gap-3">
      <div>
        <h3 class="text-xl mb-2 font-semibold">
          {{ props.cat.name }},
          <span class="text-lg font-light">
            {{
              props.cat.age + " " + getNoun(props.cat.age, "год", "года", "лет")
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
      </div>
    </UiCardContent>

    <UiCardFooter class="px-4 py-4">
      <UiButton class="w-full text-white">Добавить в избранное</UiButton>
    </UiCardFooter>

    <ModalDefault
      :title="'Удалить котика'"
      :descr="'Вы действительно хотите удалить котика? Это действие нельзя будет отменить.'"
      :cancel="'Отменить'"
      :action="'Подтвердить'"
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

const props = defineProps(["cat"]);
</script>

<style scoped></style>
