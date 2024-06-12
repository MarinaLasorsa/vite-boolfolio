<template>
    <main>
        <div class="container">
            <h1 class="text-center my-4">I miei progetti</h1>
            <ul class="row row-cols-3 gy-3">
                <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
            </ul>
        </div>
    </main>
</template>

<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
    data() {
        return {
            projects: []
        }
    },

    components: {
        ProjectCard
    },

    methods: {
        fetchProjects() {

            axios.get('http://127.0.0.1:8000/api/projects').then((res) => {
                console.log(res.data.projects)
                this.projects = res.data.projects

            })
        }
    },

    created() {
        this.fetchProjects()
    }

}
</script>

<style lang="scss" scoped></style>