<template>
    <div class="header bg-gradient-to-r from-gray-750 to-black">
        <div class="mx-auto lg:w-3/4">
            <div class="lg:flex lg:items-center lg:justify-between lg:space-x-4 lg:h-32 text-gray-300">
                <Logo/>
                <Social/>
            </div>
        </div>
    </div>
</template>

<script>
import Social from "./Header/Social";
import Logo from "./Header/Logo";

export default {
    name: "Header",

    components: {
        Logo,
        Social
    }
}
</script>

<style scoped>

</style>
