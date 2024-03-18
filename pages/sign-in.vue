<template>
  <section class="w-full flex flex-col items-center justify-start gap-8 p-20">
    <NuxtLink to="/" class="text-left w-full">
      <span>← Обратно на Главную</span>
    </NuxtLink>

    <h2 class="text-2xl">Вход</h2>

    <UForm
      :schema="schema"
      :state="state"
      class="gap-3 flex flex-col bg-white px-4 py-5 rounded-xl shadow-xl h-fit min-w-80"
      @submit="onSubmit"
    >
      <UFormGroup label="Логин" name="login" class="w-full">
        <UInput v-model="state.login" />
      </UFormGroup>

      <UFormGroup label="Пароль" name="pass" class="w-full">
        <UInput v-model="state.pass" type="password" />
      </UFormGroup>

      <UButton type="submit" block size="md">Войти</UButton>
    </UForm>
  </section>
</template>

<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import { useCatsStore } from "~/store/cats.store";

const catStore = useCatsStore();

const schema = z.object({
  login: z.string().min(1, "Введите корректный login"),
  pass: z.string().min(4, "Введите пароль"),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  login: "",
  pass: "",
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  catStore.createNewCat();
  // Do something with data
  console.log(event.data);
}
</script>
