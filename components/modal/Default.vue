<template>
  <UiAlertDialog>
    <UiAlertDialogTrigger as-child>
      <slot />
    </UiAlertDialogTrigger>
    <UiAlertDialogContent class="bg-white">
      <UiAlertDialogHeader>
        <UiAlertDialogTitle>{{ props.title }}</UiAlertDialogTitle>
        <UiAlertDialogDescription>
          {{ props.descr }}
        </UiAlertDialogDescription>
      </UiAlertDialogHeader>
      <UiAlertDialogFooter>
        <UiAlertDialogCancel>{{ props.cancel }}</UiAlertDialogCancel>
        <UiAlertDialogAction class="text-white">{{
          props.action
        }}</UiAlertDialogAction>
      </UiAlertDialogFooter>
    </UiAlertDialogContent>
  </UiAlertDialog>
</template>

<script setup lang="ts">
const props = defineProps(["title", "descr", "cancel", "action"]);
</script>
