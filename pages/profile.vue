<template>
  <section
    class="flex flex-col gap-6 justify-between w-full flex-1 min-h-screen"
  >
    <div class="flex flex-col gap-3 md:gap-6">
      <LayoutHeader></LayoutHeader>

      <div class="flex flex-col gap-6 md:gap-14 md:flex-row md:px-9">
        <UVerticalNavigation
          :links="links"
          class="hidden border-r border-gray-200 h-[85vh] sticky top-5 left-8 w-1/5 md:block"
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

        <UHorizontalNavigation
          :links="links"
          class="md:hidden border-b px-8 bg-transparent static border-t-0"
        />

        <UForm
          :schema="schema"
          :state="stateForm"
          class="flex flex-col gap-3 w-full px-9 md:px-0 md:w-4/5 lg:w-1/2"
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
            class="mt-4 w-fit sm:w-60 md:mt-10"
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

definePageMeta({
  middleware: "profile-auth",
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

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with data
  console.log(event.data);
}
</script>
~/store/profile-auth.store
