<template>
    <div class="see-plan-table">
        <el-card>
            <el-row>基本设置</el-row>
            <el-divider></el-divider>
            <el-form :model="planForm" ref="planFormRef" label-width="100px" label-position="left">
                <el-form-item label="广告组名称" prop="plan_name">
                    <el-input v-model="planForm.plan_name" disabled></el-input>
                </el-form-item>
                <el-form-item label="广告组id" prop="plan_id">
                    <el-input v-model="planForm.plan_id" disabled></el-input>
                </el-form-item>
                <el-form-item label="所属广告组" prop="plan_group">
                    <el-input v-model="planForm.plan_group" disabled></el-input>
                </el-form-item>
                <el-row>投放渠道</el-row>
                <el-divider></el-divider>
                <el-form-item label="投放媒体" prop="put_media">
                    <el-input v-model="planForm.put_media" disabled></el-input>
                </el-form-item>
                <el-row>用户定向</el-row>
                <el-divider></el-divider>
                <el-form-item label="投放区域" prop="put_area">
                    <el-input v-model="planForm.put_area" disabled></el-input>
                </el-form-item>
                <el-form-item label="场景定向" prop="scene_orient">
                    <el-input v-model="planForm.scene_orient" disabled></el-input>
                </el-form-item>
                <el-form-item label="运营商定向" prop="operator_orient">
                    <el-input v-model="planForm.operator_orient" disabled></el-input>
                </el-form-item>
                <el-row>投放设置</el-row>
                <el-divider></el-divider>
                <el-form-item label="计划总预算" prop="group_budget">
                    <el-input v-model.number="planForm.group_budget" disabled></el-input>
                </el-form-item>
                <el-form-item label="计划日预算" prop="day_budget">
                    <el-input v-model.number="planForm.day_budget" disabled></el-input>
                </el-form-item>
                <el-form-item label="投放日期" prop="put_time">
                    <el-date-picker
                        v-model="planForm.put_time"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        disabled
                    ></el-date-picker>
                </el-form-item>
                <el-form-item label="投放方式" prop="put_mode">
                    <el-input v-model="planForm.put_mode" disabled></el-input>
                </el-form-item>
                <el-form-item label="投放频次" prop="put_rate">
                    <el-input v-model="planForm.put_rate" disabled></el-input>
                </el-form-item>
                <el-form-item label="计费方式" prop="cost_mode">
                    <el-input v-model="planForm.cost_mode" disabled></el-input>
                </el-form-item>
                <el-form-item label="出价" prop="offer_price">
                    <el-input v-model="planForm.offer_price" disabled></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="goEditPlan">编辑</el-button>
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
            planForm: {}
        };
    },
    created() {
        //获取当前行的数据
        this.getPlanTableData();
    },
    methods: {
        //获取当前行的数据
        getPlanTableData() {
            this.planForm = JSON.parse(this.$route.query.row);
            console.log(this.planForm)
        },
        //点击编辑按钮跳转到编辑页面
        goEditPlan(){
            let newRow = JSON.stringify(this.planForm);
            this.$router.push({
                path:'/extension/editplan',
                query:{
                    row:newRow
                }
            })
        },
        //返回按钮
        goReturn() {
            this.$router.go(-1);
        }
    }
};
</script>
<style lang="scss" scoped>
.see-plan-table {
    margin: 30px;
}
</style>