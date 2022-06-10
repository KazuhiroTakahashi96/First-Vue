<script>
import { Form, Field } from "vee-validate";

export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  methods: {
    isRequired(value) {
      if (value && value.trim()) {
        return true;
      }
      return "This is required";
    },
  },
};
</script>

<template>
  <Form>
    <label for="">ユーザー名</label>
    <Field type="text" name="field" :rules="isRequired" />
    <label for="">パスワード</label>
    <Field type="text" name="password" type="password" />
  </Form>
</template>

<style></style>
