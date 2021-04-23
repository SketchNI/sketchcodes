<template>
    <div>
        <div class="flex items-center justify-between">
            <h2 class="text-xl text-gray-200">{{ tool.title }}</h2>
            <div class="text-right text-gray-500">
                {{ tool.version }}
            </div>
        </div>
        <a :href="tool.link" target="_blank" rel="noopener">Use Tool</a>
        <p class="prose mb-3" v-html="tool.description"></p>

    </div>
</template>

<script>
export default {
    name: "Tool",

    props: ["tool"],
}
</script>

<style scoped>
a {
    @apply text-xl rounded my-3 bg-purple-700 text-purple-50 block py-3 text-center;
    @apply hover:bg-purple-800 hover:text-purple-50 focus:bg-purple-800 focus:ring focus:ring-offset-2;
    @apply focus:ring-offset-gray-900 focus:ring-purple-800 focus:no-underline;
    @apply duration-150 transition ease-in-out;
}
</style>
