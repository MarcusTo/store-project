<template>
    <div class="min-height-300 position-absolute w-100" style="min-height: 300px; background-color: #1B2B4B; position: absolute;"></div>
    <div style="margin: 0 auto; max-width: 1980px">
      <SideBarComp />
      <div class="root">
        <NavBarComp />
  
        <div style="margin-left: 16px;">
          <slot />
        </div>
      </div>
    </div>
  </template>
  
  
  <script setup lang="ts">
  import SideBarComp from '@/components/SiderBarComp.vue'
  import NavBarComp from '@/components/NavBarComp.vue'
  
  </script>
  
  <style scoped>

  </style>