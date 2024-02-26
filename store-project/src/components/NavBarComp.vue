<template>
  <div>
    <div
      class="navbar"
      style="width: 100%; display: flex; justify-content: space-between"
    >
      <ul class="ul">
        <li class="custom-list-item">
          <RouterLink to="/">Home</RouterLink>
        </li>

        <li class="custom-list-item">
          <RouterLink to="/products">Tooted</RouterLink>
        </li>
        <li class="custom-list-item">
          <RouterLink to="/services">Hooldus</RouterLink>
        </li>
        <li class="custom-list-item">
          <RouterLink to="/about">Ettevõttest</RouterLink>
        </li>
        <li class="custom-list-item">
          <RouterLink to="/profile">Profiil</RouterLink>
        </li>
      </ul>
      <div class="navbar__user">
        <div class="navbar__user-lang" @click="toggleLangDropdown">
          <p class="navbar__user-lang-label">
            {{ activeLang }}
          </p>

          <i
            :class="
              !isLangDropdownActive ? 'pi pi-caret-down' : 'pi pi-caret-up'
            "
          >
          </i>

          <div class="navbar__user-lang-dropdown" v-if="isLangDropdownActive">
            <ul style="list-style: none; margin: 0; padding: 0">
              <li
                :style="{
                  'font-weight': activeLang === 'en' ? 'bold' : 'normal',
                  color: '#4B5563',
                }"
                @click="setLocale('en')"
                class="navbar__user-lang-dropdown-item"
              >
                En
              </li>
              <li
                :style="{
                  'font-weight': activeLang === 'et' ? 'bold' : 'normal',
                  color: '#4B5563',
                }"
                @click="setLocale('et')"
                class="navbar__user-lang-dropdown-item"
              >
                Et
              </li>
            </ul>
          </div>
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
import { computed, ref } from "vue";
import { setLocale } from "@/config/18n.config";
import i18n from "@/config/18n.config";

const isLangDropdownActive = ref(false);

function toggleLangDropdown() {
  isLangDropdownActive.value = !isLangDropdownActive.value;
}
const activeLang = computed(() => {
  return i18n.global.locale.value;
});
</script>
<style>
.navbar {
  top: 0;
  left: 0;
  width: 100%;
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
