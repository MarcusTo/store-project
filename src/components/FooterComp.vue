<template>
  <div class="footer">
    <div class="content">
      <p>{{ t("footer.location") }}</p>
      <div
        class=""
      >
        <a href="mailto:info@pood.ee" style="color: #0070c9">Info@pood.ee</a>
        <a href="telto:5891 0000" style="color: #0070c9; margin: 0 5px">{{
          t("footer.info")
        }}</a>
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
.footer {
  display: flex;
  justify-content: center;
  position: sticky;
  align-items: center;
  height: 100%;
  margin-top: 16rem;
  margin-bottom: 5rem
}
.copyright {
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  align-items: center;
  justify-content: center;
  position: sticky;
  height: auto;
  font-size: 14px;
  bottom: 0;
}
p {
  margin: 2px;
  padding: 2px;
}
</style>
