<template>
    <div>
        <div class="grid grid-cols-3 gap-12">
            <div class="col-span-3 lg:col-span-2" v-if="!loading">
                <div v-if="Object.keys(posts).length > 0" class="posts">
                    <div v-for="post in posts" :key="post.sys.id"
                         class="prose prose-sm md:prose-lg lg:prose-xl dark:prose">
                        <h1 class="title">
                            <NuxtLink :to="`/posts/${post.fields.slug}/${post.sys.id}`"
                                      v-html="post.fields.title"></NuxtLink>
                        </h1>
                        <p class="meta text-sm">
                            <span class="text-gray-400">Posted in</span>
                            <span v-for="(cat, i) in post.fields.category">
                                    {{ cat.fields.category }}<span v-if="i !== post.fields.category.length - 1">,</span>
                                </span>
                            <span class="text-gray-400">&middot;</span>
                            <span class="text-gray-400">Posted</span> {{ $moment(post.sys.createdAt).fromNow() }}
                            <span class="text-gray-500">({{
                                    $moment(post.sys.createdAt).format("MMMM Do YYYY h:mm a")
                                }})</span>
                        </p>
                        <div class="content text-justify"
                             v-html="markdown.toHTML(post.fields.content.content[0].content[0].value).substring(0, 300)"></div>
                        <NuxtLink :to="`/posts/${post.fields.slug}/${post.sys.id}`">Read full post</NuxtLink>

                        <div v-if="Object.keys(posts).length > 1" class="border-b border-gray-600 shadow my-4 w-full" />
                    </div>
                </div>
                <div v-else>
                    <h2 class="text-lg text-gray-400 text-center my-12 py-3 px-5 bg-orange-500 bg-opacity-70 text-red-100 shadow rounded-lg text-xl">
                        - Ah, I haven't posted anything with the category {{ active_category.label }} -
                    </h2>
                </div>
            </div>
            <div class="col-span-3 lg:col-span-2" v-if="loading">
                <Loading/>
            </div>

            <div class="col-span-3 lg:col-span-1">
                <widgets/>
            </div>
        </div>
    </div>
</template>

<script>
import Widgets from "../../components/Posts/Widgets";
import Loading from "../../components/Loading";

let contentful = require('contentful');

let markdown = require('markdown').markdown;

export default {
    name: "Posts",

    components: {
        Loading,
        Widgets
    },

    created() {
        this.getPosts();

        if (this.$route.hash === '#filter') {
            this.$nextTick(() => {
                this.active_category = this.$store.state.category.category;
                this.$nuxt.$emit('SetActiveCategory', this.active_category);
                this.getPostsByCategory();
                this.$store.commit('category/clear');
            });
        }

        this.$nuxt.$on('GetPostsByCategory', data => {
            this.active_category = data;
            if (this.active_category.id === null) {
                this.getPosts();
            } else {
                this.getPostsByCategory();
            }
        });
    },

    data() {
        return {
            markdown,
            posts: {
                type: Object,
                default: {}
            },
            loading: {
                type: Boolean,
                default: true,
            },
            active_category: {
                id: null,
                label: null
            },
        }
    },

    methods: {
        getPosts() {
            const client = contentful.createClient({
                space: process.env.CONTENTFUL_ID,
                environment: 'master',
                accessToken: process.env.CONTENTFUL_KEY,
            });

            client.getEntries({
                content_type: 'blogPost'
            })
                .then(res => {
                    this.posts = res.items;
                    this.loading = false;
                })
        },

        getPostsByCategory() {
            this.loading = true;
            const client = contentful.createClient({
                space: process.env.CONTENTFUL_ID,
                environment: 'master',
                accessToken: process.env.CONTENTFUL_KEY,
            });

            client.getEntries({
                content_type: 'blogPost',
                'fields.category.sys.id[in]': this.active_category.id,
            })
                .then(res => {
                    this.posts = res.items;
                    this.loading = false;
                })
        },
    }
}
</script>

<style scoped>
.posts {
    @apply mt-3;
}
</style>
