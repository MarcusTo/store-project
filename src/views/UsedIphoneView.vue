<template>
  <NavBarComp />
  <div class="product-grid">
    <div v-if="product" class="product-card">
      <img :src="product.image" alt="Product Image" class="product-image" />
      <div class="product-details">
        <div class="form">
          <p style="font-size: 13px; font-weight: 500">VALI MÄLUMAHT</p>
          <div style="display: flex; gap: 10px; align-items: center">
            <Button
              class="membutton"
              style="display: flex; justify-content: space-between; align-items: center;"
              :class="{ highlighted: selectedMemory === '256 GB' }"
              @click="selectedMemory = '256 GB'"
            >
            {{ product.memory }} GB
            </Button>
            <Button
              class="membutton"
              style="display: flex; justify-content: space-between; align-items: center;"
              :class="{ highlighted: selectedMemory === '256 GB' }"
              @click="selectedMemory = '256 GB'"
            >
            {{ product.memory }} GB
            </Button>
          </div>
          <div>
            <p style="font-size: 13px; font-weight: 500">VALI VÄRV</p>
            <div
              v-for="color in colors"
              :key="color.key"
              class="radiobutton"
              style="
                display: flex;
                align-items: center;
                margin-top: 8px;
                margin-bottom: 8px;
                font-size: 16px;
              "
            >
              <RadioButton
                v-model="selectedColor"
                :inputId="color.key"
                name="dynamic"
                :value="color.name"
              />
              <label :for="color.key" class="ml-2"> {{product.memory}} GB {{ color.name }}</label>
            </div>
          </div>
        </div>
        <p style="font-weight: 500; font-size: 40px">€{{ product.price }}</p>
        <router-link
          class="button"
          :to="`/iphone/used/${product.name}/${product.id}`"
        >
          {{ t("cart.addToCart") }}
        </router-link>
      </div>
    </div>
  </div>
  <FooterComp />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import RadioButton from "primevue/radiobutton";
import NavBarComp from "@/components/NavBarComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const route = useRoute();
const product = ref(null);
const selectedColor = ref("Production");
const colors = ref([
  { name: "Black", key: "B" },
  { name: "Blue", key: "BL" },
  { name: "Green", key: "G" },
  { name: "White", key: "W" },
]);
onMounted(() => {
  const productId = Number(route.params.productId);
  product.value = sampleProducts.find((p) => p.id === productId);
});
</script>

<style scoped>
.product-grid {
  display: inline-block;
  width: 100%; /* Set a fixed width */
  padding: 10px 0px;
}
.product-card {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10rem;
  width: 20%; /* Adjust as needed */
  margin: 0 auto;
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
.membutton {
  margin-right: 2px;
  height: 40px;
  background-color: #0066cc;
  border: 2px solid #0066cc;
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  margin-bottom: 10px;
}
.product-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-left: auto;
}
.product-image {
  width: 468.5px;
  height: 446.637px;
  object-fit: cover;
}
.button {
  display: inline-block;
  width: 150px; /* Set a fixed width */
  padding: 10px 0px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.button:hover {
  background-color: #0056b3;
}
</style>