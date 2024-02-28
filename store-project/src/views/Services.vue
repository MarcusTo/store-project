<template>
  <NavBarComp> </NavBarComp>
  <h2 class="header">Hooldus</h2>
  <div class="card">
      <Card>
    <template #content>
      <h2>{{ t("service.header1") }}</h2>
      <p>{{ t("dummyText") }}</p>
      <p>{{ t("dummyText") }}</p>
    </template>
  </Card>
  </div>

  <FooterComp> </FooterComp>
</template>
<script setup lang="ts">
import NavBarComp from "@/components/NavBarComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import Card from "primevue/card";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
<style scoped>
.header {
  font-size: 40px;
  justify-content: center;
  padding-left: 80px;
}
.card{
    padding-left: 80px;

}
</style>
