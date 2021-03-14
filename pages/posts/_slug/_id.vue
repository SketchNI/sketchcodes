<template>
    <div class="mx-auto mt-6 lg:w-3/4">
        <div class="grid grid-cols-4 gap-4">
            <div class="col-span-3">
                <div class="post">
                    <div class="prose prose-purple lg:prose-xl">
                        <h1 class="title" v-html="post.title.rendered"></h1>
                        <p class="meta text-sm">
                            <span class="text-gray-400">Posted in</span> {{ resolve_taxonomy(post.categories, 'category') }}
                            <span class="text-gray-400">&middot;</span>
                            <span class="text-gray-400">Posted</span> {{ $moment(post.date_gmt).fromNow() }}
                            <span class="text-gray-500">({{ $moment(post.date_gmt).format("MMMM Do YYYY h:mm a") }})</span>
                        </p>
                        <div class="content" v-html="post.content.rendered"></div>
                    </div>
                </div>
            </div>

            <div class="col-span-1">
                <widgets />
            </div>
        </div>
    </div>
</template>

<script>
import Widgets from "../../../components/Posts/Widgets";

export default {
    name: "Post",

    components: {
        Widgets
    },

    created() {
        this.getPost();
    },

    data() {
        return {
            post: {
                categories: [],
                slug: null,
                title: {
                    rendered: null,
                },
                content: {
                    rendered: null,
                },
                date_gmt: new Date(),
            },
        }
    },

    methods: {
        getPost() {
            this.$axios.get(`https://www.sketchni.uk/wp-json/wp/v2/posts/${this.$route.params.id}?_fields=categories,title,content,date_gmt,title,slug`).then(res => {
                this.post = res.data;
            })
        },

        resolve_taxonomy(contents, type) {
            let tax_list = [];
            contents.forEach( tax => {
                tax_list.push(tax[`${type}_name`]);
            });

            return tax_list.join(", ");
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
