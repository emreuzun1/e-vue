<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">E-Vue</a>
    </div>
    <Basket />
    <div v-if="account" class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img :src="accountSvg" alt="account" />
        </div>
      </label>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a @click="store.logout">Logout</a></li>
      </ul>
    </div>
    <div v-else>
      <button class="btn btn-neutral" onclick="my_modal_3.showModal()">
        Login
      </button>
    </div>
  </div>
  <LoginModal v-if="!account" @login="store.login" />
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { authStore } from "@/stores/auth.ts";
import LoginModal from "@/components/LoginModal.vue";
import Basket from "@/components/Basket/Basket.vue";
import accountSvg from "@/assets/icons/account.svg";

const store = authStore();
const { account } = storeToRefs(store);
</script>
