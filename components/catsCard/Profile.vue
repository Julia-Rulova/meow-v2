<template>
  <UiCard class="w-full">
    <UiCardContent class="flex flex-row justify-between items-center gap-6 p-4">
      <div class="flex flex-row gap-6">
        <img
          :src="props.cat.img"
          :alt="props.cat.name"
          class="w-28 h-28 object-cover rounded"
        />

        <ul class="grid grid-cols-3 gap-y-3 gap-x-4">
          <li class="flex flex-col">
            <span class="text-sm text-slate-500"> Имя:</span>
            <span> {{ props.cat.name }}</span>
          </li>
          <li class="flex flex-col">
            <span class="text-xs text-slate-500"> Возраст:</span>
            <span>
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
            <span class="text-sm text-slate-500"> Вакцинация:</span>
            <span> {{ props.cat.vaccine ? "Есть" : "Нет" }}</span>
          </li>
          <li class="flex flex-col">
            <span class="text-sm text-slate-500"> Отношение к людям: </span>
            <span> {{ props.cat.relation_people }}</span>
          </li>
          <li class="flex flex-col">
            <span class="text-sm text-slate-500">
              Отношение к другим животным:
            </span>
            <span> {{ props.cat.relation_animals }}</span>
          </li>
          <li class="flex flex-col">
            <span class="text-sm text-slate-500"> Телефон для связи: </span>
            <span> {{ props.cat.phone }}</span>
          </li>
        </ul>
      </div>

      <div class="flex flex-col gap-2">
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
