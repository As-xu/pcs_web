<template>
<div class="app-container">
  <el-form :model="queryParams" ref="queryRef" :inline="true" v-show="showSearch" label-width="68px">
    <el-form-item label="字典名称" prop="dictName">
      <el-input
          v-model="queryParams.dictName"
          placeholder="请输入字典名称"
          clearable
          style="width: 240px"
          @keyup.enter="handleQuery"
      />
    </el-form-item>
    <el-form-item label="字典类型" prop="dictType">
      <el-input
          v-model="queryParams.dictType"
          placeholder="请输入字典类型"
          clearable
          style="width: 240px"
          @keyup.enter="handleQuery"
      />
    </el-form-item>
    <el-form-item label="状态" prop="status">
      <el-select
            v-model="queryParams.status"
          placeholder="字典状态"
          clearable
          style="width: 240px"
      >
        <el-option
            v-for="dict in sys_normal_disable"
            :key="dict.value"
            :label="dict.label"
            :value="dict.value"
        />
      </el-select>
    </el-form-item>

    <el-form-item label="创建时间" style="width: 308px">
      <el-date-picker
          v-model="dateRange"
          value-format="YYYY-MM-DD"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
      ></el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>
      <el-button icon="Refresh" @click="resetQuery">重置</el-button>
    </el-form-item>
    </el-form>
  <el-row :gutter="10" class="mb8">
    <el-col :span="1.5">
      <el-button
          type="primary"
          plain
          icon="Plus"
          @click="handleAdd"
      >新增</el-button>
    </el-col>
    <el-col :span="1.5">
      <el-button
          type="success"
          plain
          icon="Edit"
          :disabled="single"
          @click="handleUpdate"
      >修改</el-button>
    </el-col>
    <el-col :span="1.5">
      <el-button
          type="danger"
          plain
          icon="Delete"
          :disabled="multiple"
          @click="handleDelete"
      >删除</el-button>
    </el-col>
    <el-col :span="1.5">
      <el-button
          type="warning"
          plain
          icon="Download"
          @click="handleExport"
      >导出</el-button>
    </el-col>
    <el-col :span="1.5">
      <el-button
          type="danger"
          plain
          icon="Refresh"
          @click="handleRefreshCache"
      >刷新缓存</el-button>
    </el-col>
  </el-row>

  <el-table v-loading="loading" :data="typeList" @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="55" align="center" />
    <el-table-column label="字典编号" align="center" prop="dictId" />
    <el-table-column label="字典名称" align="center" prop="dictName" :show-overflow-tooltip="true"/>
    <el-table-column label="字典类型" align="center" :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column label="状态" align="center" prop="status">
    </el-table-column>
    <el-table-column label="备注" align="center" prop="remark" :show-overflow-tooltip="true" />
    <el-table-column label="创建时间" align="center" prop="createTime" width="180">
    </el-table-column>
    <el-table-column label="操作" align="center" width="160" class-name="small-padding fixed-width">
    </el-table-column>
  </el-table>

</div>
</template>

<script setup>

import { reactive, ref} from "vue";

const dateRange = ref([]);
const  sys_normal_disable  = [
    {"value": "10", "label":"正常"},
    {"value": "20", "label":"异常"}
];
const showSearch = ref(true);
const queryParams= reactive({
  pageNum: 1,
      pageSize: 10,
      dictName: undefined,
      dictType: undefined,
      status: undefined
})


function handleQuery() {
  queryParams.value.pageNum = 1;
  getList();
}

function handleAdd() {
  queryParams.value.pageNum = 1;
  getList();
}
function handleUpdate() {
  queryParams.value.pageNum = 1;
  getList();
}
function handleDelete() {
  queryParams.value.pageNum = 1;
  getList();
}
function handleExport() {
  queryParams.value.pageNum = 1;
  getList();
}
</script>

<style scoped>

</style>