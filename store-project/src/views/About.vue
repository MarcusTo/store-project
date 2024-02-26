<template>
  <NavBarComp />

  <div class="about">
    <h2>{{ t('about.header') }}</h2>
    <p>

    </p>
    <p>

    </p>

    <h2>Teenused</h2>

    <h2>Kontakt</h2>

    <p style="font-weight: bold">POOD</p>
    <p><i class="pi pi-home"></i> Aia 5, Tallinn, Estonia</p>
    <p><i class="pi pi-phone"></i> +372 123 456 789</p>
    <p><i class="pi pi-envelope"></i> info@pood.ee</p>
  </div>
</template>

<script setup lang="ts">
import NavBarComp from "@/components/NavBarComp.vue";
import { useI18n } from "vue-i18n";

const {t} = useI18n();
</script>

<style>
.about {
  display: block;
  margin-top: 60px; 
  margin-bottom: 60px; 
  text-align: center;
}

.about p {
  margin-bottom: 15px;
}

.about h1 {
  margin-bottom: 20px;
}
.center-text {
  text-align: center;
}
</style>
