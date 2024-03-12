<template>
  <h2 style="display: flex; justify-content: center; align-items: center">
    {{ t("card.whyUs") }}
  </h2>
  <div class="card-container">
    <div class="card">
      <Card>
        <template #title> {{ t("card.quality") }}</template>
        <template #content>
          <p class="m-0" style="max-width: 200px">
            {{ t("card.qualityText") }}
          </p>
        </template>
      </Card>
    </div>
    <div class="card">
      <Card>
        <template #title>{{ t("card.service") }}</template>
        <template #content>
          <p class="m-0" style="max-width: 200px">
            {{ t("card.serviceText") }}
          </p>
        </template>
      </Card>
    </div>
    <div class="card">
      <Card>
        <template #title>{{ t("card.delivery") }}</template>
        <template #content>
          <p class="m-0" style="max-width: 200px">
            {{ t("card.deliveryText") }}
          </p>
        </template>
      </Card>
    </div>
    <div class="card">
      <Card>
        <template #title>{{ t("card.selection") }} </template>
        <template #content>
          <p class="m-0" style="max-width: 200px">
            {{ t("card.selectionText") }}
          </p>
        </template>
      </Card>
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
  gap: 1rem;
}
</style>