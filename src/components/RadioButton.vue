<template>
    <div class="radio-button">
      <input type="radio" :value="value" v-model="modelValue" />
      <label><slot></slot></label>
    </div>
  </template>
  
  <script>
  export default {
    props: ["value", "modelValue"],
    emits: ["update:modelValue"],
  };
  </script>