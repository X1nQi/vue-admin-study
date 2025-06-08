<template>

    <div class="login_container">
        <el-card class="login_card">

            <el-form :rules="rules" :model="ruleForm" ref="loginForm">
                <h2 class="login_title">系统登录</h2>

                <el-form-item prop="userName">
                    <el-input v-model="ruleForm.userName" placeholder="请输入账号" prefix-icon="el-icon-user"></el-input>
                </el-form-item>

                <el-form-item prop="pswd">
                    <el-input v-model="ruleForm.pswd" placeholder="请输入密码" show-password></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button @click.prevent="login" type="primary" class="login_btn">登录</el-button>
                    <button @click.prevent="tempSkip">跳转</button>
                </el-form-item>
            </el-form>

        </el-card>
    </div>
</template>


<script>
import { vali_login } from "@/api/api.js"
export default {

    name: 'Login',

    data() {
        return {
            ruleForm: {
                userName: "",
                pswd: ""
            },
            rules: {
                userName: [
                    { required: true, message: "账号不能为空", trigger: "blur" },
                    { mix: 1, max: 20, message: "长度只能在1-20个字符", trigger: "blur" },
                    { pattern: /^[A-Za-z0-9]+$/, message: "账号只能是字母和数字的组合", trigger: "blur" }
                ],
                pswd: [
                    { required: true, message: "密码不能为空", trigger: "blur" },
                    { mix: 6, max: 20, message: "密码长度至少为6位或至多为20我位", trigger: "blur" },
                ]
            }

        }
    },
    methods: {
        login() {
            this.$refs.loginForm.validate((isValid) => {
                if (isValid) {//表单验证通过
                    // 调用登录接口
                    vali_login(this.ruleForm.userName, this.ruleForm.pswd)
                        .then(res => {
                            if (res.data.code === 200) {
                                this.$message({
                                    message: "登录成功",
                                    type: "success",
                                    duration: 1500 //设置提示框显示时间为1500毫秒，默认为3000毫秒
                                })
                                this.$router.push({ path: "/home" });
                            }
                        })
                        .catch(err => {
                            this.$message({
                                message: "用户名或密码错误",
                                type: "error"
                            })
                        })

                } else {
                    return;
                }


            })

        },

        tempSkip() {
            this.$router.push({ path: '/home' });
        }


    }
}

</script>


<style scoped>
.login_container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f7fa;
}

.login_card {
    width: 400px;
    height: 300px;
    padding: 15px;

}

.login_btn {
    width: 100%
}

/* 为了好看加着玩的，实现了文字渐变 */
.login_title {
    background:linear-gradient(to top,red 0%,blue 100%);
    color:transparent;
    -webkit-background-clip:text;
    background-clip: text
}
</style>