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
    {{ t("cart.title") }}
  </h2>
  <div class="product-cards">
    <!-- <div v-if="cart.length > 0" v-for="product in cart" :key="product.id" class="product-card">
      <img :src="product.image" :alt="product.name" />
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <router-link :to="`/product/${product.id}`">View Details</router-link>
    </div> -->
    <div class="empty-cart">
      <img src="/img/cart_placeholder.svg" />
    </div>
  </div>
  <hr>
  <FooterComp />
</template>

<script setup lang="ts">
import NavBarComp from "@/components/NavBarComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

</script>

<style scoped>
.product-cards {
  display: flex;
  justify-content: center;
  gap: 200px;
  margin-top: 20px;
}

.product-card {
  width: 172px;
  margin-bottom: 10px;
}

.product-card img {
  width: 100%;
}

.router-link {
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  color: #333;
}
</style>