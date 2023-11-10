import { ref } from "vue";
import { defineStore } from "pinia";
import type { Product } from "@/interfaces/Product";

export const productStore = defineStore("products", () => {
  const products = ref<Product[]>([]);
  const filteredProducts = ref<Product[]>([]);
  const categories = ref<string[]>([]);
  const minPrice = ref<number>(0);
  const maxPrice = ref<number>(0);

  const getProducts = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    products.value = data;
    filteredProducts.value = data;
    minPrice.value = Math.min(...data.map((product: Product) => product.price));
    maxPrice.value = Math.max(...data.map((product: Product) => product.price));
  };

  const getCategories = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();
    categories.value = data;
  };

  const filterProductsByCategories = (categories: string[]) => {
    if (categories.length <= 0) {
      filteredProducts.value = products.value;
      return;
    }
    filteredProducts.value = products.value.filter((product: Product) =>
      categories.includes(product.category)
    );
  };

  const filterProductsByPrice = (min: number, max: number) => {
    filteredProducts.value = products.value.filter(
      (product: Product) => product.price >= min && product.price <= max
    );
  };

  return {
    filteredProducts,
    categories,
    minPrice,
    maxPrice,
    getProducts,
    getCategories,
    filterProductsByCategories,
    filterProductsByPrice,
  };
});
