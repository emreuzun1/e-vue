<template>
  <div class="flex gap-4">
    <div class="w-1/5">
      <Filters />
    </div>
    <ul class="w-4/5 flex flex-wrap gap-4 mt-4">
      <li v-for="product in filteredProducts">
        <ProductCard :product="product" />
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { watchEffect } from "vue";
import { storeToRefs } from "pinia";
import type { Product } from "@/interfaces/Product.ts";
import ProductCard from "@/components/Product/Card.vue";
import Filters from "@/components/Filters/Filters.vue";
import { productStore } from "@/stores/products.ts";
const store = productStore();
const { filteredProducts } = storeToRefs(store);
watchEffect(async () => {
  store.getProducts("https://fakestoreapi.com/products");
});
</script>
