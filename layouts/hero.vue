<template>
    <NuxtLayout>
        <div
            class="layout flex relative flex-wrap p-6 md:p-10 md:h-screen justify-center content-center text-white font-body">
            <div class="absolute top-0 left-0 right-0 z-0 w-screen h-full md:h-screen overflow-hidden bg-gray-900">
                <img src="../assets/img/blur_red.svg" class="blur-red" />
                <img src="../assets/img/blur_yellow.svg" class="blur-yellow" />
                <div class="noise absolute w-screen h-full opacity-20"></div>
            </div>
            <div class="max-w-6xl z-10">
                <slot />
            </div>
        </div>
    </NuxtLayout>
</template>

<style>
.noise {
    background-image: url("../assets/img/noise.png");
    background-repeat: repeat;
}

.blur-red {
    position: "absolute";
    top: 0;
    left: 0;
}

.blur-yellow {
    position: "absolute";
    bottom: 0;
    left: 0;
}
</style>