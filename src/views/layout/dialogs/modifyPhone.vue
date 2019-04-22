<template>
  <el-dialog title="修改登录手机号" :visible.sync="isShow" width="33%" :before-close="beforeClose">
    <el-col :span="24">
      <el-form :inline="true" label-width="80px">
        <el-form-item label="新手机号">
          <el-input
            class="phoneNum"
            :maxlength="11"
            v-model="newPhone"
            placeholder="请输入新手机号"
          ></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input class="code" :maxlength="6" v-model="code" placeholder="短信验证码"></el-input>
          <el-button
            class="sendCode"
            type="primary"
            :disabled="interval.wait > 0"
            @click="sendCode"
          >
            {{ interval.wait > 0 ? interval.wait + 'S' : '发送验证码' }}
          </el-button>
        </el-form-item>
        <el-form-item> </el-form-item>
      </el-form>
    </el-col>

    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="onEnsure" :disabled="isDisabled">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
/**
 * 手机短信验证
 */
import { removeToken } from '@/utils/token';

export default {
  name: 'modify-phone-num',
  components: {},
  props: ['showModifyPhone'],
  data() {
    return {
      // 是否显示
      isShow: false,

      // 验证码
      code: '',

      // 定时器
      interval: {
        timer: null,
        wait: 0,
      },

      // 新手机号
      newPhone: '',
    };
  },
  computed: {
    /**
     * 获取用户id
     * @return String
     */
    userId() {
      return this.$store.state.user.info.encryptUserId;
    },

    /**
     * 6位验证码填写后，下一步按钮可点击
     */
    isDisabled() {
      return this.code.length !== 6;
    },
  },
  methods: {
    /**
     * 修改手机号成功
     */
    success() {
      this.$message({
        type: 'success',
        message: '修改成功',
        duration: 2000,
        onClose() {
          removeToken('TOKEN');
          window.location.reload();
        },
      });
    },

    /**
     * 点击确定校验
     */
    onEnsure() {
      const params = {
        newUserName: this.newPhone,
        newVerificationCode: this.code,
        verificationCode: this.$store.state.phone.secrityCode,
      };
      this.post('/v1/verification/updateUserName', params).then(res => {
        if (res.bizContent.updatePassword === true) {
          //            this.$emit('onSuccess', this.code)
          this.close();
          this.success();
        } else {
          this.$message({
            type: 'error',
            message: res.message,
          });
        }
      });
    },

    /**
     * 向新手机号发送验证码
     */
    sendCode() {
      const params = {
        newUserName: this.newPhone,
        verificationCode: this.$store.state.phone.secrityCode,
      };
      this.post('/v1/verification/getVerCodeForChangeName', params).then(res => {
        const data = res.bizContent;
        if (!data.getVerificationCode) {
          this.$message({
            type: 'error',
            message: data.message,
          });
        }
        this.countDown();
      });
    },

    /**
     * 倒计时
     */
    countDown() {
      let wait = 60;
      this.interval.timer = setInterval(() => {
        if (wait === 0) {
          clearInterval(this.interval.timer);
          this.interval.wait = 0;
        }
        this.interval.wait = wait;
        wait -= 1;
      }, 1000);
    },

    /**
     * 关闭弹窗
     */
    close() {
      // 清空验证码
      this.code = '';
      // 清空等待秒数
      if (this.interval.timer) {
        clearInterval(this.interval.timer);
        this.interval.wait = 0;
      }
      this.$emit('update:showModifyPhone', false);
    },

    /**
     * 关闭弹窗
     * @param done
     */
    beforeClose(done) {
      this.close();
      done();
    },
  },
  watch: {
    /**
     * 监听手机号修改状态
     * @param val
     */
    showModifyPhone(val) {
      this.isShow = val;
    },

    /**
     * 监听手机号修改状态
     * @param val
     */
    '$store.state.dialog.showModifyPhone': function(val) {
      this.isShow = val;
    },
  },
};
</script>
<style lang="scss" scoped>
.pic {
  text-align: right;
}
.sendMsg {
  text-align: center;
}
.phoneNum {
  width: 240px;
}
.code {
  width: 133px;
}
.sendCode {
  width: 100px;
}
</style>
