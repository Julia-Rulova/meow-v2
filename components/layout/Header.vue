<template>
  <header
    class="bg-red-400 px-1.5 py-2 sm:px-2.5 sm:py-4 flex items-center justify-between shadow-xl"
  >
    <NuxtLink to="/">
      <Icon
        name="mdi:cat"
        style="color: white"
        class="w-9 h-9 sm:w-12 sm:h-12"
      ></Icon>
    </NuxtLink>

    <span class="text-xl sm:text-2xl text-slate-50">MEOW project</span>

    <div class="flex gap-3">
      <NuxtLink to="/favorites">
        <Icon
          name="akar-icons:star"
          style="color: white"
          class="w-6 h-6 sm:w-8 sm:h-8"
        ></Icon>
      </NuxtLink>

      <NuxtLink to="/profile">
        <Icon
          name="ph:user-bold"
          style="color: white"
          class="w-6 h-6 sm:w-8 sm:h-8"
        ></Icon>
      </NuxtLink>
    </div>
  </header>
</template>

<script lang="ts" setup>
const router = useRouter();

const logout = async () => {};
</script>
