<template>
  <div>
    <div class="navbar">
      <ul class="ul">
        <li class="custom-list-item">
          <RouterLink to="/">{{ $t("navbar.home") }}</RouterLink>
        </li>

        <li class="custom-list-item">
          <RouterLink to="/products">{{ $t("navbar.products") }}</RouterLink>
        </li>
        <li class="custom-list-item">
          <RouterLink to="/services">{{ $t("navbar.repairs") }}</RouterLink>
        </li>
      </ul>
      <div class="navbar-user">
        <div>
          <ul style="list-style: none; margin: 0; padding: 0; display: flex">
            <div
              :style="{
                'font-weight': activeLang === 'et' ? 'bold' : 'normal',
                color: '#4B5563',
                display: 'flex',
                alignItems: 'center',
              }"
              @click="setLocale('et')"
            >
              <li>
                <img
                  src="/img/flags/estonia.png"
                  style="
                    padding-right: 18px;
                    padding-left: 6px;
                    width: 15px;
                    height: 15px;
                  "
                />
              </li>
            </div>
            <div
              :style="{
                'font-weight': activeLang === 'en' ? 'bold' : 'normal',
                color: '#4B5563',
                display: 'flex',
                alignItems: 'center',
              }"
              @click="setLocale('en')"
            >
              <li>
                
                <img
                  src="/img/flags/united-kingdom-rounded.png"
                  style="
                    padding-right: 10px;
                    padding-left: 6px;
                    width: 15px;
                    height: 15px;
                  "
                />
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div>
        <button class="cart-button">
          <RouterLink to="/cartView" class="nav-bar__router-link">
            <i class="pi pi-shopping-bag"></i
          ></RouterLink>
        </button>
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
  background-color: #fafafa;
  margin-right: 50px;
}
.navbar-user {
  padding-left: 54rem;
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
