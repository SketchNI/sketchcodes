<template>
    <div class="px-4 lg:px-0 mb-4 lg:mb-0">
        <h1>Tools</h1>
        <h2>
            Any tools listed here have been developed for me to learn something new.
            They are published in case they are useful.
        </h2>
        <h3>
            <span class="font-semibold">No warranty exists. Check
                <a href="https://opensource.org/licenses/MIT" rel="noreferrer nofollow noopener">
                    license information</a>. (All tools are published under the MIT License unless otherwise
                specified and can be found under <nuxt-link to="projects">projects</nuxt-link>)
            </span>
        </h3>

        <div class="grid grid-cols-2 gap-4 mb-12">
            <div class="col-span-2 md:col-span-1 bg-gray-900 p-4 rounded-lg shadow text-gray-300"
                 v-if="tools.length > 1" v-for="tool in tools">
                <Tool :tool="tool" />
            </div>
            <div v-else class="col-span-2 text-xl bg-red-700 p-4 rounded-lg shadow text-white text-center">
                No tools defined.
            </div>
        </div>
    </div>
</template>

<script>
import Tool from "~/components/Tool"

export default {
    name: "Tools",
    components: { Tool },
    data() {
        return {
            tools: [
                // this entry is a template for all other entries and its why we count from 1 instead of 0 in the for
                // loop on Line 18
                {
                    "title": "",
                    "link": "",
                    "description": "",
                    "version": ""
                }
            ]
        }
    }
}
</script>

<style scoped>
h1 {
    @apply text-3xl;
}

h2 {
    @apply text-xl;
}

h3 {
    @apply text-base mb-6 text-white;
}
</style>
