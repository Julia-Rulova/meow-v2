<template>
  <section
    class="flex flex-col gap-6 justify-between w-full flex-1 min-h-screen"
  >
    <div class="flex flex-col gap-6">
      <LayoutHeader></LayoutHeader>

      <div class="px-9 flex flex-row gap-14">
        <UVerticalNavigation
          :links="links"
          class="border-r border-gray-200 h-[85vh] sticky top-5 left-8 w-64"
          :ui="{
            active: 'border-r border-r-2 border-r-primary rounded-r-none',
          }"
        >
          <template #default="{ link }">
            <span
              class="group-hover:text-primary relative text-lg whitespace-nowrap"
            >
              {{ link.label }}
            </span>
          </template>
        </UVerticalNavigation>

        <UForm
          :schema="schema"
          :state="stateForm"
          class="w-1/2 flex flex-col gap-3"
          @submit="onSubmit"
        >
          <UFormGroup label="Аватар" name="ava">
            <img
              :src="user.ava"
              class="w-24 h-24 rounded-full object-cover cursor-pointer"
            />
          </UFormGroup>

          <UFormGroup label="Имя" name="name">
            <UInput v-model="stateForm.name" />
          </UFormGroup>

          <UFormGroup label="О себе" name="descr">
            <UTextarea v-model="stateForm.descr" autoresize />
          </UFormGroup>

          <UFormGroup label="Номер телефона" name="phone">
            <UInput v-model="stateForm.phone" />
          </UFormGroup>

          <UFormGroup label="Ссылка на канал Telegram" name="telegram">
            <UInput v-model="stateForm.telegram" />
          </UFormGroup>

          <UFormGroup label="Ссылка на аккаунт Instagram" name="insta">
            <UInput v-model="stateForm.inst" />
          </UFormGroup>

          <UButton
            type="submit"
            block
            size="md"
            :disabled="JSON.stringify(user) === JSON.stringify(stateForm)"
            class="w-60 mt-10"
          >
            Сохранить
          </UButton>
        </UForm>
      </div>
    </div>

    <LayoutFooter></LayoutFooter>
  </section>
</template>

<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import { useAuthStore } from "~/store/auth.store";

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with data
  console.log(event.data);
}

definePageMeta({
  middleware: "auth",
});

const authStore = useAuthStore();

const user = computed(() => authStore.user);

const links = [
  {
    label: "Аккаунт",
    to: "/profile",
  },
  {
    label: "Мои котики",
    to: "/my-cats",
  },
];

const schema = z.object({
  name: z.string().min(1, "Введите имя"),
  phone: z.string().min(11, "Введите номер телефона"),
});

type Schema = z.output<typeof schema>;

const stateForm = reactive({ ...user.value });
</script>
