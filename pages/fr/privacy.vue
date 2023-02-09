<script setup>
  const localePath = useLocalePath();
</script>

<template>
  <div class="container mx-auto max-w-3xl p-10">
    <!-- <a href="/"><img src="~/assets/img/logo_black.svg" alt="Logo Short Cam" class="mb-4 md:mb-8 w-52 md:w-64" /></a> -->
    <NuxtLink :to="localePath('/')">
      <img src="../../asset/img/logo_black.svg" alt="Logo Short Cam" class="mb-4 md:mb-8 w-52 md:w-64" />
    </NuxtLink>

    <h1>Terms & Privacy FR</h1>
    <h2>Terms of Service</h2>
    <h3>Introduction</h3>
    <p>Welcome to our camera and video editing app. By using the app, you agree to these terms and conditions (the "Terms"). If you do not agree to the Terms, you may not use the app.</p>
    <h3>Use of the App</h3>
    <p>You may use the app for lawful purposes only. You may not use the app for any illegal or unauthorized purpose. You must not, in the use of the app, violate any laws in your jurisdiction (including but not limited to copyright or trademark laws).</p>
    <h3>User Content</h3>
    <p>You retain all rights to the content you make available through the app. We do not collect any user data. By making any user content available through the app, you remain solely responsible for such content and we do not gain any rights or license to it.</p>
    <h3>Disclaimers</h3>
    <p>The app is provided on an "AS IS" and "AS AVAILABLE" basis. We do not guarantee the app will be uninterrupted or error-free.</p>
    <h3>Limitation of Liability</h3>
    <p>To the fullest extent permitted by law, we will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the app; (b) any conduct or content of any third party on the app; (c) any content obtained from the app; or (d) unauthorized access, use, or alteration of your transmissions or content.</p>
    <h2>Privacy Policy</h2>
    <h3>Introduction</h3>
    <p>We take the privacy of our users seriously. This Privacy Policy explains how we collect, use, and share information through our camera and video editing app.</p>
    <h3>Information Collection</h3>
    <p>We do not collect any personal information from our users. The app does not access the device's camera roll or store any images or videos taken with the app on the device.</p>
    <h3>Sharing of Information</h3>
    <p>We will not share any information collected through the app with any third party.</p>
    <h3>Changes to Privacy Policy</h3>
    <p>We may update this Privacy Policy from time to time. The latest version of the Privacy Policy will always be available on our app.</p>
  </div>  
</template>

<style>
  h1{
    @apply text-5xl font-display py-6;
  }
  h2{
    @apply text-3xl font-display py-4;
  }
  h3{
    @apply text-lg font-body pt-3 pb-1;
  }
  p{
    @apply text-gray-600 py-1;
  }
</style>