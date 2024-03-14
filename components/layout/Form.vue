<template>
  <UForm
    :schema="schema"
    :state="state"
    class="space-y-4 bg-white px-4 py-5 rounded-xl shadow-xl h-fit"
    @submit="onSubmit"
  >
    <span class="text-lg mb-2.5">Добавить котика</span>

    <UFormGroup label="Имя" name="name">
      <UInput v-model="state.name" />
    </UFormGroup>

    <UFormGroup label="Описание" name="descr">
      <UTextarea v-model="state.descr" />
    </UFormGroup>

    <UFormGroup label="Возраст" name="age">
      <UInput v-model="state.age" />
    </UFormGroup>

    <UFormGroup label="Ссылка на изображение" name="img">
      <UInput v-model="state.img" />
    </UFormGroup>

    <UFormGroup label="Вакцинация" name="vaccine">
      <UCheckbox name="vaccine" />
    </UFormGroup>

    <UFormGroup label="Отношение к людям" name="relation_people">
      <UInput v-model="state.relation_people" />
    </UFormGroup>

    <UFormGroup label="Отношение к другим животным" name="relation_animals">
      <UInput v-model="state.relation_animals" />
    </UFormGroup>

    <UFormGroup label="Контакты" name="contacts">
      <UiTagsInput v-model="state.contacts">
        <UiTagsInputItem
          v-for="item in state.contacts"
          :key="item"
          :value="item"
        >
          <UiTagsInputItemText />
          <UiTagsInputItemDelete />
        </UiTagsInputItem>

        <UiTagsInputInput placeholder="Контакты..." />
      </UiTagsInput>
    </UFormGroup>

    <UButton type="submit" block size="md">Добавить котика</UButton>
  </UForm>
</template>

<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import { useCatsStore } from "~/store/cats.store";

const catStore = useCatsStore();

const schema = z.object({
  name: z.string().min(1, "Введите имя котика"),
  descr: z.string().min(10, "Введите описание котика"),
  img: z.string().url("Вы ввели некорректную ссылку"),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  name: "",
  descr: "",
  img: "",
  age: 0,
  vaccine: false,
  relation_people: "",
  relation_animals: "",
  contacts: [],
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  catStore.createNewCat();
  // Do something with data
  console.log(event.data);
}
</script>
