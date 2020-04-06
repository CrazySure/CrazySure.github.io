<template>
    <div class="member-scene">
        <el-steps :active="activeIndex" finish-status="success" align-center simple class="mb">
            <el-step title="新建广告组"></el-step>
            <el-step title="新建推广计划"></el-step>
            <el-step title="新建创意"></el-step>
        </el-steps>
        <!-- 新建广告组-选择现有的广告组 -->
        <el-card>
            <el-form
                :model="addForm"
                :rules="addFormRules"
                ref="addFormRef"
                label-width="120px"
                class="add-form"
                label-position="left"
            >
                <el-tabs v-model="addAdvActiveName">
                    <el-tab-pane label="新建广告组" name="newAdvOne">
                        <el-form-item label="广告组名称" prop="plan_name">
                            <el-input v-model="addForm.plan_name" ></el-input>
                        </el-form-item>
                        <el-row class="budget-box">
                            <div class="public-label">广告组预算</div>
                            <el-tabs v-model="budgetActiveName" type="card" class="budget-tabs">
                                <el-tab-pane label="不限" name="budgeOne"></el-tab-pane>
                                <el-tab-pane label="指定预算" name="budgeTwo">
                                    <el-form-item label="广告组总预算" prop="group_budget">
                                        <el-input v-model.number="addForm.group_budget"></el-input> 元
                                    </el-form-item>
                                    <el-form-item label="广告组每日预算" prop="day_budget">
                                        <el-input v-model.number="addForm.day_budget"></el-input> 元
                                    </el-form-item>
                                </el-tab-pane>
                            </el-tabs>
                        </el-row>
                        <el-form-item label="投放日期" prop="put_time">
                            <el-date-picker
                                v-model="addForm.put_time"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                            ></el-date-picker>
                        </el-form-item>
                        <el-form-item label="关联合同编号" prop="contract_number">
                            <el-input v-model.number="addForm.contract_number"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="advAddGroupData">保存并关闭</el-button>
                            <el-button type="primary" @click="advAddGroupDataNew">保存并新建计划</el-button>
                            <el-button @click="goReturn">返回</el-button>
                        </el-form-item>
                    </el-tab-pane>
                    <el-tab-pane label="选择现有的广告组" name="newAdvTwo">
                        <el-row class="mb">
                            <el-autocomplete
                                v-model="state"
                                :fetch-suggestions="querySearchAsync"
                                placeholder="搜索现有的广告组"
                                @select="handleSelect"
                                :disabled="stateDisabled"
                                clearable
                            ></el-autocomplete>
                        </el-row>
                        <el-row>
                            <dl v-if="advName.length > 0 " class="adv-list">
                                <dt>广告组列表</dt>
                                <dd>
                                    <a
                                        href="javascript:;"
                                        v-for="(item,index) in advName"
                                        :key="index"
                                        type="primary"
                                        @click="goMemberAddPlan(item)"
                                    >{{item.value}}</a>
                                </dd>
                            </dl>
                            <span v-else>还没有广告组，请新建广告组!</span>
                        </el-row>
                    </el-tab-pane>
                </el-tabs>
            </el-form>
        </el-card>
    </div>
</template>
<script>
import { getPlanList, addAdvTableData } from "@/api/table";
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
            }else{
                if(value < 1){
                    callback(new Error('日预算必须大于0'));
                }else if (value > this.addForm.group_budget) {
                    callback(new Error('日预算不能大于组预算'));
                } else {
                    callback();
                }
            }
        }
        return {
            //步骤条
            activeIndex: 0,
            //新建广告组和选择已有广告组的切换
            addAdvActiveName: "newAdvOne",
            // 广告组预算切换
            budgetActiveName: "budgeOne",
            // 添加广告组表单数据
            addForm: {
                plan_name: "",
                group_budget: "",
                day_budget: "",
                put_time: []
            },
            // 校验添加广告组表单数据
            addFormRules: {
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
                put_time: [
                    {
                        required: true,
                        message: "请选择投放日期",
                        trigger: "blur"
                    }
                ]
            },
            /*****************选择已有的广告组列表*********************/
            advName: [],
            state: "",
            timeout: null,
            stateDisabled: false
        };
    },
    created() {
        this.advName = this.loadAll();
        if (this.advName.length <= 0) {
            this.stateDisabled = true;
        }
    },
    watch: {
        //监听tabs-广告组切换事件-清空用户所有选择
        addAdvActiveName() {
            this.state = "";
            this.$refs["addFormRef"].resetFields();
        }
        //监听tabs-预算切换事件-清空用户所有选择
        // budgetActiveName(){
        //     this.$refs['addFormRef'].resetFields();
        // }
    },
    methods: {
        /*远程搜索开始*****************************/
        loadAll() {
            return [
                {
                    value: "奔驰1",
                    id: "45445"
                },
                {
                    value: "奔驰2",
                    id: "4544556"
                },
                {
                    value: "奔驰3",
                    id: "454245"
                },
                {
                    value: "奔驰4",
                    id: "454455556"
                }
            ];
        },
        querySearchAsync(queryString, cb) {
            var advName = this.advName;
            var results = queryString
                ? advName.filter(this.createStateFilter(queryString))
                : advName;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                cb(results);
            }, 3000 * Math.random());
        },
        createStateFilter(queryString) {
            return state => {
                return (
                    state.value
                        .toLowerCase()
                        .indexOf(queryString.toLowerCase()) === 0
                );
            };
        },
        handleSelect(item) {
            console.log(item);
        } /*远程搜索结束*/,

        goMemberAddPlan(item){
            this.$router.push({
                name:'AddPlan',
                query:{
                    item:JSON.stringify(item),
                }
            })
        },

        /*点击返回按钮*/
        goReturn() {
            this.$router.go(-1);
        },
        //点击保存并关闭按钮
        advAddGroupData() {
            if (this.budgetActiveName === "budgeOne") {
                this.$refs["addFormRef"].validateField(
                    ["plan_name", "put_time"],
                    validate => {
                        if (!validate) {
                            //发起数据请求
                            addAdvTableData(this.addForm).then(() => {
                                this.$message.success("添加广告组成功");
                                this.$router.push("/extension");
                            });
                            
                        }
                    }
                );
            } else if (this.budgetActiveName === "budgeTwo") {
                this.$refs["addFormRef"].validate(valid => {
                    if (valid) {
                        this.addForm.plan_id =
                            parseInt(Math.random() * 100) + 1024;
                        //发起数据请求
                        addAdvTableData(this.addForm).then(() => {
                            this.$message.success("添加广告组成功");
                            this.$router.push("/extension");
                        });
                        
                    }
                });
            }
        },
        //保存并新建计划按钮
        advAddGroupDataNew(){
            if (this.budgetActiveName === "budgeOne") {
                this.$refs["addFormRef"].validateField(
                    ["plan_name", "put_time"],
                    validate => {
                        if (!validate) {
                            //发起数据请求
                            addAdvTableData(this.addForm).then(() => {
                                this.$message.success("添加广告组成功");
                                this.$router.push({
                                    name:'AddPlan',
                                    query:{
                                        item:JSON.stringify(this.addForm.plan_name)
                                    }
                                });
                            });
                            
                        }
                    }
                );
            } else if (this.budgetActiveName === "budgeTwo") {
                this.$refs["addFormRef"].validate(valid => {
                    if (valid) {
                        this.addForm.plan_id =
                            parseInt(Math.random() * 100) + 1024;
                        //发起数据请求
                        addAdvTableData(this.addForm).then(() => {
                            this.$message.success("添加广告组成功");
                            this.$router.push({
                                name:'AddPlan',
                                query:{
                                    item:JSON.stringify(this.addForm.plan_name)
                                }
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
.member-scene {
    margin: 30px;

    .add-form .el-input ,.el-range-editor {
        width: 400px;
    }

    .adv-list {
        dt {
            margin-bottom: 10px;
        }
        dd {
            border: 1px solid #ddd;
            padding: 10px;
            a {
                margin-bottom: 10px;
                display: block;
                &:hover {
                    color: #2a8df8;
                }
            }
        }
    }
    .budget-box .public-label{
        width:118px;
    }
    .budget-box .budget-tabs{
        width:auto;
    }
}
</style>