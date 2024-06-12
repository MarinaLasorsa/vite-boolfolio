<script>

import AppMain from './components/AppMain.vue'

export default {

  components: {
    AppMain
  },

  data() {
    return {
      message: 'Hello World'
    }
  }
}

</script>

<template>
  <h1>{{ message }}</h1>
  <AppMain />
</template>

<style lang="scss">
@use './style/general';
</style>
