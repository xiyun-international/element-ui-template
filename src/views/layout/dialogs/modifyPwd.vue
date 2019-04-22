<template>
  <el-dialog
    title="修改登录密码"
    :visible.sync="isShow"
    :rules="rules"
    width="33%"
    :before-close="beforeClose"
  >
    <el-form label-width="80px">
      <el-form-item label="新密码">
        <el-input
          placeholder="请输入新密码"
          type="password"
          v-model="form.password"
          auto-complete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="再次输入">
        <el-input
          placeholder="请再次输入新密码"
          type="password"
          v-model="form.confirmPassword"
          auto-complete="off"
        ></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="changePwd" :isDisabled="isDisabled">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
/**
 * 修改登录密码
 */
export default {
  name: 'modify-login-password',
  components: {},
  props: ['showModifyPwd'],
  data() {
    return {
      isShow: false,

      // 确定按钮状态
      isDisabled: true,

      form: {
        password: '',
        confirmPassword: '',
      },
      rules: {
        password: [
          {
            required: true,
            min: 6,
            max: 14,
            message: '最大长度 14 个字符，最小限制 6 个字符',
            trigger: 'blur',
          },
        ],
        confirmPassword: [
          {
            required: true,
            min: 6,
            max: 14,
            message: '最大长度 14 个字符，最小限制 6 个字符',
            trigger: 'blur',
          },
          {
            validator(rule, value, callback) {
              if (this.form.password !== value) {
                callback(new Error('两次输入密码不一致'));
              }
              callback();
            },
          },
        ],
      },
    };
  },
  methods: {
    /**
     * 修改密码
     */
    changePwd() {
      const params = {
        ...this.form,
        verificationCode: this.$store.state.phone.secrityCode,
      };
      this.post('/v1/user/changeAdminPwd', params).then(res => {
        if (res.code === 200) {
          this.close();
          this.$message({ type: 'success', message: res.message });
        } else {
          this.$message({ type: 'error', message: res.message });
        }
      });
    },

    /**
     * 关闭弹窗
     */
    close() {
      this.$emit('update:showModifyPwd', false);
    },

    /**
     * 关闭弹窗
     */
    beforeClose(done) {
      this.close();
      done();
    },
  },
  watch: {
    /**
     * 监听修改密码状态
     * @param val
     */
    showModifyPwd(val) {
      this.isShow = val;
    },
  },
};
</script>
