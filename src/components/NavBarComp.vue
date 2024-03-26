<template>
  <div>
    <div class="navbar">
      <ul class="ul">
        <li class="custom-list-item">
          <RouterLink to="/">{{ $t("navbar.home") }}</RouterLink>
        </li>
        <li class="custom-list-item">
          <RouterLink to="/iphone">{{ $t("navbar.iphone") }}</RouterLink>
        </li>
        <li class="custom-list-item">
          <RouterLink to="/airpods">{{ $t("navbar.airpods") }}</RouterLink>
        </li>
        <li class="custom-list-item">
          <RouterLink to="/mac">{{ $t("navbar.mac") }}</RouterLink>
        </li>
        <li class="custom-list-item">
          <RouterLink to="/services">{{ $t("navbar.repairs") }}</RouterLink>
        </li>
      </ul>
      <div class="navbar-user">
        <div>
          <ul style="list-style: none; margin: 0; padding: 0; display: flex">
            <div
              :style="{
                'font-weight': activeLang === 'et' ? 'bold' : 'normal',
                color: '#4B5563',
                display: 'flex',
                alignItems: 'center',
                width: '50px',
              }"
              @click="setLocale('et')"
            >
              <li>
                <img
                  src="/img/flags/estonia.png"
                  style="
                    padding-right: 18px;
                    padding-left: 6px;
                    width: 15px;
                    height: 15px;
                  "
                />
              </li>
            </div>
            <div
              :style="{
                'font-weight': activeLang === 'en' ? 'bold' : 'normal',
                color: '#4B5563',
                display: 'flex',
                alignItems: 'center',
              }"
              @click="setLocale('en')"
            >
              <li>
                <img
                  src="/img/flags/united-kingdom-rounded.png"
                  style="padding-right: 10px; padding-left: 6px; width: 15px"
                />
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div>
        <button class="cart-button">
          <RouterLink style="font-weight: 500;" to="/cartView" class="nav-bar__router-link">
            <i
              class="pi pi-shopping-bag"
            >
            </i>
            {{ isCartEmpty ? "" : `${totalPrice.toFixed(2)} €` }}
          </RouterLink>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useCartStore } from "@/stores/cart";
import { setLocale } from "@/config/18n.config";
import i18n from "@/config/18n.config";

const activeLang = computed(() => {
  return i18n.global.locale.value;
});

const cart = useCartStore();

const isCartEmpty = computed(() => {
  return cart.cartItems.length === 0;
});
const totalPrice = computed(() => {
  return cart.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
});
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1E1E1E; /* Dark grey background navbar background color */
  font-size: 14px;
}
a {
  font-weight: 400;
  color: #c5c5c5;
  text-decoration: inherit;
}
a:hover {
  color: #ffffff; /* Darker blue */
}
.cart-button {
  background-color: #0051a8;
  display: flex;
  margin-right: 50px;
  font-weight: 500;
}

.navbar-user {
  padding-left: 2rem; /* Default to a small padding */
  display: flex;
  justify-content: flex-end;
  color: #fff; /* White text color */
}

/* Increase padding when viewport is 600px or wider */
@media screen and (min-width: 600px) {
  .navbar-user {
    padding-left: 8rem;
  }
}

/* Increase padding when viewport is 900px or wider */
@media screen and (min-width: 900px) {
  .navbar-user {
    padding-left: 30rem;
  }
}

@media screen and (min-width: 1200px) {
  .navbar-user {
    padding-left: 48rem;
  }
}

.ul {
  list-style: none;
  display: flex;
  gap: 16px;
}

.custom-list-item {
  padding: 10px;
  color: #0070c9; /* Apple blue text color */
}
</style>
