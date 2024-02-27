<template>
  <div>
    <div class="navbar">
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
        <!-- <li class="custom-list-item">
          <RouterLink to="/about">{{ $t('navbar.company') }}</RouterLink>
        </li> -->
      </ul>
      <div class="navbar-user">
  <div>
    <ul style="list-style: none; margin: 0; padding: 0; display: flex;">
      <li
        :style="{
          'font-weight': activeLang === 'en' ? 'bold' : 'normal',
          color: 'black',
          marginRight: '10px',
          display: 'flex',
          alignItems: 'center'
        }"
        @click="setLocale('en')"
      >
        en
        <img src="/img/flag-en.png" style="margin-left: 10px; width: 17px; height: 19px;">
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
        <img src="/img/est-circle.png" style="margin-left: 10px; width: 15px; height: 15px;">
      </li>
    </ul>
  </div>
</div>
      <div>
        <RouterLink to="/cart" class="nav-bar__router-link">
          <button class="cart-button">
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
.cart-button {
  background-color: #D9DDDC;
  margin-right: 50px;
}
.navbar-user {
  margin-left: 54rem;
}
.ul {
  list-style: none;
  display: flex;
  gap: 16px;
}
.custom-list-item {
  padding: 10px;
}
</style>
