<template>
  <NavBarComp />
  <div class="p-4 max-w-4xl mx-auto">
    <div v-if="!productStore.loaded" class="space-y-4">
      <CartCardSkeleton v-for="n in 15" :key="n" />
    </div>
    <div v-else-if="!formattedCart.length">
      <h1 class="text-xl">Cart is empty.</h1>
    </div>
    <div v-else class="space-y-4">
      <CartCard
        v-for="(cartProduct, index) in formattedCart"
        :key="index"
        :cart-product="cartProduct"
      />
      <div class="text-right text-2xl md:text-4xl">
        Total: {{ toCurrency(cartStore.total) }}
      </div>
    </div>
  </div>
  <FooterComp />
</template>

<script setup lang="ts">
import { computed } from "vue";
import FooterComp from "@/components/FooterComp.vue";
import NavBarComp from "@/components/NavBarComp.vue";
import CartCard from "../components/CartCard.vue";
import CartCardSkeleton from "../components/CartCardSkeleton.vue";
import { toCurrency } from "@/utils/utils.ts";
import { useCartStore } from "../store/cart";
import { useProductStore } from "../store/products";

const cartStore = useCartStore();
const productStore = useProductStore();

const formattedCart = computed(() => cartStore.formattedCart);
</script>

<style scoped lang="ts"></style>
