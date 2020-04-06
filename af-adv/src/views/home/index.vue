<template>
    <div class="home-container">
        <!-- 第一行用户 -->
        <el-row :gutter="20" class="mb">
            <el-col :span="20">
                <el-row class="public list-one">
                    <el-col :span="6">
                        <dl class="user">
                            <dt>
                                <svg-icon icon-class="user" class="user-icon" />
                            </dt>
                            <dd>
                                <div>{{name}}</div>
                                <div>id:{{userId}}</div>
                            </dd>
                        </dl>
                    </el-col>
                    <el-col :span="4" v-for="(item,index) in accountList" :key="index">
                        <dl class="user-balance">
                            <dt>
                                <svg-icon icon-class="money" />
                            </dt>
                            <dd>
                                <div>
                                    {{item.accountName}}
                                    <svg-icon icon-class="edit" v-if="item.accountName == '账户日预算'" />
                                </div>
                                <div>
                                    <span class="number">{{item.accountNum}}</span>
                                    元
                                </div>
                            </dd>
                        </dl>
                    </el-col>
                    <el-col :span="6" class="btns">
                        <el-button type="primary" size="mini">新建广告</el-button>
                        <el-button type="danger" size="mini">账户充值</el-button>
                    </el-col>
                </el-row>
                <!-- 计划 -->
                <el-row :gutter="20">
                    <el-col :span="6" v-for="(item,index) in planList" :key="index">
                        <!-- <router-link to="/extension"> -->
                        <dl class="public list-two">
                            <dt :class="item.planName === '审核不通过的计划' ? 'red' : ''">{{item.planNum}}</dt>
                            <dd>{{item.planName}}></dd>
                        </dl>
                        <!-- </router-link> -->
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="4" class="explain">
                <div class="explain-box">奥菲使用手册</div>
            </el-col>
        </el-row>
        <!-- 第二行广告数据 -->
        <el-row class="mb public">
            <!-- 广告数据 -->
            <el-row class="mb">
                <!-- 公共下拉框和title -->
                <PublicSelect :propsOptions="advDataOptions" />
            </el-row>
            <!-- 消耗、到达量 -->
            <el-row>
                <el-col :span="4" v-for="(item,index) in advData" :key="index">
                    <dl class="adv-data-list">
                        <dt>{{item.advName}}</dt>
                        <dd>{{item.advNum}}</dd>
                    </dl>
                </el-col>
            </el-row>
        </el-row>
        <!-- 第三行数据趋势-->
        <el-row class="mb public">
            <!-- 数据趋势 -->
            <el-row class="mb">
                <!-- 公共下拉框和title -->
                <PublicSelect :propsOptions="dataTrendOptions" />
            </el-row>
            <!-- 消耗、对比、转换成本 -->
            <el-row class="mb">
                <div class="normal-select">
                    <el-select v-model="consumeValue" placeholder="请选择" size="small">
                        <el-option
                            v-for="item in consumeOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                    <span>对比</span>
                    <el-select v-model="costValue" placeholder="请选择" size="small">
                        <el-option
                            v-for="item in costOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                </div>
            </el-row>
            <el-row>
                <!-- 折线图表区域 -->
                <div class="chart-container">
                    <LineChart width="100%" height="500px" :option="lineOption" />
                </div>
            </el-row>
        </el-row>
        <!-- 第四行-图表区域 -->
        <el-row class="mb" :gutter="20">
            <!-- 广告投放媒体 -->
            <el-col :span="8">
                <div class="public">
                    <el-row class="mb">
                        <!-- 公共下拉框和title -->
                        <PublicSelect :propsOptions="putMediaOptions" />
                    </el-row>
                    <el-row>
                        <!-- 圆形图表 -->
                        <div class="chart-container">
                            <CircleChart width="100%" height="400px" :option="circleOption" />
                        </div>
                    </el-row>
                </div>
            </el-col>
            <!-- 广告地域分布 -->
            <el-col :span="8">
                <div class="public">
                    <el-row class="mb">
                        <!-- 公共下拉框和title -->
                        <PublicSelect :propsOptions="regionSpreadOptions" />
                    </el-row>
                    <el-row>
                        <!-- 地域图表 -->
                        <div class="chart-container">
                            <RegionChart width="100%" height="400px" :option="regionOption" />
                        </div>
                    </el-row>
                </div>
            </el-col>
            <!-- 时间投放分布 -->
            <el-col :span="8">
                <div class="public">
                    <el-row class="mb">
                        <!-- 公共下拉框和title -->
                        <PublicSelect :propsOptions="timePutOptions" />
                    </el-row>
                    <el-row>
                        <!-- 时间投放图表 -->
                        <div class="chart-container">
                            <TimeChart width="100%" height="500px" :option="timeOption" />
                        </div>
                    </el-row>
                </div>
            </el-col>
        </el-row>
        <!-- <div class="home-text">name: {{ name }}</div> -->
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import PublicSelect from "./PublicSelect";
import LineChart from "@/components/Charts/LineChart";
import CircleChart from "@/components/Charts/CircleChart";
import RegionChart from "@/components/Charts/RegionChart";
import TimeChart from "@/components/Charts/TimeChart";
// 时间分布图表数据开始
var timeChartData = [
    [0, 0, 5],
    [0, 1, 1],
    [0, 2, 0],
    [0, 3, 0],
    [0, 4, 0],
    [0, 5, 0],
    [0, 6, 0],
    [0, 7, 0],
    [0, 8, 0],
    [0, 9, 0],
    [0, 10, 0],
    [0, 11, 2],
    [0, 12, 4],
    [0, 13, 1],
    [0, 14, 1],
    [0, 15, 3],
    [0, 16, 4],
    [0, 17, 6],
    [0, 18, 4],
    [0, 19, 4],
    [0, 20, 3],
    [0, 21, 3],
    [0, 22, 2],
    [0, 23, 5],
    [1, 0, 7],
    [1, 1, 0],
    [1, 2, 0],
    [1, 3, 0],
    [1, 4, 0],
    [1, 5, 0],
    [1, 6, 0],
    [1, 7, 0],
    [1, 8, 0],
    [1, 9, 0],
    [1, 10, 5],
    [1, 11, 2],
    [1, 12, 2],
    [1, 13, 6],
    [1, 14, 9],
    [1, 15, 11],
    [1, 16, 6],
    [1, 17, 7],
    [1, 18, 8],
    [1, 19, 12],
    [1, 20, 5],
    [1, 21, 5],
    [1, 22, 7],
    [1, 23, 2],
    [2, 0, 1],
    [2, 1, 1],
    [2, 2, 0],
    [2, 3, 0],
    [2, 4, 0],
    [2, 5, 0],
    [2, 6, 0],
    [2, 7, 0],
    [2, 8, 0],
    [2, 9, 0],
    [2, 10, 3],
    [2, 11, 2],
    [2, 12, 1],
    [2, 13, 9],
    [2, 14, 8],
    [2, 15, 10],
    [2, 16, 6],
    [2, 17, 5],
    [2, 18, 5],
    [2, 19, 5],
    [2, 20, 7],
    [2, 21, 4],
    [2, 22, 2],
    [2, 23, 4],
    [3, 0, 7],
    [3, 1, 3],
    [3, 2, 0],
    [3, 3, 0],
    [3, 4, 0],
    [3, 5, 0],
    [3, 6, 0],
    [3, 7, 0],
    [3, 8, 1],
    [3, 9, 0],
    [3, 10, 5],
    [3, 11, 4],
    [3, 12, 7],
    [3, 13, 14],
    [3, 14, 13],
    [3, 15, 12],
    [3, 16, 9],
    [3, 17, 5],
    [3, 18, 5],
    [3, 19, 10],
    [3, 20, 6],
    [3, 21, 4],
    [3, 22, 4],
    [3, 23, 1],
    [4, 0, 1],
    [4, 1, 3],
    [4, 2, 0],
    [4, 3, 0],
    [4, 4, 0],
    [4, 5, 1],
    [4, 6, 0],
    [4, 7, 0],
    [4, 8, 0],
    [4, 9, 2],
    [4, 10, 4],
    [4, 11, 4],
    [4, 12, 2],
    [4, 13, 4],
    [4, 14, 4],
    [4, 15, 14],
    [4, 16, 12],
    [4, 17, 1],
    [4, 18, 8],
    [4, 19, 5],
    [4, 20, 3],
    [4, 21, 7],
    [4, 22, 3],
    [4, 23, 0],
    [5, 0, 2],
    [5, 1, 1],
    [5, 2, 0],
    [5, 3, 3],
    [5, 4, 0],
    [5, 5, 0],
    [5, 6, 0],
    [5, 7, 0],
    [5, 8, 2],
    [5, 9, 0],
    [5, 10, 4],
    [5, 11, 1],
    [5, 12, 5],
    [5, 13, 10],
    [5, 14, 5],
    [5, 15, 7],
    [5, 16, 11],
    [5, 17, 6],
    [5, 18, 0],
    [5, 19, 5],
    [5, 20, 3],
    [5, 21, 4],
    [5, 22, 2],
    [5, 23, 0],
    [6, 0, 1],
    [6, 1, 0],
    [6, 2, 0],
    [6, 3, 0],
    [6, 4, 0],
    [6, 5, 0],
    [6, 6, 0],
    [6, 7, 0],
    [6, 8, 0],
    [6, 9, 0],
    [6, 10, 1],
    [6, 11, 0],
    [6, 12, 2],
    [6, 13, 1],
    [6, 14, 3],
    [6, 15, 4],
    [6, 16, 0],
    [6, 17, 0],
    [6, 18, 0],
    [6, 19, 0],
    [6, 20, 1],
    [6, 21, 2],
    [6, 22, 2],
    [6, 23, 6]
];
timeChartData = timeChartData.map(function(item) {
    return [item[1], item[0], item[2] || "-"];
});
// 时间分布图表数据结束
export default {
    name: "Home",
    components: {
        PublicSelect,
        LineChart,
        CircleChart,
        RegionChart,
        TimeChart
    },
    computed: {
        ...mapGetters(["name","userId"])
    },
    data() {
        return {
            // 账户信息列表
            accountList: [
                {
                    accountNum: "1000",
                    accountName: "账户余额"
                },
                {
                    accountNum: "1000",
                    accountName: "今日消耗"
                },
                {
                    accountNum: "1000",
                    accountName: "账户日预算"
                }
            ],
            // 计划列表数据
            planList: [
                {
                    planNum: "2",
                    planName: "投放中的计划"
                },
                {
                    planNum: "2",
                    planName: "审核中的计划"
                },
                {
                    planNum: "2",
                    planName: "审核不通过的计划"
                },
                {
                    planNum: "2",
                    planName: "预算不足的计划"
                }
            ],
            // 广告数据下拉框
            // advDataValue: "",
            advDataOptions: {
                value:'0',
                title: "广告数据",
                data: [
                    {
                        value: "0",
                        label: "今天"
                    },
                    {
                        value: "1",
                        label: "昨天"
                    }
                ]
            },

            //第二行 广告数据列表
            advData: [
                {
                    advName: "消耗",
                    advNum: "888"
                },
                {
                    advName: "到达量",
                    advNum: "888"
                },
                {
                    advName: "点击量",
                    advNum: "888"
                },
                {
                    advName: "点击率",
                    advNum: "888"
                },
                {
                    advName: "落地页访问人数",
                    advNum: "888"
                },
                {
                    advName: "转化数",
                    advNum: "888"
                }
            ],
            //第三行 数据趋势
            //数据趋势下拉框
            dataTrendOptions: {
                value:'0',
                title: "数据趋势",
                data: [
                    {
                        value: "0",
                        label: "今天"
                    },
                    {
                        value: "1",
                        label: "昨天"
                    }
                ]
            },
            // 消耗下拉框数据
            consumeValue: "0",
            consumeOptions: [
                {
                    value: "0",
                    label: "消耗"
                },
                {
                    value: "1",
                    label: "消耗1"
                }
            ],
            // 转化成本下拉框数据
            costValue: "0",
            costOptions: [
                {
                    value: "0",
                    label: "转化成本"
                },
                {
                    value: "1",
                    label: "展示数"
                },
                {
                    value: "2",
                    label: "点击数"
                },
                {
                    value: "3",
                    label: "点击率"
                }
            ],
            // 第四行 图表区域
            // 广告投放媒体
            putMediaOptions: {
                value:'0',
                title: "广告投放媒体",
                data: [
                    {
                        value: "0",
                        label: "今天"
                    },
                    {
                        value: "1",
                        label: "昨天"
                    }
                ]
            },
            // 广告地域分布
            regionSpreadOptions: {
                value:'0',
                title: "广告地域分布",
                data: [
                    {
                        value: "0",
                        label: "今天"
                    },
                    {
                        value: "1",
                        label: "昨天"
                    }
                ]
            },
            // 时间段投放分布
            timePutOptions: {
                value:'0',
                title: "时间段投放分布",
                data: [
                    {
                        value: "0",
                        label: "今天"
                    },
                    {
                        value: "1",
                        label: "昨天"
                    }
                ]
            },

            // 折线图表数据
            lineOption: {
                backgroundColor: "#344b58",
                title: {
                    // text: "消耗",
                    x: "20",
                    top: "20",
                    textStyle: {
                        color: "#fff",
                        fontSize: "22"
                    },
                    subtextStyle: {
                        color: "#90979c",
                        fontSize: "16"
                    }
                },
                tooltip: {
                    //提示框组件
                    trigger: "axis", //坐标轴触发
                    axisPointer: {
                        //坐标轴指示器--是指示坐标轴当前刻度的工具。
                        textStyle: {
                            color: "#fff"
                        }
                    }
                },
                grid: {
                    //直角坐标系内绘图网格
                    left: "3%",
                    right: "3%",
                    borderWidth: 0,
                    top: 80,
                    bottom: 95,
                    textStyle: {
                        color: "#fff"
                    }
                },
                legend: {
                    //图例组件--上方小图标
                    x: "45%",
                    top: "10%",
                    textStyle: {
                        color: "#90979c"
                    },
                    data: ["消耗", "转化成本"]
                },
                calculable: true,
                xAxis: [
                    {
                        //直角坐标系 grid 中的 x 轴
                        type: "category",
                        axisLine: {
                            //坐标轴轴线
                            lineStyle: {
                                color: "#90979c"
                            }
                        },
                        splitLine: {
                            //坐标轴在 grid 区域中的分隔线。
                            show: false
                        },
                        axisTick: {
                            //坐标轴刻度
                            show: false
                        },
                        splitArea: {
                            //坐标轴在 grid 区域中的分隔区域，默认不显示。
                            show: false
                        },
                        axisLabel: {
                            //坐标轴刻度标签的相关设置。
                            interval: 0
                        },
                        data: (function() {
                            const data = [];
                            for (let i = 0; i < 24; i++) {
                                data.push(i + ":00");
                            }
                            return data;
                        })()
                    }
                ],
                yAxis: [
                    {
                        name:'消耗',
                        nameTextStyle :{
                            color:'#fff',
                            fontSize :'20',
                        },
                        //直角坐标系 grid 中的 y 轴
                        type: "value",
                        splitLine: {
                            //坐标轴在 grid 区域中的分隔线。
                            show: false
                        },
                        axisLine: {
                            //坐标轴轴线
                            lineStyle: {
                                color: "#90979c"
                            }
                        },
                        axisTick: {
                            //坐标轴刻度
                            show: false
                        },
                        axisLabel: {
                            //坐标轴刻度标签的相关设置。
                            interval: 0
                        },
                        splitArea: {
                            //坐标轴在 grid 区域中的分隔区域，默认不显示。
                            show: false
                        },
                        min: 0,
                        max: 1,
                        interval: 0.2
                    },
                    {
                        name:'转化成本',
                        nameTextStyle :{
                            color:'#fff',
                            fontSize :'20',
                        },
                        //直角坐标系 grid 中的 y 轴
                        type: "value",
                        splitLine: {
                            //坐标轴在 grid 区域中的分隔线。
                            show: false
                        },
                        axisLine: {
                            //坐标轴轴线
                            lineStyle: {
                                color: "#90979c"
                            }
                        },
                        axisTick: {
                            //坐标轴刻度
                            show: false
                        },
                        axisLabel: {
                            //坐标轴刻度标签的相关设置。
                            interval: 0
                        },
                        splitArea: {
                            //坐标轴在 grid 区域中的分隔区域，默认不显示。
                            show: false
                        },
                        min: 0,
                        max: 1,
                        interval: 0.2
                    }
                ],

                dataZoom: [
                    {
                        //用于区域缩放，从而能自由关注细节的数据信息，或者概览数据整体，或者去除离群点的影响。
                        show: true,
                        height: 30,
                        xAxisIndex: [0],
                        bottom: 30,
                        start: 10,
                        end: 80,
                        handleIcon:
                            "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
                        handleSize: "110%",
                        handleStyle: {
                            color: "#d3dee5"
                        },
                        textStyle: {
                            color: "#fff"
                        },
                        borderColor: "#90979c"
                    },
                    {
                        type: "inside",
                        show: true,
                        height: 15,
                        start: 1,
                        end: 35
                    }
                ],
                series: [
                    {
                        //图表列表的类型
                        name: "消耗",
                        type: "line",
                        stack: "consume",
                        symbolSize: 10,
                        symbol: "circle",
                        itemStyle: {
                            normal: {
                                color: "rgba(54,139,251)",
                                barBorderRadius: 0,
                                label: {
                                    show: true,
                                    position: "top",
                                    formatter(p) {
                                        return p.value > 0 ? p.value : "";
                                    }
                                }
                            }
                        },
                        data: [
                            0.2,
                            0.4,
                            0.6,
                            0.4,
                            1,
                            0.2,
                            0.4,
                            0.6,
                            0.4,
                            0.2,
                            0.4,
                            0.6,
                            0.2,
                            0.4,
                            0.1,
                            0.2,
                            0.4,
                            0.8,
                            0.5,
                            0.2,
                            0.4,
                            0.6,
                            0.2,
                            0.4,
                            0.1,
                            0.2,
                            0.4,
                            0.8,
                            0.5,
                            0.2
                        ]
                    },
                    {
                        name: "转化成本",
                        type: "line",
                        stack: "cost",
                        symbolSize: 10,
                        symbol: "circle",
                        itemStyle: {
                            normal: {
                                color: "rgba(33,200,209)",
                                barBorderRadius: 0,
                                label: {
                                    show: true,
                                    position: "top",
                                    formatter(p) {
                                        return p.value > 0 ? p.value : "";
                                    }
                                }
                            }
                        },
                        data: [
                            0.4,
                            0.6,
                            0.2,
                            0.4,
                            0.1,
                            0.2,
                            0.4,
                            0.8,
                            0.5,
                            0.2,
                            0.4,
                            0.6,
                            0.2,
                            0.4,
                            0.2,
                            0.4,
                            0.6,
                            0.2,
                            0.4,
                            0.1
                        ]
                    }
                ]
            },
            //圆形图表数据
            circleOption: {
                tooltip: {
                    //提示框组件
                    trigger: "item",
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    //图例组件--上方小图标
                    orient: "vertical",
                    x: "left",
                    data: [
                        "etc停车",
                        "发票通",
                        "联盟广告",
                        "视频广告",
                        "搜索引擎"
                    ]
                },
                series: [
                    //图表列表的类型
                    {
                        name: "访问来源",
                        type: "pie",
                        radius: ["50%", "70%"],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: "center"
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: "30",
                                    fontWeight: "bold"
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            { value: 335, name: "etc停车" },
                            { value: 310, name: "发票通" },
                            { value: 234, name: "联盟广告" },
                            { value: 135, name: "视频广告" },
                            { value: 1548, name: "搜索引擎" }
                        ]
                    }
                ]
            },
            //地域分布图表数据
            regionOption: {
                title: {
                    text: "地域分布",
                    subtext: "纯属虚构",
                    x: "center"
                },
                tooltip: {
                    trigger: "item"
                },
                legend: {
                    orient: "vertical",
                    x: "left",
                    data: ["订单量"]
                },
                visualMap: {
                    type: "piecewise",
                    pieces: [
                        { min: 1500 },
                        { min: 900, max: 1500 },
                        { min: 310, max: 1000 },
                        { min: 200, max: 300 },
                        {
                            min: 10,
                            max: 200,
                            label: "10 "
                        },
                        {
                            value: 123,
                            label: "123",
                            color: "grey"
                        },
                        {
                            min: 5,
                            max: 5,
                            label: "5",
                            color: "black"
                        },
                        { max: 5 }
                    ],
                    color: ["#E0022B", "#E09107", "#A3E00B"]
                },
                toolbox: {
                    show: true,
                    orient: "vertical",
                    x: "right",
                    y: "center",
                    feature: {
                        mark: { show: true },
                        dataView: { show: true, readOnly: false },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                roamController: {
                    show: true,
                    x: "right",
                    mapTypeControl: {
                        china: true
                    }
                },
                series: [
                    {
                        name: "订单量",
                        type: "map",
                        mapType: "china",
                        roam: false,
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    textStyle: {
                                        color: "rgb(249, 249, 249)"
                                    }
                                }
                            },
                            emphasis: { label: { show: true } }
                        },
                        data: [
                            { name: "北京", value: 5 },
                            {
                                name: "天津",
                                value: Math.round(Math.random() * 2000)
                            },
                            {
                                name: "上海",
                                value: Math.round(Math.random() * 2000)
                            },
                            {
                                name: "重庆",
                                value: Math.round(Math.random() * 2000)
                            },
                            { name: "河北", value: 0 },
                            {
                                name: "河南",
                                value: Math.round(Math.random() * 2000)
                            },
                            { name: "云南", value: 123 },
                            { name: "辽宁", value: 305 },
                            {
                                name: "黑龙江",
                                value: Math.round(Math.random() * 2000)
                            },
                            { name: "湖南", value: 200 },
                            {
                                name: "安徽",
                                value: Math.round(Math.random() * 2000)
                            },
                            {
                                name: "山东",
                                value: Math.round(Math.random() * 2000)
                            },
                            {
                                name: "新疆",
                                value: Math.round(Math.random() * 2000)
                            },
                            {
                                name: "江苏",
                                value: Math.round(Math.random() * 2000)
                            },
                            {
                                name: "浙江",
                                value: Math.round(Math.random() * 2000)
                            },
                            {
                                name: "江西",
                                value: Math.round(Math.random() * 2000)
                            },
                            {
                                name: "湖北",
                                value: Math.round(Math.random() * 2000)
                            },
                            {
                                name: "广西",
                                value: Math.round(Math.random() * 2000)
                            },
                            {
                                name: "甘肃",
                                value: Math.round(Math.random() * 2000)
                            },
                            {
                                name: "山西",
                                value: Math.round(Math.random() * 2000)
                            },
                            {
                                name: "内蒙古",
                                value: Math.round(Math.random() * 2000)
                            },
                            {
                                name: "陕西",
                                value: Math.round(Math.random() * 2000)
                            },
                            {
                                name: "吉林",
                                value: Math.round(Math.random() * 2000)
                            },
                            {
                                name: "福建",
                                value: Math.round(Math.random() * 2000)
                            },
                            {
                                name: "贵州",
                                value: Math.round(Math.random() * 2000)
                            },
                            {
                                name: "广东",
                                value: Math.round(Math.random() * 2000)
                            },
                            {
                                name: "青海",
                                value: Math.round(Math.random() * 2000)
                            },
                            {
                                name: "西藏",
                                value: Math.round(Math.random() * 2000)
                            },
                            {
                                name: "四川",
                                value: Math.round(Math.random() * 2000)
                            },
                            {
                                name: "宁夏",
                                value: Math.round(Math.random() * 2000)
                            },
                            {
                                name: "海南",
                                value: Math.round(Math.random() * 2000)
                            },
                            {
                                name: "台湾",
                                value: Math.round(Math.random() * 2000)
                            },
                            {
                                name: "香港",
                                value: Math.round(Math.random() * 2000)
                            },
                            {
                                name: "澳门",
                                value: Math.round(Math.random() * 2000)
                            }
                        ]
                    }
                ]
            },
            //时间投放图表数据
            timeOption: {
                tooltip: {
                    position: "top"
                },
                animation: false,
                grid: {
                    height: "80%",
                    top: "30"
                },
                xAxis: {
                    type: "category",
                    position: "top",
                    data: [
                        "周一",
                        "周二",
                        "周三",
                        "周四",
                        "周五",
                        "周六",
                        "周日"
                    ],
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: [
                                "rgba(221,238,255,1)",
                                "rgba(221,238,255,1)"
                            ],
                            opacity: "0.5"
                        }
                    },
                    axisLine: {
                        //是否显示坐标轴轴线
                        show: false
                    },
                    axisTick: {
                        //是否显示坐标轴刻度。
                        show: false
                    },
                    splitLine: {
                        //坐标轴在 grid 区域中的分隔线。
                        show: true,
                        lineStyle: {
                            width: "2",
                            color: "#fff",
                            type: "solid"
                        }
                    }
                },
                yAxis: {
                    type: "category",
                    data: [
                        "22:00",
                        "20:00",
                        "18:00",
                        "16:00",
                        "14:00",
                        "12:00",
                        "10:00",
                        "8:00",
                        "6:00",
                        "4:00",
                        "2:00",
                        "0:00"
                    ],
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: [
                                "rgba(221,238,255,1)",
                                "rgba(221,238,255,1)"
                            ],
                            opacity: "0.5"
                        }
                    },
                    axisLine: {
                        //是否显示坐标轴轴线
                        show: false
                    },
                    axisTick: {
                        //是否显示坐标轴刻度。
                        show: false
                    },
                    splitLine: {
                        //坐标轴在 grid 区域中的分隔线。
                        show: true,
                        lineStyle: {
                            width: "2",
                            color: "#fff",
                            type: "solid"
                        }
                    }
                },
                visualMap: {
                    // itemWidth:'140',
                    itemHeight: "300",
                    min: 0,
                    max: 10,
                    calculable: true,
                    orient: "horizontal",
                    left: "center",
                    bottom: "0",
                    inRange: {
                        color: [
                            "rgba(221,237,255,1)",
                            "rgba(167,216,255,1)",
                            "rgba(131,192,255,1)",
                            "rgba(55,138,250,1)",
                            "rgba(33,108,215,1)"
                        ]
                    }
                },
                series: [
                    {
                        name: "Punch Card",
                        type: "heatmap",
                        data: timeChartData,
                        label: {
                            normal: {
                                show: true
                            }
                        },
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowColor: "rgba(0, 0, 0, 0.5)"
                            }
                        }
                    }
                ]
            }

        }; //return结束标签
    }
};
</script>

<style lang="scss" scoped>
.home {
    &-container {
        margin: 30px;
        .red {
            color: #e51c23;
        }
        .public {
            background-color: #fff;
            padding: 20px;
        }

        .list-one {
            display: flex;
            align-items: center;
            margin-bottom: 30px;

            dl {
                display: flex;
                justify-content: start;
                > dt {
                    display: flex;
                    align-items: center;
                }
                > dd {
                    margin-left: 15px;
                    color: #333;
                    > div {
                        margin-bottom: 5px;
                    }
                    .number {
                        font-weight: bold;
                        font-size: 22px;
                    }
                }
            }

            // 账户
            .user {
                > dt {
                    width: 40px;
                    height: 40px;
                    border: 1px solid #333;
                    border-radius: 50%;
                    justify-content: center;
                    .user-icon {
                        width: 25px;
                        height: 25px;
                    }
                }
            }
            // 账户余额

            //按钮
            .btns {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                min-width: 183px;
            }
        }

        // 使用手册
        .explain {
            height: 100%;
            .explain-box {
                background: #e5e5e5;
                text-align: center;
            }
        }
        .list-two {
            text-align: center;
            align-items: center;
            dt {
                margin-bottom: 5px;
                font-weight: bold;
                font-size: 22px;
            }
        }
        //第二行 广告主据列表
        .adv-data-list {
            text-align: center;
            dt {
                margin-bottom: 5px;
            }
            dd {
                font-weight: bold;
                font-size: 22px;
            }
        }
        //第三行 数据趋势列表
        .normal-select {
            .el-select {
                width: 150px;
            }
            span {
                margin: 0 5px;
            }
        }
        // 折线图表
        .chart-container {
            position: relative;
            width: 100%;
            // height: calc(100vh - 84px);
        }
        //第四行 图表区域
    }
    &-text {
        font-size: 30px;
        line-height: 46px;
    }
}
</style>
