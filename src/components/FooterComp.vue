<template>
  <div class="container">
    <div class="content">
      <p style="font-weight: bold">{{ t("footer.name") }}</p>
      <p>{{ t("footer.location") }}</p>
      <div class="info">
        <p>{{ t("footer.info") }}</p>
      </div>
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

.content {
  text-align: center;
  align-items: center;
  justify-content: center;
  
}
p {
  margin: 2px;
  padding: 2px;
}
.info{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
