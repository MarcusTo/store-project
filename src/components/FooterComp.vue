<template>
  <div class="container">
    <div class="content">
      <p>{{ t("footer.location") }}</p>
        <p>{{ t("footer.info") }}</p>
      <p class="copyright">
        {{ new Date().getFullYear() }} -
        <strong> {{ t("copyright") }}</strong>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* Adjust as needed */
}

.content {
  align-items: center;
  justify-content: center;
  position: relative;
  height: auto;
  font-size: 14px;
  bottom: 0;
}
p {
  margin: 2px;
  padding: 2px;
}
.info{
  display: flex;
}
</style>