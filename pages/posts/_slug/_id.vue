<template>
    <div class="mx-4 lg:mx-auto mt-6 lg:w-3/4">
        <div class="grid grid-cols-3 gap-12 mb-12">
            <div class="col-span-3 lg:col-span-2">
                <div class="prose prose-sm md:prose-lg lg:prose-xl dark:prose">
                    <h1 class="title" v-html="post.fields.title" />
                    <p class="meta text-sm">
                        <span class="text-gray-400">Posted in</span>
                        <span v-for="(cat, i) in post.fields.category">
                            {{ cat.fields.category }}<span v-if="i !== post.fields.category.length - 1">,</span>
                        </span>
                        <span class="text-gray-400">&middot;</span>
                        <span class="text-gray-400">Posted</span> {{ $moment(post.sys.createdAt).fromNow() }}
                        <span class="text-gray-500">({{
                                $moment(post.sys.createdAt).format("MMMM Do YYYY \\a\\t h:mm a")
                            }})</span>
                    </p>

                    <div class="content text-justify" v-html="post.fields.content"></div>

                    <div class="mt-4 mb-12">
                        <strong class="md:text-lg lg:text-xl">Tags</strong>
                        <div class="tags mt-2">
                            <span v-for="tag in post.metadata.tags" :key="tag.sys.id"
                                  class="px-2 rounded-full text-sm py-1 inline-block mb-2 mr-2 bg-purple-500 text-gray-200">
                                {{ tag.sys.id }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-span-3 lg:col-span-1">
                <widgets />
            </div>
        </div>
    </div>
</template>

<script>
import Widgets from "../../../components/Posts/Widgets";
let contentful = require('contentful');

let markdown = require('markdown').markdown;

export default {
    name: "Post",

    components: {
        Widgets
    },

    created() {
        this.getPost();

        this.$nuxt.$on('GetPostsByCategory', data => {
            this.$store.commit('category/store', data);
            this.$nuxt.$router.push(`/posts#filter`);
        });
    },

    data() {
        return {
            markdown,
            post: {
                fields: {
                    category: null,
                    content: null,
                    slug: null,
                    title: null,
                },
                metadata: {
                    tags: {

                    }
                },
                sys: {
                    id: null,
                }
            },
        }
    },

    methods: {
        getPost() {
            const client = contentful.createClient({
                space: process.env.CONTENTFUL_ID,
                environment: 'master',
                accessToken: process.env.CONTENTFUL_KEY,
            });

            client.getEntry(this.$route.params.id, {
                content_type: ['blogPost', 'category'],
            })
                .then(res => {
                    this.post = res;
                    this.post.fields.content = markdown.toHTML(res.fields.content.content[0].content[0].value);
                    this.loading = false;
                })
        },
    }
}
</script>

<style scoped>
.post {
    @apply mt-3;
}

.prose h1 {
    @apply mb-0;
}

.prose > h1 > a {
    @apply no-underline text-purple-400;
}
</style>
