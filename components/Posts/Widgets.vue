<template>
    <div>
        <div class="widget">
            <h1 class="text-lg md:text-xl lg:text-3xl">Categories</h1>
            <div v-if="!loading">
                <button type="button" :class="`category ${cat.sys.id === active_category.id ? 'active' : ''}`"
                        v-for="cat in categories" :key="cat.sys.id"
                        @click.prevent="setCategory(cat.fields.category, cat.sys.id)">{{ cat.fields.category }}
                </button>
            </div>
            <div v-if="loading">
                <Loading/>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from "../Loading";

const contentful = require('contentful');

export default {
    name: "Widgets",
    components: {Loading},

    mounted() {
        this.getCategories();
    },

    created() {
        this.$nuxt.$on('SetActiveCategory', data => {
            this.active_category = data;
        });
    },

    data() {
        return {
            categories: [],
            loading: true,
            active_category: {
                id: null,
                label: null,
            }
        }
    },

    methods: {
        setCategory(cat, id) {
            if (cat !== null && id !== this.active_category.id) {
                this.active_category = {label: cat, id};
                this.$nuxt.$emit('GetPostsByCategory', {label: cat, id});
            } else {
                this.$nuxt.$emit('GetPostsByCategory', {label: null, id: null});
                this.active_category = {
                    id: null,
                    label: null,
                };
            }
        },

        getCategories() {
            const client = contentful.createClient({
                space: process.env.CONTENTFUL_ID,
                environment: 'master',
                accessToken: process.env.CONTENTFUL_KEY,
            });

            client.getEntries({
                content_type: 'category',
                select: ['fields.category', 'sys.id']
            })
                .then(res => {
                    this.categories = res.items;
                    this.loading = false;
                })
                .catch(e => {
                    console.log(e);
                });
        },
    }
}
</script>

<style scoped>
.category {
    @apply text-gray-400 text-center py-1 px-2 mb-2 border-2 border-transparent bg-gray-700 rounded-lg mr-2;
    @apply hover:text-purple-300 hover:border-purple-300 hover:bg-gray-800;
    @apply transition duration-150 ease-in outline-none;
}

.category.active {
    @apply bg-purple-400 bg-opacity-60 text-purple-100;
}

.widget {
    @apply mb-6;
}

.widget h1 {
    @apply mb-4 pb-1 border-b border-purple-400 border-opacity-30 text-purple-400;
}
</style>
