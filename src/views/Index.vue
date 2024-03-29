<template>
    <div id="Index">
        <Header>
            <template v-slot:left>
                <div class="logo"></div>
            </template>
            <template v-slot:center>
                <div class="nav-bar">
                    <div :class="[!page.indexOf('Home') ? 'select' : '', 'nav-box']" @click="navTo('HomeChildren1')">
                        首页
                    </div>
                    <div :class="[page == 'News' ? 'select' : '', 'nav-box']" @click="navTo('News')">新闻</div>
                </div>
            </template>
            <template v-slot:right>
                <div class="header-right">
                    <div class="iconfont icon" @click="navTo('Setting')">&#xe7d6</div>
                    <div class="time" v-loading="loading" element-loading-background="rgb(229, 229, 229)">{{ now }}</div>
                </div>
            </template>
        </Header>
        <router-view />
    </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import dayjs from "dayjs";
export default {
    name: 'Index',
    data() {
        return {
            now: 'YYYY-MM-DD HH:mm:ss',
            loading: true,
            page: 'Home'
        }
    },
    components:{
        Header
    },
    created() {
        setInterval(() => {
            this.now = dayjs().format("YYYY-MM-DD HH:mm:ss")
            this.loading = false
        }, 1000
        )
        this.page = this.getLastSegmentOfUrl()
    },
    methods: {
        //页面跳转
        navTo(page) {
            this.page = page
            this.$router.push({
                name: page
            })
        },
        //获取页面网址最后一段(用于确定nav栏选项)
        getLastSegmentOfUrl() { 
            const pathname = window.location.href;
            const match = pathname.match(/\/([^/]+)\/?([^/]*)$/);
            console.log(match)
            const lastSegment = match ? match[2] : match[1];
            return lastSegment;
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