// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
    tailwindcss: {
        configPath: "tailwind.config",
    },
    css: ["@/assets/fonts.css"],
    i18n: {
        baseUrl: "https://shortcam.app",
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
                    "pages.privacy.title": "Short Cam - Terms & Privacy Policy",
                },
                fr: {
                    "pages.privacy.title":
                        "Short Cam - Conditions générales & Politique de confidentialité",
                },
            },
        },
    },
});
