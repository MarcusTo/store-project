<template>
    <div>
      <h2 style="display: flex; justify-content: center; align-items: center">
        {{ t("warranty.service") }}
      </h2>
      <router-link to="/services">
        <h4 style="display: flex; justify-content: center; align-items: center">
            {{ t("warranty.more") }}
        </h4>
      </router-link>
      <div class="card-container">
        <div class="card">
          <Card>
            <template #content>
              <div style="display: flex; flex-direction: column; align-items: center;">
                <img src="/img/speed-service.png" style="width: 100px; height: 100px" />
                <p class="m-0" style="max-width: 200px; text-align: center;">
                  {{ t("warranty.warrantyText") }}
                </p>
              </div>
            </template>
          </Card>
          <Card>
            <template #content>
              <div style="display: flex; flex-direction: column; align-items: center;">
                <img src="/img/trophy-service.svg" style="width: 100px; height: 100px;" />
                <p class="m-0" style="max-width: 200px; text-align: center;">
                  {{ t("warranty.warrantyText1") }}
                </p>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </template>  
<script setup lang="ts">
import Card from "primevue/card";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
<style scoped>
.card-container {
  display: flex;
  justify-content: center;
}
.card {
  display: flex;
  gap: 10rem;
}
</style>
