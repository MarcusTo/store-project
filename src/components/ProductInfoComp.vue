<template>
  <div class="info-content" >
      <p><strong>{{ t('iphone15Pro.technicalData') }}</strong></p>
      <p style="margin-bottom: 2rem; ">{{ t('iphone15Pro.newSealedBox') }}</p>
      <p>{{ t('iphone15Pro.camera') }}</p>
      <p>{{ t('iphone15Pro.processor') }}</p>
      <p>{{ t('iphone15Pro.case') }}</p>
      <p>{{ t('iphone15Pro.actionBtn') }}</p>
      <p>{{ t('iphone15Pro.chargingPort') }}</p>
      <p>{{ t('iphone15Pro.dynamicIsland') }}</p>
      <p>{{ t('iphone15Pro.mainCamera') }}</p>
      <p>{{ t('iphone15Pro.ultraWideTelephotoCamera') }}</p>
      <p>{{ t('iphone15Pro.trueDepthFrontCamera') }}</p>
      <p>{{ t('iphone15Pro.cinematicCamera') }}</p>
      <p>{{ t('iphone15Pro.proResVideo') }}</p>
      <p>{{ t('iphone15Pro.macroMode') }}</p>
      <p>{{ t('iphone15Pro.nightModeLiDAR') }}</p>
      <p>{{ t('iphone15Pro.IPRating') }}</p>
      <p>{{ t('iphone15Pro.wirelessCharging') }}</p>
      <p>{{ t('iphone15Pro.magsafeCharging') }}</p>
      <p>{{ t('iphone15Pro.5GCapability') }}</p>
      <p>{{ t('iphone15Pro.crashDetection') }}</p>
    </div>
  </template>
  <script setup lang="ts">
  import { useI18n } from "vue-i18n";
  
  const { t } = useI18n();
  </script>
  
  <style scoped>
  .info-content{
    text-align: left; 
    margin-left: 48rem; 
    font-size: 16px; 
    display: block;
  }
  </style>