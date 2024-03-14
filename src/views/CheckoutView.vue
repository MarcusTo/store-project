<template>
  <NavBarComp/>
  <CheckoutComp></CheckoutComp>
  <div class="checkout-form">
    <div class="user-info">
      <h2>User Information</h2>
      <label>
        Name:
        <InputText type="text" v-model="name" />
      </label>
      <label>
        Email:
        <InputText type="text" v-model="email" />
      </label>
      <label>
        Address:
        <InputText type="text" v-model="address" />
      </label>
    </div>
    <div class="payment-info">
    </div>
    <Button type="submit">Submit</Button>
  </div>
  <FooterComp/>
</template>

<script setup lang="ts">
import NavBarComp from '@/components/NavBarComp.vue';
import InputText from 'primevue/inputtext';
import FooterComp from '@/components/FooterComp.vue';
</script>

<style scoped>
.checkout-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.user-info,
.payment-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
