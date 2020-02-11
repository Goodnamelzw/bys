<template>
  <div id="home">
    <el-container>
      <el-aside width="20%">
        <div class="bigTitle">智能车盲区检测系统</div>
        <div>
          <el-menu default-active="0"
                   class="el-menu"
                   background-color="#313541"
                   text-color="#fff"
                   active-text-color="#ffd04b">
            <el-menu-item index="0"
                          @click="first">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span class="menu-title">系统介绍</span>
              </template>
            </el-menu-item>
            <el-menu-item index="1"
                          @click="video">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span class="menu-title">视频检测</span>
              </template>
            </el-menu-item>
            <el-menu-item index="2"
                          @click="alert()">
              <i class="el-icon-menu"></i>
              <span slot="title"
                    class="menu-title">预警信息</span>
            </el-menu-item>
            <el-menu-item index="3"
                          @click="datashow()">
              <i class="el-icon-document"></i>
              <span slot="title"
                    class="menu-title">数据展示</span>
            </el-menu-item>
            <el-menu-item index="4"
                          @click="user">
              <i class="el-icon-setting"></i>
              <span slot="title"
                    class="menu-title">用户管理</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-aside>
      <el-container>
        <el-header height="100px">
          <div class="leftTitle">{{leftTitle}}</div>
        </el-header>
        <el-main>
          <!--内容Main-->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function () {
    return {
      leftTitle: '首页'
    }
  },
  methods: {
    first () {
      this.leftTitle = '系统介绍'
      this.$router.replace({ path: '/first' })
    },
    video () {
      this.leftTitle = '视频检测'
      this.$router.replace({ path: '/video' })
    },
    user () {
      this.leftTitle = '用户管理'
      this.$router.replace({ path: '/user' })
    },
    alert () {
      this.leftTitle = '预警信息'
      this.$router.replace({ path: '/alert' })
    },
    datashow () {
      this.leftTitle = '数据展示'
      this.$router.replace({ path: '/datashow' })
    }
  }
}
</script>
<style>
html,
body,
#app,
#home,
.el-container {
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
}
.el-aside {
  background-color: #313541;
  text-align: center;
  line-height: 500px;
  top: 0px;
  bottom: 0px;
}
.el-header {
  text-align: center;
  line-height: 100px;
  border-bottom: 1px solid #b0cdff;
}
.el-main {
  background-color: #ecf8eb;
  color: #333;
  text-align: center;
  line-height: 70px;
}
.bigTitle {
  background: #3d598a;
  color: #fff;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 24px;
  font-family: -webkit-body;
}
.leftTitle {
  font-size: 25px;
  padding-left: 30px;
  font-weight: 600;
  color: #545454;
  float: left;
}
.menu-title {
  font-size: 18px;
}
</style>
