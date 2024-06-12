<template>
    <div class="col">
        <div class="card h-100">
            <div class="card-header">
                <h5 class="card-title">{{ project.title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ project.type ? project.type.name : "no type" }}</h6>
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
            </div>
        </div>
    </div>

</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped></style>