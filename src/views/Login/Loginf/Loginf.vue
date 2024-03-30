<template>
  <div id="loginf">
    <el-form>
      <div class="account">
        <label for="">账号：</label>
        <el-input placeholder="请输入账号"></el-input>
      </div>
      <div class="password">
        <label for="">密码：</label>
        <el-input placeholder="请输入密码"></el-input>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'loginf'
}
</script>
<style lang="scss" scoped>
@import url('./Loginf.scss')
</style>