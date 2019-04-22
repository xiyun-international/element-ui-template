<template>
  <el-container>
    <el-header>
      <header-grid></header-grid>
    </el-header>
    <el-container>
      <el-aside width="240"> <menuBar></menuBar> </el-aside>
      <el-container>
        <el-main>
          <el-col>
            <div class="main-content">
              <router-view></router-view>
            </div>
          </el-col>
        </el-main>
        <el-footer style="height: 80px"> <footer-grid></footer-grid> </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import menu from '../../config/menu';

import menuBar from './menu.vue';
import headerGrid from './header.vue';
import footerGrid from './footer.vue';

export default {
  name: 'layout',
  components: {
    footerGrid,
    headerGrid,
    menuBar,
  },
  created() {
    this.$store.commit('ADD_MENU', menu);
  },
};
</script>
<style scoped>
header.el-header {
  padding: 0;
  background-color: #3f9eff;
}
.el-aside {
  background: #303133;
  min-height: calc(100vh - 60px);
}
.el-footer {
  height: 78px;
  width: 100%;
  padding: 21px 0 19px;
  background: #fff;
}
.el-main {
  background-color: #f7f7f7;
  padding: 28px 24px;
}
</style>
