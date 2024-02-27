<template>
  <h2 style="display: flex; justify-content: center; align-items: center">
    Miks osta seade meie poest?
  </h2>
  <div class="card-container">
    <div class="card">
      <Card>
        <template #title>Kvaliteetne valik:</template>
        <template #content>
          <p class="m-0" style="max-width: 200px">
            Suurim valik uusi ja kasutatud tooteid garantiiga.
          </p>
        </template>
      </Card>
    </div>
    <div class="card">
      <Card>
        <template #title>Ekspertteenindus</template>
        <template #content>
          <p class="m-0" style="max-width: 200px">
            Enamus tooteid kohe saadaval - külastage esindust või tellige
            e-poest.
          </p>
        </template>
      </Card>
    </div>
    <div class="card">
      <Card>
        <template #title>Kiire tarne:</template>
        <template #content>
          <p class="m-0" style="max-width: 200px">
            Tasuta transport pakiautomaati kõikidele toodetele.
          </p>
        </template>
      </Card>
    </div>
    <div class="card">
      <Card>
        <template #title>Mitmekülgne valik: </template>
        <template #content>
          <p class="m-0" style="max-width: 200px">
            Laia valikuga seadmed erinevatele eelarvetele ja soovidele.
          </p>
        </template>
      </Card>
    </div>
  </div>
</template>
<script setup lang="ts">
import Card from "primevue/card";
</script>
<style scoped>
.card-container{
    display: flex;
    justify-content: center;
}
.card {
  display: flex;
  gap: 1rem;
}
</style>
