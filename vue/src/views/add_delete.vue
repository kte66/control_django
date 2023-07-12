<template>
  <div>
    <el-container>
      <el-header style="background-color: rgb(21, 54, 84)">
        <div>
          <el-row style="line-height: 60px">
            <el-col :span='12'>
              <a href="/home" class="m-a-text" style="float: left"><i class="el-icon-s-home"></i>  HOME</a>
            </el-col>
            <el-col :span='12'>
              <el-dropdown style="float: right">
                <div>
                  <a href="#" class="m-a-text"><i class="el-icon-user-solid" ></i>康超</a>
                </div>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>个人中心</el-dropdown-item>
                  <el-dropdown-item>反馈问题</el-dropdown-item>
                  <el-dropdown-item @click.native="quit_Login">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
        </div>
      </el-header>
    </el-container>
    <el-container>
      <!--侧边栏-->
      <el-aside>
        <el-menu default-active="2"
                 class="el-menu-vertical-demo m-left-menu"
                 @open="handleOpen"
                 @close="handleClose"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b">
          <el-menu-item index="1">
            <template slot="title">
              <a href="/home" target="_self" class="m-a-text"><i class="el-icon-s-platform"></i>总控制台</a>
            </template>
          </el-menu-item>
          <el-menu-item index="2">
            <template slot="title">
              <a href="./add_delete.vue" aria-current="page" class="m-a-text "><i class="el-icon-folder"></i>数据管理</a>
            </template>
          </el-menu-item>
          <el-menu-item index="3">
            <template slot="title">
              <a href="/train_data.vue" target="_self" class="m-a-text"><i class="el-icon-cpu"></i>模型训练</a>
            </template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <div>
          <div>
            <el-row>
              <el-col :span='4' >
                <span style="float: left ; line-height: 39.33px">我的数据</span>
              </el-col>
              <el-col :span='16'>
                <el-input v-model="input" placeholder="请输入数据集名称" style="width: 200px;float: right"></el-input>
              </el-col>
              <el-col :span='4'>
                <el-button type="primary" style="float: right">
                  <i class="el-icon-folder-add"></i>
                  <span>    </span>
                  <a href="/add_date.vue" target="_self" class="m-a-text">新建数据</a>
                </el-button>
              </el-col>
            </el-row>
          </div>
          <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="文件名" width="160">
            </el-table-column>
            <el-table-column prop="address" label="操作">
            </el-table-column>
          </el-table>
        </div>

      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    const item = {
      date: '2023-07-02',
      name: '服务器日志',
      address: <a href="#" target="_self" class="m-a-data" >删除</a>
    };
    return {
      tableData: Array(10).fill(item),
      input:''
    }
  },
  methods:{
    quit_Login() {
      // location.reload()
      // sessionStorage.clear()
      // window.sessionStorage.clear()
      this.$router.push('/')
    },
  }

}
</script>
