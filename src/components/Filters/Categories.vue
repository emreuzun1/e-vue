<template>
  <div class="collapse collapse-arrow" v-if="categories">
    <input type="radio" name="my-accordion-2" />
    <div class="collapse-title text-xl font-medium">Categories</div>
    <div class="collapse-content">
      <ul>
        <li v-for="category in categories" :key="category">
          <label class="label cursor-pointer">
            <span class="capitalize label-text">{{ category }}</span>
            <input
              type="checkbox"
              checked="checked"
              class="checkbox checkbox-primary"
              :id="category"
              :value="category"
              v-model="checkedCategories"
            />
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { watchEffect, ref } from "vue";
import { storeToRefs } from "pinia";
import { productStore } from "@/stores/products.ts";
const store = productStore();
const checkedCategories = ref<string[]>([]);
const { categories } = storeToRefs(store);
watchEffect(() => {
  store.getCategories();
});
watchEffect(() => {
  store.filterProductsByCategories(checkedCategories.value);
});
</script>
