<template>
  <NavBarComp />
  <h2
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 32px;
    "
  >
    {{ t("products.iphone") }}
  </h2>
  <SearchComp />
  <hr />
  <div class="product-cards">
    <div v-for="product in products" :key="product.id" class="product-card">
      <img :src="product.image" style="width: 200px; height: 200px" />
      <p style="font-size: 20px; font-weight: 500; white-space: nowrap">
        {{ product.name }}
      </p>
      <p style="font-size: 13px">{{ product.category }}</p>
      <router-link
        style="color: #0051a8"
        :to="`/iphone/new-or-used/${product.name}/${product.id}`"
      >
        {{ t("products.buy") }} €{{ product.price }}
      </router-link>
    </div>
  </div>
  <FooterComp />
</template>

<script setup lang="ts">
import NavBarComp from "@/components/NavBarComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import SearchComp from "@/components/SearchComp.vue";
import { useI18n } from "vue-i18n";
import { sampleProducts } from "@/data.ts";

const { t } = useI18n();
const products = sampleProducts;
</script>

<style scoped>
.product-cards {
  display: grid;
  margin-left: 2rem;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 10rem;
  margin-bottom: 20px;
  margin-top: 40px;
}
.product-card {
  text-align: center;
  width: 172px;
}

.product-card img {
  width: 100%;
}
</style>
