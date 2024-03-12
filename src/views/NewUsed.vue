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
    {{ product?.name }}
  </h2>
  <hr />
  <div class="new-or-used" v-if="product">
    <div class="product-option">
      <img
        :src="product.image"
        alt="Product Image"
        style="
          width: 210px;
          height: 210px;
          object-fit: cover;
          margin-bottom: 5px;
        "
      />
      <p style="font-size: 20px; font-weight: 500;">{{ t("products.used") }} {{ product.name }}</p>
      <router-link
        class="button"
        :to="`/iphone/used/${product.name}/${product.id}`"
      >
        <p>{{ t("products.buy") }} €{{ product.price }} ></p>
      </router-link>
    </div>
    <div class="product-option">
      <img
        :src="product.image"
        alt="Product Image"
        style="
          width: 210px;
          height: 210px;
          object-fit: cover;
          margin-bottom: 5px;
        "
      />
      <p style="font-size: 20px; font-weight: 500;">{{ t("products.new") }} {{ product.name }}</p>
      <router-link
        class="button"
        :to="`/iphone/new/${product.name}/${product.id}`"      >
        <p>{{ t("products.buy") }} €{{ product.price }} ></p>
      </router-link>
    </div>
  </div>
  <hr />
  <FooterComp />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import NavBarComp from "@/components/NavBarComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import { useRoute } from "vue-router";
import { sampleProducts } from "@/data.ts";
import { useI18n } from "vue-i18n";

const route = useRoute();
const { t } = useI18n();
const product = ref(null);

onMounted(() => {
  const productId = Number(route.params.productId);
  product.value = sampleProducts.find((p) => p.id === productId);
});
</script>

<style scoped>
.new-or-used {
  margin-top: 1rem;
  margin-bottom: 3rem;
  display: flex;
  gap: 10rem;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.product-option {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button {
  display: inline-block;
  padding: 0px 50px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #0056b3;
}
</style>
