<template>
    <div class="add-plan">
        <el-steps :active="activeIndex" finish-status="success" align-center simple class="mb">
            <el-step title="新建广告组"></el-step>
            <el-step title="新建推广计划"></el-step>
            <el-step title="新建创意"></el-step>
        </el-steps>
        <el-card>
            <el-row class="budget-box scene-box">
                <div class="public-label">所属广告组</div>
                <span class="adv-name" v-if="advName.value">{{advName.value}}</span>
                <span class="adv-name" v-else>{{advName}}</span>
            </el-row>
        </el-card>
        <el-card>
            <el-form
                :model="addPlanForm"
                :rules="addPlanFormRules"
                ref="addPlanFormRef"
                label-width="120px"
                label-position="left"
            >
                <el-row class="title mb">设置计划名称</el-row>
                <el-form-item label="计划名称" prop="plan_name">
                    <el-input v-model="addPlanForm.plan_name" class="my-input"></el-input>
                </el-form-item>
                <el-row class="title mb">时间定向</el-row>
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
                <el-row class="budget-box time-box">
                    <div class="public-label">投放时间段</div>
                    <el-tabs v-model="timeSlotActiveName" type="card" class="budget-tabs">
                        <el-tab-pane label="不限" name="timeSlotOne"></el-tab-pane>
                        <el-tab-pane label="自定义" name="timeSlotTwo">
                            <el-time-picker
                                is-range
                                v-model="addPlanForm.put_slot_time"
                                range-separator="至"
                                start-placeholder="开始时间"
                                end-placeholder="结束时间"
                                placeholder="选择时间范围">
                            </el-time-picker>
                        </el-tab-pane>
                    </el-tabs>
                </el-row>
                <el-row class="title mb">地域定向</el-row>
                <el-row class="budget-box scene-box">
                    <div class="public-label">投放地域</div>
                    <el-tabs v-model="areaActiveName" type="card" class="budget-tabs">
                        <el-tab-pane label="不限" name="areaOrientOne"></el-tab-pane>
                        <el-tab-pane label="自定义" name="areaOrientTwo">
                            <el-row :gutter="20">
                                <el-col :span="14">
                                    <el-card class="box-card my-card">
                                        <div slot="header" class="clearfix">
                                            <span>地域定向</span>
                                        </div>
                                        <div class="my-cascader">
                                            <el-cascader-panel
                                                size="large"
                                                :options="areaOptions"
                                                v-model="addPlanForm.put_area"
                                                :props="areaProps"
                                                @change="areaChange">
                                            </el-cascader-panel>
                                        </div>
                                    </el-card>
                                </el-col>
                            </el-row>
                        </el-tab-pane>
                    </el-tabs>
                </el-row>
                <el-row class="title mb">人群定向</el-row>
                <el-row class="budget-box operator-box">
                    <div class="public-label">运行商定向</div>
                    <el-tabs v-model="operatorActiveName" type="card" class="budget-tabs">
                        <el-tab-pane label="不限" name="operatorOne"></el-tab-pane>
                        <el-tab-pane label="自定义" name="operatorTwo">
                            <el-checkbox-group v-model="addPlanForm.operator_orient" class="mb">
                                <el-checkbox-button label="联通" ></el-checkbox-button>
                                <el-checkbox-button label="移动" ></el-checkbox-button>
                                <el-checkbox-button label="电信" ></el-checkbox-button>
                            </el-checkbox-group>
                        </el-tab-pane>
                    </el-tabs>
                </el-row>
                <el-row class="budget-box operator-box">
                    <div class="public-label">车主</div>
                    <el-tabs v-model="carActiveName" type="card" class="budget-tabs">
                        <el-tab-pane label="不限" name="carOne"></el-tab-pane>
                        <el-tab-pane label="自定义" name="carTwo">
                            <el-checkbox-group v-model="addPlanForm.car_owner" class="mb">
                                <el-checkbox-button label="低端车" ></el-checkbox-button>
                                <el-checkbox-button label="中端车" ></el-checkbox-button>
                                <el-checkbox-button label="高端车" ></el-checkbox-button>
                            </el-checkbox-group>
                        </el-tab-pane>
                    </el-tabs>
                </el-row>
                <el-row class="budget-box scene-box">
                    <div class="public-label">场景定向</div>
                    <el-tabs v-model="sceneActiveName" type="card" class="budget-tabs">
                        <el-tab-pane label="不限" name="sceneOrientOne"></el-tab-pane>
                        <el-tab-pane label="自定义" name="sceneOrientTwo">
                            <el-row :gutter="20">
                                <el-col :span="14">
                                    <el-card class="box-card my-card">
                                        <div slot="header" class="clearfix">
                                            <span>场景定向</span>
                                        </div>
                                        <div class="my-cascader">
                                            <el-tree
                                                ref="treeRefs"
                                                :data="sceneData"
                                                :props="sceneProps"
                                                default-expand-all
                                                show-checkbox
                                                node-key="id"
                                                @check-change="checkActived"
                                            ></el-tree>
                                        </div>
                                    </el-card>
                                </el-col>
                            </el-row>
                        </el-tab-pane>
                    </el-tabs>
                </el-row>
                
                <el-row class="title mb">投放渠道</el-row>
                <el-row class="budget-box">
                    <div class="public-label">渠道</div>
                    <el-tabs v-model="mediaActiveName" type="card" class="budget-tabs">
                        <el-tab-pane label="不限" name="mediaOne"></el-tab-pane>
                        <el-tab-pane label="自定义" name="mediaTwo">
                            <el-form-item label="渠道列表">
                                <el-radio-group v-model="addPlanForm.put_media" class="new-style">
                                    <el-radio-button label="etcp停车"></el-radio-button>
                                    <el-radio-button label="国票"></el-radio-button>
                                    <el-radio-button label="快报报"></el-radio-button>
                                    <el-radio-button label="停简单"></el-radio-button>
                                    <el-radio-button label="ETC"></el-radio-button>
                                </el-radio-group>
                            </el-form-item>
                        </el-tab-pane>
                    </el-tabs>
                </el-row>
                <el-row class="budget-box">
                    <div class="public-label">计划预算</div>
                    <el-tabs v-model="budgetActiveName" type="card" class="budget-tabs">
                        <el-tab-pane label="不限" name="budgeOne"></el-tab-pane>
                        <el-tab-pane label="手动" name="budgeTwo">
                            <el-form-item label="计划总预算" prop="group_budget">
                                <el-input v-model.number="addPlanForm.group_budget" class="my-input"></el-input> 元
                            </el-form-item>
                            <el-form-item label="计划每日预算" prop="day_budget">
                                <el-input v-model.number="addPlanForm.day_budget" class="my-input"></el-input> 元
                            </el-form-item>
                        </el-tab-pane>
                    </el-tabs>
                </el-row>
                
                
                <el-form-item label="投放方式" prop="put_mode">
                    <el-radio-group v-model="addPlanForm.put_mode" class="scene-choice">
                        <el-radio-button label="快速投放">
                            快速投放
                            <div class="gray">
                                <svg-icon icon-class="info" />在较短时间内欢度最大的曝光量
                            </div>
                        </el-radio-button>
                        <el-radio-button label="均匀投放">
                            均匀投放
                            <div class="gray">
                                <svg-icon icon-class="info" />将预算划分到当天的每个小时，均匀投放
                            </div>
                        </el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="投放频次" prop="put_rate">
                    <el-radio-group v-model="addPlanForm.put_rate.text" class="scene-choice">
                        <el-radio-button label="不控制频次">
                            不控制频次
                            <div class="gray">
                                <svg-icon icon-class="info" />针对移动设备部控制投放频次
                            </div>
                        </el-radio-button>
                        <el-radio-button label="自定义频次" class="rate-input-box">
                            自定义频次
                            <div class="gray">
                                <svg-icon icon-class="info" />每天每个设备曝光
                                <el-input
                                    class="rate-input"
                                    v-model.number="addPlanForm.put_rate.number"
                                ></el-input>次
                            </div>
                        </el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="计费方式" prop="cost_mode">
                    <el-radio-group v-model="addPlanForm.cost_mode" class="scene-choice">
                        <el-radio-button label="CPM">
                            CPM
                            <div class="gray">
                                <svg-icon icon-class="info" />每千次展示的成本
                            </div>
                        </el-radio-button>
                        <el-radio-button label="CPC">
                            CPC
                            <div class="gray">
                                <svg-icon icon-class="info" />每次点击的有效成本
                            </div>
                        </el-radio-button>
                        <el-radio-button label="CPD">
                            CPD
                            <div class="gray">
                                <svg-icon icon-class="info" />每天展示的有效成本
                            </div>
                        </el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="出价" prop="offer_price">
                    <el-input v-model.number="addPlanForm.offer_price" class="my-input"></el-input> 元/条
                    <span class="gray">
                        <span class="tips"><i class="red"> * </i>当前价格下可覆盖媒体50%的流量</span>
                    </span>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="planAddData">保存并关闭</el-button>
                    <el-button type="primary" @click="goMemberAddOri">保存并编辑创意</el-button>
                    <el-button @click="goReturn">返回</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>
<script>
import { getPlanList, addPlanTableData } from "@/api/table";
import { provinceAndCityData, regionData, provinceAndCityDataPlus, regionDataPlus, CodeToText, TextToCode } from 'element-china-area-data'
export default {
    created(){
        this.advName = JSON.parse(this.$route.query.item)
    },
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
                }else if (value > this.addPlanForm.group_budget) {
                    callback(new Error('日预算不能大于组预算'));
                } else {
                    callback();
                }
            }
        }
        // 出价自定义校验
        const checkOfferPrice = (rule, value, callback)=> {
            if(!value){
               callback(new Error('请填写出价'));
            }else if (!Number.isInteger(value)) {
                callback(new Error('请输入数字值'));
            }else{
                if(value < 1){
                    callback(new Error('出价必须大于0'));
                }else {
                    callback();
                }
            }
        }
        return {
            // 所属广告组名字
            advName:'',
            // 步骤条
            activeIndex: 1,
            // 场景定向切换选项
            sceneActiveName: "sceneOrientOne",
            // 场景定向树形控件的父节点
            parentNodes: [],
            //场景自定义数据
            sceneData: [
                {
                    id: "lx",
                    label: "旅游/出行",
                    children: [
                        {
                            id: "jc",
                            label: "机场"
                        },
                        {
                            id: "gt",
                            label: "高铁"
                        },
                        {
                            id: "gstx",
                            label: "高速通行"
                        },
                        {
                            id: "tc",
                            label: "停车"
                        },
                        {
                            id: "hc",
                            label: "火车"
                        }
                    ]
                },
                {
                    id: "gw",
                    label: "购物/消费",
                    children: [
                        {
                            id: "gw-one",
                            label: "购物 2-1"
                        },
                        {
                            id: "gw-two",
                            label: "购物 2-2"
                        }
                    ]
                },
                {
                    id: "cy",
                    label: "餐饮/娱乐",
                    children: [
                        {
                            id: "cy-one",
                            label: "餐饮 3-1"
                        },
                        {
                            id: "cy-two",
                            label: "餐饮 3-2"
                        }
                    ]
                }
            ],
            sceneProps: {
                children: "children",
                label: "label"
            },

            // 地域定向
            // 地域定向切换选项
            areaActiveName: "areaOrientOne",
            // 计划预算切换
            budgetActiveName: "budgeOne",
            //投放时间切换
            timeActiveName: "timeOne",
            //投放时间段切换
            timeSlotActiveName: "timeSlotOne",
            // 添加计划表单
            addPlanForm: {
                plan_name: "",
                put_time: [],
                put_slot_time: [new Date(2020, 9, 10, 0, 0), new Date(2020, 9, 10, 24, 0)],
                put_area: [],
                operator_orient: [],
                car_owner: [],
                scene_orient: [],
                put_media: {},
                group_budget: "",
                day_budget: "",
                put_mode: "快速投放",
                put_rate: {
                    text:'不控制频次',
                    number: ""
                },
                cost_mode: "CPM",
                offer_price: ""
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
                offer_price: [
                     { validator: checkOfferPrice, trigger: "blur" }
                ],
            },

            //地域自定义数据         
            areaOptions:regionDataPlus,
            areaSelect:[],
            areaProps:{
                multiple: true,
            },
            // 运行商定向
            operatorActiveName:'operatorOne',
            // 车主定向
            carActiveName:'carOne',
            // 媒体定向
            mediaActiveName:'mediaOne',
        };
    },
    methods: {
        // 区域选择变化事件
        areaChange(value){
            console.log(value)
        },
        //监听节点选中状态发生变化时的回调
        checkActived() {
            this.addPlanForm.scene_orient = [
                ...this.$refs.treeRefs.getCheckedNodes(),
                ...this.$refs.treeRefs.getHalfCheckedNodes()
            ];
        },
        
        // 点击确定并关闭按钮触发的事件
        planAddData() {
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
        },
        /*点击返回按钮*/
        goReturn() {
            this.$router.go(-1);
        },
        //保存并新建创意按钮
        goMemberAddOri(){
            if (this.budgetActiveName === "budgeOne") {
                this.$refs["addPlanFormRef"].validateField(
                    ["plan_name", "put_time"],
                    validate => {
                        if (!validate) {
                            //发起数据请求
                            addPlanTableData(this.addPlanForm).then(() => {
                                this.$message.success("添加计划成功");
                                this.$router.push({
                                    name:'MemberChooseOri',
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
                                name:'MemberChooseOri',
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
.add-plan {
    margin: 30px;
    .adv-name{
        line-height: 40px;
        font-size: 14px;
        color: #606266;
        font-weight: bold;
    }
}
</style>

<style lang="scss">
//添加计划下面所有input
.add-plan .my-input{
  width:400px;
}
//多选框的样式
.add-plan .el-checkbox-button.is-checked .el-checkbox-button__inner{
  background:rgba(64, 158, 255, 0.2)  ;
  color:#409EFF;
}
.operator-box .el-tabs__content{
    margin-left:120px;
}

.add-plan .area-cascader{
    .el-cascader .el-cascader__tags{
        max-height: 150px;
        overflow-y:auto ;
        right:0;
        z-index: 88888888;
    }
   
    .el-input__suffix{
        display:none;
    }
}
.add-plan {
    .time-box .el-tabs__content{
        left: 0;
        top: 0;
    }
    .el-date-editor{
        width:400px;
        margin-bottom:22px;
    }
}
</style>