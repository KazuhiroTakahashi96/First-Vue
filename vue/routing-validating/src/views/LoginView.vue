<template>
  <div class="title">Validation using Vee-Validate</div>
  <Form>
    <div>
      <label for="name">ユーザー名</label>
      <Field name="name" type="text" :rules="isRequired" />
      <ErrorMessage name="name" />
    </div>

    <div>
      <label for="password">パスワード</label>
      <Field name="password" type="password" :rules="isRequired" />
      <ErrorMessage name="password" />
    </div>

    <button type="submit">Submit</button>
  </Form>
</template>

<script lang="ts">
// setup を一時的に削除してる
// https://github.com/vuejs/rfcs/pull/227
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  methods: {
    isRequired(value: string) {
      if (value && value.trim()) {
        return true;
      }
      return "This is required";
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 25px;
  text-align: center;
}
form {
  margin: 30px 0;
  text-align: center;
  font-size: 1.3rem;
}
form > div {
  margin: 20px;
}
label {
  margin-right: 20px;
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
</style>
