<template>
  <div id="HomeChilren1">
    <div>{{ username }}</div>
    <div>{{ company }}</div>
    <div :v-if="sex == null">{{ sex }}</div>
    <el-button class="login-button" type="primary" round @click="login()">登录</el-button>
  </div>
</template>

<script>
export default {

  name: "HomeChildren1",
  data() {
    return {
      username: 'im username',
      company: 'im company',
      sex: 'im sex',
    }
  },
  methods: {
    //登录
    login() {
      this.$request({
        method: 'post',
        url: '/api/system/login',
        params: {
          account: 'admin',
          password: this.$Common.handlePwd('Ubains@123'),
          // password: 'Ubains@123',
          verifyCode: 'csba'
        }
      }).then(async res => {
        if (res.data.code == 200) {
          let token = res.data.result.tokenHead + res.data.result.token;
          localStorage.setItem('token', token)
          let data = await this.$Common.getUserInfo()
          if (data) {
            this.username = data.nickname ? data.nickname : data.userAccount;
            this.company = data.company.companyName;
            this.sex = data.sex;
          }
        }
      })
        .catch(error => { console.log(error) })
    },
  }
}
</script>

<style lang="scss" scoped>
@import url('./HomeChildren1.scss');
</style>