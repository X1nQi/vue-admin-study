<template>
    <div>
        <el-table :data="userList" style="width: 100%;">
            
            <el-table-column prop="account" label="账号"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="id" label="唯一标识"></el-table-column>
            <el-table-column label="操作">
                <!-- 这是Vue2.6版本以下的作用域插槽写法 -->
                <template slot-scope="scope">
                    <el-button size="mini">编辑</el-button>
                    <el-button size="mini" type="danger">删除</el-button>

                </template>
            </el-table-column>
        </el-table>
    </div>
</template>



<script>
import { getAllUser } from '@/api/api.js'

export default {
    name: 'UsersManage',

    data(){
        return {
            userList: []
        }
    },

    created(){
        getAllUser().then(res => {
            this.userList = res.data
        })
    }
}






</script>