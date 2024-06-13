<template>
    <div class="container py-4">
        <h1>Contact Me</h1>
        <form>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Insert your name">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Insert your email">
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" rows="5"></textarea>
            </div>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>