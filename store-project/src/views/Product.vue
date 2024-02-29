<template>
  <NavBarComp />
  <SearchComp/>
  <hr>
  <FooterComp />

  
</template>

<script setup lang="ts">
import FooterComp from "@/components/FooterComp.vue";
import NavBarComp from "@/components/NavBarComp.vue";
import SearchComp from "@/components/SearchComp.vue";
</script>

<style scoped>
hr {
  border: none;
  border-top: 1px solid #ccc; 
}
</style>
