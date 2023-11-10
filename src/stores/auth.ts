import { ref } from "vue";
import { defineStore } from "pinia";

export const authStore = defineStore("auth", () => {
  const account = ref<string>();
  const login = (username: string) => {
    account.value! = username;
  };

  const logout = () => {
    account.value = "";
  };

  return { account, login, logout };
});
