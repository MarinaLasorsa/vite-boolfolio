<template>
    <div>
        <div class="container py-4">
            <h1 class="text-center mb-4">My Projects</h1>
            <ul class="row row-cols-3 gy-3">
                <li class="col" v-for="project in projects" :key="project.id">
                    <div class="card h-100">
                        <div class="card-header">
                            <h5 class="card-title">{{ project.title }}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{{ project.type ? project.type.name : "no type" }}
                            </h6>
                        </div>
                        <div class="card-body">
                            <ul class="d-flex flex-wrap list-unstyled gap-2">
                                <li>
                                    <p>Technologies used: </p>
                                </li>
                                <li v-for="technology in project.technologies" :key="technology.id"
                                    class="text-decoration-underline">
                                    {{ technology.name }}</li>
                            </ul>
                            <p class="card-text">{{ project.description }}</p>
                            <router-link :to="{ name: 'projects.show', params: { slug: project.slug } }"
                                class="btn btn-link">Read More</router-link>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            projects: []
        }
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