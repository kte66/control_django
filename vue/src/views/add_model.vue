<script>
import {defineComponent} from 'vue'

export default {
  data() {
    return {
      ruleForm: {
        name: '',
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入数据集名称', trigger: 'blur' },
          { min: 3, message: '长度至少在 3 个字符', trigger: 'blur' }
        ],
        resource: [
          { required: true, message: '请选择文件类型', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写数据集说明', trigger: 'blur' }
        ]
      },
      fileList: [{name: 'train1.csv', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'train2.csv', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      options: [{
        value: '选项1',
        label: '分布式数据库故障数据集1'
      }, {
        value: '选项2',
        label: '分布式数据库故障数据集2'
      }],
      value: ''
    };
  },
  methods: {
    quit_Login() {
      // location.reload()
      // sessionStorage.clear()
      // window.sessionStorage.clear()
      this.$router.push('/')
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('创建成功，开始训练!');
          this.$router.push("/train_data.vue")
        } else {
          console.log('创建失败!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    }
  }
}
</script>

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
        <el-menu default-active="3"
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
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="模型名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="数据集">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">开始训练</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>

</style>