<template>
  <div class="collapse collapse-arrow">
    <input type="radio" name="my-accordion-2" />
    <div class="collapse-title text-xl font-medium">Price</div>
    <div class="collapse-content">
      <label class="label">
        <span class="label-text">Minimum</span>
        <span class="label-text-alt" v-if="minPrice">Min : {{ minPrice }}</span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        class="input input-bordered input-primary w-full max-w-xs"
        v-model="minimum"
      />
      <label class="label">
        <span
          class="label-text-alt font-bold text-error"
          v-if="minimum < minPrice || minimum > maxPrice"
          >You have to choose between minimum and maximum</span
        >
      </label>
      <label class="label">
        <span class="label-text">Maximum</span>
        <span class="label-text-alt" v-if="minPrice">Min : {{ maxPrice }}</span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        class="input input-bordered input-primary w-full max-w-xs"
        v-model="maximum"
      />
      <label class="label">
        <span
          class="label-text-alt font-bold text-error"
          v-if="maximum < minPrice || maximum > maxPrice"
          >You have to choose between minimum and maximum</span
        >
      </label>
      <button class="btn btn-primary mt-4" @click="filter">Apply</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { watchEffect, ref } from "vue";
import { storeToRefs } from "pinia";
import { productStore } from "@/stores/products.ts";
const store = productStore();
const { minPrice, maxPrice } = storeToRefs(store);
const maximum = ref<number>(0);
const minimum = ref<number>(0);

watchEffect(() => {
  minimum.value = store.minPrice;
  maximum.value = store.maxPrice;
});

const filter = () => {
  console.log(minimum.value, minPrice);
  console.log(maximum.value, maxPrice);

  if (
    minimum.value < minPrice._value ||
    minimum.value > maxPrice._value ||
    maximum.value < minPrice._value ||
    maximum.value > maxPrice._value
  )
    return;
  console.log("HERE");

  store.filterProductsByPrice(minimum.value, maximum.value);
};
</script>
