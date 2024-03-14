<template>
  <section class="w-full flex flex-col items-center justify-start gap-8 p-20">
    <NuxtLink to="/" class="text-left w-full">
      <span>← Обратно на Главную</span>
    </NuxtLink>

    <h2 class="text-2xl">Регистрация</h2>

    <UForm
      :schema="schema"
      :state="state"
      class="gap-3 flex flex-col bg-white px-4 py-5 rounded-xl shadow-xl h-fit min-w-80"
      @submit="onSubmit"
    >
      <UFormGroup label="Имя" name="name" class="w-full">
        <UInput v-model="state.name" />
      </UFormGroup>

      <UFormGroup label="Email" name="email" class="w-full">
        <UInput v-model="state.email" />
      </UFormGroup>

      <UFormGroup label="Телефон" name="phone" class="w-full">
        <UInput v-model="state.phone" />
      </UFormGroup>

      <UFormGroup label="Аватарка" name="ava" class="w-full">
        <UInput v-model="state.ava" />
      </UFormGroup>

      <UFormGroup label="Пароль" name="pass" class="w-full">
        <div class="relative">
          <UInput v-model="state.pass" :type="passType">
            <template #trailing>
              <div></div>
            </template>
          </UInput>
          <Icon
            name="mdi:eye-outline"
            width="20"
            height="20"
            class="cursor-pointer absolute top-1.5 right-1.5"
            @click="changePassType"
          ></Icon>
        </div>
      </UFormGroup>

      <UButton type="submit" block size="md">Зарегистрироватся</UButton>

      <div class="flex flex-col items-center">
        <span class="text-sm">Уже зарегистрированы?</span>
        <NuxtLink to="/sign-in">
          <span class="text-sm underline">Войти</span>
        </NuxtLink>
      </div>
    </UForm>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import { useCatsStore } from "~/store/cats.store";

const catStore = useCatsStore();

const passType = ref("password");

const changePassType = () => {
  if (passType.value === "password") {
    passType.value = "string";
  } else {
    passType.value = "password";
  }
};

const schema = z.object({
  name: z.string().min(1, "Введите имя"),
  email: z.string().email("Введите корректный email"),
  pass: z.string().min(4, "Пароль должен быть не меньше 4 символов"),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  name: "",
  email: "",
  phone: "",
  ava: "",
  pass: "",
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  catStore.createNewCat();
  // Do something with data
  console.log(event.data);
}
</script>
