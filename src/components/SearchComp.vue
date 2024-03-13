<template>
  <div class="search">
    <div class="input-group">
      <input
        class="text"
        v-model="searchText"
        type="text"
        :placeholder="t('products.model')"
        @input="handleInput"
      />
      <i class="pi pi-search"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const {t} = useI18n();
let searchText = ref("");

const handleInput = () => {};
</script>

<style scoped>
.search {
  align-items: center;
  justify-content: center;
  display: flex;
}

.input-group {
  position: relative;
  width: 300px; 
  align-items: center;
  justify-content: center;
  display: flex;
  margin-bottom: 40px;
}

.text {
  padding-left: 35px; 
  height: 40px; 
  width: 50%;
  font-size: 16px; 
  border-radius: 10px; 
}

.pi-search {
  position: absolute;
  top: 10px; 
  left: 10px; 
  margin-left: 54px;
  font-size: 18px; 
}
</style>