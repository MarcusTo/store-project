<template>
  <NavBarComp />
  <h2 class="checkout-title">
    {{ t("checkout.checkout") }}
  </h2>
  <div class="info-container">
    <div class="user-info">
    <div class="user-title">
      <p>Kontaktandmed</p>
    </div>
    <div class="input-container">
      <InputText
        class="custom-text"
        type="text"
        v-model="name"
        placeholder="Enter your name"
      />
      <InputText
        class="custom-text"
        type="text"
        v-model="mail"
        placeholder="Enter your email"
      />
      <InputText
        class="custom-text"
        type="text"
        v-model="phoneNumber"
        placeholder="Enter your phone number"
      />
      <InputText
        class="custom-text"
        type="text"
        v-model="address"
        placeholder="Enter your address"
      />
      <InputText
        class="custom-text"
        type="text"
        v-model="info"
        placeholder="Enter additional info"
      />
    </div>
  </div>
  <form>
    <div class="payment-info">
    <RadioButton/>
    <RadioButton/>
    <RadioButton/>
    <RadioButton/>
  </div>
  </form>
  </div>
  <FooterComp />
</template>

<script setup lang="ts">
import NavBarComp from "@/components/NavBarComp.vue";
import InputText from "primevue/inputtext";
import RadioButton from "primevue/radiobutton";
import FooterComp from "@/components/FooterComp.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style scoped>
.info-container {
  display: flex;
  gap: 5px;  
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;  /* Adjust as needed */
}

.custom-text {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 14px;
  height: 35px;
}
.input-container {
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 15px;
}
.checkout-title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.checkout-form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.user-title {
  font-size: 22px;
  font-weight: 500;
}
.user-info{
  align-items: center;
  justify-content: center;
  padding: 0 8rem;
}

.payment-title {
  font-size: 22px;
  font-weight: 500;
}
.payment-info {
  display:flex;
  align-items: center;
  width: 400px;
  padding: 20px;
  background-color: #ffff;
  border: 5px solid #ccc;
  border-radius: 10px;
}
</style>
