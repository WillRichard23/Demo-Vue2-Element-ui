const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: "./",
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    proxy: {
      "/api": {
        target: "http://192.168.9.204:8999",
        changOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  }
});
