<template>
    <div id="Index">
        <el-header height="100%">
            <div class="header">
                <div class="logo"></div>
                <div class="nav-bar">
                    <div class="nav-box select" @click="navTo('HomeChildren1')">首页</div>
                    <div class="nav-box" @click="navTo('News')">新闻</div>
                </div>
                <div class="time">{{ now }}</div>
            </div>
        </el-header>
        <router-view />
    </div>
</template>

<script>
import dayjs from "dayjs";
export default {
    name: 'Index',
    data() {
        return {
            now: ''
        }
    },
    created() {
        setInterval(() => {
            this.now = dayjs().format("YYYY-MM-DD HH:mm:ss")
        }, 1000
        )
    },
    methods: {
        navTo(page) {
            console.log(page)
            this.$router.push({
                name: page
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('./Index.scss');

:deep(.el-header) {
    padding: 0 !important;
}
</style>