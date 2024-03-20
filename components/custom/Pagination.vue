<template>
  <UiPagination
    v-slot="{ page }"
    :total="props.total"
    :sibling-count="1"
    show-edges
    :default-page="1"
    :itemsPerPage="10"
    @update:page="handlePageUpdate"
  >
    <UiPaginationList
      v-slot="{ items }"
      class="flex items-center justify-center gap-1"
    >
      <UiPaginationFirst />
      <UiPaginationPrev />

      <template v-for="(item, index) in items">
        <UiPaginationListItem
          v-if="item.type === 'page'"
          :key="index"
          :value="item.value"
          as-child
        >
          <UiButton
            class="w-10 h-10 p-0"
            :variant="item.value === page ? 'default' : 'outline'"
            :class="{ 'text-white': item.value === page }"
          >
            {{ item.value }}
          </UiButton>
        </UiPaginationListItem>
        <UiPaginationEllipsis v-else :key="item.type" :index="index" />
      </template>

      <UiPaginationNext />
      <UiPaginationLast />
    </UiPaginationList>
  </UiPagination>
</template>

<script setup lang="ts">
const props = defineProps(["total"]);

const emit = defineEmits(["pageUpdate"]);

const handlePageUpdate = (e: number) => {
  emit("pageUpdate", e);
};
</script>
