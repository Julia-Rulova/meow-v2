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

    <UFormGroup label="Цена" name="price">
      <UInput v-model="state.price" type="number" />
    </UFormGroup>

    <UFormGroup label="Ссылка на изображение" name="img">
      <UInput v-model="state.img" />
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
  price: z.number().min(0, "Заполните это поле"),
  img: z.string().url("Вы ввели некорректную ссылку"),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  name: "",
  descr: "",
  price: 0,
  img: "",
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  catStore.createNewCat();
  // Do something with data
  console.log(event.data);
}
</script>
