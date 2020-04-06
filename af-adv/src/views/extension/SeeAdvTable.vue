<template>
    <div class="see-adv-table">
        <el-card>
            <el-row>基本设置</el-row>
            <el-divider></el-divider>
            <el-form :model="advForm" ref="advFormRef" label-width="100px">
                <el-form-item label="广告组名称" prop="plan_name">
                    <el-input v-model="advForm.plan_name" disabled></el-input>
                </el-form-item>
                <el-form-item label="广告组id" prop="plan_id">
                    <el-input v-model="advForm.plan_id" disabled></el-input>
                </el-form-item>
                <el-form-item label="广告组预算" prop="group_budget">
                    <el-input v-model.number="advForm.group_budget" disabled></el-input>
                </el-form-item>
                <el-form-item label="投放日期" prop="put_time">
                    <el-date-picker
                        v-model="advForm.put_time"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        disabled
                    ></el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="goEditAdv">编辑</el-button>
                    <el-button @click="goReturn">返回</el-button>
                </el-form-item>
            </el-form>
            
        </el-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            advForm: {}
        };
    },
    created() {
        //获取查看当前 行的数据
        this.getAdvTableData();
    },
    methods: {
        //获取查看当前 行的数据
        getAdvTableData() {
            this.advForm = JSON.parse(this.$route.query.row);
        },
        //编辑按钮
        goEditAdv(){
            let newRow = JSON.stringify(this.advForm)
            this.$router.push({
                path:'/extension/editadv',
                query:{
                    row:newRow
                }
            })
        },
        //返回按钮
        goReturn(){
            this.$router.go(-1)
        }
    }
};
</script>
<style lang="scss" scoped>
.see-adv-table {
    margin: 30px;
}
</style>