<template>
  <div class="app-wrapper">
    <app-header />
    <app-main />
    <app-footer />
  </div>
</template>

<script>
import header from './header'
import main from './main'
import footer from './footer'
export default {
  name: 'Layout',
  components: {
    appHeader: header,
    appMain: main,
    appFooter: footer
  },
  mixins: [],
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper{
  min-width: 1200px;
  max-width: 1600px;
  margin: 0px auto;
}
</style>
