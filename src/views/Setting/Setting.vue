<template>
  <div id="Setting">
    <Header is-back="true">
    </Header>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';

export default {
  name: 'setting',
  data() {
    return {

    }
  },
  components: {
    Header
  },
  created() {
    this.$Common.getUserInfo()
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import url('./Setting.scss');
</style>