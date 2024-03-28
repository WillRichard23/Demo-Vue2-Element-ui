<template>
    <div>
        <el-header height="100%">
            <div class="header">
                <div v-if="isBack && !$slots.left" class="nav-back" @click="navBack()">
                    <i class="el-icon-arrow-left"></i>
                </div>
                <slot name="left"></slot>
                <slot name="center"></slot>
                <slot name="right"></slot>
            </div>
        </el-header>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        isBack: Boolean
    },
    methods: {
        navBack() {
            this.$router.back()
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('./Header.scss');

:deep(.el-header) {
    padding: 0 !important;
}
</style>