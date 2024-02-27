<template>
  <div class="container">
    <div class="content">
        <p style="font-weight: bold">{{t('footer.name') }}</p>
    <p><i class="pi pi-home"></i>{{ t('footer.location') }}</p>
    <p><i class="pi pi-phone"></i> {{ t('footer.number') }}</p>
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
}
</style>
