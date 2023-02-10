<script setup>
const route = useRoute()
const { t } = useI18n({ useScope: 'local' })

useServerSeoMeta({
    title: t(route.meta.title ?? 'meta.title'),
    ogTitle: t(route.meta.title ?? 'meta.ogTitle'),
    description: t('meta.description'),
    ogDescription: t('meta.ogDescription'),
})

</script>

<template>
    <slot />
</template>

<i18n lang="yaml">
en:
    meta.title: Short Cam - Smart Camera Editor App
    meta.ogTitle: Short Cam - Smart Camera Editor App
    meta.description: Capture, Play, Edit & Share Your Moments From The Same Place
    meta.ogDescription: Capture, Play, Edit & Share Your Moments From The Same Place

fr:
    meta.title: Short Cam - Capture et édition de vidéo
    meta.ogTitle: Short Cam - Capture et édition de vidéo
    meta.description: Capture, Joue, Édite & Partage Tes Moments Depuis Le Même Endroit
    meta.ogDescription: Capture, Joue, Édite & Partage Tes Moments Depuis Le Même Endroit
</i18n>