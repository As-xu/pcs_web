<template>
  <div class="login-body">
    <div class="login-container">
      <div class="head">
        <div class="name">
          <div class="title">PCS</div>
        </div>
      </div>
      <el-form label-position="top" :rules="state.rules" :model="state.ruleForm" ref="loginForm" class="login-form">
        <el-form-item prop="username">
          <el-input type="text" v-model.trim="state.ruleForm.username"  autocomplete="off">
            <template #prefix>
              <el-icon :size="20"><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model.trim="state.ruleForm.password" autocomplete="off">
            <template #prefix>
            <el-icon :size="20"><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item  >
        <el-form-item>
          <el-button
              style="width:100%;"
              type="primary"
              @click="submitForm"
          >
            <span v-if="!loading">登 录</span>
            <span v-else>登 录 中...</span>
          </el-button>
          <el-checkbox v-model="state.checked" style="margin:0px 0px 25px 0px;">记住账户</el-checkbox>
        </el-form-item>


        <el-form-item>
          <el-button
              style="width:100%;"
              type="primary"
              @click="logout"
          >
            <span >注销登录</span>
          </el-button>
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Cookies from "js-cookie";
import useUserStore from '@/store/modules/user'
import {useRoute, useRouter} from "vue-router";
import { ElMessageBox } from 'element-plus'
const route = useRoute();
const router = useRouter();
const userStore = useUserStore()

const loginForm = ref(null)
const state = reactive({
  ruleForm: {
    username: '',
    password: ''
  },
  checked: false,
  rules: {
    username: [
      { required: 'true', message: '账户不能为空', trigger: 'blur' }
    ],
    password: [
      { required: 'true', message: '密码不能为空', trigger: 'blur' }
    ]
  }
})
const loading = ref(false);

const submitForm = async () => {
  loginForm.value.validate((valid) => {
    loading.value = true;
    if (valid) {
      if (state.checked) {
        Cookies.set("username", state.ruleForm.username || '', { expires: 30 });
        Cookies.set("password", state.ruleForm.password, { expires: 30 });
        Cookies.set("rememberMe", state.checked, { expires: 30 });
      } else {
        // 否则移除
        Cookies.remove("username");
        Cookies.remove("password");
        Cookies.remove("rememberMe");
      }
      userStore.login(state.ruleForm.username, state.ruleForm.password).then(() => {
        const query = route.query;
        console.log(query)
        console.log("---loginForm---")
        router.push({ path: "/"});
      }).catch(() => {
        loading.value = false;

      })
    }
  });
}

function logout() {
  ElMessageBox.confirm('确定注销并退出系统吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    userStore.logOut().then(() => {
      location.href = '/login';
    })
  }).catch(() => { });
}

const resetForm = () => {
  loginForm.value.resetFields();
}
</script>

<style lang='scss' scoped>
.login-body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/daytime.jpg");
  background-size: cover;
}
.login-container {
  width: 420px;
  height: 500px;
  backdrop-filter: blur(1000px);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  box-shadow: 0px 21px 41px 0px rgba(0, 0, 0, 0.2);
}
.head {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0 20px 0;
}
.head img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}
.head .title {
  font-size: 28px;
  color: #1BAEAE;
  font-weight: bold;
}
.head {
  font-size: 12px;
  color: #999;
}
.login-form {
  border-radius: 6px;
  padding: 25px 25px 5px 25px;
  .el-input {
    height: 40px;
    input {
      height: 40px;
    }
  }
  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 0px;
  }
}


</style>