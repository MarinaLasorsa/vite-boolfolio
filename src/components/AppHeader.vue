<template>
    <div class="page-header">
        <div class="container">
            <div class="d-flex align-items-center">
                <img class="logo" src="/laptop-tea.png" alt="logo" />
                <nav class="d-flex gap-5 ms-5">
                    <li><router-link class="text-decoration-none text-reset" :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li><router-link class="text-decoration-none text-reset"
                            :to="{ name: 'portfolio' }">Portfolio</router-link>
                    </li>
                    <li><router-link class="text-decoration-none text-reset"
                            :to="{ name: 'contact' }">Contact</router-link></li>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.page-header {
    background-color: rgb(33, 33, 33);
    color: #EBB6D4
}

.logo {
    max-width: 100px;
}
</style>