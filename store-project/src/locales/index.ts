import { createI18n } from "vue-i18n";
import et from "@/locales/et.json"
import en from "@/locales/en.json"

export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    messages:{et,en},
    legacy: false,
    globalInjection: true,
})