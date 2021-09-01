<template>
    <div>
        <div v-if="!loading">
            <div class="grid grid-cols-2 gap-4 mb-12">
                <div class="col-span-2 md:col-span-1 bg-gray-700 p-4 rounded-lg shadow text-gray-300" v-for="repo in projects">
                    <Repository :repository="repo" />
                </div>
            </div>
        </div>
        <div v-if="loading">
            <Loading />
        </div>
    </div>
</template>

<script>
import Loading from "../components/Loading";
import Repository from "../components/Repository";

export default {
    name: "Projects",

    components: {
        Repository,
        Loading,
    },

    created() {
        this.getUser().getProjects();
    },

    data() {
        return {
            loading: true,
            user: {},
            projects: {},
        }
    },

    methods: {
        getUser() {
            this.$axios.get(`https://api.github.com/users/denverthecoder`, {
                headers: {'Accept': "application/vnd.github.v3+json"}
            }).then(res => {
                this.user = res.data;
            });

            return this;
        },

        getProjects() {
            this.$axios.get(`https://api.github.com/users/denverthecoder/repos`, {
                headers: {'Accept': "application/vnd.github.v3+json"}
            }).then(res => {
                this.projects = res.data;
                this.loading = false;
            });
        },
    }
}
</script>

<style scoped>
.posts {
    @apply mt-3;
}
</style>
