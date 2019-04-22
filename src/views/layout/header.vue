<template>
  <el-row class="header-container">
    <el-col :span="24" class="header">
      <el-col :span="4" class="title">
        <router-link to="/">
          <img src="/xy-logo.png" width="149" height="38" alt="" />
        </router-link>
      </el-col>
      <el-col :span="20" class="nav-list">
        <ul>
          <li>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <i class="xy-v2-yh"></i>欢迎<i class="xy-v2-arrow"></i>
              </span>
              <el-dropdown-menu slot="dropdown" class="dropdown-user">
                <el-dropdown-item class="dropdown-item" command="logout" divided
                  >退出登录</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </el-col>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'HeaderBar',
};
</script>
<style lang="scss" scoped>
header.el-header div:first-child img {
  margin: 12px 0 0 30px;
}

.header-container {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  letter-spacing: 0.02em;
  a {
    text-decoration: none;
  }
  .header {
    color: #fff;
    height: 60px;
    background-color: #20a0ff;
    .title {
      line-height: 60px;
      a {
        color: #fff;
        font-size: 40px;
        vertical-align: middle;
        text-indent: 28px;
      }
    }

    .nav-list {
      line-height: 60px;
      ul {
        margin: 0;
        padding: 0;
        float: right;
        li {
          float: left;
          list-style: none;
          height: 60px;
          cursor: pointer;
          &:hover {
            background: #20a0ff;
          }
          i {
            margin-right: 5px;
          }
        }
      }
    }
    .el-dropdown-link {
      color: #fff;
      font-size: 14px;
      display: block;
    }
  }
  .el-tag {
    margin-right: 5px;
    a {
      color: #48576a;
    }
  }
}

.el-dropdown-menu {
  margin-top: 0;
}

.el-dropdown-menu.dropdown-user {
  width: 200px;
}

.dropdown-item {
  color: #666666;
}
.dropdown-user > li:first-child {
  border-top: 0px;
}
.dropdown-awm {
  width: 106px;
  text-align: center;
}

.dropdown-image {
  img {
    width: 128px;
    height: 128px;
    margin-left: 16px;
  }
}
.dropdown-text {
  margin-top: 16px;
  color: #909399;
  line-height: 16px;
  padding-right: 16px;
  a {
    margin-top: 16px;
    display: block;
    color: #108dfd;
    text-decoration: none;
  }
}
</style>
