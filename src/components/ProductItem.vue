<template>
  <div class="product-item">
    <img :src="product.image" alt="Product Image" />
    <div class="product-details">
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }}</p>
      <button @click="addToCart">
        <i class="pi pi-shopping-cart"></i>
        Add to Cart {{ cartItemCount }}
      </button>
    </div>
  </div>
</template>
<script>

</script>

<style scoped>
/* Add styles for the product item */
.product-item {
  padding: 10px;
  margin: 10px;
  text-align: center;
}

.product-item img {
  max-width: 100%;
  max-height: 150px;
}

.product-details {
  margin-top: 10px;
  text-align: center;
  color: #ffffff;
  
}
</style>
