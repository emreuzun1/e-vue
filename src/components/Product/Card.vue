<template>
  <div class="card w-96 shadow-xl bg-slate-200">
    <figure>
      <img
        :src="product.image"
        :alt="product.title"
        class="w-72 h-72 object-contain mix-blend-multiply"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title truncate">
        {{ product.title }}
      </h2>
      <p class="capitalize truncate">{{ product.description }}</p>
      <div class="card-actions">
        <p class="font-bold text-4xl">${{ product.price }}</p>
        <button class="btn btn-primary" @click="store.addProduct(product)">
          Buy Now
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Product } from "@/interfaces/Product.ts";
import { basketStore } from "@/stores/basket.ts";
const store = basketStore();
defineProps<{ product: Product }>();
</script>
