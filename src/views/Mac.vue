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
    {{ t("products.mac") }}
  </h2>
  <SearchComp />
  <hr />
  <div class="product-cards">
    <div v-for="product in products" :key="product._id" class="product-card">
      <img :src="product.image" style="width: 200px; height: 200px" />
      <p style="font-size: 20px; font-weight: 500; white-space: nowrap">
        {{ product.name }}
      </p>
      <p style="font-size: 13px">{{ product.category }}</p>
      <router-link
        style="color: #0051a8"
        :to="`/iphone/new-or-used/${product.name}/${product._id}`"
      >
        {{ t("products.buy") }} €{{ product.price }}
      </router-link>
    </div>
  </div>
  <FooterComp />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import NavBarComp from "@/components/NavBarComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import SearchComp from "@/components/SearchComp.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const products = ref([]);

const props = defineProps({
  productName: String,
  productId: String,
});

onMounted(async () => {
  try {
    const category = "mac";
    const response = await fetch(
      `http://localhost:8080/getProducts?category=${category}`
    );
    const data = await response.json();
    products.value = data;
  } catch (error) {
    console.error("Error:", error);
  }
});

const handleSearch = () => {};
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
