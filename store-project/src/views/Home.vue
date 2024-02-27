<template>
  <NavBarComp />
  <ProductCardComp>
  </ProductCardComp>
  <CardComp> 
  </CardComp>
  <ServiceCardComp>
  </ServiceCardComp>
 
</template>

<script setup lang="ts">
import NavBarComp from "@/components/NavBarComp.vue";
import CardComp from "@/components/CardComp.vue";
import ServiceCardComp from "@/components/ServiceCardComp.vue";
import ProductCardComp from "@/components/ProductCardComp.vue";
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
}
</style>
