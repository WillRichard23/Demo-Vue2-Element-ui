<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: "iconfont";
  src:
    url("./assets/iconfont/iconfont.woff2") format("woff2"),
    url("./assets/iconfont/iconfont.woff") format("woff"),
    url("./assets/iconfont/iconfont.ttf") format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 1em;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  vertical-align: -0.15em;
}

html {
  font-size: 16px;
  margin: 0;
  padding: 0;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  html {
    font-size: 18px;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
