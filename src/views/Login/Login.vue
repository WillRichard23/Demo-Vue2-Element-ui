<template>
  <div id="login" class="login">
    <el-container>
      <div class="left">
        <el-image class="left_image" fit="cover" :src="require('@/assets/img/login_bg.jpg')"></el-image>
      </div>
      <div class="right">
        <div class="logo">
          <el-image class="logo_image" fit="cover" :src="require('@/assets/img/logo.png')"></el-image>
        </div>
        <div class="router">
          <div class="menu">
            <div :class="[page == 'Loginf' ? 'select' : '', 'menu-item disabled-select']"
              @click="changeRoute('Loginf')">账号登录</div>
            <div :class="[page == 'Loginsms' ? 'select' : '', 'menu-item disabled-select']"
              @click="changeRoute('Loginsms')">短信登录</div>
          </div>
          <router-view></router-view>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      page: 'Loginf'
    }
  },
  methods: {
    changeRoute(page) {
      this.page = page
      this.$router.push({
        name: page
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('./Login.scss');
</style>