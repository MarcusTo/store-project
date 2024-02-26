<template>
  <NavBarComp />

  <div class="about">
    <h2>{{ t("navbar.companyInfo") }}</h2>

    <p>{{ t("about.aboutText") }}</p>

    <h2>{{ t("about.contacts") }}</h2>

    <p style="font-weight: bold">{{ t("about.name") }}</p>
    <p><i class="pi pi-home"></i>{{ t("about.location") }}</p>
    <p><i class="pi pi-phone"></i>{{ t("about.number") }}</p>
    <p><i class="pi pi-envelope"></i>{{ t("about.mail") }}</p>
  </div>
</template>

<script setup lang="ts">
import NavBarComp from "@/components/NavBarComp.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
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
