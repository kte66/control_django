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
      fileList: []
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
          alert('提交成功!');
          this.$router.push("/add_delete.vue")
        } else {
          console.log('提交失败!!');
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
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="数据集名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="文件类型" prop="resource">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="xlsx"></el-radio>
                <el-radio label="csv"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="文件选择">
              <el-upload
                  class="upload-demo"
                  action=""
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="fileList">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传csv/xlsx文件，且不超过500mb</div>
              </el-upload>
            </el-form-item>
            <el-form-item label="数据集说明" prop="desc">
              <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
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