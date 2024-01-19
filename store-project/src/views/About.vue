<template>
  <NavBarComp />

  <div class="about">
    <h1>Ettevõttest</h1>

    <p>
      Tere tulemast , Eesti juhtivasse elektroonikatoodete ja
      teenuste ettevõttesse! Oleme uhked selle üle, et pakume laia valikut
      nutitelefone, arvuteid, kõrvaklappe ning nendega seotud teenuseid, mis
      vastavad teie digitaalsetele vajadustele.
    </p>
    <p>
       alustas oma teekonda 2004 aastal ja oleme
      pühendunud kvaliteetsete elektroonikaseadmete pakkumisele koos tipptasemel
      teenindusega. Meie eesmärk on tuua tipptehnoloogia otse teie käeulatusse,
      pakkudes samal ajal personaalset klienditeenindust.
    </p>
    <p>
      Meie tootevalik hõlmab laias valikus nutitelefone erinevatest
      tippmarkidest, arvuteid igapäevaseks kasutamiseks ning kõrvaklappe, mis
      pakuvad suurepärast helikvaliteeti. Lisaks toodetele pakume ka
      mitmesuguseid teenuseid, sealhulgas seadmete remonti, tarkvara uuendamist
      ja tehnilist tuge.
    </p>
    <p>
      Oleme pühendunud teie rahulolule ning usume, et meie pühendumus
      kvaliteedile ja tipptasemel teenustele muudab meid teie usaldusväärseks
      partneriks digitaalses maailmas. Täname, et valisite [Company Name]!
    </p>

    <h1>Teenused</h1>

    <h1>Kontakt</h1>

    <p style="font-weight: bold">KÕIGE KÕVEM POOD MAAILMAS</p>
    <p><i class="pi pi-home"></i> Aia 5, Tallinn, Estonia</p>
    <p><i class="pi pi-phone"></i> +372 123 456 789</p>
    <p><i class="pi pi-envelope"></i> info@kõigekõvempood.ee</p>
  </div>
</template>

<script setup lang="ts">
import NavBarComp from "@/components/NavBarComp.vue";
</script>

<style>
.about {
  margin-top: 20px; /* Adjust the margin-top value as needed */
  margin-bottom: 20px; /* Add margin at the bottom if desired */
  text-align: center;
}

.about p {
  margin-bottom: 15px;
}

.about h1 {
  margin-bottom: 20px;
}
.center-text {
  text-align: center;
}
</style>
