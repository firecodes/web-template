<template>
  <div class="app-header">
    <public-header :home-url="homeUrl" @switchLanguage="switchLanguage" />
  </div>
</template>

<script>
import { publicHeader } from '@firecodes/vue-lui/packages'

export default {
  name: 'Header',
  components: { publicHeader },
  data() {
    return {
      homeUrl: {
        logo: ''
      }
    }
  },
  computed: {
  },
  methods: {
    // 切换 语言成功
    switchLanguage() {

    }
  }
}
</script>

<style lang="scss" scoped>
.app-header{
  width: 100%;
  margin: 0px auto;
}
</style>
