<template>
    <div class="">
        <Header />
        <Navbar />

        <Nuxt />
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
