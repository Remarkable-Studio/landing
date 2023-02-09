<script setup>
  import DefaultLayout from '../layouts/DefaultLayout.vue';

  import Menu from '~/components/Menu.vue';

</script>

<template>
    <DefaultLayout>
        <div class="flex md:items-center flex-col md:flex-row">
            <div>
                <img src="../asset/img/logo.svg" alt="Logo Short Cam" class="mb-8 md:mb-16 w-52 md:w-64" />
                <h1 class="text-3xl md:text-5xl xl:text-6xl font-black font-display my-8" >
                    <span class="w-full block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-300">{{ $t('title1') }}</span>
                    {{ $t('title2') }}
                </h1>
                <a href="https://www.google.com" target="_blank">
                    <img src="../asset/img/apple_button_en.svg" alt="Download button" class="transitio duration-500 hover:scale-110 hover:drop-shadow-2xl" />
                </a>
                <Menu class="mt-16 hidden md:block" />
            </div>
            <div class="w-80 mt-8 md:mt-0 md:ml-8 w-fit md:w-96">
                <img src="../asset/img/app.png" alt="Short Cam App" />
                <Menu class="mt-16 block md:hidden" />
            </div>
        </div>
    </DefaultLayout>
</template>