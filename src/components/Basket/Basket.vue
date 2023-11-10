<template>
  <div class="flex-none">
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span class="badge badge-sm indicator-item">{{
            products.length
          }}</span>
        </div>
      </label>
      <div
        v-if="basketStore"
        tabindex="0"
        class="mt-3 z-[1] card card-compact dropdown-content w-96 bg-base-100 shadow"
      >
        <div class="card-body">
          <span class="font-bold text-lg">{{ products.length }} Items</span>
          <ul v-if="products">
            <li v-for="(product, index) in products" :key="product.id">
              <Item
                :product="product"
                @delete="store.deleteProduct(index, product.price)"
              />
            </li>
          </ul>
          <span class="text-info">Subtotal: ${{ subTotal.toFixed(2) }}</span>
          <div class="card-actions">
            <button class="btn btn-primary btn-block">GO TO PAYMENT</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { basketStore } from "@/stores/basket.ts";
import Item from "./Item.vue";

const store = basketStore();
const { products, subTotal } = storeToRefs(store);
</script>
