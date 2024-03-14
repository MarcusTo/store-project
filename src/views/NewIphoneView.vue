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
  <div class="product-grid">
    <div v-if="product" class="product-card">
      <img :src="product.image" alt="Product Image" class="product-image" />
      <div class="product-details">
        <div class="form">
          <p style="font-size: 13px; font-weight: 500">VALI MÄLUMAHT</p>
          <div style="display: flex; gap: 10px; align-items: center">
            <Button
              v-for="(option, index) in product.memory"
              :key="index"
              class="membutton"
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
                white-space: nowrap;
              "
              :class="{
                transparent: selectedMemory !== option,
              }"
              @click="selectedMemory = option"
            >
              {{ option === 1 ? option + " TB" : option + " GB" }}
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
              <label
                style="
                  display: block;
                  justify-items: center;
                  white-space: nowrap;
                  font-weight: 500;
                "
                :for="color.key"
                class="ml-2"
              >
                {{
                  selectedMemory === 1
                    ? selectedMemory + " TB"
                    : selectedMemory + " GB"
                }}
                {{ color.name }}</label
              >
            </div>
          </div>
        </div>
        <p style="font-weight: 500; font-size: 40px">€{{ product.price.toFixed(2) }}</p>
        <button class="button" @click="addToCart">
          {{ t("cart.addToCart") }}
        </button>
      </div>
    </div>
  </div>
  <ProductInfoComp />
  <FooterComp />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import RadioButton from "primevue/radiobutton";
import NavBarComp from "@/components/NavBarComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import { useRoute } from "vue-router";
import { sampleProducts } from "@/data.ts";
import { useI18n } from "vue-i18n";
import { useCartStore } from "@/stores/cart";
import { useRouter } from "vue-router";
import ProductInfoComp from "@/components/ProductInfoComp.vue";

const { t } = useI18n();
const route = useRoute();
const router = useRouter();

const product = ref(null);
const selectedColor = ref(null);
const selectedMemory = ref(null); 
const cart = useCartStore();

const colors = ref([
  { name: "Natural Titanium", key: "NAT" },
  { name: "Blue Titanium", key: "BET" },
  { name: "White Titanium", key: "WHT" },
  { name: "Black Titanium", key: "BLT" },
]);

const addToCart = () => {
  const cartItem = {
    ...product.value,
    selectedColor: selectedColor.value,
    selectedMemory: selectedMemory.value,
  };
  cart.addToCart(cartItem);
  router.push("/CartView");
};

onMounted(() => {
  const productId = Number(route.params.productId);
  product.value = sampleProducts.find((p) => p.id === productId);
});

</script>

<style scoped>
.product-card {
  display: flex;
  align-items: center;
  gap: 10rem;
  width: 65%;
}
.transparent {
  opacity: 0.5;
}
.product-details {
  margin-left: 60px;
}
.membutton {
  margin-right: 2px;
  height: 36px;
  background-color: #0066cc;
  border: 2px solid #0066cc;
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  border-radius: 12px;
  padding-left: 14px;
  padding-right: 14px;
  cursor: pointer;
  margin-bottom: 10px;
}

.product-grid {
  display: block;
  width: 90%; /* Adjust the width as needed */
  margin: auto; /* Center the grid */
  padding: 10px 0px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  .product-image {
    width: 468.5px;
    height: 446.637px;
  }
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px; 
  height: 46px;
  padding: 10px 0px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #0056b3;
}
</style>
