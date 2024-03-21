<template>
  <UiDialog>
    <UiDialogTrigger as-child> <slot /> </UiDialogTrigger>
    <UiDialogContent class="sm:max-w-[425px] bg-white">
      <UiDialogHeader>
        <UiDialogTitle>{{ title }}</UiDialogTitle>
      </UiDialogHeader>
      <UForm
        :schema="schema"
        :state="stateForm"
        class="space-y-4 max-h-[80vh] overflow-y-auto px-6"
        @submit="onSubmit"
      >
        <UFormGroup label="Имя" name="name">
          <UInput v-model="stateForm.name" />
        </UFormGroup>

        <UFormGroup label="Описание" name="descr">
          <UTextarea v-model="stateForm.descr" autoresize />
        </UFormGroup>

        <UFormGroup label="Возраст: количество полных лет" name="years">
          <UInput v-model="stateForm.years" />
        </UFormGroup>

        <UFormGroup label="Возраст: количество полных месяцев" name="months">
          <UInput v-model="stateForm.months" />
        </UFormGroup>

        <UFormGroup label="Ссылка на изображение" name="img">
          <UInput v-model="stateForm.img" />
        </UFormGroup>

        <UFormGroup label="Вакцинация" name="vaccine">
          <UCheckbox name="vaccine" v-model="stateForm.vaccine" />
        </UFormGroup>

        <UFormGroup label="Отношение к людям" name="relation_people">
          <UInput v-model="stateForm.relation_people" />
        </UFormGroup>

        <UFormGroup label="Отношение к другим животным" name="relation_animals">
          <UInput v-model="stateForm.relation_animals" />
        </UFormGroup>

        <UFormGroup label="Телефон для связи" name="phone">
          <UInput v-model="stateForm.phone" />
        </UFormGroup>

        <UFormGroup label="Тэги" name="tags">
          <UInput v-model="stateForm.tags" />
        </UFormGroup>

        <UButton
          type="submit"
          block
          size="md"
          :disabled="JSON.stringify(props.cat) === JSON.stringify(stateForm)"
        >
          Сохранить
        </UButton>
      </UForm>
    </UiDialogContent>
  </UiDialog>
</template>

<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";

const props = defineProps(["cat", "title"]);

const schema = z.object({
  name: z.string().min(1, "Введите имя"),
  years: z.number({
    required_error: "Введите количество лет",
  }),
  months: z.number({
    required_error: "Введите количество месяцев",
  }),
  descr: z.string().min(10, "Введите описание"),
});

type Schema = z.output<typeof schema>;

const stateForm = reactive({ ...props.cat });

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with data
  console.log(event.data);
}
</script>
