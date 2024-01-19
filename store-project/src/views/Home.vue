<template>
  <div>
    <NavBarComp />
    <div class="header">
      <h4 style="color: #ffff;">Enim ostetud</h4>
      <div class="product-list">
        <ProductItem v-for="product in products" :key="product.id" :product="product" @add-to-cart="addToCart" />
      </div>
    </div>
  </div>
</template>

<script>
import NavBarComp from "@/components/NavBarComp.vue";
import ProductItem from "@/components/ProductItem.vue";

export default {
  components: {
    NavBarComp,
    ProductItem,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Phone Model 1',
          image: 'src/assets/img/phonePic.png',
          price: '990€',
        },
        {
          id: 2,
          name: 'Phone Model 1',
          image: 'src/assets/img/phonePic.png',
          price: '799€',
        },
        {
          id: 3,
          name: 'Phone Model 1',
          image: 'src/assets/img/phonePic.png',
          price: '999€',
        },
        {
          id: 4,
          name: 'Phone Model 1',
          image: 'src/assets/img/phonePic.png',
          price: '899€',
        }
      ],
    };
  },
};
</script>

<style scoped>
.header {
  text-align: center;
  color: #ffff;
}
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
