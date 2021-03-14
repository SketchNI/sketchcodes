<template>
    <div class="mx-auto mt-6 lg:w-3/4">
        <div class="grid grid-cols-4 gap-4">
            <div class="col-span-3" v-if="!loading">
                <div v-if="Object.keys(posts).length > 0" class="posts">
                    <div v-for="post in posts" :key="post.id" class="prose prose-purple lg:prose-xl">
                        <h1 class="title">
                            <NuxtLink :to="`/posts/${post.slug}/${post.id}`" v-html="post.title.rendered"></NuxtLink>
                        </h1>
                        <p class="meta text-sm">
                            <span class="text-gray-400">Posted in</span>
                            {{ resolve_taxonomy(post.categories, 'category') }}
                            <span class="text-gray-400">&middot;</span>
                            <span class="text-gray-400">Posted</span> {{ $moment(post.date_gmt).fromNow() }}
                            <span class="text-gray-500">({{
                                    $moment(post.date_gmt).format("MMMM Do YYYY h:mm a")
                                }})</span>
                        </p>
                        <div class="content" v-html="post.excerpt.rendered"></div>
                    </div>
                </div>
                <div v-else>
                    <h2 class="text-lg text-gray-400 text-center">
                        - No posts to display -
                    </h2>
                </div>
            </div>
            <div class="col-span-3" v-if="loading">
                <Loading />
            </div>

            <div class="col-span-1">
                <widgets/>
            </div>
        </div>
    </div>
</template>

<script>
import Widgets from "../../components/Posts/Widgets";
import Loading from "../../components/Loading";

export default {
    name: "Posts",

    components: {
        Loading,
        Widgets
    },

    created() {
        this.getPosts();

        this.$nuxt.$on('GetPostsByCategory', data => {
            this.active_category = data;
            this.getPostsByCategory();
        });
    },

    data() {
        return {
            posts: {
                type: Object,
                default: {}
            },
            loading: {
                type: Boolean,
                default: true,
            },
            active_category: null,
        }
    },

    methods: {
        getPostsByCategory() {
            this.loading = true;
            this.$axios.get(`https://www.sketchni.uk/wp-json/wp/v2/posts?categories=${this.active_category.id}&_fields=id,categories,title,excerpt,date_gmt,title,slug`)
                .then(res => {
                    this.posts = res.data;
                    this.loading = false;
                })
        },

        getPosts() {
            this.$axios.get(`https://www.sketchni.uk/wp-json/wp/v2/posts?_fields=id,categories,title,excerpt,date_gmt,title,slug`)
                .then(res => {
                    this.posts = res.data;
                    this.loading = false;
                });
        },

        resolve_taxonomy(contents, type) {
            let tax_list = [];
            contents.forEach((tax) => {
                tax_list.push(tax[`${type}_name`]);
            });

            return tax_list.join(", ");
        },
    }
}
</script>

<style scoped>
.posts {
    @apply mt-3;
}
</style>
