import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import et from "@/locales/et.json";

const i18n = createI18n({
    legacy: false,
    // default locale
    locale: localStorage.getItem("locale") ?? "en",
    fallbackLocale: "en",
    messages: {
      "en": en,
      "et": et
    },
  });

  export default i18n;

  export const supportedLocales = [
    { code: "en", name: "English" },
    { code: "ee", name: "Eesti" },
  ];
  
  export function setLocale(locale: any) {
    localStorage.setItem("locale", locale);
    i18n.global.locale.value = (localStorage.getItem("locale") || "en");
  }