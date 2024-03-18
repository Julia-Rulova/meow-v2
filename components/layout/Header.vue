<template>
  <header
    class="bg-red-400 px-2.5 py-4 flex items-center justify-between shadow-xl"
  >
    <NuxtLink to="/">
      <Icon name="mdi:cat" style="color: white" width="48" height="48"></Icon>
    </NuxtLink>

    <span class="text-2xl text-slate-50">MEOW project</span>

    <div class="flex gap-3">
      <NuxtLink to="/favorites">
        <Icon
          name="akar-icons:star"
          style="color: white"
          width="32"
          height="32"
        ></Icon>
      </NuxtLink>

      <NuxtLink to="/profile">
        <Icon
          name="ph:user-bold"
          style="color: white"
          width="32"
          height="32"
          class="cursor-pointer"
        ></Icon>
      </NuxtLink>
    </div>
  </header>
</template>

<script lang="ts" setup>
const router = useRouter();

const logout = async () => {};
</script>
