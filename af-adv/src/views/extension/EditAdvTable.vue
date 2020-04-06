<template>
    <div class="edit-adv-table">
        <el-card>
            <el-row>基本设置</el-row>
            <el-divider></el-divider>
            <el-form :model="advForm" :rules="advFormRules" ref="advFormRef" label-width="100px">
                <el-form-item label="广告组名称" prop="plan_name">
                    <el-input v-model="advForm.plan_name"></el-input>
                </el-form-item>
                <el-form-item label="广告组id" prop="plan_id">
                    <el-input v-model="advForm.plan_id" disabled></el-input>
                </el-form-item>
                <el-form-item label="广告组预算" prop="group_budget">
                    <el-input v-model.number="advForm.group_budget"></el-input>
                </el-form-item>
                <el-form-item label="投放日期" prop="put_time">
                    <el-date-picker
                        v-model="advForm.put_time"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                    ></el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="advEditData()">确定</el-button>
                    <el-button @click="goReturn">返回</el-button>
                </el-form-item>
            </el-form>
            
        </el-card>
    </div>
</template>
<script>
import { getPlanList ,advEditDataTable} from "@/api/table";
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
        return {
            //广告组整个表格数据
            advTableData:[],
            //当前row行的表格数据
            advForm: {},
            //当前row行的表格数据校验
            advFormRules: {
                plan_name: [
                    {
                        required: true,
                        message: "请输入广告组名称",
                        trigger: "blur"
                    }
                ],
                plan_id: [
                    { required: true, message: "请输入组id", trigger: "blur" }
                ],
                group_budget: [
                    { validator: checkGroupBudget, trigger: "blur" }
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
        this.getAdvTableData();
    },
    methods: {
        //获取当前行的表格数据
        getAdvTableData() {
            this.advForm = JSON.parse(this.$route.query.row);
        },
        //点击确定按钮提交更改的数据
        advEditData() {
            this.$refs["advFormRef"].validate(valid => {
                if (valid) {
                    //发起数据请求
                    advEditDataTable(this.advForm.plan_id).then(() => {
                        this.$message.success("更新成功");
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
.edit-adv-table {
    margin: 30px;
}
</style>