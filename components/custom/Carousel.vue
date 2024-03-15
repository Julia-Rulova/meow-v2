<script setup lang="ts">
import { ref } from "vue";
import { watchOnce } from "@vueuse/core";
import { type CarouselApi } from "@/components/ui/carousel";

const props = defineProps(["imgs"]);

const emblaMainApi = ref<CarouselApi>();
const emblaThumbnailApi = ref<CarouselApi>();
const selectedIndex = ref(0);

function onSelect() {
  if (!emblaMainApi.value || !emblaThumbnailApi.value) return;
  selectedIndex.value = emblaMainApi.value.selectedScrollSnap();
  emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap());
}

function onThumbClick(index: number) {
  if (!emblaMainApi.value || !emblaThumbnailApi.value) return;
  emblaMainApi.value.scrollTo(index);
}

watchOnce(emblaMainApi, (emblaMainApi) => {
  if (!emblaMainApi) return;

  onSelect();
  emblaMainApi.on("select", onSelect);
  emblaMainApi.on("reInit", onSelect);
});
</script>

<template>
  <div class="sm:w-auto">
    <UiCarousel
      class="relative w-full max-w-lg"
      @init-api="(val: CarouselApi) => (emblaMainApi = val)"
    >
      <UiCarouselContent>
        <UiCarouselItem v-for="(img, index) in props.imgs" :key="index">
          <div class="p-1">
            <img :src="img.url" />
          </div>
        </UiCarouselItem>
      </UiCarouselContent>
    </UiCarousel>

    <UiCarousel
      class="relative w-full max-w-lg"
      @init-api="(val: CarouselApi) => (emblaThumbnailApi = val)"
    >
      <UiCarouselContent class="flex gap-1 ml-0">
        <UiCarouselItem
          v-for="(img, index) in imgs"
          :key="index"
          class="pl-0 basis-1/4 cursor-pointer"
          @click="onThumbClick(index)"
        >
          <div class="p-1" :class="index === selectedIndex ? '' : 'opacity-50'">
            <img :src="img.url" />
          </div>
        </UiCarouselItem>
      </UiCarouselContent>
    </UiCarousel>
  </div>
</template>
