<template>
            <el-aside width="200px" class="sidebar">
            <div class="logo">
                <img src="@/assets/logo.png" alt="">
                <span>XX管理系统</span>
            </div>
            <!-- 菜单 -->
            <el-menu default-active="/home" router>
                <!-- 首页 -->
                <el-menu-item index="/home">
                    <template slot="title">
                        <i class="el-icon-s-home"></i>
                        <span slot="title">首页</span>
                    </template>
                </el-menu-item>

                <!-- 系统管理 -->
                <el-submenu index="/systemPage">
                    <template slot="title">
                        <i class="el-icon-setting"></i>
                        <span slot="title">系统管理</span>
                    </template>
                    <!-- 用户管理 -->
                    <el-menu-item index="/home/users">
                        <template slot="title">
                            <i class="el-icon-user"></i>
                            <span slot="title">用户管理</span>
                        </template>
                    </el-menu-item>

                    <!-- 角色管理 -->
                    <el-menu-item index="/home/roles">
                        <template slot="title">
                            <i class="el-icon-star-on"></i>
                            <span slot="title">角色管理</span>
                        </template>
                    </el-menu-item>
                </el-submenu>

            </el-menu>

        </el-aside>
</template>


<style scoped>
/* 首次拆分组件时从AppHome移动过来的样式   Start */
.el-aside {
    width: 300px !important;
    background-color: #232946;
}

.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: #232946;

}

.logo>img {
    width: 50px;
    height: 50px;
}

.logo>span {
    color: #fffffe;
    margin-left: 10px;
}


:deep(.el-menu) {

    /* 禁用el-aside的滚动条*/
    border: none;
}

:deep(.el-aside) {
    overflow: hidden;

}

/* 深度选择：选择二级菜单的类名，设置文字大小为18px 
    设置文字左对齐
*/
:deep(.el-submenu__title) {
    text-align: left;
    font-size: 18px;
    color: #fffffe;
    background-color: #232946;
}

/*  深度选择：选择二级菜单的类名，设置文字大小为18px
    设置文字左对齐
*/
:deep(.el-menu-item) {
    color: #fffffe;
    text-align: left;
    font-size: 18px;
    background-color: #232946;
}

:deep(.el-menu-item.is-active) {
    /* 设置单个菜单被激活时样式 */
    color: #fffffe;
}

/* 设置菜单被激活时的背景颜色 */
:deep(.el-menu-item.is-active) {
    background-color: #b8c1ec !important;
}

/* 首次拆分组件时从AppHome移动过来的样式   End */
</style>
