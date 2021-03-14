<template>
    <div>
        <h2 class="text-xl"><span class="text-gray-400">{{ repo.owner.login }}/</span>{{ repo.name }}</h2>
        <a :href="repo.html_url" target="_blank" rel="noopener">View on GitHub</a>
        <p class="prose my-3" v-html="repo.description"></p>
        <div class="flex space-x-5 text-sm items-center">
            <span class="pr-2" title="Forks" v-html="`${octicons['repo-forked'].toSVG({fill:'#f0eded', size: 16 })}`"/>
            {{ repo.forks_count }} Forks
            <span class="pr-2" title="Stargazers" v-html="`${octicons.star.toSVG({fill:'#f0eded', size: 16 })}`"/>
            {{ repo.stargazers_count }} Stars
            <span class="pr-2" title="Watchers" v-html="`${octicons.eye.toSVG({fill:'#f0eded', size: 16 })}`"/>
            {{ repo.watchers_count }} Watchers
            <span class="pr-2" title="Issues" v-html="`${octicons['issue-opened'].toSVG({fill:'#f0eded', size: 16 })}`"/>
            {{ repo.open_issues_count }} Issues
            <span class="flex items-center">
                <span class="pr-2" title="Releases" v-html="`${octicons.tag.toSVG({fill:'#f0eded', size: 16 })}`"/>
                <span class="pr-1" v-text="releases_count"/> {{ releases_count === 1 ? ' Release' : ' Releases' }}
            </span>
            <span class="flex items-center">
                <span class="pr-2" title="Pull Requests" v-html="`${octicons['git-pull-request'].toSVG({fill:'#f0eded', size: 16 })}`"/>
                <span class="pr-1" v-text="prs_count"/> {{ prs_count === 1 ? ' PR' : ' PRs' }}
            </span>
        </div>
    </div>
</template>

<script>
let octicons = require('@primer/octicons');

export default {
    name: "Repository",

    props: ['repository'],

    created() {
        this.releases();
        this.prs();
    },

    data() {
        return {
            octicons,
            releases_count: 0,
            prs_count: 0,
            repo: this.repository,
        }
    },

    methods: {
        releases() {
            this.$axios.get(`https://api.github.com/repos/sketchni/${this.repo.name}/releases?state=all`).then(res => {
                this.releases_count = res.data.length;
            });
        },

        prs() {
            this.$axios.get(`https://api.github.com/repos/sketchni/${this.repo.name}/pulls?state=all`).then(res => {
                this.prs_count = res.data.length;
            });
        },
    }
}
</script>

<style scoped>

</style>
