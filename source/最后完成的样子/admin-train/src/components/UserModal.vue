<template>
    <el-dialog 
    :close-on-click-modal="false" 
    :close-on-press-escape="false" 
    title="用户详情" 
    :visible.sync="modalState"
    :before-close="handleClose"
        width="30%">
        <h1>这是模态框</h1>

    </el-dialog>
</template>


<script>
export default {
    name: 'UserModal',
    data() {

        return {

        }
    },
    computed:{
        modalState(){
            return this.$store.state.modalShow;
        }
    },
    methods: {
        // 关闭模态框的回调函数
        handleClose(done) {
            this.$store.commit('closeModal');
        }
    }



}

</script>


<style scoped></style>