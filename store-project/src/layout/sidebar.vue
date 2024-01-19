<template>
    <div class="min-height-300 position-absolute w-100" style="min-height: 300px; background-color: #1B2B4B; position: absolute; width: 100%; z-index: -5;"></div>
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
  .root {
    margin-left: 20rem;
    max-width: 1440px;
  
    transition: margin 0.5s ease-in;
  
    padding-right: 1rem;
  }
  .content-collapsed {
    max-width: 1600px;
  
    margin-left: 9rem;
  }
  
  .body {
    margin-top: 4rem;
  }
  
  @media (max-width: 768px) {
    .content-collapsed {
      max-width: 1600px;
  
      margin-left: 7rem;
    }
  
    .body {
      margin-top: 0rem;
    }
  }
  </style>