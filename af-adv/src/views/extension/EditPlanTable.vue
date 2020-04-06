<template>
    <div class="edit-plan-table">
        <el-card>
            <el-row>基本设置</el-row>
            <el-divider></el-divider>
            <el-form :model="planForm" :rules="planFormRules" ref="planFormRef" label-width="100px" label-position="left" >
                <el-form-item label="广告组名称" prop="plan_name">
                    <el-input v-model="planForm.plan_name"></el-input>
                </el-form-item>
                <el-form-item label="广告组id" prop="plan_id">
                    <el-input v-model="planForm.plan_id" disabled></el-input>
                </el-form-item>
                <el-form-item label="所属广告组" prop="plan_group">
                    <el-input v-model="planForm.plan_group"></el-input>
                </el-form-item>
                <el-row>投放渠道</el-row>
                <el-divider></el-divider>
                <el-form-item label="投放媒体" prop="put_media.name">
                    <el-input v-model="planForm.put_media"></el-input>
                </el-form-item>
                <el-row>用户定向</el-row>
                <el-divider></el-divider>
                <el-form-item label="投放区域" prop="put_area">
                    <el-input v-model="planForm.put_area"></el-input>
                </el-form-item>
                <el-form-item label="场景定向" prop="scene_orient">
                    <el-input v-model="planForm.scene_orient"></el-input>
                </el-form-item>
                <el-form-item label="运营商定向" prop="operator_orient">
                    <el-input v-model="planForm.operator_orient"></el-input>
                </el-form-item>
                <el-row>投放设置</el-row>
                <el-divider></el-divider>
                <el-form-item label="计划总预算" prop="group_budget">
                    <el-input v-model.number="planForm.group_budget"></el-input>
                </el-form-item>
                <el-form-item label="计划日预算" prop="day_budget">
                    <el-input v-model.number="planForm.day_budget"></el-input>
                </el-form-item>
                <el-form-item label="投放日期" prop="put_time">
                    <el-date-picker
                        v-model="planForm.put_time"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                    
                    ></el-date-picker>
                </el-form-item>
                <el-form-item label="投放方式" prop="put_mode">
                    <el-input v-model="planForm.put_mode"></el-input>
                </el-form-item>
                <el-form-item label="投放频次" prop="put_rate">
                    <el-input v-model="planForm.put_rate"></el-input>
                </el-form-item>
                <el-form-item label="计费方式" prop="cost_mode">
                    <el-input v-model="planForm.cost_mode"></el-input>
                </el-form-item>
                <el-form-item label="出价" prop="offer_price">
                    <el-input v-model="planForm.offer_price"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="planEditData">确定</el-button>
                    <el-button @click="goReturn">返回</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>
<script>
import { getPlanList ,planEditDataTable} from "@/api/table";
export default {
    data() {
        // 组预算自定义校验
        const checkGroupBudget = (rule, value, callback)=> {
            if(!value){
                callback(new Error('请输入组预算'));
            }else if (!Number.isInteger(value)) {
                callback(new Error('请输入数字值'));
            }else{
                if (value < 1) {
                    callback(new Error('组预算必须大于0'));
                } else {
                    callback();
                }
            }
        }
        // 日预算自定义校验
        const checkDayBudget = (rule, value, callback)=> {
            if(!value){
               callback(new Error('请输入日预算'));
            }else if (!Number.isInteger(value)) {
                callback(new Error('请输入数字值'));
            }
            else{
                if(value < 1){
                    callback(new Error('日预算必须大于0'));
                }else if (value > this.planForm.group_budget) {
                    callback(new Error('日预算不能大于组预算'));
                } else {
                    callback();
                }
            }
        }
        return {
            //广告组整个表格数据
            planTableData:[],
            //当前row行的表格数据
            planForm: {},
            //当前row行的表格数据校验
            planFormRules: {
                plan_name: [
                    {
                        required: true,
                        message: "请输入广告组名称",
                        trigger: "blur"
                    }
                ],
                group_budget: [
                    { validator: checkGroupBudget, trigger: "blur" }
                ],
                day_budget: [
                    { validator: checkDayBudget, trigger: "blur" }
                ],
                put_media:[
                    { required: true, message: "请选择媒体", trigger: "blur" }
                ],
                put_time: [
                    {
                        required: true,
                        message: "请选择投放日期",
                        trigger: "blur"
                    }
                ]
            }
        };
    },
    created() {
        //获取当前行的表格数据
        this.getPlanTableData();
    },
    methods: {
        //获取当前行的表格数据
        getPlanTableData() {
            this.planForm = JSON.parse(this.$route.query.row);
        },
        //点击确定按钮提交更改的数据
        planEditData() {
            this.$refs["planFormRef"].validate(valid => {
                if (valid) {
                    //发起数据请求
                    planEditDataTable(this.planForm.plan_id).then(() => {
                        this.$message.success("计划表格更新成功");
                        this.$router.push('/extension')
                    });
                }
            });
        },
        //点击返回按钮
        goReturn(){
            this.$router.go(-1)
        }
    }
};
</script>
<style lang="scss" scoped>
.edit-plan-table {
    margin: 30px;
}

</style>