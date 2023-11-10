<template>
  <div class="card lg:card-side bg-slate-200 shadow-xl mt-1">
    <figure class="p-4">
      <img
        :src="product.image"
        :alt="product.title"
        class="w-32 h-32 object-contain mix-blend-multiply"
      />
    </figure>
    <div class="card-body w-64">
      <h2 class="card-title">{{ product.title }}</h2>
      <p>${{ product.price.toFixed(2) }}</p>
      <div class="card-actions justify-end">
        <button class="btn bg-slate-200" @click="$emit('delete')">
          <img :src="deleteSvg" alt="Delete" />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Product } from "@/interfaces/Product.ts";
import deleteSvg from "@/assets/icons/delete.svg";

defineProps<{ product: Product }>();
</script>
