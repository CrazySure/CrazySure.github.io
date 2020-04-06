<template>
    <div class="public-select">
        <span>{{propsOptions.title}}</span>
        <el-select v-model="propsOptions.value" placeholder="请选择" >
            <el-option
                v-for="item in propsOptions.data"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            ></el-option>
        </el-select>
    </div>
</template>
<script>
export default {
    
    props:{
        propsOptions:Object    
    }
};
</script>
<style lang="scss" scoped>
// 左侧标题 右侧下拉框
  .public-select {
    span {
        margin-right: 10px;
    }
    .el-select{
      width: 100px;
    }
}
</style>