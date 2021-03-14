<template>
    <div>
        <div class="widget">
            <h1>Categories</h1>
            <div v-if="!loading">
                <button type="button" :class="`category ${cat.id === active_category.id ? 'active' : ''}`" v-for="cat in categories" :key="cat.id"
                        @click.prevent="setCategory(cat.slug, cat.id)">{{ cat.name }}
                </button>
            </div>
            <div v-if="loading">
                <Loading />
            </div>
        </div>
    </div>
</template>

<script>
import Loading from "../Loading";
export default {
    name: "Widgets",
    components: {Loading},
    created() {
        this.getCategories();
    },

    data() {
        return {
            categories: [],
            loading: true,
            active_category: {}
        }
    },

    methods: {
        setCategory(cat, id) {
            if (cat !== null && id !== this.active_category.id) {
                this.active_category = {label: cat, id};
                this.$nuxt.$emit('GetPostsByCategory', {label: cat, id});
            } else {
                this.active_category = {};
            }
        },

        getCategories() {
            this.$axios.get(`https://www.sketchni.uk/wp-json/wp/v2/categories`).then(res => {
                this.categories = res.data;
                this.loading = false;
            });
        },
    }
}
</script>

<style scoped>
.category {
    @apply text-gray-400 text-center py-1 px-2 mb-2 border-2 border-transparent bg-gray-700 rounded-lg mr-2;
    @apply hover:text-purple-300 focus:text-purple-500 hover:border-purple-400 hover:bg-gray-800;
    @apply transition duration-150 ease-in outline-none;
}

.category.active {
    @apply bg-purple-400 bg-opacity-40 text-purple-300;
}

.widget {
    @apply mb-6;
}

.widget h1 {
    @apply text-xl mb-4 pb-1 border-b border-purple-400 border-opacity-30 text-purple-400;
}
</style>
