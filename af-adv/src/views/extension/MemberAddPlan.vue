<template>
    <div class="member-add-plan">
        
        <el-steps :active="activeIndex" finish-status="success" align-center simple class="mb">
            <el-step title="新建广告组"></el-step>
            <el-step title="新建推广计划"></el-step>
            <el-step title="新建创意"></el-step>
        </el-steps>
        <el-card class="mb_10">
            <el-row class="budget-box scene-box">
                <div class="public-label">所属广告组</div>
                <span class="adv-name" v-if="advName.value">{{advName.value}}</span>
                <span class="adv-name" v-else>{{advName}}</span>
            </el-row>
        </el-card>
        <el-card>
            <div class="box">
            <el-form
                :model="addPlanForm"
                :rules="addPlanFormRules"
                ref="addPlanFormRef"
                label-width="110px"
                label-position="left"
            >
                <el-row class="title mb">设置计划名称</el-row>
                <el-form-item label="计划名称" prop="plan_name">
                    <el-input v-model="addPlanForm.plan_name"></el-input>
                </el-form-item>

                <el-row class="budget-box">
                    <div class="public-label">计划预算</div>
                    <el-tabs v-model="budgetActiveName" type="card" class="budget-tabs">
                        <el-tab-pane label="不限" name="budgeOne"></el-tab-pane>
                        <el-tab-pane label="指定预算" name="budgeTwo">
                            <el-form-item label="计划总预算" prop="group_budget">
                                <el-input v-model.number="addPlanForm.group_budget"></el-input> 元
                            </el-form-item>
                            <el-form-item label="计划每日预算" prop="day_budget">
                                <el-input v-model.number="addPlanForm.day_budget"></el-input> 元
                            </el-form-item>
                        </el-tab-pane>
                    </el-tabs>
                </el-row>
                <el-row class="budget-box time-box">
                    <div class="public-label">投放时间</div>
                    <el-tabs v-model="timeActiveName" type="card" class="budget-tabs">
                        <el-tab-pane label="不限" name="timeOne"></el-tab-pane>
                        <el-tab-pane label="自定义" name="timeTwo">
                            <el-date-picker
                                v-model="addPlanForm.put_time"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                            ></el-date-picker>
                        </el-tab-pane>
                    </el-tabs>
                </el-row>
                <el-form-item>
                    <el-button type="primary" @click="planAddData">保存并关闭</el-button>
                    <el-button type="primary" @click="planAddGroupDataNew">保存并编辑创意</el-button>
                    <el-button @click="goReturn">返回</el-button>
                </el-form-item>
            </el-form>
            </div>
        </el-card>
    </div>
</template>
<script>
import { getPlanList, addPlanTableData } from "@/api/table";
export default {
    created(){
        // console.log(this.$route.query)
        this.advName = JSON.parse(this.$route.query.item)
    },
    data() {
        // 自定义校验组预算
        const checkGroupBudget= (rule,value,callback)=>{
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
                }else if (value > this.addPlanForm.group_budget) {
                    callback(new Error('日预算不能大于组预算'));
                } else {
                    callback();
                }
            }
        }
        return {
            // 所属广告组名字
            advName:'',
            // 步骤条
            activeIndex: 1,
            // 计划预算切换
            budgetActiveName: "budgeOne",
            //投放时间切换
            timeActiveName: "timeOne",
            // 添加计划表单
            addPlanForm: {
                plan_name: "",
                group_budget: "",
                day_budget: "",
                put_time: [],
            },
            // 添加计划校验表单
            addPlanFormRules: {
                plan_name: [
                    {
                        required: true,
                        message: "请输入计划名称",
                        trigger: "blur"
                    }
                ],
                group_budget: [
                    { validator: checkGroupBudget, trigger: "blur" }
                ],
                day_budget: [
                    { validator: checkDayBudget, trigger: "blur" }
                ],
                
            }
        };
    },
    methods: {
       
        // 点击确定并关闭按钮触发的事件
        planAddData() {
            if (this.budgetActiveName === "budgeOne") {
                this.$refs["addPlanFormRef"].validateField(
                    ["plan_name", "put_time"],
                    validate => {
                        if (!validate) {
                            //发起数据请求
                            addPlanTableData(this.addForm).then(() => {
                                this.$message.success("添加计划成功");
                                this.$router.push("/extension");
                            });
                            
                        }
                    }
                );
            } else if (this.budgetActiveName === "budgeTwo") {
                this.$refs["addPlanFormRef"].validate(valid => {
                    if (valid) {
                        this.addPlanForm.plan_id =
                            parseInt(Math.random() * 100) + 1024;
                        //发起数据请求
                        addPlanTableData(this.addPlanForm).then(() => {
                            this.$message.success("添加计划成功");
                            this.$router.push("/extension");
                        });
                        
                    }
                });
            }
            
        },
        /*点击返回按钮*/
        goReturn() {
            this.$router.go(-1);
        },
        //保存并新建创意按钮
        planAddGroupDataNew(){
            if (this.budgetActiveName === "budgeOne") {
                this.$refs["addPlanFormRef"].validateField(
                    ["plan_name", "put_time"],
                    validate => {
                        if (!validate) {
                            //发起数据请求
                            addPlanTableData(this.addPlanForm).then(() => {
                                this.$message.success("添加计划成功");
                                this.$router.push({
                                    name:'ChooseOri',
                                });
                            });
                            
                            
                        }
                    }
                );
            } else if (this.budgetActiveName === "budgeTwo") {
                this.$refs["addPlanFormRef"].validate(valid => {
                    if (valid) {
                        this.addPlanForm.plan_id =
                            parseInt(Math.random() * 100) + 1024;
                        //发起数据请求
                        addPlanTableData(this.addPlanForm).then(() => {
                            this.$message.success("添加计划成功");
                            this.$router.push({
                                name:'ChooseOri',
                            });
                        });
                        
                    }
                });
            }
        }
    }
};
</script>
<style lang="scss" scoped>
.member-add-plan {
    margin: 30px;
    .el-input{
        width: 400px;
    }
    .el-range-editor{
        width:400px;
        margin-bottom:22px;
    }
    .adv-name{
        line-height: 40px;
        font-size: 14px;
        color: #606266;
        font-weight: bold;
    }
    .budget-box .public-label{
        width:110px;
    }
    .budget-box .budget-tabs{
        width:auto;
    }
}
</style>
<style lang="scss">
    .member-add-plan {
        .budget-box .el-tabs__content{
            left: -110px;
        }
        .time-box .el-tabs__content {
            left: 0;
            top: 0;
        }
    }
</style>