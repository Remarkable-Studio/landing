<script setup>
const { t } = useI18n({ useScope: 'local' })
const localePath = useLocalePath();

definePageMeta({
  title: "pages.privacy.title",
})
</script>

<template>
  <NuxtLayout>
    <div class="container mx-auto max-w-3xl p-10">

      <NuxtLink :to="localePath('/')">
        <img src="../assets/img/logo_black.svg" alt="Logo Short Cam" class="mb-4 md:mb-8 w-52 md:w-64" />
      </NuxtLink>

      <h1 class="text-3xl md:text-5xl font-display py-6">{{ t('title') }}</h1>

      <!-- Terms of Service -->
      <h2 class="text-2xl md:text-3xl font-display py-4">{{ t('terms.title') }}</h2>

      <h3 class="text-lg font-body pt-3 pb-1">{{ t('terms.intro.title') }}</h3>
      <p class="text-gray-600 py-1">{{ t('terms.intro.body') }}</p>

      <h3 class="text-lg font-body pt-3 pb-1">{{ t('terms.use.title') }}</h3>
      <p class="text-gray-600 py-1">{{ t('terms.use.body') }}</p>

      <h3 class="text-lg font-body pt-3 pb-1">{{ t('terms.user.title') }}</h3>
      <p class="text-gray-600 py-1">{{ t('terms.user.body') }}</p>

      <h3 class="text-lg font-body pt-3 pb-1">{{ t('terms.disclaimer.title') }}</h3>
      <p class="text-gray-600 py-1">{{ t('terms.disclaimer.body') }}</p>

      <h3 class="text-lg font-body pt-3 pb-1">{{ t('terms.modification.title') }}</h3>
      <p class="text-gray-600 py-1">{{ t('terms.modification.body') }}</p>

      <!-- Privacy Policy -->
      <h2 class="text-2xl md:text-3xl font-display py-4">{{ t('privacy.title') }}</h2>

      <h3 class="text-lg font-body pt-3 pb-1">{{ t('privacy.intro.title') }}</h3>
      <p class="text-gray-600 py-1">{{ t('privacy.intro.body') }}</p>

      <h3 class="text-lg font-body pt-3 pb-1">{{ t('privacy.collection.title') }}</h3>
      <p class="text-gray-600 py-1">{{ t('privacy.collection.body') }}</p>

      <h3 class="text-lg font-body pt-3 pb-1">{{ t('privacy.sharing.title') }}</h3>
      <p class="text-gray-600 py-1">{{ t('privacy.sharing.body') }}</p>


      <!-- UpdatedAt -->
      <p class="text-gray-600 mt-16">{{ t('updatedat') }}</p>
    </div>
  </NuxtLayout>
</template>

<i18n lang="yaml">
en:
  title: Terms & Privacy

  terms.title: Terms & Privacy
  terms.intro.title: Introduction
  terms.intro.body: >
    Welcome to our camera and video editing app. By using the app, you agree to these
    terms and conditions (the "Terms"). If you do not agree to the Terms, you may not use the app.

  terms.use.title: Use of the App
  terms.use.body: >
    You may use the app for lawful purposes only. You may not use the app for any illegal
    or unauthorized purpose. You must not, in the use of the app, violate any laws in your jurisdiction (including but
    not limited to copyright or trademark laws).

  terms.user.title: User Content
  terms.user.body: >
    You retain all rights to the content you make available through the app. We do not
    collect any user data. By making any user content available through the app, you remain solely responsible for
    such content and we do not gain any rights or license to it.

  terms.disclaimer.title: Disclaimers
  terms.disclaimer.body: >
    The app is provided on an "AS IS" and "AS AVAILABLE" basis. We do not guarantee the
    app will be uninterrupted or error-free.
    To the fullest extent permitted by law, we will not be liable for any indirect,
    incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred
    directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your
    access to or use of or inability to access or use the app; (b) any conduct or content of any third party on the
    app; (c) any content obtained from the app; or (d) unauthorized access, use, or alteration of your transmissions
    or content.

  terms.modification.title: Modifications
  terms.modification.body: >
    We reserve the right to modify these Terms, including Privacy Policy, at any time, in our sole discretion. If we
    make changes to the Terms or Privacy Policy, we will update the "Last Updated" date below. Your continued use of
    the app following the posting of any changes to the Terms or Privacy Policy constitutes acceptance of those
    changes. If you do not agree to the modified Terms or Privacy Policy, you must stop using the app. It is your
    responsibility to periodically review the Terms or Privacy Policy to stay informed of any changes.

  privacy.title: Privacy Policy

  privacy.intro.title: Introduction
  privacy.intro.body: >
    We take the privacy of our users seriously. This Privacy Policy explains how we
    collect, use, and share information through our camera and video editing app.

  privacy.collection.title: Information Collection
  privacy.collection.body: >
    We do not collect any personal information from our users. The app does not access the
    device's camera roll or store any images or videos taken with the app on the device.

  privacy.sharing.title: Sharing of Information
  privacy.sharing.body: >
    We will not share any information collected through the app with any third party.

  updatedat: "Last Updated: February 10, 2023."

fr:
  title: Conditions g??n??rales & Politique de confidentialit??

  terms.title: Conditions g??n??rales
  terms.intro.title: Introduction
  terms.intro.body: >
    Bienvenue sur notre application de cam??ra et d'??dition vid??o. En utilisant l'application, vous acceptez ces
    conditions g??n??rales (les ??Conditions??). Si vous n'acceptez pas les conditions, vous ne pouvez pas utiliser l'application.

  terms.use.title: Utilisation de l'application
  terms.use.body: >
    Vous pouvez utiliser l'application ?? des fins l??gales uniquement. Vous ne pouvez pas utiliser l'application ??
    des fins ill??gales ou non autoris??es. Vous ne devez pas, dans l'utilisation de l'application, enfreindre les lois de
    votre juridiction (y compris, mais sans s'y limiter, les lois sur le droit d'auteur ou les marques de commerce).

  terms.user.title: Contenu de l'utilisateur
  terms.user.body: >
    Vous conservez tous les droits sur le contenu que vous mettez ?? disposition par l'interm??diaire de l'application.
    Nous ne collectons aucune donn??e utilisateur. En mettant ?? disposition du contenu utilisateur par l'interm??diaire
    de l'application, vous restez seul responsable de ce contenu et nous n'obtenons aucun droit ou licence sur celui-ci.

  terms.disclaimer.title: Limitation de responsabilit??
  terms.disclaimer.body: >
    L'application est fournie "EN L'??TAT" et "TELLE QU'ELLE EST DISPONIBLE". Nous ne garantissons pas que l'application
    sera ininterrompue ou exempte d'erreurs.
    Dans la mesure permise par la loi, nous ne serons pas responsables de tout dommage indirect, accessoire, sp??cial,
    cons??cutif ou punitif, ou de toute perte de profits ou de revenus, qu'elle soit subie directement ou indirectement,
    ou de toute perte de donn??es, d'utilisation, de bonne volont?? ou d'autres pertes intangibles, r??sultant de (a)
    votre acc??s ou votre utilisation ou votre incapacit?? d'acc??der ou d'utiliser l'application; (b) tout comportement
    ou contenu d'un tiers sur l'application; (c) tout contenu obtenu ?? partir de l'application; ou (d) l'acc??s non
    autoris??, l'utilisation ou la modification de vos transmissions ou de votre contenu.

  terms.modification.title: Modifications
  terms.modification.body: >
    Nous nous r??servons le droit de modifier ces Conditions g??n??rales, y compris la Politique de confidentialit??, ??
    tout moment, ?? notre seule discr??tion. Si nous apportons des modifications aux Conditions g??n??rales ou ?? la
    Politique de confidentialit??, nous mettrons ?? jour la date de ??Derni??re mise ?? jour?? ci-dessous. Votre utilisation
    continue de l'application suite ?? la publication de tout changement aux Conditions g??n??rales ou ?? la Politique de
    confidentialit?? constitue l'acceptation de ces modifications. Si vous n'acceptez pas les Conditions g??n??rales
    modifi??es ou la Politique de confidentialit??, vous devez cesser d'utiliser l'application. Il est de votre
    responsabilit?? de consulter r??guli??rement les Conditions g??n??rales ou la Politique de confidentialit?? pour rester
    inform?? de tout changement.

  privacy.title: Politique de confidentialit??

  privacy.intro.title: Introduction
  privacy.intro.body: >
    Nous ne collectons aucune donn??e utilisateur. Nous ne partagerons aucune information collect??e par l'application
    avec une tierce partie.

  privacy.collection.title: Collecte de donn??es
  privacy.collection.body: >
    Nous ne collectons aucune information personnelle de nos utilisateurs. L'application n'acc??de pas au carnet de
    photos ou ?? l'appareil photo du p??riph??rique et ne stocke aucune image ou vid??o prise avec l'application sur le
    p??riph??rique.

  privacy.sharing.title: Partage d'informations
  privacy.sharing.body: >
    Nous ne partagerons aucune information collect??e par l'application avec une tierce partie.

  updatedat: "Derni??re mise ?? jour: 10 f??vrier 2023."
</i18n>