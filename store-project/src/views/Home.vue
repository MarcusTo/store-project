<template>
  <NavBarComp />
  <CardComp> 
  </CardComp>
</template>

<script setup lang="ts">
import NavBarComp from "@/components/NavBarComp.vue";
import CardComp from "@/components/CardComp.vue";
</script>

<style scoped>
.header {
  text-align: center;
  color: #ffff;
}
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
