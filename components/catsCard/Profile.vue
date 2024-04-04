<template>
  <UiCard class="w-full">
    <UiCardContent
      class="flex flex-col justify-between items-start gap-3 p-4 lg:flex-row lg:items-center lg:gap-6"
    >
      <div class="w-full flex gap-3 flex-col lg:flex-row lg:gap-6">
        <img
          :src="props.cat.img"
          :alt="props.cat.name"
          class="h-56 object-cover rounded lg:w-28 lg:h-28"
        />

        <ul class="grid grid-cols-2 gap-y-3 gap-x-4 lg:grid-cols-3">
          <li class="flex flex-col">
            <span class="text-xs text-slate-500 sm:text-sm"> Имя:</span>
            <span class="text-sm sm:text-base"> {{ props.cat.name }}</span>
          </li>
          <li class="flex flex-col">
            <span class="text-xs text-slate-500 sm:text-sm"> Возраст:</span>
            <span class="text-sm sm:text-base">
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
          </li>
          <li class="flex flex-col">
            <span class="text-xs text-slate-500 sm:text-sm"> Вакцинация:</span>
            <span class="text-sm sm:text-base">
              {{ props.cat.vaccine ? "Есть" : "Нет" }}
            </span>
          </li>
          <li class="flex flex-col">
            <span class="text-xs text-slate-500 sm:text-sm">
              Отношение к людям:
            </span>
            <span class="text-sm sm:text-base">
              {{ props.cat.relation_people }}
            </span>
          </li>
          <li class="flex flex-col">
            <span class="text-xs text-slate-500 sm:text-sm">
              Отношение к другим животным:
            </span>
            <span class="text-sm sm:text-base">
              {{ props.cat.relation_animals }}
            </span>
          </li>
          <li class="flex flex-col">
            <span class="text-xs text-slate-500 sm:text-sm">
              Телефон для связи:
            </span>
            <span class="text-sm sm:text-base"> {{ props.cat.phone }}</span>
          </li>
        </ul>
      </div>

      <div class="flex flex-row gap-2 lg:flex-col">
        <ModalEditCat :cat="props.cat" :title="'Изменить котика'">
          <UiButton variant="outline">Изменить</UiButton>
        </ModalEditCat>

        <ModalDefault
          :title="'Удалить котика'"
          :descr="'Вы действительно хотите удалить котика? Это действие нельзя будет отменить.'"
          :cancel="'Отменить'"
          :action="'Подтвердить'"
        >
          <UiButton variant="destructive">Удалить</UiButton>
        </ModalDefault>
      </div>
    </UiCardContent>
  </UiCard>
</template>

<script setup lang="ts">
import { getNoun } from "@/utils/getNoun";

const props = defineProps(["cat"]);

const catTags = computed(() => props.cat.tags.split(" "));
</script>
