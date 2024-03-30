<template>
  <div>
    <el-container>
      <el-aside>
        <div class="aside">
          <div class="img">
            <el-image :src="imgUrl"></el-image>
          </div>
          <div v-for="(item, index) in routerList" :key="index" class="router-box disabled-select"
            @click="navTo(item.nav)">
            <div class="iconfont icon" v-html="item.icon"></div>
            <button class="router-button">{{ item.name }}</button>
            <div class="nav-right">
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
        </div>
      </el-aside>
      <el-main width="100%">
        <div class="main">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import qr_code from "@/assets/img/qr_code.png";

export default {
  name: "Home",
  data() {
    return {
      routerList: [
        { name: "信息发布", nav: "HomeChildren1", icon: "&#xe7a9;" },
        { name: "安全卫士", nav: "HomeChildren2", icon: "&#xe777;" },
        { name: "设置", nav: "HomeChildren3", icon: "&#xe7d6;" },
      ],
      imgUrl: qr_code,
    };
  },
  methods: {
    navTo(page) {
      this.$router.push({
        name: page,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("./Home.scss");

:deep(.el-main) {
  padding: 0 !important;
}
</style>
