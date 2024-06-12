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
  <AppMain />
</template>

<style lang="scss">
@use './style/general';
</style>
