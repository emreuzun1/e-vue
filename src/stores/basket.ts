import { ref } from "vue";
import { defineStore } from "pinia";
import type { Product } from "@/interfaces/Product";

export const basketStore = defineStore("basket", () => {
  const products = ref<Product[]>([]);
  const subTotal = ref<number>(0);

  const addProduct = (product: Product) => {
    products.value.push(product);
    subTotal.value += product.price;
  };

  const deleteProduct = (index: number, price: number) => {
    products.value.splice(index, 1);
    subTotal.value -= price;
  };
  return { products, subTotal, addProduct, deleteProduct };
});
