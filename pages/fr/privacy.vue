<script setup>
const localePath = useLocalePath();
</script>

<template>
    <div class="container mx-auto max-w-3xl p-10">
        <NuxtLink :to="localePath('/')">
            <img src="../../assets/img/logo_black.svg" alt="Logo Short Cam" class="mb-4 md:mb-8 w-52 md:w-64" />
        </NuxtLink>

        <h1 class="text-5xl font-display py-6">
            Conditions et confidentialité
        </h1>
        <h2 class="text-3xl font-display py-4">Conditions d'utilisation</h2>
        <h3 class="text-lg font-body pt-3 pb-1">Introduction</h3>
        <p class="text-gray-600 py-1">
            Bienvenue dans notre application de caméra et d'édition vidéo. En
            utilisant l'application, vous acceptez ces termes et conditions (les
            "Conditions"). Si vous n'acceptez pas les Conditions, vous ne pouvez
            pas utiliser l'application.
        </p>

        <h3 class="text-lg font-body pt-3 pb-1">
            Utilisation de l'application
        </h3>
        <p class="text-gray-600 py-1">
            Vous pouvez utiliser l'application à des fins licites uniquement.
            Vous ne pouvez pas utiliser l'application à des fins illégales ou
            non autorisées. Vous ne devez pas, dans l'utilisation de
            l'application, violer les lois de votre juridiction (y compris, mais
            sans s'y limiter, les lois sur le droit d'auteur ou les marques
            commerciales).
        </p>

        <h3 class="text-lg font-body pt-3 pb-1">Contenu de l'utilisateur</h3>
        <p class="text-gray-600 py-1">
            Vous conservez tous les droits sur le contenu que vous rendez
            disponible à travers l'application. Nous ne collectons aucune donnée
            utilisateur. En rendant tout contenu utilisateur disponible à
            travers l'application, vous restez seul responsable de ce contenu et
            nous n'acquérons aucun droit ni licence à ce sujet.
        </p>

        <h3 class="text-lg font-body pt-3 pb-1">Avertissements</h3>
        <p class="text-gray-600 py-1">
            L'application est fournie "EN L'ÉTAT" et "TELLE QU'ELLE EST
            DISPONIBLE". Nous ne garantissons pas que l'application sera
            ininterrompue ou exempte d'erreurs.
        </p>

        <h3 class="text-lg font-body pt-3 pb-1">
            Limitation de responsabilité
        </h3>
        <p class="text-gray-600 py-1">
            Dans la mesure maximale permise par la loi, nous ne serons pas
            responsables de tout dommage indirect, accessoire, spécial,
            consécutif ou punitif, ou de toute perte de bénéfices ou de revenus,
            subis directement ou indirectement, ou de toute perte de données,
            d'utilisation, de bonne volonté ou autres pertes immatérielles,
            résultant de (a) votre accès ou utilisation de l'application ou de
            votre incapacité à y accéder ou à l'utiliser; (b) tout comportement
            ou tout contenu de tout tiers sur l'application; (c) tout contenu
            obtenu à partir de l'application; ou (d) un accès non autorisé, une
            utilisation ou une altération de vos transmissions ou de votre
            contenu.
        </p>

        <h2 class="text-3xl font-display py-4">Politique de confidentialité</h2>
        <h3 class="text-lg font-body pt-3 pb-1">Introduction</h3>
        <p class="text-gray-600 py-1">
            Nous prenons la vie privée de nos utilisateurs au sérieux. Cette
            politique de confidentialité explique comment nous collectons,
            utilisons et partageons les informations à travers notre application
            de caméra et d'édition vidéo.
        </p>

        <h3 class="text-lg font-body pt-3 pb-1">Collecte d'informations</h3>
        <p class="text-gray-600 py-1">
            Nous ne collectons aucune information personnelle de nos
            utilisateurs. L'application n'accède pas au carnet de caméra de
            l'appareil ni ne stocke aucune image ou vidéo prise avec
            l'application sur l'appareil.
        </p>

        <h3 class="text-lg font-body pt-3 pb-1">Partage d'informations</h3>
        <p class="text-gray-600 py-1">
            Nous ne partagerons aucune information collectée à travers
            l'application avec une tierce partie.
        </p>

        <h3 class="text-lg font-body pt-3 pb-1">
            Modifications de la politique de confidentialité
        </h3>
        <p class="text-gray-600 py-1">
            Nous pouvons mettre à jour cette politique de confidentialité de
            temps en temps. La dernière version de la politique de
            confidentialité sera toujours disponible sur notre site shortcam.app
        </p>
    </div>
</template>
