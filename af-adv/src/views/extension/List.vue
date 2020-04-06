<template>
    <div class="extension-container">
        <!-- 第一行 消耗、预算、余额 -->
        <el-card>
            <el-row>
                <el-col :span="4" v-for="(item,index) in accountList" :key="index" class="list-one">
                    <span>{{item.accountName}}</span>
                    <em>
                        {{ item.accountNum | moneyFormat }}
                    </em>
                    <el-link type="primary" :underline="false" v-if="item.accountName == '账户余额'">充值</el-link>
                </el-col>
            </el-row>
            <el-divider></el-divider>
            <!-- 第二行 下拉框、搜索框、日历组件 -->
            <el-row :gutter="20" class="mb">
                <el-col :span="7">
                    <el-input
                        placeholder="请输入内容"
                        v-model="queryParams.title"
                        class="input-with-select"
                        clearable
                        @keyup.enter.native="searchFilter"
                    >
                        <el-select
                            v-model="queryParams.type"
                            slot="prepend"
                            placeholder="请选择"
                            clearable
                        >
                            <el-option
                                v-for="item in groupOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                        <el-button slot="append" icon="el-icon-search" @click="searchFilter"></el-button>
                    </el-input>
                </el-col>
                <el-col :lg="4" :xl="3">
                    <el-select
                        v-model="queryParams.state"
                        placeholder="计划状态"
                        class="extension-select"
                        clearable
                    >
                        <el-option
                            v-for="item in planOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                </el-col>
                <el-col :lg="4" :xl="3">
                    <el-select
                        v-model="queryParams.position"
                        placeholder="投放位置"
                        class="extension-select"
                        clearable
                    >
                        <el-option
                            v-for="item in positionOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                </el-col>
                <el-col :lg="{span:6,offset:2}" :xl="{span:5,offset:6}">
                    <el-date-picker
                        v-model="queryParams.date"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                    ></el-date-picker>
                </el-col>
            </el-row>
            <!-- 第三行 广告组、计划、创意 按钮 -->
            <el-row class="mb extension-tabs">
                <el-tabs type="card" v-model="activeName">
                    <!-- 广告组 -->
                    <el-tab-pane label="广告组" name="first">
                        <!-- 第四行 新建计划、批量修改、查看计划 -->
                        <el-row :gutter="20" class="mb">
                            <el-col :lg="3" :xl="2">
                                <el-button type="primary" @click="goAddAdv()">新建广告组</el-button>
                            </el-col>
                            <el-col :lg="3" :xl="2">
                                <el-select
                                    v-model="changeValue"
                                    placeholder="批量修改"
                                    :disabled="changeDisabled"
                                    clearable
                                    @change="batchChange"
                                >
                                    <el-option
                                        v-for="item in changeOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    ></el-option>
                                </el-select>
                            </el-col>
                            <el-col :lg="3" :xl="2">
                                <el-select
                                    v-model="viewPlanValue"
                                    placeholder="查看计划"
                                    :disabled="planDisabled"
                                    clearable
                                >
                                    <el-option
                                        v-for="item in viewPlanOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    ></el-option>
                                </el-select>
                            </el-col>
                            <el-col :lg="4" :xl="3">
                                <div class="iocnGroup">
                                    <el-link
                                        :underline="false"
                                        @click="batchDelete()"
                                        :disabled="changeDisabled"
                                    >
                                        <svg-icon icon-class="delete" />删除
                                    </el-link>
                                    <el-link :underline="false" :disabled="changeDisabled">
                                        <svg-icon icon-class="database" />数据
                                    </el-link>
                                </div>
                            </el-col>
                        </el-row>
                        <!-- 第五行 表格区域 -->
                        <el-row class="mb">
                            <el-table
                                class="mb"
                                :data="advTableData"
                                style="width: 100%"
                                border
                                show-summary
                                sum-text="合计"
                                :header-cell-style="{background:'#edf5ff',fontWeight:'bold',color:'#666'}"
                                @selection-change="tableSelected"
                                ref="advTable"
                                :summary-method="getSummaries"
                            >
                                >
                                <el-table-column align="center" fixed type="selection" width="60"></el-table-column>
                                <el-table-column align="center" fixed width="150">
                                    <template v-slot:header>
                                        <el-switch
                                            v-model="advPauseOpenState"
                                            active-text="开启"
                                            inactive-text="暂停"
                                            @change="planTableHeaderSwitch"
                                        ></el-switch>
                                    </template>
                                    <template v-slot:default="slotProps">
                                        <el-switch v-model="slotProps.row.plan_stop"></el-switch>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    align="center"
                                    fixed
                                    prop="plan_name"
                                    label="广告组名称"
                                    width="100"
                                ></el-table-column>
                                <el-table-column align="center" fixed prop="plan_id" label="组id"></el-table-column>
                                <el-table-column align="center" fixed label="操作" width="180">
                                    <template v-slot:default="slotProps">
                                        <el-link
                                            :underline="false"
                                            type="primary"
                                            @click="goSeeAdv(slotProps.row)"
                                        >查看</el-link>
                                        <el-link :underline="false" type="primary" @click="goEditAdv(slotProps.row)">修改</el-link>
                                        <el-link :underline="false" type="primary" @click="delAdvTableData(slotProps.row)">删除</el-link>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    align="center"
                                    fixed
                                    prop="plan_state"
                                    label="状态"
                                    width="150"
                                >
                                    <template v-slot:default="slotProps">
                                        <el-tag
                                            type="success"
                                            v-if="slotProps.row.plan_state.name=='投放中'"
                                        >{{slotProps.row.plan_state.name}}</el-tag>
                                        <el-tag
                                            type="danger"
                                            v-else-if="slotProps.row.plan_state.name=='审核不通过'"
                                        >{{slotProps.row.plan_state.name}}</el-tag>
                                        <el-tag type="info" v-else>{{slotProps.row.plan_state.name}}</el-tag>

                                        <span
                                            :title="slotProps.row.plan_state.title"
                                            v-if="slotProps.row.plan_state.name == '审核不通过'"
                                        >
                                            <svg-icon icon-class="question" />
                                        </span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    align="center"
                                    fixed
                                    label="投放日期"
                                    width="200"
                                >
                                    <template v-slot:default="slotProps">
                                        <div>{{slotProps.row.put_time[0] }}</div>
                                        <div>至</div>
                                        <div>{{slotProps.row.put_time[1] }}</div>
                                    </template>
                                </el-table-column>
                                <el-table-column align="center" prop="consume" label="消耗"></el-table-column>
                                <el-table-column align="center" prop="group_budget" label="组预算"></el-table-column>
                                <el-table-column align="center" prop="send_num" label="发送数"></el-table-column>
                                <el-table-column align="center" prop="click_num" label="点击数"></el-table-column>
                                <el-table-column align="center"  label="点击率">
                                    <template v-slot:default="slotProps">
                                        {{(slotProps.row.click_num/slotProps.row.send_num *100).toFixed(2) }}%
                                    </template>
                                </el-table-column>
                                <el-table-column align="center" prop="conversion_num" label="转化数"></el-table-column>
                                <el-table-column align="center" label="转化率">
                                    <template v-slot:default="slotProps">
                                        {{(slotProps.row.conversion_num/slotProps.row.send_num *100).toFixed(2) }}%
                                    </template>
                                </el-table-column>
                            </el-table>
                            <!-- 分页 -->
                            <el-pagination
                                @size-change="planSizeChange"
                                @current-change="planCurrentChange"
                                :current-page="queryParams.page"
                                :page-sizes="[5, 10, 15, 20]"
                                :page-size="queryParams.limit"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="total"
                            ></el-pagination>
                        </el-row>
                    </el-tab-pane>
                    <!-- 计划 -->
                    <el-tab-pane label="计划" name="second">
                        <!-- 第四行 新建计划、批量修改、查看计划 -->
                        <el-row :gutter="20" class="mb">
                            <el-col :lg="3" :xl="2">
                                <el-button type="primary" @click="goAddPlan">新建计划</el-button>
                            </el-col>
                            <el-col :lg="3" :xl="2">
                                <el-select
                                    v-model="changeValue"
                                    placeholder="批量修改"
                                    :disabled="changeDisabled"
                                    clearable
                                    @change="batchChange"
                                >
                                    <el-option
                                        v-for="item in changeOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    ></el-option>
                                </el-select>
                            </el-col>
                            <el-col :lg="3" :xl="2">
                                <el-select
                                    v-model="viewPlanValue"
                                    placeholder="查看计划"
                                    :disabled="planDisabled"
                                    clearable
                                >
                                    <el-option
                                        v-for="item in viewPlanOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    ></el-option>
                                </el-select>
                            </el-col>
                            <el-col :lg="4" :xl="3">
                                <div class="iocnGroup">
                                    <el-link
                                        :underline="false"
                                        @click="batchDelete()"
                                        :disabled="changeDisabled"
                                    >
                                        <svg-icon icon-class="delete" />删除
                                    </el-link>
                                    <el-link :underline="false" :disabled="changeDisabled">
                                        <svg-icon icon-class="database" />数据
                                    </el-link>
                                </div>
                            </el-col>
                        </el-row>
                        <!-- 第五行 表格区域 -->
                        <el-row class="mb">
                            <el-table
                                class="mb"
                                :data="planTableData"
                                style="width: 100%"
                                border
                                show-summary
                                sum-text="合计"
                                :header-cell-style="{background:'#edf5ff',fontWeight:'bold',color:'#666'}"
                                @selection-change="tableSelected"
                                ref="planTable"
                                :summary-method="getSummaries"
                            >
                                >
                                <el-table-column align="center" fixed type="selection" width="60"></el-table-column>
                                <el-table-column align="center" fixed width="150">
                                    <template v-slot:header>
                                        <el-switch
                                            v-model="pauseOpenState"
                                            active-text="开启"
                                            inactive-text="暂停"
                                            @change="tableHeaderSwitch"
                                        ></el-switch>
                                    </template>
                                    <template v-slot:default="slotProps">
                                        <el-switch v-model="slotProps.row.plan_stop"></el-switch>
                                    </template>
                                </el-table-column>
                                <el-table-column align="center" fixed prop="plan_name" label="计划名称"></el-table-column>
                                <el-table-column align="center" fixed prop="plan_id" label="计划id"></el-table-column>
                                <el-table-column align="center" fixed label="操作" width="180">
                                    <template v-slot:default="slotProps">
                                        <el-link :underline="false" type="primary" @click="goSeePlan(slotProps.row)">查看</el-link>
                                        <el-link :underline="false" type="primary" @click="goEditPlan(slotProps.row)">修改</el-link>
                                        <el-link :underline="false" type="primary" @click="clonePlanTableData(slotProps.row,slotProps.$index)">复制</el-link>
                                        <el-link :underline="false" type="primary" @click="delPlanTableData(slotProps.row)">删除</el-link>
                                        <el-link :underline="false" type="primary" @click="goJournal">日志</el-link>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    align="center"
                                    fixed
                                    prop="plan_state"
                                    label="状态"
                                    width="150"
                                >
                                    <template v-slot:default="slotProps">
                                        <el-tag
                                            type="success"
                                            v-if="slotProps.row.plan_state.name=='投放中'"
                                        >{{slotProps.row.plan_state.name}}</el-tag>
                                        <el-tag
                                            type="danger"
                                            v-else-if="slotProps.row.plan_state.name=='审核不通过'"
                                        >{{slotProps.row.plan_state.name}}</el-tag>
                                        <el-tag type="info" v-else>{{slotProps.row.plan_state.name}}</el-tag>

                                        <span
                                            :title="slotProps.row.plan_state.title"
                                            v-if="slotProps.row.plan_state.name == '审核不通过'"
                                        >
                                            <svg-icon icon-class="question" />
                                        </span>
                                    </template>
                                </el-table-column>
                                <el-table-column align="center" fixed prop="plan_group" label="所属组"></el-table-column>
                                <el-table-column
                                    header-align="center"
                                    align="center"
                                    fixed
                                    label="投放媒体"
                                    width="190"
                                    prop="put_media"
                                >
                                </el-table-column>
                                <el-table-column
                                    align="center"
                                    fixed
                                    label="投放日期"
                                    width="200"
                                >
                                    <template v-slot:default="slotProps">
                                        <div>{{slotProps.row.put_time[0] }}</div>
                                        <div>至</div>
                                        <div>{{slotProps.row.put_time[1]}}</div>
                                    </template>
                                </el-table-column>
                                <el-table-column align="center" prop="consume" label="消耗"></el-table-column>
                                <el-table-column align="center" prop="group_budget" label="组预算"></el-table-column>
                                <el-table-column align="center" prop="send_num" label="发送数"></el-table-column>
                                <el-table-column align="center" prop="click_num" label="点击数"></el-table-column>
                                <el-table-column align="center" label="点击率">
                                    <template v-slot:default="slotProps">
                                        {{(slotProps.row.click_num/slotProps.row.send_num *100).toFixed(2) }}%
                                    </template>
                                </el-table-column>
                                <el-table-column align="center" prop="conversion_num" label="转化数"></el-table-column>
                                <el-table-column align="center" label="转化率">
                                    <template v-slot:default="slotProps">
                                        {{(slotProps.row.conversion_num/slotProps.row.send_num *100).toFixed(2) }}%
                                    </template>
                                </el-table-column>
                                <el-table-column align="center" prop="put_area" label="投放区域"></el-table-column>
                                <el-table-column align="center" prop="scene_orient" label="场景定向"></el-table-column>
                                <el-table-column align="center" prop="operator_orient" label="运营商定向"></el-table-column>
                                <el-table-column align="center" prop="put_mode" label="投放方式"></el-table-column>
                                <el-table-column align="center" prop="put_rate" label="投放频次"></el-table-column>
                                <el-table-column align="center" prop="cost_mode" label="计费方式"></el-table-column>
                                <el-table-column align="center" prop="offer_price" label="出价"></el-table-column>
                            </el-table>
                            <!-- 分页 -->
                            <el-pagination
                                @size-change="planSizeChange"
                                @current-change="planCurrentChange"
                                :current-page="queryParams.page"
                                :page-sizes="[5, 10, 15, 20]"
                                :page-size="queryParams.limit"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="total"
                            ></el-pagination>
                        </el-row>
                    </el-tab-pane>
                    <!-- 创意 -->
                    <el-tab-pane label="创意" name="third">
                        <!-- 第四行 新建计划、批量修改、查看计划 -->
                        <el-row :gutter="20" class="mb">
                            <el-col :lg="3" :xl="2">
                                <el-button type="primary" @click="goAddOri">新建创意</el-button>
                            </el-col>
                            <el-col :lg="3" :xl="2">
                                <el-select
                                    v-model="changeValue"
                                    placeholder="批量修改"
                                    :disabled="changeDisabled"
                                    clearable
                                    @change="batchChange"
                                >
                                    <el-option
                                        v-for="item in changeOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    ></el-option>
                                </el-select>
                            </el-col>
                            <el-col :lg="3" :xl="2">
                                <el-select
                                    v-model="viewPlanValue"
                                    placeholder="查看计划"
                                    :disabled="planDisabled"
                                    clearable
                                >
                                    <el-option
                                        v-for="item in viewPlanOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    ></el-option>
                                </el-select>
                            </el-col>
                            <el-col :lg="4" :xl="3">
                                <div class="iocnGroup">
                                    <el-link
                                        :underline="false"
                                        @click="batchDelete()"
                                        :disabled="changeDisabled"
                                    >
                                        <svg-icon icon-class="delete" />删除
                                    </el-link>
                                    <el-link :underline="false" :disabled="changeDisabled">
                                        <svg-icon icon-class="database" />数据
                                    </el-link>
                                </div>
                            </el-col>
                        </el-row>
                        <!-- 第五行 表格区域 -->
                        <el-row class="mb">
                            <el-table
                                class="mb"
                                :data="oriTableData"
                                style="width: 100%"
                                border
                                show-summary
                                sum-text="合计"
                                :header-cell-style="{background:'#edf5ff',fontWeight:'bold',color:'#666'}"
                                @selection-change="tableSelected"
                                ref="planTable"
                                :summary-method="getSummaries"
                            >
                                >
                                <el-table-column align="center" fixed type="selection" width="60"></el-table-column>
                                <el-table-column align="center" fixed width="150">
                                    <template v-slot:header>
                                        <el-switch
                                            v-model="oriPauseOpenState"
                                            active-text="开启"
                                            inactive-text="暂停"
                                            @change="oriTableHeaderSwitch"
                                        ></el-switch>
                                    </template>
                                    <template v-slot:default="slotProps">
                                        <el-switch v-model="slotProps.row.plan_stop"></el-switch>
                                    </template>
                                </el-table-column>
                                <el-table-column align="center" fixed prop="plan_name" label="创意名称"></el-table-column>
                                <el-table-column align="center" fixed prop="plan_id" label="创意id"></el-table-column>
                                <el-table-column align="center" fixed label="创意" width="220">
                                    <template v-slot:default="slotProps">
                                        <img :src="slotProps.row.ori_image" alt="创意"/>
                                    </template>
                                </el-table-column>
                                <el-table-column align="center" fixed label="操作" width="110">
                                    <template v-slot:default="slotProps">
                                        <el-link :underline="false" type="primary" @click="goEditOri(slotProps.row)">修改</el-link>
                                        <el-link :underline="false" type="primary" @click="viewsImg(slotProps.row)">预览</el-link>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    align="center"
                                    fixed
                                    prop="plan_state"
                                    label="状态"
                                    width="150"
                                >
                                    <template v-slot:default="slotProps">
                                        <el-tag
                                            type="success"
                                            v-if="slotProps.row.plan_state.name=='投放中'"
                                        >{{slotProps.row.plan_state.name}}</el-tag>
                                        <el-tag
                                            type="danger"
                                            v-else-if="slotProps.row.plan_state.name=='审核不通过'"
                                        >{{slotProps.row.plan_state.name}}</el-tag>
                                        <el-tag type="info" v-else>{{slotProps.row.plan_state.name}}</el-tag>

                                        <span
                                            :title="slotProps.row.plan_state.title"
                                            v-if="slotProps.row.plan_state.name == '审核不通过'"
                                        >
                                            <svg-icon icon-class="question" />
                                        </span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    align="center"
                                    fixed
                                    prop="belong_plan"
                                    label="所属计划"
                                ></el-table-column>
                                <el-table-column
                                    align="center"
                                    fixed
                                    prop="adv_group"
                                    label="所属广告组"
                                    width="100"
                                ></el-table-column>
                                <el-table-column
                                    header-align="center"
                                    align="center"
                                    fixed
                                    label="投放媒体"
                                    width="200"
                                    prop="put_media"
                                >
                                </el-table-column>
                                <el-table-column
                                    align="center"
                                    fixed
                                    label="投放日期"
                                    width="200"
                                >
                                    <template v-slot:default="slotProps">
                                        <div>{{slotProps.row.put_time[0] }}</div>
                                        <div>至</div>
                                        <div>{{slotProps.row.put_time[1]}}</div>
                                    </template>
                                </el-table-column>
                                <el-table-column align="center" prop="consume" label="消耗"></el-table-column>
                                <el-table-column align="center" prop="group_budget" label="组预算"></el-table-column>
                                <el-table-column align="center" prop="send_num" label="发送数"></el-table-column>
                                <el-table-column align="center" prop="click_num" label="点击数"></el-table-column>
                                <el-table-column align="center" label="点击率">
                                    <template v-slot:default="slotProps">
                                        {{(slotProps.row.click_num/slotProps.row.send_num *100).toFixed(2) }}%
                                    </template>
                                </el-table-column>
                                <el-table-column align="center" prop="conversion_num" label="转化数"></el-table-column>
                                <el-table-column align="center" label="转化率">
                                    <template v-slot:default="slotProps">
                                        {{(slotProps.row.conversion_num/slotProps.row.send_num *100).toFixed(2) }}%
                                    </template>
                                </el-table-column>
                            </el-table>
                            <!-- 分页 -->
                            <el-pagination
                                @size-change="planSizeChange"
                                @current-change="planCurrentChange"
                                :current-page="queryParams.page"
                                :page-sizes="[5, 10, 15, 20]"
                                :page-size="queryParams.limit"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="total"
                            ></el-pagination>
                        </el-row>
                    </el-tab-pane>
                </el-tabs>
            </el-row>
        </el-card>  

        <!-- 预览创意的弹框 -->
        <el-dialog
            title="创意预览"
            :visible.sync="viewsImgDialogVisible"
            width="50%"
            center
            >
            <div class="views-img">
                <img :src="viewsImgUrl" alt="创意" class="views-img">
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { getPlanList } from "@/api/table";
export default {
    data() {
        return {
            // 第一行数据列表
            accountList: [
                {
                    accountNum: 1000000,
                    accountName: "今日消耗"
                },
                {
                    accountNum: 1000000,
                    accountName: "账户日预算"
                },
                {
                    accountNum: 10000,
                    accountName: "账户余额"
                }
            ],
            // 第二行 数据下拉框 搜索框
            //搜索框
            search: "",
            //下拉框
            // groupValue: "",
            groupOptions: [
                {
                    value: "0",
                    label: "广告组"
                },
                {
                    value: "1",
                    label: "计划"
                },
                {
                    value: "2",
                    label: "创意"
                }
            ],

            // 计划状态
            // planValue: "",
            planOptions: [
                {
                    value: "0",
                    label: "不限"
                },
                {
                    value: "1",
                    label: "投放中"
                },
                {
                    value: "2",
                    label: "审核不通过"
                },
                {
                    value: "3",
                    label: "不在投放时段"
                },
                {
                    value: "4",
                    label: "已暂停"
                },
                {
                    value: "5",
                    label: "已被广告组暂停"
                },
                {
                    value: "6",
                    label: "广告计划超出预算"
                },
                {
                    value: "7",
                    label: "广告组超出预算"
                },
                {
                    value: "8",
                    label: "新建审核中"
                },
                {
                    value: "9",
                    label: "已删除"
                }
            ],
            // 投放位置
            // positionValue: "",
            positionOptions: [
                {
                    value: "0",
                    label: "不限"
                },
                {
                    value: "1",
                    label: "etcp"
                },
                {
                    value: "2",
                    label: "国票"
                },
                {
                    value: "3",
                    label: "来画"
                },
                {
                    value: "4",
                    label: "高灯"
                },
                {
                    value: "5",
                    label: "美味不用等"
                }
            ],
            // 时间日期
            // dateValue: "",
            // 第三行
            activeName: "second",
            // 第四行
            // 批量修改
            changeValue: "",
            changeOptions: [
                {
                    value: "0",
                    label: "启用"
                },
                {
                    value: "1",
                    label: "暂停"
                },
                {
                    value: "2",
                    label: "删除"
                }
            ],
            // 查看计划
            viewPlanValue: "",
            viewPlanOptions: [
                {
                    value: "0",
                    label: "计划"
                },
                {
                    value: "1",
                    label: "创意"
                }
            ],
            // 第五行
            // 表格
            // 暂停启动广告状态
            pauseOpenState: true,
            // 计划表格数据，请求携带的的参数
            queryParams: {
                type: "", //广告组，计划，创意下拉框
                title: "", //搜索value
                state: "", //广告状态
                position: "", //广告位置
                date: "",
                page: 1,
                limit: 5
            },
            // 数据总共条数
            total: 0,
            // 计划表格数据
            planTableData: [],
            //批量修改-状态默认不可选中
            changeDisabled: true,
            //查看计划-状态默认不可选中
            planDisabled: true,
            // table表格是否为多选状态
            multipleSelection: [],
            //**************广告组表格数据*********************//
            advTableData: [],
            advPauseOpenState: true,
            //**************创意组表格数据*********************//
            oriTableData: [],
            oriPauseOpenState: true,
            // 创意预览的弹框
            viewsImgDialogVisible:false,
            // 创意预览的图片url
            viewsImgUrl:'',
        }; //return
    },
    created() {
        // 获取计划表格数据
        this.getPlanDataList();
    },
    methods: {
        // 获取计划表格数据
        getPlanDataList() {
            getPlanList(this.queryParams).then(res => {
                console.log(res)
                //计划表格数据
                // 先把请求到的数据进行处理
                res.data.items.forEach(item =>{
                    item.put_area = item.put_area.join('、')
                    item.scene_orient = item.scene_orient.join('、')
                    item.operator_orient = item.operator_orient.join('、')
                })
                this.planTableData = res.data.items;
                
                this.total = res.data.total;
                //广告组表格数据
                this.advTableData = res.data.advitems;
                //创意组表格数据
                this.oriTableData = res.data.oriitems;
            });
        },
        // pageSize 改变时会触发	每页条数
        planSizeChange(newSize) {
            this.queryParams.limit = newSize;
            this.getPlanDataList();
        },
        // currentPage 改变时会触发	当前页
        planCurrentChange(newCurrent) {
            this.queryParams.page = newCurrent;
            this.getPlanDataList();
        },
        //点击搜索按钮事件
        searchFilter() {
            this.getPlanDataList();
        },
        //表格多选的事件
        tableSelected(selection) {
            this.multipleSelection = selection;
            if (this.multipleSelection.length > 1) {
                this.changeDisabled = false;
                this.planDisabled = false;
            } else {
                this.changeDisabled = true;
                this.planDisabled = true;
            }
        },
        //批量修改下拉框 事件
        batchChange(val) {
            if (val == "") return false;
            // 1.判断当前选中的选项 状态是否为开启或者暂停
            if (val == "0") {
                //启用
                this.multipleSelection.forEach(item => {
                    item.plan_stop = true;
                });
                this.$message.success("您已开启成功");
                //然后发起数据请求
                //
            } else if (val == "1") {
                //暂停
                this.multipleSelection.forEach(item => {
                    item.plan_stop = false;
                });
                // 弹窗您已暂停任务
                this.$message.success("您已暂停任务");
                //然后发起数据请求
                //
            } else {
                //下拉框内容为删除
                // 调用批量删除的方法
                this.batchDelete();
            }
        },
        // 批量删除事件
        batchDelete() {
            this.$confirm("广告组数据将被删除, 确定要继续吗?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    //发起数据请求
                    //

                    this.$message.success("删除成功!");
                    this.getPlanDataList();
                })
                .catch(() => {
                    this.$message.info("已取消删除!");
                    this.changeValue = "";
                });
        },
        //table表格表头的开关
        tableHeaderSwitch(val) {
            if (val == false) {
                this.planTableData.forEach(item => {
                    item.plan_stop = false;
                });
            } else {
                this.planTableData.forEach(item => {
                    item.plan_stop = true;
                });
            }
            //发送数据请求
            //
        },
        //合计行
        getSummaries(param) {
            const { columns, data } = param;
            const sums = [];
            columns.forEach((column, index) => {
                if (index === 0) {
                    sums[index] = "合计";
                    return;
                }
                if (index === 3) {
                    sums[index] = "/";
                    return;
                }
                const values = data.map(item => Number(item[column.property]));
                if (!values.every(value => isNaN(value))) {
                    sums[index] = values.reduce((prev, curr) => {
                        const value = Number(curr);
                        if (!isNaN(value)) {
                            return prev + curr;
                        } else {
                            return prev;
                        }
                    }, 0);
                    sums[index];
                } else {
                    sums[index] = "/";
                }
            });

            return sums;
        },
        //操作行的-删除按钮点击事件
        delPlanTableData(row){
            this.$confirm("广告组数据将被删除, 确定要继续吗?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    //发起数据请求
                    //
                    const index = this.planTableData.indexOf(row)
                    this.planTableData.splice(index,1);
                    this.$message.success("删除成功!");
                })
                .catch(() => {
                    this.$message.info("已取消删除!");
                });
        },
        //操作行的-查看按钮点击事件
        goSeePlan(row){
            let newRow = JSON.stringify(row);
            this.$router.push({
                path:'/extension/seeplan',
                query:{
                    row:newRow
                }    
            })
        },
        //操作行的-修改按钮点击事件
        goEditPlan(row){
            let newRow = JSON.stringify(row)  ;
            this.$router.push({
                path:'/extension/editplan',
                query:{
                    row:newRow
                }    
            })
        },
        //操作行的-日志按钮点击事件
        goJournal(){
            this.$router.push('/extension/journal')
        },
        // 新建计划按钮点击事件
        goAddPlan(){
            this.$router.push({
                path:'/extension/addadv',
            })
        },
        // 操作行-复制按钮
        clonePlanTableData(val, index) {
            this.$confirm("数据将被复制, 确定要继续吗?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    //发起数据请求
                    //
                    this.planTableData.splice(index, 0,JSON.parse(JSON.stringify(val)))
                    this.$message.success('复制成功')
                })
                .catch(() => {
                    this.$message.info("已取消复制!");
                });

            
        },
        //********************广告组的数据*************************//
        //table表格表头的开关
        planTableHeaderSwitch(val) {
            if (val == false) {
                this.advTableData.forEach(item => {
                    item.plan_stop = false;
                });
            } else {
                this.advTableData.forEach(item => {
                    item.plan_stop = true;
                });
            }
            //发送数据请求
            //
        },
        // 点击添加广告组按钮跳转到添加广告组页面
        goAddAdv(){
            this.$router.push('/extension/addadv')
        },
        // 点击查看按钮跳转到查看广告组页面
        goSeeAdv(row){
            let newRow = JSON.stringify(row)
            this.$router.push({
                path:'/extension/seeadv',
                query:{
                    row:newRow
                }
            })
        },
        // 点击修改按钮跳转到修改广告组页面
        goEditAdv(row){
            let newRow = JSON.stringify(row)
            this.$router.push({
                path:'/extension/editadv',
                query:{
                    row:newRow
                }
            })
        },
        //点击删除按钮
        delAdvTableData(row){
            this.$confirm("广告组数据将被删除, 确定要继续吗?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    //发起数据请求
                    //
                    const index = this.advTableData.indexOf(row);
                    this.advTableData.splice(index,1);
                    this.$message.success("删除成功!");
                })
                .catch(() => {
                    this.$message.info("已取消删除!");
                });
            
        },
        //********************创意组的数据*************************//
        //table表格表头的开关
        oriTableHeaderSwitch(val) {
            if (val == false) {
                this.oriTableData.forEach(item => {
                    item.plan_stop = false;
                });
            } else {
                this.oriTableData.forEach(item => {
                    item.plan_stop = true;
                });
            }
            //发送数据请求
            //
        },
        // 新建创意按钮点击事件
        goAddOri(){
            this.$router.push({
                path:'/extension/choose-ori',
            })
        },
        // 预览按钮
        viewsImg(row){
            this.viewsImgDialogVisible = true;
            this.viewsImgUrl = row.ori_image
        },
        //操作行的-修改按钮点击事件
        goEditOri(row){
            let newRow = JSON.stringify(row)  ;
            this.$router.push({
                path:'/extension/editori',
                query:{
                    row:newRow
                }    
            })
        },
        
    },
    watch: {
        //监听tabs切换事件-清空用户所有多选
        activeName() {
            this.$refs.planTable.clearSelection();
            this.$refs.advTable.clearSelection();
        }
    }
};
</script>
<style lang="scss" scoped>
.extension {
    &-container {
        margin: 30px;
        .list-one {
            > span {
                font-size: 16px;
            }
            > em {
                font-style: normal;
                font-size: 22px;
                font-weight: bold;
            }
        }
        // 第二行
        // .el-select .el-input {
        //     width: 130px;
        // }
        // 第三行
        // .bg-color {
        //     background: #e8e7e7;
        // }
        // 第四行
        .iocnGroup {
            padding-top: 10px;
            .el-link {
                margin: 0 5px;
            }
        }   
        // 预览弹框
        .views-img{
            text-align: center;
        }
    }
    
}
</style>