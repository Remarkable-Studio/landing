<script setup>
import DefaultLayout from "../layouts/DefaultLayout.vue";
import Menu from "~/components/Menu.vue";

const localePath = useLocalePath();

useServerSeoMeta({
  title: 'Short Cam',
  ogTitle: 'Short Cam',
  description: 'Capture, Play, Edit & Share Your Moments From The Same Place',
  ogDescription: 'Capture, Play, Edit & Share Your Moments From The Same Place',
})
</script>

<template>
    <DefaultLayout>
        <div class="flex md:items-center flex-col md:flex-row">
            <div class="flex flex-col">
                <NuxtLink :to="localePath('/')" class="mb-4 md:mb-8 w-52 md:w-64 mx-auto md:ml-0">
                    <img src="../assets/img/logo.svg" alt="Logo Short Cam" />
                </NuxtLink>
                <div class="text-center md:text-left ">
                    <h1 class="text-3xl md:text-5xl xl:text-6xl font-black font-display my-8">
                        <span
                            class="w-full block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-300">
                            {{ $t("title1") }}
                        </span>
                        {{ $t("title2") }}
                    </h1>
                    <a href="/" target="_blank">
                        <img class="inline duration-500 hover:scale-110 hover:drop-shadow-2xl"
                            src="../assets/img/apple_button_en.svg" alt="Download button" />
                    </a>
                </div>
                <Menu class="mt-16 hidden md:block" />
            </div>

            <div class="mt-8 md:mt-0 md:ml-8 md:w-96">
                <img id="app-img" class="animate-spin w-80 m-auto" src="../assets/img/app.png" alt="Short Cam App" />
            </div>

            <Menu class="mt-16 block md:hidden justify-center" />
        </div>
    </DefaultLayout>
</template>

<style>
@keyframes appear {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

#app-img {
    animation: appear 500ms ease-in-out;
}
</style>