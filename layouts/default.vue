<template>
    <div class="">
        <Header />
        <Navbar />

        <div class="lg:mx-auto mx-4 mt-6 lg:w-3/4">
            <Nuxt />
        </div>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PZXBW38R70"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-PZXBW38R70');
        </script>
    </div>
</template>

<script>
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default {
    components: {
        Navbar,
        Header

    }
}
</script>

<style scoped>

</style>
