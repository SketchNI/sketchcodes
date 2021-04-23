<template>
    <div class="bg-gradient-to-r from-gray-750 to-black border-t border-gray-800">
        <div class="mx-auto lg:w-3/4">
            <div class="flex flex-row justify-start items-center space-x-6">
                <NuxtLink active-class="active" exact prefetch to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="w-6 inline-block text-gray-300"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                    </svg>
                    Home
                </NuxtLink>

                <NuxtLink active-class="active" exact prefetch to="/posts">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="w-6 inline-block text-gray-300"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"/>
                    </svg>
                    Posts
                </NuxtLink>

                <NuxtLink active-class="active" exact prefetch to="/projects">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="w-6 inline-block text-gray-300"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    Projects
                </NuxtLink>

                <NuxtLink active-class="active" exact prefetch to="/tools">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="w-6 inline-block text-gray-300"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Tools
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>
a:not(.active) svg {
    @apply text-gray-200 mr-2 hover:text-blue-300 focus:text-blue-400 hover:border-blue-300 focus:border-blue-400;
}

a:not(.active):hover svg {
    @apply text-blue-300 text-blue-400 border-blue-300 border-blue-400;
    @apply transition duration-150 ease-in;
}

a {
    @apply text-gray-200 p-4 border-b-4 border-transparent inline-flex items-center;
    @apply hover:text-blue-300 focus:text-blue-400 hover:border-blue-300 focus:border-blue-400;
    @apply transition no-underline duration-150 ease-in;
}

a.active svg {
    @apply text-purple-400 mr-2;
}
a.nuxt-link-exact-active.active {
    @apply border-b-2 border-purple-400 text-purple-400 font-semibold;
}
</style>
