<template>
  <div>
    <NavBarComp />
    <div v-if="product" class="product-card">
      <router-link
        style="color: #0051a8"
        :to="`/iphone/new/${product.name}/${product.id}`"
      >
        {{ t("products.buy") }} €{{ product.price }}
      </router-link>
    </div>
    <FooterComp />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import NavBarComp from "@/components/NavBarComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import { useRoute } from "vue-router";
import { sampleProducts } from "@/data.ts";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const route = useRoute();
const product = ref(null);

onMounted(() => {
  const productId = Number(route.params.productId);
  product.value = sampleProducts.find((p) => p.id === productId);
});
</script>

<style scoped></style>