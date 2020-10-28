<template>
  <div class="login_container">
    <!-- navbar -->
    <van-nav-bar
      class="nav_bar"
      title="注册/登录"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- form -->
    <!-- 
      基于vant表单验证：
	  	1.使用van-form组件包裹所有的表单项 van-field
		2.给van-form绑定submit事件
		表单提交时会触发submit事件（只有表单验证通过才会触发submit事件）
		3.使用van-field的rules属性定义校验规则 
    -->
    <van-form
      ref="login-form"
      :show-error="false"
      :show-error-message="false"
      @submit="onLogin"
      @failed="onFailed"
    >
      <van-field
        v-model="user.mobile"
        icon-prefix="iconfont"
        left-icon="shouji"
        placeholder="请输入手机号"
        name="mobile"
        :rules="formRules.mobile"
      />
      <van-field
        v-model="user.code"
        clearable
        icon-prefix="iconfont"
        left-icon="yanzhengma"
        placeholder="请输入验证码"
        name="code"
        :rules="formRules.code"
      >
        <template #button>
          <van-button size="small" class="send_btn" @click.prevent="onSendMsg"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <!-- buttn -->
      <div class="login_btn_wrap">
        <van-button class="login_btn" type="info" block>登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from "@/api/user";
export default {
  name: "LoginIndex",
  data() {
    return {
      user: {
        mobile: "17090086870", // 手机号
        code: "246810" // 验证码
        // mobile: "",
        // code: ""
      },
      formRules: {
        mobile: [
          {
            required: true,
            message: "请输入手机号"
          },
          {
            pattern: /^1[3|5|7|8|6]\d{9}/,
            message: "手机号格式不正确"
          }
        ],
        code: [
          {
            required: true,
            message: "请输入验证码"
          },
          {
            pattern: /^\d{6}/,
            message: "验证码格式错误"
          }
        ]
      }
    };
  },

  methods: {
    async onLogin() {
      // 1. 找到数据接口
      // 2. 封装请求方法
      // 3. 请求调用登录
      // 4. 处理响应结果
      this.$toast.loading({
        message: "登录中...", //提示信息
        forbidClick: true, //禁止背景点击
        duration: 2000 //   展示时长(ms)，值为 0 时，toast 不会消失
      });
      try {
        const { data } = await login(this.user);
        console.log(data);
        this.$toast.success("登录成功！");
        // 将后端返回的用户登录状态（token等数据）放到 Vuex 容器中
        this.$store.commit("setUser", data.data);
      } catch (err) {
        // console.log("登录失败", err);
        this.$toast.fail("登录失败，手机号或验证码错误");
      }
    },
    onFailed(error) {
      if (error.errors[0]) {
        this.$toast({
          message: error.errors[0].message, // 提示消息
          position: "top" // 防止手机键盘太高看不见提示消息
        });
      }
    },
    async onSendMsg() {
      // 校验手机号码
      try {
        await this.$refs["login-form"].validate("mobile");
        // 验证通过发送验证码
      } catch (error) {
        console.log("验证失败", error);
        this.$toast({
          message: error.message, // 提示消息
          position: "top" // 防止手机键盘太高看不见提示消息
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.login_container {
  .send_btn {
    height: 23px;
    background-color: #ededed;
    border-radius: 10px;
    .van-button__text {
      font-size: 11px;
      color: #666666;
    }
  }
  .login_btn_wrap {
    padding: 26px 16px;
    .login_btn {
      background-color: #6db4fb;
      border: none;
      .van-button__text {
        font-size: 15px;
      }
    }
  }
}
</style>
