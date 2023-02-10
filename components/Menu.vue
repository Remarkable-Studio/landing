<script setup>
const { t } = useI18n({ useScope: 'local' })
const localePath = useLocalePath();
</script>

<template>
  <div class="flex text-sm">
    <NuxtLink class="mr-4 transition opacity-50 hover:opacity-100" :to="localePath('privacy')">{{ t('privacy') }}
    </NuxtLink>
    <a href="mailto:mickael@remarkable.school" class="transition opacity-50 hover:opacity-100">Contact</a>
  </div>
</template>

<i18n lang="yaml">
en:
  privacy: Terms & Privacy
fr:
  privacy: Conditions et Confidentialité
</i18n>