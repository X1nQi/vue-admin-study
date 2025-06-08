<template>
    <div id="defaultHome">
        <div>
            <el-radio-group v-model="reverse">
                <el-radio :label="true">倒序</el-radio>
                <el-radio :label="false">正序</el-radio>
            </el-radio-group>
        </div>
        <div>
            <el-timeline :reverse="reverse">
                <el-timeline-item v-for="comment in comments" :key="comment.id" :timestamp="comment.dataTime">
                    {{ comment.content }}

                </el-timeline-item>

            </el-timeline>
        </div>
        <el-input type="textarea" placeholder="请输入评论" v-model="user_comment"
        style="width: 200px;"
        ></el-input>
        <el-button type="primary" @click="submitComment">点击提交</el-button>


    </div>

</template>

<script>
import { getCommentList } from '@/api/api.js'

export default {
    name: 'DefaultHome',
    data() {

        return {
            reverse: false,
            comments: [],
            user_comment : ''

        }
    },
    methods: {
        submitComment(){
            
        }
    },
    created() {
        getCommentList().then(
            res => {
                this.comments = res.data;
                console.log(this.comments);

            }
        )
    }
}

</script>

<style scoped>
#defaultHome {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 10px 25px;
    direction: column;
    justify-content: flex-start;
    align-items: center;
}
</style>