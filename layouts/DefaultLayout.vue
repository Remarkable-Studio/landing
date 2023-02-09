<template>

    <div class="layout flex relative flex-wrap p-6 md:p-10 md:h-screen justify-center content-center text-white font-body">
        <div class="absolute top-0 left-0 right-0 z-0 w-screen h-full md:h-screen overflow-hidden bg-gray-900">
            <img src="~/assets/img/blur_red.svg" class="BlurRed absolute" />
            <img src="~/assets/img/blur_yellow.svg" class="BlurYellow absolute" />
            <div class="noise absolute w-screen h-full opacity-20"></div>
        </div>
        <div class="max-w-6xl z-10">
            <slot />
        </div>
    </div>
</template>

<style>
    .noise{
        background-image: url("~/assets/img/noise.png");
        background-repeat: repeat;
    
    }

    .BlurRed{
        top: 0;
        left: 0;
    }
    .BlurYellow{
        bottom: 0;
        left: 0;
    }

    @font-face {
    font-family: 'ClashDisplay-Regular';
    src: url('~/asset/fonts/ClashDisplay-Regular.woff2') format('woff2'),
        url('~/asset/fonts/ClashDisplay-Regular.woff') format('woff'),
        url('~/asset/fonts/ClashDisplay-Regular.ttf') format('truetype');
        font-weight: 400;
        font-display: swap;
        font-style: normal;
    }


    @font-face {
    font-family: 'ClashDisplay-Medium';
    src: url('~/asset/fonts/ClashDisplay-Medium.woff2') format('woff2'),
        url('~/asset/fonts/ClashDisplay-Medium.woff') format('woff'),
        url('~/asset/fonts/ClashDisplay-Medium.ttf') format('truetype');
        font-weight: 500;
        font-display: swap;
        font-style: normal;
    }


    @font-face {
    font-family: 'ClashDisplay-Semibold';
    src: url('~/asset/fonts/ClashDisplay-Semibold.woff2') format('woff2'),
        url('~/asset/fonts/ClashDisplay-Semibold.woff') format('woff'),
        url('~/asset/fonts/ClashDisplay-Semibold.ttf') format('truetype');
        font-weight: 600;
        font-display: swap;
        font-style: normal;
    }


    @font-face {
    font-family: 'ClashDisplay-Bold';
    src: url('~/asset/fonts/ClashDisplay-Bold.woff2') format('woff2'),
        url('~/asset/fonts/ClashDisplay-Bold.woff') format('woff'),
        url('~/asset/fonts/ClashDisplay-Bold.ttf') format('truetype');
        font-weight: 700;
        font-display: swap;
        font-style: normal;
    }


</style>