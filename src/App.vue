<script>

import AppMain from './components/AppMain.vue'
import AppHeader from './components/AppHeader.vue'

export default {

  components: {
    AppMain,
    AppHeader
  },

  data() {
    return {

    }
  }
}

</script>

<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
@use './style/general';
</style>
