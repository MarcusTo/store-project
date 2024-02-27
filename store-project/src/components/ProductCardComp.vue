<template>
  <h2 style="display: flex; justify-content: center; align-items: center">
    {{ t("home.homeHeader") }}
  </h2>
  <div
    class="card-container"
    style="box-shadow: 0px 4px 8px rgba(208, 205, 205, 0.573)"
  >
    <div class="card">
      <Card>
        <template #content>
          <a
            href="/"
            style="display: flex; flex-direction: column; align-items: center"
          >
            <img
              src="/img/iphone-titanium.png"
              style="width: 200px; height: 200px"
            />
            <p class="m-0" style="max-width: 200px">{{ t("home.iphone") }}</p>
          </a>
        </template>
      </Card>
    </div>
    <div class="card">
      <Card>
        <template #content>
          <a
            href="/"
            style="display: flex; flex-direction: column; align-items: center"
          >
            <img
              src="/img/airpods.png"
              alt="Telefonid"
              style="width: 200px; height: 200px"
            />

            <p class="m-0" style="max-width: 200px">
              {{ t("home.headphones") }}
            </p>
          </a>
        </template>
      </Card>
    </div>
    <div class="card">
      <Card>
        <template #content>
          <a
            href="/"
            style="display: flex; flex-direction: column; align-items: center"
          >
            <img
              src="/img/mac-black.png"
              alt="Telefonid"
              style="width: 200px; height: 200px"
            />
            <p class="m-0" style="max-width: 200px">{{ t("home.mac") }}</p>
          </a>
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
