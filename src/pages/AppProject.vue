<template>
    <div class="container py-5">
        <h1 class="mb-5">Project Details</h1>
        <div class="row">
            <div class="col-auto">
                <div class="card">
                    <div class="card-header">
                        <h5>Title</h5>
                    </div>
                    <div class="card-body">
                        <p>{{ $route.params.slug }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>