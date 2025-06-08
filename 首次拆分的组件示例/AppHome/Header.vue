<template>
    <div class="header">

        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="item in routeBreakcrumb.title"
                :to="item.isLink ? { path: routeBreakcrumb.path } : undefined" :key="item.name"
                :disabled="!item.isLink">
                {{ item.name }}
            </el-breadcrumb-item>

            <!-- <el-button type="primary" @click.prevent="tempLog" style="z-index:999;">点击我查看路由信息</el-button> -->
        </el-breadcrumb>

        <!-- 头像和个人设置 -->
        <div class="right_header">
            <el-avatar shape="square" :size="50" :src="require('@/assets/头像.png')"></el-avatar>
            <i class="el-icon-setting"></i>
        </div>


    </div>
</template>

<script>
export default {
    name: "AppHeader",
    props: {
        routeBreakcrumb: {
            type: Object,
            default: () => ({ path: "/home", title: [{ name: "首页", isLink: true }] })
        }
    },
}

</script>

<style scoped>
/* 首次拆分组件时从AppHome移动过来的样式   Start */

/* -------面包屑 */

:deep(.el-breadcrumb) {
    font-size: 18px;
    height: 80px;
    line-height: 80px;
}

/* --------头像和个人设置 */
.right_header {
    display: flex;
    justify-content: center;
    align-items: center;
}

.right_header>i {
    margin-left: 20px;
    font-size: 20px;
    cursor: pointer;
}

/* 因为拆分组件后，每个组件只能一个根节点，所以在最外层包裹一个div，
这个div会继承el-header的样式，我们对此div设置display:flex，即可，不需要再改动el-header的样式了。
*/
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
}

/* 首次拆分组件时从AppHome移动过来的样式   End */
</style>