<script setup>
  const localePath = useLocalePath();
</script>

<template>
  <div class="flex my-8 text-sm">
    <NuxtLink class="mr-4 transition opacity-50 hover:opacity-100" :to="localePath('privacy')">Terms & Privacy</NuxtLink>
    <a href="" class="transition opacity-50 hover:opacity-100">Contact</a>
  </div>
</template>
