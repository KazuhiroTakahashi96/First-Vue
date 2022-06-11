<template>
  <div class="title">Validation using Vee-Validate</div>
  <!-- <useForm> -->
  <div>
    <label for="name">ユーザー名</label>
    <input v-model="value" name="name" type="text" />
    <span>{{ errorMessage }}</span>
  </div>

  <!-- <div>
    <label for="password">パスワード</label>
    <input v-model="value" name="password" type="password" />
    <span>{{ errorMessage }}</span>
  </div> -->

  <button type="submit">Submit</button>
  <!-- </useForm> -->
</template>

<!-- vee-validateについて
https://reffect.co.jp/vue/veevaliate4
 -->

<script setup lang="ts">
// <script setup>について
// https://zenn.dev/azukiazusa/articles/676d88675e4e74
// https://tekrog.com/vue3-script-setup/
import { useForm, useField } from "vee-validate";

function isRequired(value: string) {
  if (value && value.trim()) {
    return true;
  }
  return "This is required";
}
const { errorMessage, value } = useField("fieldName", isRequired);
</script>

<style scoped>
.title {
  font-size: 25px;
  text-align: center;
  color: aliceblue;
}
form {
  margin: 50px 0;
  font-size: 1.3rem;
  text-align: center;
}
div {
  margin: 20px;
  height: 10vh;
}
label {
  margin-right: 20px;
  color: #fff;
}
input {
  width: 200px;
  height: 30px;
}
span {
  margin-top: 10px;
  display: block;
  color: red;
}
button {
  width: 70px;
  height: 25px;
  font-size: 75%;
}
</style>
