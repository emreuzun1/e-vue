<template>
  <dialog id="my_modal_3" class="modal">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <div class="w-full flex flex-col items-center justify-center mt-4">
        <h3 class="font-bold text-lg">Login</h3>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Username</span>
          </label>
          <input
            type="text"
            v-model="username"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <button class="btn btn-neutral mt-4" @click="$emit('login', username)">
          Login
        </button>
      </div>
    </div>
  </dialog>
</template>
<script setup lang="ts">
import { ref } from "vue";
const username = ref<string>();
</script>
