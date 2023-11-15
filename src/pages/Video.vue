<template>
<div class="app-container">
  <el-form :model="queryParams" ref="queryRef" :inline="true" v-show="showSearch" label-width="68px">
    <el-form-item label="视频名称" prop="dictName">
      <el-input
          v-model="queryParams.videoName"
          placeholder="模糊搜索"
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

    <el-form-item label="视频更新时间" style="width: 308px">
      <el-date-picker
          v-model="updateDateRange"
          value-format="YYYY-MM-DD HH:mm:ss"
          type="datetimerange"
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
          @click="handleUpdate"
      >修改</el-button>
    </el-col>
    <el-col :span="1.5">
      <el-button
          type="danger"
          plain
          icon="Delete"
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
  </el-row>

  <el-table v-loading="loading" :data="dataList" @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="55" align="center" />
    <el-table-column label="视频名称" align="center" prop="video_name" />
    <el-table-column label="视频描述" align="center" prop="video_desc" :show-overflow-tooltip="true"/>
    <el-table-column label="评分" align="center" prop="video_score" :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column label="状态" align="center" prop="status">
    </el-table-column>
    <el-table-column label="视频更新时间" align="center" prop="last_update_time"/>
    <el-table-column label="视频类型" align="center" prop="video_type" width="180">
    </el-table-column>
    <el-table-column label="操作" align="center" width="160" class-name="small-padding fixed-width">
    </el-table-column>
  </el-table>

</div>
</template>

<script setup>

import { reactive, ref, toRaw} from "vue";
import { queryVideo } from "@/service/video.js";

let updateDateRange = ref([]);
const  sys_normal_disable  = [
    {"value": "10", "label":"正常"},
    {"value": "100", "label":"异常"}
];

const dataList = ref([]);
const showSearch = ref(true);
const loading = ref(false);
const pageCount = ref(0);
const pageIndex = ref(0);
const pageQueryIndex = ref(1);
const pageQueryNumber = ref(100);
const queryParams= ref({
  "videoName": "1",
  "status": undefined,
  updateDateRange
})

function getList(index, number, params) {
  loading.value = true
  queryVideo(index, number, params).then(response => {
    dataList.value = response.data.page_data;
    pageCount.value = response.data.page_count;
    pageIndex.value = response.data.page_index;
    loading.value = false;
  });
}

function handleQuery() {
  let params = [];
  let queryParamsValue = toRaw(queryParams.value);
  for(let key of Object.keys(queryParamsValue)){
    let paramValue = queryParams.value[key]
    if(!paramValue) continue;
    console.log(key, paramValue);
    if(["videoName", "status"].lastIndexOf(key) !== -1){
      params.push(['=', key, paramValue]);
    }
    else if(key === "updateDateRange" && paramValue.length === 2){
      params.push([
          "|",
          [">=", 'last_update_time', paramValue[0]],
          ["<=", 'last_update_time', paramValue[1]]
      ]);
    }
    console.log(params);
  }
  getList(pageQueryIndex.value, pageQueryNumber.value, params)
}

function handleAdd() {
  getList();
}
function handleUpdate() {
  getList();
}
function handleDelete() {
  getList();
}
function handleExport() {
  getList();
}

function handleSelectionChange() {
}
function resetQuery() {
}
</script>

<style scoped>

</style>