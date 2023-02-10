// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
    tailwindcss: {
        configPath: "tailwind.config",
    },
    css: ["@/assets/fonts.css"],
    i18n: {
        vueI18nLoader: true,
        locales: ["en", "fr"],
        defaultLocale: "en",
        strategy: "prefix_except_default",
        detectBrowserLanguage: {
            useCookie: false,
            alwaysRedirect: true,
        },
        vueI18n: {
            legacy: false,
            messages: {
                en: {
                    title1: "Capture, Play, Edit & Share",
                    title2: "Your Moments From The Same Place",
                    privacy: "Terms & Privacy",
                },
                fr: {
                    title1: "Capture, Joue, Edite & Partage",
                    title2: "Tes Moments Depuis Le Même Endroit",
                    privacy: "Conditions et confidentialité",
                },
            },
        },
    },
});
