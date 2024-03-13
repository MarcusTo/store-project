<template>
  <NavBarComp />
  <div>
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
    <div v-for="(item, index) in cart.cartItems" :key="index">
      <p>{{ item.name }}</p>
      <!-- ...display other properties of the item -->
    </div>

    <div class="empty-cart" v-if="cart.cartItems.length === 0">
      <img src="/img/cart_placeholder.svg" />
    </div>
  </div>
  <FooterComp />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCartStore } from '@/stores/cart'
import NavBarComp from "@/components/NavBarComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import { useI18n } from "vue-i18n";

const cart = useCartStore()
const cartItems = ref([]);
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
.empty-cart {
  display: flex;
  justify-content: center;
}

.router-link {
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  color: #333;
}
</style>
