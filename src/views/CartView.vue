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
    <div class="cart-container">
      <div
        v-for="(item, index) in cart.cartItems"
        :key="index"
        class="cart-table"
      >
        <div class="item-row">
          <img class="cart-image" :src="item.image" alt="Product image" />
          <div class="item-details">
            <router-link
              :to="`/iphone/new/${item.name}/${item.id}`"
              class="item-name"
              >{{ item.name }}</router-link
            >
            <span>{{ item.selectedMemory }} TB</span>
            <span>{{ item.selectedColor }}</span>
            <div class="quantity-control">
              <button
                class="pi pi-plus"
                @click="increaseQuantity(item)"
              ></button>
              <span class="quantity-counter">{{ item.quantity }}</span>
              <button
                class="pi pi-minus"
                @click="decreaseQuantity(item)"
              ></button>
            </div>
            <button class="pi pi-trash" @click="removeFromCart(item)"></button>
          </div>
        </div>
        <p class="item-price">€{{ item.price }}</p>
      </div>
      <hr v-if="cart.cartItems.length === 1" />
    </div>
    <div>
      <div v-if="cart.cartItems.length > 0">
        <h2
          style="
            display: flex;
            justify-content: center;
            font-size: 32px;
            font-weight: 500;
          "
        >
          Kokku: {{ totalPrice }} €
        </h2>
        <div class="button-container">
          <router-link :to="`/checkout`">
            <Button style="background-color: #0070c9">
              Vormista Tellimus
            </Button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="empty-cart" v-if="cart.cartItems.length === 0">
      <img src="/img/cart_placeholder.svg" />
    </div>
  </div>
  <FooterComp />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useCartStore } from "@/stores/cart";
import NavBarComp from "@/components/NavBarComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import { useI18n } from "vue-i18n";

const cart = useCartStore();
const { t } = useI18n();

const totalPrice = computed(() => {
  return cart.cartItems.reduce((total, item) => total + item.price, 0);
});
const removeFromCart = (item) => {
  cart.remove(item);
};
</script>

<style scoped>
.cart-container {
  min-width: 320px;
  max-width: 1320px;
  position: relative;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 30px;
  padding-left: 40px;
  margin-bottom: 0px;
}

.cart-table {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 2rem;
}

.item-row {
  display: flex;
  gap: 5px;
}

.pi-trash {
  background-color: transparent;
  color: #007bff;
  margin-left: 62rem;
  border: none;
}
.quantity-counter {
  margin: 0 10px;
}
.pi-plus {
  background-color: transparent;
  color: #007bff;
  border: none;
  margin-right: auto;
}

.pi-minus {
  background-color: transparent;
  color: #007bff;
  border: none;
  width: 0%;
}

.item-details {
  display: flex;
  flex-direction: column;
}

.item-name {
  display: flex;
  font-size: 22px;
  font-weight: 500;
}

.item-price {
  display: flex;
  align-items: right;
  font-size: 22px;
  font-weight: 500;
  justify-content: flex-end;
}

.cart-image {
  width: 102px;
  height: 102px;
}

.product-card {
  width: 172px;
  margin-bottom: 10px;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
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
