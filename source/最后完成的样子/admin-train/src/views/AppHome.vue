<template>
    <!-- 最外层容器 -->
    <el-container class="outermost_container">
        <!-- 侧边栏 -->
        <AppSideBar />

        <!-- 主内容区域，包括头部和主内容 -->
        <el-container>
            <!-- 头部 -->
            <!-- props传值 -->
            <el-header class="page_header">
                <AppHeader :routeBreakcrumb="routeBreakcrumb" />
            </el-header>
            <!-- <AppHeader :routeBreakcrumb="routeBreakcrumb"/> -->

            <!-- 主内容区域 -->
            <el-main class="page_main_content">
                <keep-alive>
                    <router-view v-if="$route.meta.keepAlive" />
                </keep-alive>
                <router-view v-if="!$route.meta.keepAlive" />


            </el-main>
        </el-container>

        <!-- 模态框 -->
        <AppModal />

    </el-container>
</template>

<script>
import AppSideBar from "@/components/AppHome/SideBar.vue"
import AppHeader from "@/components/AppHome/Header.vue"
import AppModal from "@/components/UserModal.vue"
export default {
    name: "AppHome",
    data() {
        return {
            routeBreakcrumb: { path: "/home", title: [{ name: "首页", isLink: true }] },
        }

    },
    components: {
        AppSideBar,
        AppHeader,
        AppModal
    },
    methods: {
        tempLog() {
            console.log(this.$route);

        },

    },
    computed: {

    },
    beforeRouteUpdate(to, from, next) {
        // 定义一个面包屑对象，包含跳转到的路由信息
        const breadcrumbItem = {
            path: to.path,
            title: to.meta.breadcrumb,
        };
        this.routeBreakcrumb = breadcrumbItem;

        console.log(this.routeBreakcrumb);

        next();
    },


}
</script>

<style scoped>
.outermost_container {
    /* 设置最外层容器的宽度为100%
        最小高度为视窗高度
        高度为视窗高度
    */
    width: 100%;
    min-height: 100vh;
    height: 100vh;

}



.page_header {
    background-color: #fffffe;
    height: 80px !important;
}


/* .page_main_content {
    background-color: #38d9a9;
} */








/* 设置el-main的padding为0 */
.el-main {
    padding: 0;
}
</style>