// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
    tailwindcss: {
        configPath: "tailwind.config",
    },
    css: ["@/assets/fonts.css"],
    i18n: {
        locales: ["en", "fr"],
        defaultLocale: "en",
        strategy: "prefix_except_default",
        detectBrowserLanguage: {
            useCookie: false,
            alwaysRedirect: true,
        },
        vueI18n: {
            legacy: false,
        },
    },
});
