<template>
  <section class="w-full flex flex-row min-h-screen">
    <div
      class="w-1/3 bg-primary py-5 px-4 flex flex-col items-center justify-between"
    >
      <NuxtLink to="/" class="text-left text-white text-lg w-full">
        <span>← Обратно на Главную</span>
      </NuxtLink>

      <span class="text-white text-4xl font-light text-center max-w-80">
        Добро пожаловать в КОТАлог!
      </span>

      <img src="../public/catSignIn.svg" alt="вход." class="w-9/12" />
    </div>

    <div class="flex flex-col gap-8 items-center pr-12 w-2/3 mt-28">
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
    </div>
  </section>
</template>

<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import { useCatsStore } from "~/store/cats.store";

definePageMeta({
  middleware: "profile-auth",
});

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
