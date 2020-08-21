<template>
  <div>
    <el-form :model="form" ref="form" :rules="rules" class="form">
      <el-form-item class="form-item" prop="username">
        <el-input placeholder="您的用户名/手机" v-model="form.username"></el-input>
      </el-form-item>

      <el-form-item class="form-item" prop="password">
        <el-input placeholder="密码" type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-button class="submit" type="primary" @click="handleSubmit">登录</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  mounted() {
    confirm("用户名:Tom,密码:123456");
  },
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名或手机", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate(valid => {
        // console.log(this.form, valid);
        // 登录接口
        if (valid) {
          //   axios({
          //     url: "/accounts/login",
          //     method: "POST",
          //     data: this.form
          //   }).then(res => {
          //     // console.log(res);
          //     // 调用store的方法把用户的数据传过去
          //     this.$store.commit("user/setUserInfo", res.data);
          //   });
          //   let data = {
          //     token: "111",
          //     user: {
          //       name: "Tom",
          //       password: "123456",
          //       img:
          //         "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1844749954,940436127&fm=26&gp=0.jpg"
          //     }
          //   };
          //   this.$store.commit("setUserInfo", data);
          //调用store的方法commit  把数据传到store的state中
          this.$store.dispatch("login", this.form).then(res => {
            // console.log(res);
            const resMsg = {
              name: res.user.name,
              password: res.user.password
            };

            // console.log(resMsg);
            // console.log(this.form.username);
            // console.log(this.form.password);
            const info = {
              name: this.form.username,
              password: this.form.password
            };
            console.log(JSON.stringify(info) == JSON.stringify(resMsg));

            if (JSON.stringify(info) == JSON.stringify(resMsg)) {
              this.$message({
                message: "登录成功",
                type: "success"
              });
              this.$router.push("/");
            } else {
              this.$message({
                message: "登录失败",
                type: "error"
              });
            }
          });
        }
      });
    }
  }
};
</script>

<style lang="less">
.form {
  padding: 20px;
  el-input:focus {
    outline: 1px solid rgba(255, 149, 0, 1) !important;
  }
}

.submit,
.submit:hover {
  width: 100%;
  background: rgba(255, 149, 0, 1) !important;
  border-color: rgba(255, 149, 0, 1) !important;
}
</style>