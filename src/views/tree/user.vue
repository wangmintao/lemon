<template>
  <div>
    <el-tabs type="card">
      <el-tab-pane label="基本资料">
        <el-row>
          <el-col :span="16">
            <el-form label-width="80px">
              <el-form-item label="所在部门">
              </el-form-item>
              <el-form-item label="用户账号">
              </el-form-item>
              <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="联系电话">
                <el-input v-model="form.tel"></el-input>
              </el-form-item>
              <el-form-item label="eMail">
                <el-input v-model="form.email"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary">立即创建</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="用户角色">用户角色</el-tab-pane>
      <el-tab-pane label="管理权限">管理权限</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'org-user',
  data() {
    return {
      form: {}
    }
  }
}
</script>

