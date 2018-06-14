<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button class="filter-item" style="margin-left:0;" type="primary">
        <svg-icon icon-class="folder-add"></svg-icon>
        添加部门
      </el-button>
      <el-button class="filter-item" type="primary">
        <svg-icon icon-class="user-add"></svg-icon>
        添加用户
      </el-button>
    </div>
    <div class="form-box">
      <div class="form-left-box">
        <div class="form-left-box-scroll">
          <el-tree class="org-tree" :props="defaultProps" node-key="id" lazy :load="loadOrg" :default-expanded-keys="[0]" :highlight-current="true" :expand-on-click-node="false" @node-click="onNodeClick" ref="tree">
            <span class="org-tree-node" slot-scope="{node,data}">
              <svg-icon v-if="data.type==='root'" icon-class="tree"></svg-icon>
              <svg-icon v-if="data.type==='dept'" icon-class="folder"></svg-icon>
              <svg-icon v-if="data.type==='user'" icon-class="user"></svg-icon>
              <span>{{node.label}}</span>
            </span>
          </el-tree>
        </div>
      </div>
      <div class="form-right-box">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { getOrg } from '@/api/org'
export default {
  name: 'org',
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    }
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    loadOrg(node, resolve) {
      if (node.level === 0) {
        return resolve([{ name: '组织结构', id: 0, type: 'root' }])
      }
      getOrg(node.data.id).then(res => {
        resolve(res.data)
      })
    },
    onNodeClick(data) {
      if (data.type !== 'root') {
        this.$router.push(`/org/${data.type}/${data.id}`)
      }
    },
    handleFilter() {}
  },

  data() {
    return {
      filterText: '',
      defaultProps: {
        children: 'users',
        label: 'name',
        isLeaf: 'isLeaf'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  display: flex;
  flex-direction: column;
  .form-box {
    flex: 1;
    display: flex;
    .form-left-box {
      width: 280px;
      position: relative;
      .form-left-box-scroll {
        position: absolute;
        top: 1px;
        right: 1px;
        bottom: 1px;
        left: 1px;
        overflow: auto;
      }
      .org-tree-node {
        font-size: 14px;
        flex: 1;
      }
    }
    .form-right-box {
      flex: 1;
    }
  }
}
</style>
