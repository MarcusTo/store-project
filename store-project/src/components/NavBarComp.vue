<template>
  <div>
    <div
      class="navbar"
      style="width: 100%; display: flex; justify-content: space-between"
    >
      <ul class="ul">
        <li class="custom-list-item">
          <RouterLink to="/">{{ $t('navbar.home') }}</RouterLink>
        </li>

        <li class="custom-list-item">
          <RouterLink to="/products">{{ $t('navbar.products') }}</RouterLink>
        </li>
        <li class="custom-list-item">
          <RouterLink to="/services">{{ $t('navbar.service') }}</RouterLink>
        </li>
        <li class="custom-list-item">
          <RouterLink to="/about">{{ $t('navbar.company') }}</RouterLink>
        </li>
        <li class="custom-list-item">
          <RouterLink to="/profile">{{ $t('navbar.profile') }}</RouterLink>
        </li>
      </ul>
      <div class="navbar-user">
  <div>
    <ul style="list-style: none; margin: 0; padding: 0; display: flex;">
      <li
        :style="{
          'font-weight': activeLang === 'en' ? 'bold' : 'normal',
          color: '#4B5563',
          marginRight: '10px',
          display: 'flex',
          alignItems: 'center'
        }"
        @click="setLocale('en')"
      >
        en
        <img src="/public/img/flag-en.png" style="margin-left: 10px; width: 17px; height: 18px;">
      </li>
      <li
        :style="{
          'font-weight': activeLang === 'et' ? 'bold' : 'normal',
          color: '#4B5563',
          display: 'flex',
          alignItems: 'center'
        }"
        @click="setLocale('et')"
      >
        et
        <img src="/public/img/est-circle.png" style="margin-left: 10px; width: 15px; height: 15px;">
      </li>
    </ul>
  </div>
</div>
      <div>
        <RouterLink to="/cart" class="nav-bar__router-link">
          <button class="button">
            <i class="pi pi-shopping-cart"></i>
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { setLocale } from "@/config/18n.config";
import i18n from "@/config/18n.config";


const activeLang = computed(() => {
  return i18n.global.locale.value;
});

</script>
<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.button {
  color: black;
  display: absolute;
  background-color: #d3d3d3;
  margin-right: 40px;
}
.navbar-user {
  position: relative;
  margin-left: 42rem;
}
.lang-dropdown {
  position: absolute;
}

.ul {
  list-style: none;
  display: flex;
  gap: 16px;
  text-align: center;
}

.custom-list-item {
  padding: 10px;
}
</style>
