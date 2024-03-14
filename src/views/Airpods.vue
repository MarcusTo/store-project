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
    {{ t("products.airpods") }}
  </h2>
  <SearchComp />
  <hr />
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
