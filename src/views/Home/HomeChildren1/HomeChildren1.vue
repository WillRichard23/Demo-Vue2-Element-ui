<template>
    <div id="HomeChilren1">
        <div>{{ username }}</div>
        <div>{{ company }}</div>
        <div :v-if="sex == null">{{ sex }}</div>
        <el-button class="login-button" type="primary" round @click="login()"
            v-loading.fullscreen.lock="loading">登录</el-button>
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
            loading: false
        }
    },
    methods: {
        login() {
            this.loading = true
            this.$axios({
                method: 'post',
                url: '/api/system/login',
                headers: { 'Content-Type': 'application/json' },
                params: {
                    account: 'admin',
                    password: this.$Common.handlePwd('Ubains@123'),
                    // password: 'f5383443bdd0bedaa2662d60fe104144184c7199d80cacb42d31773531bd4204',
                    verifyCode: 'csba'
                }
            }).then(res => {
                if (res.data.code == 200) {
                    let token = res.data.result.tokenHead + res.data.result.token;
                    console.log(token)
                    this.getUserInfo(token)
                }
            })
                .catch(error => { console.log(error) })
        },
        getUserInfo(token) {
            this.$axios({
                method: 'post',
                url: '/api/system/getUserInfo',
                headers: { Authorization: token },
                parmas: { type: 1 }
            }).then(res => {
                let data = res.data.result
                this.username = data.nickname ? data.nickname : data.userAccount
                this.company = data.company.companyName
                this.sex = data.sex
                this.loading = false
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('./HomeChildren1.scss');
</style>