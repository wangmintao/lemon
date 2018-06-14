<template>
  <div>
    <el-tabs type="card">
      <el-tab-pane label="部门信息">
        <el-form label-width="80px">
          <el-form-item label="上级部门">
            上级部门
          </el-form-item>
          <el-form-item label="部门名称">
            <el-input style="width:280px;" v-model="form.name" clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="部门成员">部门成员</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'org-dept',
  data() {
    return {
      form: {}
    }
  }
}
</script>

